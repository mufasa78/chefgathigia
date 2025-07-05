import { Link } from 'react-router-dom';
import { Play, Users, Heart, ArrowRight, Clock, Utensils } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Following', value: '3,826', color: 'from-blue-500 to-cyan-600' },
    { icon: Users, label: 'Followers', value: '1,952', color: 'from-purple-500 to-pink-600' },
    { icon: Heart, label: 'Likes', value: '13.4K', color: 'from-pink-500 to-red-600' },
    { icon: Play, label: 'Videos', value: '50+', color: 'from-amber-500 to-orange-600' }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: 'Tea Preparation Tutorial',
      description: 'Traditional tea making techniques',
      views: '181',
      likes: '25',
      duration: '2:45',
      thumbnail: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      tiktokUrl: 'https://www.tiktok.com/@gathigia.rico'
    },
    {
      id: 2,
      title: 'Cooking Tips & Techniques',
      description: 'Professional cooking advice',
      views: '180',
      likes: '32',
      duration: '3:12',
      thumbnail: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
      tiktokUrl: 'https://www.tiktok.com/@gathigia.rico'
    },
    {
      id: 3,
      title: 'BBQ Masterclass',
      description: 'Grilling techniques and tips',
      views: '205',
      likes: '45',
      duration: '4:20',
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tiktokUrl: 'https://www.tiktok.com/@gathigia.rico'
    },
    {
      id: 4,
      title: 'Kitchen Essentials',
      description: 'Must-have cooking tools and ingredients',
      views: '178',
      likes: '28',
      duration: '2:30',
      thumbnail: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      tiktokUrl: 'https://www.tiktok.com/@gathigia.rico'
    },
    {
      id: 5,
      title: 'Quick Cooking Hacks',
      description: 'Time-saving kitchen tips',
      views: '382',
      likes: '67',
      duration: '1:45',
      thumbnail: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600',
      tiktokUrl: 'https://www.tiktok.com/@gathigia.rico'
    },
    {
      id: 6,
      title: 'Traditional Recipes',
      description: 'Authentic cooking methods',
      views: '447',
      likes: '89',
      duration: '5:15',
      thumbnail: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=600',
      tiktokUrl: 'https://www.tiktok.com/@gathigia.rico'
    }
  ];

  const specialties = [
    { name: 'African Cuisine', icon: '🍲', description: 'Traditional flavors' },
    { name: 'BBQ & Grilling', icon: '🔥', description: 'Masterful techniques' },
    { name: 'Quick Meals', icon: '⚡', description: 'Fast & delicious' },
    { name: 'Healthy Options', icon: '🥗', description: 'Nutritious choices' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-3/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Profile Image */}
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/gathigia-logo.jpeg" 
                    alt="Chef GATHIGIA" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-400 to-red-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Chef GATHIGIA
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg lg:text-xl">
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-amber-200 border border-amber-500/30">
              Private Chef
            </span>
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-amber-200 border border-amber-500/30">
              Private Lessons
            </span>
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-amber-200 border border-amber-500/30">
              Exclusive Cooking Club
            </span>
          </div>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Bringing authentic flavors and culinary expertise to your kitchen
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            All things food 🍳
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/services"
              className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
            >
              <img 
                src="/gathigia-logo.jpeg" 
                alt="Chef GATHIGIA" 
                className="inline mr-3 w-6 h-6 rounded group-hover:rotate-12 transition-transform duration-300 object-cover"
              />
              Book Chef Services
              <ArrowRight className="inline ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <a 
              href="https://www.tiktok.com/@gathigia.rico"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-amber-400 text-amber-300 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Play className="inline mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              Watch Cooking Videos
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="text-white w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Culinary <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Specialties</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover the diverse range of cuisines and cooking styles I specialize in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 transform hover:scale-105 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{specialty.name}</h3>
                  <p className="text-slate-400">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">TikTok Videos</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Watch my latest cooking tutorials and recipe demonstrations from @gathigia.rico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id} className="group">
                <a 
                  href={video.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="text-white w-8 h-8 ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {video.duration}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Play className="w-4 h-4 mr-1" />
                              {video.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1 text-red-400" />
                              {video.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="text-slate-400">{video.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.tiktok.com/@gathigia.rico"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-pink-500 to-red-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
            >
              <Play className="inline mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              View All Cooking Videos
              <ArrowRight className="inline ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-900/50 to-orange-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Culinary Experience?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Whether you need a private chef, cooking lessons, or want to join our exclusive cooking club, let's create something delicious together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
            >
              <Utensils className="inline mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
              Book Consultation
              <ArrowRight className="inline ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <Link 
              to="/services"
              className="group border-2 border-amber-400 text-amber-300 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;