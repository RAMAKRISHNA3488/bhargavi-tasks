import React from 'react';
import { packagesData } from '../data/healthcareData';
import PackageCard from '../components/PackageCard';
import './PageStyles.css';

export default function Packages() {
  return (
    <div className="packages-page animate-fade-in">
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="sub-heading-badge">HEALTH CHECKUP</span>
          <h1 className="heading-xl mt-3">Health Checkup Packages</h1>
          <p className="page-banner-sub">
            Choose the best package for your health needs. Comprehensive diagnostic testing at affordable prices.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="packages-grid">
            {packagesData.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
