import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [serverMessage, setServerMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required';
    }

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

    if (!formData.message.trim()) {
      newErrors.message = 'Your message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

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

    // Simulate real frontend submission delay
    setTimeout(() => {
      setStatus('success');
      const randomRef = `INT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      navigate('/confirmed', {
        state: {
          refNumber: randomRef,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: 'General Interior Consultation',
          details: formData.message
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
          <span>{serverMessage || 'Failed to submit form. Please try again.'}</span>
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

        {/* Message Field */}
        <div className="form-group">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            disabled={status === 'loading'}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-gold form-submit-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <span>Sending...</span>
              <Loader2 size={18} className="spinner-icon" />
            </>
          ) : (
            <>
              <span>Send Message</span>
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
