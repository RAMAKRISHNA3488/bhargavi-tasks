import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, Search, XCircle, FileText, ArrowRight, RefreshCw, AlertCircle, Printer } from 'lucide-react';
import { doctorsData, departmentsData } from '../data/healthcareData';
import './PageStyles.css';

// Initial sample confirmed appointments if none exist in localStorage
const INITIAL_APPOINTMENTS = [
  {
    bookingRef: 'CP-849201',
    fullName: 'Jane Doe',
    phone: '+1 (555) 234-5678',
    email: 'jane.doe@example.com',
    date: '2026-08-20',
    time: '10:30 AM',
    department: 'cardiology',
    departmentName: 'Cardiology',
    doctor: '1',
    doctorName: 'Dr. Sarah Johnson',
    doctorSpecialty: 'Cardiology',
    doctorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    message: 'Routine annual heart health checkup and ECG evaluation.',
    status: 'Confirmed',
    createdAt: '2026-08-15'
  },
  {
    bookingRef: 'CP-639104',
    fullName: 'Robert Smith',
    phone: '+1 (555) 876-5432',
    email: 'robert.smith@example.com',
    date: '2026-08-22',
    time: '02:00 PM',
    department: 'neurology',
    departmentName: 'Neurology',
    doctor: '2',
    doctorName: 'Dr. Michael Brown',
    doctorSpecialty: 'Neurology',
    doctorImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    message: 'Follow up consultation for migraine management.',
    status: 'Confirmed',
    createdAt: '2026-08-16'
  }
];

export default function ConfirmedAppointments() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [cancelModalItem, setCancelModalItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Load appointments from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('careplus_confirmed_appointments');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAppointments(parsed);
          return;
        }
      }
    } catch (e) {
      console.error('Failed to parse appointments from localStorage', e);
    }

    // Default fallback initial appointments
    setAppointments(INITIAL_APPOINTMENTS);
    localStorage.setItem('careplus_confirmed_appointments', JSON.stringify(INITIAL_APPOINTMENTS));
  }, []);

  // Save to localStorage when appointments list updates
  const updateAppointmentsState = (newList) => {
    setAppointments(newList);
    localStorage.setItem('careplus_confirmed_appointments', JSON.stringify(newList));
  };

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleCancelConfirm = () => {
    if (!cancelModalItem) return;
    const updated = appointments.map(apt => 
      apt.bookingRef === cancelModalItem.bookingRef ? { ...apt, status: 'Cancelled' } : apt
    );
    updateAppointmentsState(updated);
    showNotification(`Appointment ${cancelModalItem.bookingRef} has been cancelled.`);
    setCancelModalItem(null);
  };

  const handlePrint = (apt) => {
    window.print();
  };

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = 
      apt.bookingRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.departmentName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'All' || apt.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="confirmed-appointments-page animate-fade-in pb-16">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">MY HEALTH DASHBOARD</span>
          <h1 className="heading-xl mt-3">Confirmed Appointments</h1>
          <p className="page-banner-sub">
            Review, track, and manage your scheduled doctor appointments and medical consultations.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          {/* Toast Notification */}
          {toastMessage && (
            <div className="toast-banner animate-fade-in">
              <CheckCircle2 size={20} />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Search & Action Bar */}
          <div className="apt-filter-bar">
            <div className="doctor-search-box apt-search-box">
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by reference, patient, or doctor..."
                  className="doctor-search-input"
                />
              </div>
            </div>

            <div className="apt-actions-group">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="specialty-select p-3 bg-white rounded-xl border border-slate-200"
              >
                <option value="All">All Statuses</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <button
                onClick={() => navigate('/appointment')}
                className="btn btn-primary btn-sm inline-flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>Book New</span>
              </button>
            </div>
          </div>

          {/* Appointments List */}
          {filteredAppointments.length > 0 ? (
            <div className="apt-list-wrapper">
              {filteredAppointments.map((apt) => {
                const docObj = doctorsData.find(d => String(d.id) === String(apt.doctor) || d.name === apt.doctorName);
                const doctorImg = apt.doctorImage || docObj?.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600';

                return (
                  <div key={apt.bookingRef} className="apt-card-item">
                    {/* Header Row */}
                    <div className="apt-card-header">
                      <div className="apt-ref-badge">
                        <span>Ref ID:</span>
                        <span className="apt-ref-num">{apt.bookingRef}</span>
                      </div>

                      <span className={`apt-status-pill ${
                        apt.status === 'Cancelled' ? 'apt-status-cancelled' : 'apt-status-confirmed'
                      }`}>
                        ● {apt.status || 'Confirmed'}
                      </span>
                    </div>

                    {/* Content Grid */}
                    <div className="apt-card-body">
                      {/* Doctor Info */}
                      <div className="apt-doctor-info">
                        <div className="apt-doctor-details">
                          <span className="apt-dept-tag">{apt.departmentName}</span>
                          <div className="apt-doctor-title">{apt.doctorName}</div>
                          <span className="apt-doctor-sub">{apt.doctorSpecialty || apt.departmentName}</span>
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div className="apt-schedule-box">
                        <div className="apt-schedule-row">
                          <Calendar size={16} className="text-blue" />
                          <span>Date: <strong>{apt.date}</strong></span>
                        </div>
                        <div className="apt-schedule-row">
                          <Clock size={16} className="text-blue" />
                          <span>Time: <strong>{apt.time}</strong></span>
                        </div>
                      </div>

                      {/* Patient Details */}
                      <div className="apt-patient-info">
                        <div className="apt-patient-row">
                          <User size={14} className="text-muted" />
                          <span>Patient: <strong>{apt.fullName}</strong></span>
                        </div>
                        <div className="apt-patient-row">
                          <Phone size={14} className="text-muted" />
                          <span>Phone: <strong>{apt.phone}</strong></span>
                        </div>
                        <div className="apt-patient-row">
                          <Mail size={14} className="text-muted" />
                          <span>Email: <strong>{apt.email}</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Notes & Action Row */}
                    <div className="apt-card-footer">
                      <div className="apt-symptom-notes">
                        <FileText size={16} className="text-muted shrink-0" />
                        <span>{apt.message || 'No additional symptom notes provided.'}</span>
                      </div>

                      <div className="apt-action-btns">
                        <button
                          onClick={() => handlePrint(apt)}
                          className="btn btn-secondary btn-sm inline-flex items-center gap-1.5"
                          title="Print Appointment Slip"
                        >
                          <Printer size={14} />
                          <span>Print Slip</span>
                        </button>

                        {apt.status !== 'Cancelled' && (
                          <button
                            onClick={() => setCancelModalItem(apt)}
                            className="btn-cancel-apt inline-flex items-center gap-1"
                          >
                            <XCircle size={14} />
                            <span>Cancel</span>
                          </button>
                        )}

                        <Link
                          to={`/doctors/${apt.doctor || '1'}`}
                          className="btn btn-primary btn-sm inline-flex items-center gap-1"
                        >
                          <span>Doctor Profile</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-results-box text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <AlertCircle size={40} className="mx-auto text-slate-400 mb-3" />
              <p className="text-xl font-bold text-slate-900 mb-2">No Confirmed Appointments Found</p>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">
                You do not have any appointments matching your search criteria. Book an appointment with our specialist doctors today.
              </p>
              <button
                onClick={() => navigate('/appointment')}
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <Calendar size={18} />
                <span>Book Appointment Now</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cancel Confirmation Modal */}
      {cancelModalItem && (
        <div className="modal-overlay">
          <div className="modal-box animate-fade-in">
            <div className="modal-icon-badge">
              <AlertCircle size={24} />
            </div>

            <div className="modal-title">Cancel Appointment?</div>
            <p className="modal-desc">
              Are you sure you want to cancel appointment <strong>{cancelModalItem.bookingRef}</strong> with <strong>{cancelModalItem.doctorName}</strong> on {cancelModalItem.date}?
            </p>

            <div className="modal-actions">
              <button
                onClick={() => setCancelModalItem(null)}
                className="btn btn-secondary btn-sm"
              >
                Keep Appointment
              </button>
              <button
                onClick={handleCancelConfirm}
                className="btn btn-primary btn-sm bg-red text-white"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
