import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const DragonBallLegends = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <div className="min-h-screen bg-black text-white" style={{fontFamily: 'Inter, sans-serif'}}>
        {/* Header */}
        <header className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <div className="text-xl font-bold italic tracking-wide hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}><img src="/src/image/Made with insMind-Goku.png" alt="" 
            className="w-10 h-10 hover:animate-bounce transition-transform hover:scale-110"
            /></div>
            <nav className="hidden md:flex space-x-11">
              <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300 relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300 relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                News
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-medium hover:text-yellow-400 transition-all duration-300 relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                Guides
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <div className="flex items-center space-x-1 hover:text-yellow-400 transition-all duration-300 cursor-pointer group">
                <span className="text-sm font-medium" style={{fontFamily: 'Inter, sans-serif'}}>Community</span>
                <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </nav>
            <button className="bg-gradient-to-r from-white to-gray-100 text-black px-5 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg hover:shadow-xl" style={{fontFamily: 'Inter, sans-serif'}}>
              Join
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-50"></div>
          
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tighter ml-10 mt-25 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent animate-pulse" style={{fontFamily: 'Inter, sans-serif', fontWeight: '900'}}>
                UNLEASH<br />
                YOUR<br />
                POWER —<br />
                THE<br />
                ULTIMATE<br />
                PORTAL
              </h1>
              <p className="text-base text-gray-300 leading-relaxed max-w-md font-normal ml-10 opacity-90" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
                Dive into the world of Dragon Ball Legends with the latest updates, in-depth guides, and community insights. Join fighters from around the globe as you enhance your gameplay and strategy.
              </p>
              <div className="flex items-center space-x-6 pt-2 ml-10">
                <button className="bg-gradient-to-r from-white to-gray-100 text-black px-6 py-3 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 text-sm font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl" style={{fontFamily: 'Inter, sans-serif'}}>
                  See Tier List
                </button>
                <button className="text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold underline decoration-transparent hover:decoration-current underline-offset-4 relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                  Join
                  <span className="absolute inset-0 bg-yellow-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </button>
              </div>
            </div>
            <div className="relative mt-25">
              <div className="w-full h-96 lg:h-[500px] xl:h-[600px] relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://m.media-amazon.com/images/I/A1zhZkxNt3L._UF894,1000_QL80_.jpg"
                  alt="Dragon Ball Legends gameplay"
                  className="w-full h-full object-cover filter hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* News Updates Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tighter text-white" style={{fontFamily: 'Inter, sans-serif', fontWeight: '900'}}>
                  STAY UPDATED WITH<br />
                  THE LATEST DRAGON<br />
                  BALL LEGENDS NEWS<br />
                  <span className="text-yellow-400">AND EVENTS!</span>
                </h2>
                <p className="text-gray-300 text-base leading-relaxed max-w-md" style={{fontFamily: 'Inter, sans-serif'}}>
                  Discover the newest characters, events, and updates in Dragon Ball Legends. Join our community to stay ahead of the game!
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="group cursor-pointer">
                    <div className="text-5xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif', fontWeight: '900'}}>
                      100%
                    </div>
                    <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                      Latest updates, banners, and character releases await you.
                    </p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-5xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif', fontWeight: '900'}}>
                      100%
                    </div>
                    <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                      Don't miss out on exciting in-game events!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://i1.sndcdn.com/artworks-R2yAqXwK1yHxtdFN-tgAjyg-t500x500.jpg"
                    alt="Gaming setup with plants and cozy atmosphere"
                    className="w-full h-full object-cover filter hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tier List Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-6" style={{fontFamily: 'Inter, sans-serif', fontWeight: '900'}}>
                EXPLORE OUR<br />
                COMPREHENSIVE <span className="text-yellow-400">TIER LIST</span><br />
                FOR SP/EX CHARACTERS
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Item 1 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="h-48 relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://en.dragon-ball-official.com/dragonball/jp/news/2022/03/GokuSSGSSKAIOU_468_UL.jpg?_=1752268860"
                    alt="Character Rankings"
                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    FIND YOUR PERFECT CHARACTER WITH OUR DETAILED RANKINGS
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Our tier list offers insights into the best characters in Dragon Ball Legends.
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>View</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Item 2 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="h-48 relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://cdn.ggmax.com.br/images/c06dbf38eefb77f3e705b71354e2cde8.sm.jpg"
                    alt="Character Tips"
                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    QUICK TIPS TO MAXIMIZE YOUR CHARACTER'S POTENTIAL
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Get essential strategies to enhance your gameplay and character effectiveness.
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>Learn</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Item 3 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="h-48 relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://i1.sndcdn.com/artworks-yeNLFZZyK8lbeRnI-KKo1hw-t500x500.jpg"
                    alt="Color Coded Ranks"
                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    COLOR-CODED RANKS FOR EASY CHARACTER EVALUATION
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Our color-coded system makes it simple to identify top-tier characters.
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>Check</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Master Strategies Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-6" style={{fontFamily: 'Inter, sans-serif', fontWeight: '900'}}>
                MASTER STRATEGIES FOR<br />
                DOMINATING IN <span className="text-yellow-400">DRAGON</span><br />
                BALL LEGENDS
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Strategy 1 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="h-48 relative overflow-hidden rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://i.ytimg.com/vi/tzLXPkAaHo4/maxresdefault.jpg"
                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    BUILD YOUR ULTIMATE TEAM WITH EXPERT GUIDANCE
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Explore comprehensive guides tailored for all skill levels.
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>Download</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Strategy 2 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="h-48 relative overflow-hidden rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://i.ytimg.com/vi/hloHGPKXSgU/maxresdefault.jpg"
                    alt="Advanced Tactics"
                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    UNLOCK ADVANCED TACTICS FOR COMPETITIVE PLAY
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Gain insights into the meta and enhance your gameplay.
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>View</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Strategy 3 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="h-48 relative overflow-hidden rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://i.ytimg.com/vi/AknQc4y2y5o/maxresdefault.jpg"
                    alt="Beginner Guide"
                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    BEGINNER TO PRO: YOUR PATH TO MASTERY
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Step up your game with our easy-to-follow guides.
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>Learn</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-left ml-10 text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-6" style={{fontFamily: 'Inter, sans-serif', fontWeight: '900'}}>
                JOIN OUR VIBRANT<br />
                COMMUNITY OF <span className="text-yellow-400">DRAGON</span><br />
                BALL LEGENDS<br />
                ENTHUSIASTS!
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Community Item 1 */}
              <div className="space-y-6 mt-15 group cursor-pointer">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-8 h-8 text-black transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    CONNECT WITH FELLOW FIGHTERS ON DISCORD, REDDIT, AND MORE!
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Dive into discussions, share strategies, and celebrate your victories together!
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold mx-auto group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>Join</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Community Item 2 */}
              <div className="space-y-6 mt-15 group cursor-pointer">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-8 h-8 text-black transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    HEAR WHAT OUR PLAYERS ARE SAYING ABOUT THEIR EXPERIENCE!
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Check out testimonials from players who've leveled up their game!
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold mx-auto group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>Read</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Community Item 3 */}
              <div className="space-y-6 mt-15 group cursor-pointer">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-8 h-8 text-black transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    SPOTLIGHT ON TOP PLAYERS: LEARN FROM THE BEST IN THE GAME!
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Inter, sans-serif'}}>
                    Discover strategies and tips from our featured players each week!
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 text-sm font-semibold mx-auto group" style={{fontFamily: 'Inter, sans-serif'}}>
                    <span>Explore</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-gradient-to-t from-gray-900 to-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8">
              {/* Logo */}
            <div className="text-2xl font-bold italic tracking-wide hover:text-yellow-400 transition-colors duration-300 flex justify-center items-center" style={{fontFamily: 'Inter, sans-serif'}}>
            <img src="/src/image/Made with insMind-Goku.png" alt="" />
            </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-wrap justify-center gap-8 text-sm">
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                  Discord Server
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                  Latest News
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                  Tier List
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                  Game Guides
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </nav>
              
              {/* Community Hub */}
              <div>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm relative group" style={{fontFamily: 'Inter, sans-serif'}}>
                  Community Hub
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              
              {/* Footer Bottom */}
              <div className="pt-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-gray-400 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                    © 2025 Dragon Ball Legends Fan Site. All rights reserved.
                  </p>
                  <div className="flex space-x-6 text-sm">
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 underline hover:no-underline" style={{fontFamily: 'Inter, sans-serif'}}>
                      Privacy Policy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 underline hover:no-underline" style={{fontFamily: 'Inter, sans-serif'}}>
                      Terms of Service
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 underline hover:no-underline" style={{fontFamily: 'Inter, sans-serif'}}>
                      Cookies Settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DragonBallLegends;