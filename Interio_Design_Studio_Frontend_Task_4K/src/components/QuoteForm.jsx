import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import './ContactForm.css';

export default function QuoteForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverMessage, setServerMessage] = useState('');

  const servicesOptions = [
    'Interior Design',
    'Space Planning',
    'Renovation & Remodeling',
    'Furniture & Decor',
    'Lighting Design',
    'Project Management',
    'Residential Design',
    'Commercial Design',
    '3D Visualization',
    'Custom Furniture'
  ];

  const budgetOptions = [
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    if (!formData.details.trim()) newErrors.details = 'Project details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      const randomRef = `INT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      navigate('/confirmed', {
        state: {
          refNumber: randomRef,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          details: formData.details
        }
      });
    }, 1000);
  };

  return (
    <div className="contact-form-box">
      {status === 'success' && (
        <div className="form-alert success-alert">
          <CheckCircle2 size={20} />
          <span>{serverMessage}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="form-alert error-alert">
          <AlertCircle size={20} />
          <span>Please review the errors below and try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            disabled={status === 'loading'}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            disabled={status === 'loading'}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${errors.phone ? 'error' : ''}`}
            disabled={status === 'loading'}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        {/* Select Service */}
        <div className="form-group">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`form-select ${errors.service ? 'error' : ''}`}
            disabled={status === 'loading'}
          >
            <option value="">Select Service</option>
            {servicesOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && <span className="error-text">{errors.service}</span>}
        </div>

        {/* Select Budget Range */}
        <div className="form-group">
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`form-select ${errors.budget ? 'error' : ''}`}
            disabled={status === 'loading'}
          >
            <option value="">Budget Range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.budget && <span className="error-text">{errors.budget}</span>}
        </div>

        {/* Project Details */}
        <div className="form-group">
          <textarea
            name="details"
            rows="4"
            placeholder="Project Details"
            value={formData.details}
            onChange={handleChange}
            className={`form-textarea ${errors.details ? 'error' : ''}`}
            disabled={status === 'loading'}
          ></textarea>
          {errors.details && <span className="error-text">{errors.details}</span>}
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          className="btn-gold form-submit-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <span>Submitting Request...</span>
              <Loader2 size={18} className="spinner-icon" />
            </>
          ) : (
            <>
              <span>Request Quote</span>
              <span className="btn-gold-icon">
                <Send size={14} />
              </span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
