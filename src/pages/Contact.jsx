import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeader from '../components/ui/SectionHeader';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter, Loader2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    business_name: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID.includes('placeholder') || SERVICE_ID.includes('here')) {
      console.error('EmailJS credentials missing or invalid.');
      alert('Error: You must put your actual EmailJS keys in the .env file and restart the server.');
      setIsSending(false);
      return;
    }

    // We pass the form.current directly, but we ensure the input names match your template
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully! We will get back to you shortly.');
          setFormData({ user_name: '', user_email: '', business_name: '', message: '' });
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message. Please check if your Service ID and Template ID are correct in the .env file.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="contact-hero">
        <div className="container">
          <SectionHeader 
            title="Get In Touch" 
            subtitle="Ready to build your dream website? Fill out the form below or contact us through our details."
          />
          <div className="contact-grid">
            <motion.div 
              className="contact-info glass-card"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a href="mailto:webpixel001@gmail.com" className="info-item">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>webpixel001@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919219026143" className="info-item">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 92190 26143</p>
                </div>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Greater+Noida,+India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="info-item"
              >
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h4>Our Office</h4>
                  <p>Greater Noida, India</p>
                </div>
              </a>
              <div className="social-connect">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#"><Linkedin /></a>
                  <a href="#"><Instagram /></a>
                  <a href="#"><Twitter /></a>
                </div>
              </div>
            </motion.div>

            <motion.form 
              ref={form}
              className="contact-form glass-card" 
              onSubmit={sendEmail}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  value={formData.user_name} 
                  onChange={handleChange} 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                {/* We send as 'user_email' to match your From Name tag */}
                <input 
                  type="email" 
                  name="user_email" 
                  value={formData.user_email} 
                  onChange={handleChange} 
                  placeholder="name@business.com" 
                  required 
                />
                {/* We also send a hidden field as 'email' to match your Reply To tag */}
                <input type="hidden" name="email" value={formData.user_email} />
              </div>
              <div className="form-group">
                <label>Business Name</label>
                <input 
                  type="text" 
                  name="business_name" 
                  value={formData.business_name} 
                  onChange={handleChange} 
                  placeholder="Your Company" 
                />
              </div>
              <div className="form-group">
                <label>Project Details</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us about your project..." 
                  rows={5} 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSending ? 'loading' : ''}`}
                disabled={isSending}
              >
                {isSending ? (
                  <>Sending... <Loader2 size={18} className="spinner" /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
