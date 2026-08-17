import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CardComponents.css';

export default function DepartmentCard({ department }) {
  return (
    <div className="department-card card-hover">
      <div className="department-img-container">
        <img src={department.image} alt={department.name} className="department-img" />
      </div>
      <div className="department-body">
        <h3 className="department-title">{department.name}</h3>
        <p className="department-desc">{department.description}</p>
        <Link to={`/departments/${department.id}`} className="department-link">
          <span>Learn More</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
