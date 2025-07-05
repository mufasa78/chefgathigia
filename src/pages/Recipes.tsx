import React, { useState } from 'react';
import { Play, Heart, Clock, Users, ChefHat, Filter, Search, Star, Eye } from 'lucide-react';

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Recipes', count: 12 },
    { id: 'african', name: 'African Cuisine', count: 4 },
    { id: 'bbq', name: 'BBQ & Grilling', count: 3 },
    { id: 'quick', name: 'Quick Meals', count: 3 },
    { id: 'healthy', name: 'Healthy Options', count: 2 }
  ];

  const recipes = [
    {
      id: 1,
      title: 'Traditional Tea Preparation',
      category: 'african',
      description: 'Authentic tea making techniques with traditional spices',
      cookTime: '15 min',
      servings: 2,
      difficulty: 'Easy',
      views: '181',
      likes: '25',
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.tiktok.com/@gathigia.rico',
      ingredients: ['Tea leaves', 'Spices', 'Milk', 'Sugar', 'Water', 'Ginger']
    },
    {
      id: 2,
      title: 'Perfect BBQ Techniques',
      category: 'bbq',
      description: 'Professional grilling methods for perfect BBQ every time',
      cookTime: '45 min',
      servings: 4,
      difficulty: 'Medium',
      views: '205',
      likes: '45',
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.tiktok.com/@gathigia.rico',
      ingredients: ['Meat', 'BBQ sauce', 'Spices', 'Charcoal', 'Wood chips']
    },
    {
      id: 3,
      title: 'Quick Kitchen Hacks',
      category: 'quick',
      description: 'Time-saving cooking tips and techniques',
      cookTime: '10 min',
      servings: 1,
      difficulty: 'Easy',
      views: '382',
      likes: '67',
      rating: 4.7,
      thumbnail: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.tiktok.com/@gathigia.rico',
      ingredients: ['Various ingredients', 'Basic tools', 'Simple techniques']
    },
    {
      id: 4,
      title: 'Kitchen Essentials Guide',
      category: 'quick',
      description: 'Must-have tools and ingredients for every kitchen',
      cookTime: '5 min',
      servings: 1,
      difficulty: 'Easy',
      views: '178',
      likes: '28',
      rating: 4.6,
      thumbnail: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.tiktok.com/@gathigia.rico',
      ingredients: ['Essential spices', 'Basic tools', 'Pantry staples']
    },
    {
      id: 5,
      title: 'Professional Cooking Tips',
      category: 'quick',
      description: 'Expert advice for better cooking results',
      cookTime: '8 min',
      servings: 1,
      difficulty: 'Easy',
      views: '180',
      likes: '32',
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.tiktok.com/@gathigia.rico',
      ingredients: ['Various techniques', 'Professional tips', 'Kitchen wisdom']
    },
    {
      id: 6,
      title: 'Traditional Cooking Methods',
      category: 'african',
      description: 'Authentic traditional cooking techniques and recipes',
      cookTime: '60 min',
      servings: 6,
      difficulty: 'Medium',
      views: '447',
      likes: '89',
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.tiktok.com/@gathigia.rico',
      ingredients: ['Traditional spices', 'Local ingredients', 'Authentic methods']
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Recipe <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Collection</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover authentic recipes, cooking techniques, and culinary secrets from Chef GATHIGIA's TikTok videos. Each recipe comes with detailed video instructions.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center max-w-4xl mx-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-slate-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="group">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/30 transform hover:scale-105">
                {/* Recipe Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={recipe.thumbnail} 
                    alt={recipe.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <a 
                    href={recipe.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="text-white w-8 h-8 ml-1" />
                    </div>
                  </a>

                  {/* Recipe Stats */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {recipe.cookTime}
                    </div>
                    <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {recipe.servings}
                    </div>
                  </div>

                  {/* Engagement Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {recipe.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-red-400" />
                        {recipe.likes}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-amber-400 fill-current" />
                      {recipe.rating}
                    </div>
                  </div>
                </div>

                {/* Recipe Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-amber-400 text-sm font-medium capitalize">
                      {categories.find(cat => cat.id === recipe.category)?.name.replace(' Cuisine', '').replace(' & Grilling', '').replace(' Meals', '').replace(' Options', '')}
                    </span>
                    <span className={`text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {recipe.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {recipe.description}
                  </p>

                  {/* Ingredients Preview */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-2">Key Ingredients:</p>
                    <div className="flex flex-wrap gap-1">
                      {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                        <span key={index} className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded">
                          {ingredient}
                        </span>
                      ))}
                      {recipe.ingredients.length > 3 && (
                        <span className="text-xs text-slate-400">
                          +{recipe.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a 
                    href={recipe.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch on TikTok
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <ChefHat className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No recipes found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 py-24 mt-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Want More <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Exclusive Recipes?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join our exclusive cooking club for monthly recipe collections, live cooking sessions, and direct access to Chef GATHIGIA.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.tiktok.com/@gathigia.rico"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-pink-500 to-red-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
            >
              <Play className="inline mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              Follow on TikTok
            </a>
            <button className="group border-2 border-amber-400 text-amber-300 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <Users className="inline mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              Join Cooking Club
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;