import React, { useState } from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';
import { doctorsData, departmentsData } from '../data/healthcareData';
import DoctorCard from '../components/DoctorCard';
import './PageStyles.css';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.about.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesSpecialty =
      selectedSpecialty === 'All' ||
      doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase();

    return matchesSearch && matchesSpecialty;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('All');
  };

  return (
    <div className="doctors-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">FIND A DOCTOR</span>
          <h1 className="heading-xl mt-3">Find the Right Doctor for You</h1>
          <p className="page-banner-sub">
            Search by specialization or doctor name to find our experienced healthcare specialists.
          </p>

          {/* Search & Filter Bar matching Reference Slide 4 */}
          <div className="doctor-search-box">
            <div className="search-input-wrapper">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or keyword..."
                className="doctor-search-input"
              />
            </div>

            <div className="select-wrapper">
              <Filter size={18} className="select-icon" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="specialty-select"
              >
                <option value="All">All Specializations</option>
                {departmentsData.map((dept) => (
                  <option key={dept.id} value={dept.name}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {}}
              className="btn btn-primary search-btn"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {filteredDoctors.length > 0 ? (
            <div className="doctors-grid">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="no-results-box text-center py-16">
              <p className="text-xl font-bold text-dark mb-2">No doctors found matching your criteria</p>
              <p className="text-muted mb-6">Try searching with a different doctor name or selecting another specialty.</p>
              <button onClick={handleResetFilters} className="btn btn-secondary inline-flex items-center gap-2">
                <RefreshCw size={16} />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
