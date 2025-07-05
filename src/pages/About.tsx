import { Award, Users, Clock, Star, Heart, Target, Utensils } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, title: 'Certified Chef', description: 'Professional culinary certification' },
    { icon: Users, title: '500+ Clients', description: 'Satisfied customers served' },
    { icon: Clock, title: '5+ Years', description: 'Professional experience' },
    { icon: Star, title: '4.9/5 Rating', description: 'Average client satisfaction' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'Every dish is crafted with love and dedication to culinary excellence.'
    },
    {
      icon: Target,
      title: 'Quality First',
      description: 'Using only the finest ingredients to create memorable dining experiences.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building connections through food and sharing culinary knowledge.'
    },
    {
      icon: Utensils,
      title: 'Innovation',
      description: 'Blending traditional techniques with modern culinary innovations.'
    }
  ];

  const journey = [
    {
      year: '2019',
      title: 'Culinary Journey Begins',
      description: 'Started professional culinary training and discovered passion for authentic flavors.'
    },
    {
      year: '2020',
      title: 'Private Chef Services',
      description: 'Launched private chef services, focusing on personalized dining experiences.'
    },
    {
      year: '2022',
      title: 'Content Creation',
      description: 'Started sharing cooking knowledge through TikTok and social media platforms.'
    },
    {
      year: '2024',
      title: 'Culinary Excellence',
      description: 'Established as a trusted culinary expert with a growing community of food lovers.'
    }
  ];

  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              About <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Chef GATHIGIA</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I'm a passionate culinary artist dedicated to sharing the rich flavors and traditions of authentic cooking. With years of experience in professional kitchens and a deep love for food culture, I bring restaurant-quality experiences directly to your home.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              My journey began with a simple love for cooking and has evolved into a mission to preserve authentic flavors while embracing culinary innovation. Every dish I create tells a story, connects cultures, and brings people together around the table.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/chef.jpeg" 
                alt="Chef GATHIGIA" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-400 to-red-600 rounded-3xl blur-xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Recognition and milestones that reflect my commitment to culinary excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 transform hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-slate-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My Culinary <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Philosophy</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Food is more than sustenance—it's culture, memory, and connection. Every dish I create is crafted with love, respect for ingredients, and a commitment to bringing people together around the table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-slate-900/50 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My Culinary <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-slate-300">
              From passion to profession - the milestones that shaped my culinary career
            </p>
          </div>

          <div className="space-y-12">
            {journey.map((milestone, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-3xl p-12 border border-amber-500/20">
            <h2 className="text-4xl font-bold text-white mb-8">
              Beyond the <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Kitchen</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              When I'm not creating culinary masterpieces, you'll find me exploring local markets for the freshest ingredients, experimenting with new flavor combinations, or sharing cooking tips with my growing TikTok community. I believe that cooking is an art form that brings joy, creates memories, and connects us to our heritage.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              My mission is simple: to make exceptional food accessible to everyone, whether through personalized chef services, hands-on cooking lessons, or sharing knowledge through social media. Every meal is an opportunity to create something special.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;