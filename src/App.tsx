import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Camera, 
  Heart, 
  MapPin, 
  Medal, 
  Music, 
  Palette, 
  Star, 
  Trophy,
  Youtube,
  Film,
  PenTool,
  Users,
  Home,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100 relative overflow-x-hidden">
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Blue Polka Dots */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-50"></div>
        <div className="absolute top-64 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
        <div className="absolute top-96 right-1/3 w-5 h-5 bg-blue-500 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-blue-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-64 right-12 w-3 h-3 bg-blue-500 rounded-full opacity-70"></div>
        
        {/* Colorful Sprinkles */}
        <div className="absolute top-20 left-1/3 w-1 h-4 bg-yellow-400 rounded transform rotate-45"></div>
        <div className="absolute top-48 right-1/4 w-1 h-4 bg-red-400 rounded transform -rotate-12"></div>
        <div className="absolute top-80 left-1/2 w-1 h-4 bg-green-400 rounded transform rotate-90"></div>
        <div className="absolute bottom-48 left-1/4 w-1 h-4 bg-purple-400 rounded transform rotate-12"></div>
        <div className="absolute bottom-80 right-1/3 w-1 h-4 bg-orange-400 rounded transform -rotate-45"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50 relative">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Shakti's Amazing World! 🍦
            </h1>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'awards', label: 'Awards', icon: Trophy },
                { id: 'hobbies', label: 'Hobbies', icon: Heart },
                { id: 'entertainment', label: 'Fun Stuff', icon: Film },
                { id: 'gallery', label: 'Gallery', icon: Camera },
                { id: 'books', label: 'Books', icon: BookOpen },
                { id: 'stories', label: 'Stories', icon: PenTool }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all ${
                    activeSection === item.id 
                      ? 'bg-pink-500 text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-pink-100'
                  }`}
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl">
                👧🏻
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Hi! I'm <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Shakti</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-6">Third Grade Superstar! 🌟</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Welcome to my colorful world! I love dancing, singing, art, reading amazing books, 
              and sharing my adventures with everyone. Come explore all the fun things I do!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/80 rounded-xl p-4 shadow-lg">
              <div className="text-3xl mb-2">🎭</div>
              <div className="text-sm font-semibold text-gray-700">Performer</div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-lg">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-sm font-semibold text-gray-700">Artist</div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-lg">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-sm font-semibold text-gray-700">Bookworm</div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-lg">
              <div className="text-3xl mb-2">✍️</div>
              <div className="text-sm font-semibold text-gray-700">Writer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            🏆 My Amazing Awards & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <Trophy className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Interschool Competition Winner</h3>
              </div>
              <p className="text-gray-600">Won first place in the regional interschool competition!</p>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <Medal className="text-gold-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Olympiad Medals</h3>
              </div>
              <p className="text-gray-600">Multiple medals in Math and English Olympiads.</p>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <Star className="text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Star Student</h3>
              </div>
              <p className="text-gray-600">Recognized as Star Student of the Month!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-16 px-4 bg-white/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            💖 My Super Fun Hobbies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-2xl p-8 shadow-xl text-center hover:transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4">💃</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Dancing</h3>
              <p className="text-gray-600">I love to move to the music and express myself through dance!</p>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-8 shadow-xl text-center hover:transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Singing</h3>
              <p className="text-gray-600">Music fills my heart and I love sharing songs with everyone!</p>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-8 shadow-xl text-center hover:transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Art</h3>
              <p className="text-gray-600">Creating beautiful artwork and bringing my imagination to life!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section id="entertainment" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            🎬 Movies, Shows & YouTube Fun!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <Film className="text-red-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Favorite Movies & Shows</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🐼</span>
                  <span className="font-semibold">Kung Fu Panda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚡</span>
                  <span className="font-semibold">Harry Potter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✨</span>
                  <span className="font-semibold">Just Add Magic</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <Youtube className="text-red-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">YouTube Favorites</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🧪</span>
                  <span className="font-semibold">Doctor Binox</span>
                  <span className="text-sm text-gray-600">- Learning science is so cool!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-white/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            📸 My Amazing Gallery
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Palette className="mr-2 text-purple-500" size={20} />
                My Artwork
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-green-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">🖼️</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">✏️</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-red-200 to-pink-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">🖍️</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Camera className="mr-2 text-blue-500" size={20} />
                Dance Photos
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center">
                  <img
                    src="/dance_pic.jpg" 
                    alt="Shakti dancing" 
                    className="w-full h-full object-cover object-top cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => openImageModal('/dance_pic.jpg')}
                  />
                </div>
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">🎭</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">🌟</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-red-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">🎪</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="mr-2 text-green-500" size={20} />
                Family & Friends
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">👨‍👩‍👧</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-yellow-200 to-green-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">👭</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">🎉</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-2xl">💝</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            📚 My Book Adventure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="mr-2 text-blue-500" size={20} />
                My Favorite Books
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-xl">📖</span>
                  <span className="font-semibold">Famous Five</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-xl">🔍</span>
                  <span className="font-semibold">Secret Seven</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <span className="text-xl">🏘️</span>
                  <span className="font-semibold">Malgudi Days</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Star className="mr-2 text-purple-500" size={20} />
                Books I Want to Read
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <span className="text-xl">📚</span>
                  <span className="font-semibold">More adventure stories!</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                  <span className="text-xl">🧙‍♀️</span>
                  <span className="font-semibold">Magic and fantasy books</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <span className="text-xl">🌍</span>
                  <span className="font-semibold">Stories from around the world</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories & Blog Section */}
      <section id="stories" className="py-16 px-4 bg-white/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            ✍️ My Amazing Stories & Blog
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-3">The Magic Rainbow</h3>
              <p className="text-sm text-gray-600 mb-4">A story about a rainbow that grants wishes...</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors">
                Read Story
              </button>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-3">My Pet Butterfly</h3>
              <p className="text-sm text-gray-600 mb-4">An adventure with my colorful butterfly friend...</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors">
                Read Story
              </button>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-3">The Singing Tree</h3>
              <p className="text-sm text-gray-600 mb-4">A tree that teaches everyone beautiful songs...</p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition-colors">
                Read Story
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all">
              ✨ Write New Story
            </button>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl text-center">
              <MapPin className="mx-auto mb-4 text-green-500" size={32} />
              <h3 className="text-lg font-bold text-gray-800 mb-3">Places I've Visited</h3>
              <p className="text-sm text-gray-600">Amazing adventures and fun trips!</p>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl text-center">
              <span className="text-4xl mb-4 block">🍕</span>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Favorite Foods</h3>
              <p className="text-sm text-gray-600">Yummy treats that make me happy!</p>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl text-center">
              <span className="text-4xl mb-4 block">🎁</span>
              <h3 className="text-lg font-bold text-gray-800 mb-3">My Collections</h3>
              <p className="text-sm text-gray-600">Special treasures I love to collect!</p>
            </div>
            
            <div className="bg-white/90 rounded-2xl p-6 shadow-xl text-center">
              <Heart className="mx-auto mb-4 text-red-500" size={32} />
              <h3 className="text-lg font-bold text-gray-800 mb-3">Kind Words</h3>
              <p className="text-sm text-gray-600">Sweet things people say about me!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Thanks for visiting my website! 🌈</h3>
          <p className="text-gray-600 mb-6">
            I hope you enjoyed learning about all my adventures and fun activities. 
            Come back soon to see what new stories and artwork I create!
          </p>
          <div className="text-4xl">🍦✨🎨📚💖</div>
        </div>
      </footer>
    </div>
  );
}

export default App;