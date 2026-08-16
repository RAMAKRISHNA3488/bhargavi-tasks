import React from 'react';
import { departmentsData } from '../data/healthcareData';
import DepartmentCard from '../components/DepartmentCard';
import './PageStyles.css';

export default function Departments() {
  return (
    <div className="departments-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">OUR DEPARTMENTS</span>
          <h1 className="heading-xl mt-3">Our Medical Departments</h1>
          <p className="page-banner-sub">
            World class care across a wide range of specialties.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="departments-grid">
            {departmentsData.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
