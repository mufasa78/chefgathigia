import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, BookOpen, Users, Star, Clock, Utensils, Award, Calendar, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: 'Private Chef Services',
      subtitle: 'Personalized Culinary Excellence',
      description: 'Transform your dining experience with professional private chef services tailored to your preferences and dietary needs.',
      features: [
        'Custom menu planning and consultation',
        'Fresh ingredient sourcing and preparation',
        'Professional cooking in your kitchen',
        'Complete setup and cleanup service',
        'Dietary accommodations and restrictions',
        'Wine pairing recommendations'
      ],
      pricing: 'Starting from $150/meal',
      duration: '3-4 hours',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: BookOpen,
      title: 'Private Cooking Lessons',
      subtitle: 'Master Culinary Techniques',
      description: 'Learn professional cooking techniques with personalized instruction designed to elevate your culinary skills.',
      features: [
        'One-on-one personalized instruction',
        'Skill-based curriculum development',
        'Hands-on cooking experience',
        'Recipe collections and techniques',
        'Knife skills and food safety',
        'Technique mastery and practice'
      ],
      pricing: 'Starting from $100/session',
      duration: '2-3 hours',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Exclusive Cooking Club',
      subtitle: 'Community & Learning',
      description: 'Join our exclusive community for monthly recipes, live cooking sessions, and priority access to special events.',
      features: [
        'Monthly exclusive recipe collections',
        'Live virtual cooking sessions',
        'Private community access',
        'Priority booking for services',
        'Seasonal cooking challenges',
        'Direct access to Chef GATHIGIA'
      ],
      pricing: '$29/month',
      duration: 'Ongoing membership',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const additionalServices = [
    {
      icon: Calendar,
      title: 'Event Catering',
      description: 'Professional catering for special occasions and corporate events'
    },
    {
      icon: Award,
      title: 'Culinary Consulting',
      description: 'Menu development and kitchen optimization for restaurants'
    },
    {
      icon: Utensils,
      title: 'Meal Prep Services',
      description: 'Weekly meal preparation for busy professionals and families'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      service: 'Private Chef',
      rating: 5,
      comment: 'Chef GATHIGIA transformed our anniversary dinner into an unforgettable experience. The attention to detail and flavors were exceptional!'
    },
    {
      name: 'Michael Chen',
      service: 'Cooking Lessons',
      rating: 5,
      comment: 'The cooking lessons have completely changed how I approach food. I\'ve learned techniques I never thought possible at home.'
    },
    {
      name: 'Emma Davis',
      service: 'Cooking Club',
      rating: 5,
      comment: 'Being part of the cooking club has been amazing. The monthly recipes and live sessions are so inspiring and educational.'
    }
  ];

  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Culinary <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your culinary experience with professional services designed to bring restaurant-quality dining and education directly to you.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`bg-white/5 backdrop-blur-xl rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="text-white w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-xl text-amber-400 mb-6 font-medium">{service.subtitle}</p>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-6 mb-8 text-slate-400">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-amber-400" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2 text-amber-400" />
                        <span>{service.pricing}</span>
                      </div>
                    </div>

                    <Link 
                      to="/contact"
                      className={`group inline-flex items-center bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
                    >
                      Book Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Additional <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive culinary solutions for every need and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 transform hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Client <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Hear what our satisfied clients have to say about their culinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-amber-400 text-sm">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Begin Your <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Culinary Journey?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Let's discuss your culinary needs and create a personalized experience that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
            >
              <Calendar className="inline mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              Schedule Consultation
              <ArrowRight className="inline ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <a 
              href="https://www.tiktok.com/@gathigia.rico"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-amber-400 text-amber-300 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Watch Cooking Videos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;