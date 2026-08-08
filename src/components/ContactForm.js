import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaMapMarkerAlt } from 'react-icons/fa';

const API_BASE = process.env.REACT_APP_API_URL || '';
const CONTACT_EMAIL = 'veerabadhrasathvik@gmail.com';
const CONTACT_PHONE = '+1 (513) 919-0874';
const CONTACT_LOCATION = 'Novi, Michigan';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="h-5 w-5 text-indigo-300" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="block w-full pl-10 pr-3 py-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="h-5 w-5 text-indigo-300" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="block w-full pl-10 pr-3 py-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone className="h-5 w-5 text-indigo-300" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
              className="block w-full pl-10 pr-3 py-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="h-5 w-5 text-indigo-300" />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (Optional)"
              className="block w-full pl-10 pr-3 py-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={6}
            className="block w-full px-4 py-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              isFormValid && !isSubmitting
                ? 'bg-white/20 hover:bg-white/30 shadow-lg hover:shadow-xl border border-white/30'
                : 'bg-gray-400/50 cursor-not-allowed shadow-md'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>

          {submitStatus && (
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              submitStatus === 'success' 
                ? 'bg-green-500/20 text-green-200 border border-green-300/30' 
                : 'bg-red-500/20 text-red-200 border border-red-300/30'
            }`}>
              {submitStatus === 'success' ? (
                <>
                  <FaCheckCircle className="h-4 w-4" />
                  Message sent successfully!
                </>
              ) : (
                <>
                  <FaExclamationCircle className="h-4 w-4" />
                  Failed to send message. Please try again.
                </>
              )}
            </div>
          )}
        </div>
      </form>

      <div className="mt-12 pt-8 border-t border-white/20">
        <h4 className="text-xl font-semibold text-white mb-4 text-center">Or reach out directly</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <FaEnvelope className="h-6 w-6 text-indigo-300 mx-auto mb-2" />
            <p className="text-white font-medium">Email</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-200 hover:text-white transition-colors text-sm break-all">
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <FaPhone className="h-6 w-6 text-indigo-300 mx-auto mb-2" />
            <p className="text-white font-medium">Phone</p>
            <a href="tel:+15139190874" className="text-indigo-200 hover:text-white transition-colors">
              {CONTACT_PHONE}
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <FaMapMarkerAlt className="h-6 w-6 text-indigo-300 mx-auto mb-2" />
            <p className="text-white font-medium">Location</p>
            <p className="text-indigo-200">{CONTACT_LOCATION}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
