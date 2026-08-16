import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import './CardComponents.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ fullName: '', email: '', phone: '', message: '' });
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-form-card">
      {submitted && (
        <div className="contact-success-banner animate-fade-in">
          <CheckCircle2 size={24} />
          <span>Thank you! Your message has been sent. We will respond within 24 hours.</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
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

          {/* Phone Number */}
          <div className="form-group full-width">
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

          {/* Message */}
          <div className="form-group full-width">
            <label className="form-label">Message</label>
            <div className="input-icon-box text-area-box">
              <MessageSquare size={18} className="field-icon text-area-icon" />
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className={`form-textarea ${errors.message ? 'error' : ''}`}
              />
            </div>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-full mt-6">
          <span>Send Message</span>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
