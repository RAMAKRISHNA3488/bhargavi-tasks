import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ChevronDown } from 'lucide-react';
import { departmentsData, doctorsData } from '../data/healthcareData';
import './CardComponents.css';

export default function AppointmentForm({ preselectedDoctor = '', preselectedDepartment = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    department: preselectedDepartment || '',
    doctor: preselectedDoctor || '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.date) newErrors.date = 'Appointment date is required';
    if (!formData.time) newErrors.time = 'Appointment time is required';
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const selectedDocObj = doctorsData.find(d => String(d.id) === String(formData.doctor) || d.name === formData.doctor);
    const doctorName = selectedDocObj ? selectedDocObj.name : formData.doctor;
    const deptObj = departmentsData.find(d => d.id === formData.department || d.name === formData.department);
    const departmentName = deptObj ? deptObj.name : formData.department;

    setSubmittedDetails({
      ...formData,
      doctorName,
      departmentName,
      bookingRef: 'CP-' + Math.floor(100000 + Math.random() * 900000)
    });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedDetails(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      department: '',
      doctor: '',
      message: ''
    });
  };

  if (isSubmitted && submittedDetails) {
    return (
      <div className="booking-success-box animate-fade-in">
        <div className="success-icon-badge">
          <CheckCircle2 size={48} className="text-blue" />
        </div>
        <h3 className="heading-md">Appointment Confirmed!</h3>
        <p className="success-subtext">
          Thank you, <strong>{submittedDetails.fullName}</strong>. Your appointment has been scheduled successfully.
        </p>

        <div className="booking-summary-card">
          <div className="summary-row">
            <span className="summary-label">Booking Reference:</span>
            <span className="summary-value font-bold text-blue">{submittedDetails.bookingRef}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Doctor:</span>
            <span className="summary-value">{submittedDetails.doctorName}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Department:</span>
            <span className="summary-value">{submittedDetails.departmentName}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Date & Time:</span>
            <span className="summary-value">{submittedDetails.date} at {submittedDetails.time}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Contact Email:</span>
            <span className="summary-value">{submittedDetails.email}</span>
          </div>
        </div>

        <button onClick={handleReset} className="btn btn-primary mt-6">
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="appointment-form-card">
      <div className="form-grid">
        {/* Full Name */}
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <div className="input-icon-box">
            <User size={18} className="field-icon" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`form-input ${errors.fullName ? 'error' : ''}`}
            />
          </div>
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        {/* Appointment Date */}
        <div className="form-group">
          <label className="form-label">Appointment Date</label>
          <div className="input-icon-box">
            <Calendar size={18} className="field-icon" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={`form-input ${errors.date ? 'error' : ''}`}
            />
          </div>
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <div className="input-icon-box">
            <Phone size={18} className="field-icon" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`form-input ${errors.phone ? 'error' : ''}`}
            />
          </div>
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        {/* Appointment Time */}
        <div className="form-group">
          <label className="form-label">Appointment Time</label>
          <div className="input-icon-box">
            <Clock size={18} className="field-icon" />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`form-select ${errors.time ? 'error' : ''}`}
            >
              <option value="">Select Time</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="11:45 AM">11:45 AM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:30 PM">03:30 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </select>
          </div>
          {errors.time && <span className="error-message">{errors.time}</span>}
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <div className="input-icon-box">
            <Mail size={18} className="field-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
          </div>
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Department Select */}
        <div className="form-group">
          <label className="form-label">Department</label>
          <div className="input-icon-box">
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`form-select ${errors.department ? 'error' : ''}`}
            >
              <option value="">Select Department</option>
              {departmentsData.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          {errors.department && <span className="error-message">{errors.department}</span>}
        </div>

        {/* Doctor Select */}
        <div className="form-group full-width-sm">
          <label className="form-label">Doctor</label>
          <div className="input-icon-box">
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className={`form-select ${errors.doctor ? 'error' : ''}`}
            >
              <option value="">Select Doctor</option>
              {doctorsData
                .filter((doc) => !formData.department || doc.specialty.toLowerCase() === formData.department.toLowerCase() || departmentsData.find(dp => dp.id === formData.department)?.name === doc.specialty)
                .map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} - ({doc.specialty})
                  </option>
                ))}
            </select>
          </div>
          {errors.doctor && <span className="error-message">{errors.doctor}</span>}
        </div>

        {/* Message */}
        <div className="form-group full-width">
          <label className="form-label">Message (Optional)</label>
          <div className="input-icon-box text-area-box">
            <FileText size={18} className="field-icon text-area-icon" />
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message or symptom description..."
              className="form-textarea"
            />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg w-full mt-6">
        Confirm Appointment
      </button>
    </form>
  );
}
