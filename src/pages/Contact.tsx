import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChefHat, Calendar, Users, BookOpen, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    guests: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'chef@gathigia.com',
      description: 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call for immediate assistance'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Greater Metropolitan Area',
      description: 'We travel to you'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sun: 9AM-9PM',
      description: 'Flexible scheduling available'
    }
  ];

  const services = [
    { value: 'private-chef', label: 'Private Chef Services', icon: ChefHat },
    { value: 'cooking-lessons', label: 'Private Cooking Lessons', icon: BookOpen },
    { value: 'cooking-club', label: 'Exclusive Cooking Club', icon: Users },
    { value: 'event-catering', label: 'Event Catering', icon: Calendar },
    { value: 'consultation', label: 'Culinary Consultation', icon: Star },
    { value: 'other', label: 'Other Inquiry', icon: Mail }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 1-2 weeks in advance for private chef services and cooking lessons. For special events, please book 3-4 weeks ahead.'
    },
    {
      question: 'Do you accommodate dietary restrictions?',
      answer: 'Absolutely! We specialize in creating customized menus for all dietary needs including vegetarian, vegan, gluten-free, keto, and allergy-specific requirements.'
    },
    {
      question: 'What equipment do you need in my kitchen?',
      answer: 'We work with standard home kitchen equipment. We bring our own professional knives and specialty tools. We\'ll discuss any specific requirements during consultation.'
    },
    {
      question: 'What\'s included in the cooking club membership?',
      answer: 'Monthly exclusive recipes, live virtual cooking sessions, priority booking, seasonal challenges, and direct access to Chef GATHIGIA for questions.'
    }
  ];

  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Get In <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your culinary experience? Let's discuss your needs and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8">Book Your Consultation</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-300">Thank you for your inquiry. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="" className="bg-slate-800">Select a service</option>
                        {services.map(service => (
                          <option key={service.value} value={service.value} className="bg-slate-800">
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="" className="bg-slate-800">Select number</option>
                        <option value="1-2" className="bg-slate-800">1-2 people</option>
                        <option value="3-4" className="bg-slate-800">3-4 people</option>
                        <option value="5-8" className="bg-slate-800">5-8 people</option>
                        <option value="9-12" className="bg-slate-800">9-12 people</option>
                        <option value="12+" className="bg-slate-800">12+ people</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Tell us about your culinary needs
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your event, dietary restrictions, preferences, or any special requests..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-amber-500/30">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                          <p className="text-amber-400 font-medium mb-1">{info.details}</p>
                          <p className="text-slate-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Service Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Quick Service Access</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.slice(0, 4).map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-amber-500/30 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-white text-sm font-medium">{service.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-900/50 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-slate-300">
              Get answers to common questions about our culinary services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-amber-500/30">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-3xl p-12 border border-amber-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Culinary Journey?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't wait to experience exceptional culinary artistry. Book your consultation today and let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+15551234567"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
              >
                <Phone className="inline mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                Call Now
              </a>
              <a 
                href="mailto:chef@gathigia.com"
                className="group border-2 border-amber-400 text-amber-300 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="inline mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;