import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';
import './PageStyles.css';

export default function Appointment() {
  const [searchParams] = useSearchParams();
  const doctorParam = searchParams.get('doctor') || '';
  const deptParam = searchParams.get('department') || '';

  return (
    <div className="appointment-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">BOOK APPOINTMENT</span>
          <h1 className="heading-xl mt-3">Schedule Your Appointment</h1>
          <p className="page-banner-sub">
            Fill in the details below to book your appointment with our healthcare specialists.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <AppointmentForm
            preselectedDoctor={doctorParam}
            preselectedDepartment={deptParam}
          />
        </div>
      </section>
    </div>
  );
}
