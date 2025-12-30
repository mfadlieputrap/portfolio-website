import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Zap, Crown, Star, Gift, TrendingUp, Users, Shield, Lock, Mail, Eye, EyeOff, Coins, Flame, Rocket, ChevronRight, Play, Volume2, VolumeX, Settings, LogOut, Wallet, History, Award, Target } from 'lucide-react';

export default function PremiumCasinoSlot() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [balance, setBalance] = useState(10000000);
  const [isSpinning, setIsSpinning] = useState(false);
  const [slots, setSlots] = useState(['🍒', '💎', '🍋']);
  const [betAmount, setBetAmount] = useState(100000);
  const [soundOn, setSoundOn] = useState(true);
  const [lastWin, setLastWin] = useState(0);
  const [totalWins, setTotalWins] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [starPositions, setStarPositions] = useState<Array<{ top: string; left: string; delay: string }>>([]);

  useEffect(() => {
    const newStarPositions = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    // Defer setting state to avoid synchronous updates within effect
    // This is a common pattern to avoid warnings when state updates are not directly tied to external system synchronization
    requestAnimationFrame(() => setStarPositions(newStarPositions));
  }, []); // Run once on mount

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slotSymbols = ['🍒', '🍋', '🍊', '🍇', '💎', '⭐', '7️⃣', '👑'];
  
  const games = [
    {
      id: 1,
      name: 'Diamond Fortune',
      image: '💎',
      rtp: '96.5%',
      maxWin: '5000x',
      type: 'Slot',
      hot: true,
      gradient: 'from-blue-600 via-cyan-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Golden Crown',
      image: '👑',
      rtp: '97.2%',
      maxWin: '10000x',
      type: 'Slot',
      hot: true,
      gradient: 'from-yellow-600 via-amber-500 to-yellow-600'
    },
    {
      id: 3,
      name: 'Lucky Seven',
      image: '7️⃣',
      rtp: '95.8%',
      maxWin: '2500x',
      type: 'Slot',
      hot: false,
      gradient: 'from-red-600 via-pink-500 to-red-600'
    },
    {
      id: 4,
      name: 'Fruit Blast',
      image: '🍒',
      rtp: '96.0%',
      maxWin: '3000x',
      type: 'Slot',
      hot: false,
      gradient: 'from-green-600 via-emerald-500 to-green-600'
    },
    {
      id: 5,
      name: 'Star Mega',
      image: '⭐',
      rtp: '97.5%',
      maxWin: '15000x',
      type: 'Slot',
      hot: true,
      gradient: 'from-purple-600 via-fuchsia-500 to-purple-600'
    },
    {
      id: 6,
      name: 'Gem Mania',
      image: '💠',
      rtp: '96.8%',
      maxWin: '8000x',
      type: 'Slot',
      hot: false,
      gradient: 'from-indigo-600 via-violet-500 to-indigo-600'
    }
  ];

  const winners = [
    { name: 'Player***123', amount: 'Rp 45,000,000', game: 'Diamond Fortune', time: '2 mins ago' },
    { name: 'Lucky***789', amount: 'Rp 28,500,000', game: 'Golden Crown', time: '5 mins ago' },
    { name: 'Mega***456', amount: 'Rp 67,800,000', game: 'Star Mega', time: '8 mins ago' },
    { name: 'King***999', amount: 'Rp 15,200,000', game: 'Lucky Seven', time: '12 mins ago' }
  ];

  const handleSpin = () => {
    if (balance < betAmount) {
      alert('Insufficient balance! Please add more credits.');
      return;
    }

    setIsSpinning(true);
    setBalance(balance - betAmount);
    
    const spinInterval = setInterval(() => {
      setSlots(slotSymbols.sort(() => Math.random() - 0.5).slice(0, 3));
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);
      const finalSlots = slotSymbols.sort(() => Math.random() - 0.5).slice(0, 3);
      setSlots(finalSlots);
      setIsSpinning(false);

      // Check win
      if (finalSlots[0] === finalSlots[1] && finalSlots[1] === finalSlots[2]) {
        const winAmount = betAmount * 10;
        setBalance(prev => prev + winAmount);
        setLastWin(winAmount);
        setTotalWins(prev => prev + winAmount);
        alert(`🎉 JACKPOT! You won Rp ${winAmount.toLocaleString('id-ID')}!`);
      } else if (finalSlots[0] === finalSlots[1] || finalSlots[1] === finalSlots[2]) {
        const winAmount = betAmount * 2;
        setBalance(prev => prev + winAmount);
        setLastWin(winAmount);
        setTotalWins(prev => prev + winAmount);
      } else {
        setLastWin(0);
      }
    }, 2000);
  };

  const handleLogin = () => {
    if (email && password) {
      setCurrentPage('casino');
    }
  };

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-purple-900/20"></div>
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ transform: `translateY(-${scrollY * 0.3}px)` }}
          ></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          
          {/* Animated Stars */}
          {starPositions.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
              }}
            ></div>
          ))}
        </div>

        {/* Premium Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-yellow-500/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center animate-pulse">
                  <Crown className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-2xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    ROYAL SLOTS
                  </span>
                  <div className="text-xs text-gray-400 font-semibold">Premium Casino Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <a href="#games" className="hidden md:block text-gray-300 hover:text-yellow-400 transition-colors font-semibold">Games</a>
                <a href="#winners" className="hidden md:block text-gray-300 hover:text-yellow-400 transition-colors font-semibold">Winners</a>
                <button
                  onClick={() => setCurrentPage('login')}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-full font-black transition-all duration-300 shadow-lg shadow-yellow-500/50 hover:scale-105"
                >
                  PLAY NOW
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-6xl mx-auto">
              {/* Jackpot Ticker */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-600/20 to-red-600/20 backdrop-blur-sm border-2 border-yellow-500/30 rounded-full mb-8 shadow-2xl shadow-yellow-500/20 animate-pulse">
                <Trophy className="w-6 h-6 text-yellow-400 animate-bounce" />
                <span className="text-yellow-300 font-black text-lg">PROGRESSIVE JACKPOT:</span>
                <span className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Rp 2,547,893,000
                </span>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent inline-block">
                  WIN BIG
                </span>
                <br />
                <span className="text-6xl md:text-7xl text-white">Every Spin!</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-semibold">
                Bergabunglah dengan 100,000+ pemain yang sudah meraih jutaan rupiah setiap hari. RTP hingga 97.5% dan bonus fantastis menanti Anda!
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button
                  onClick={() => setCurrentPage('login')}
                  className="group px-12 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-2xl font-black text-2xl flex items-center justify-center gap-4 transition-all duration-300 shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/70 hover:scale-110"
                >
                  <Play className="w-8 h-8" />
                  START PLAYING
                  <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-12 py-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl font-black text-2xl transition-all duration-300 hover:scale-105">
                  CLAIM BONUS
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-110 transition-transform">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <div className="font-black text-lg">100% Secure</div>
                </div>
                <div className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-110 transition-transform">
                  <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <div className="font-black text-lg">Instant Payout</div>
                </div>
                <div className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-110 transition-transform">
                  <Gift className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <div className="font-black text-lg">Daily Bonus</div>
                </div>
                <div className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-110 transition-transform">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <div className="font-black text-lg">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative py-16 px-6 border-y border-yellow-500/20 bg-gradient-to-r from-yellow-900/10 via-transparent to-purple-900/10">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  100K+
                </div>
                <div className="text-gray-400 font-bold text-lg">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  97.5%
                </div>
                <div className="text-gray-400 font-bold text-lg">Max RTP</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  15,000x
                </div>
                <div className="text-gray-400 font-bold text-lg">Max Multiplier</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-400 font-bold text-lg">Non-Stop Gaming</div>
              </div>
            </div>
          </div>
        </div>

        {/* Games Section */}
        <div id="games" className="relative py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-3 bg-yellow-600/20 border border-yellow-500/30 rounded-full mb-6">
                <span className="text-yellow-300 font-black text-lg flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  HOT GAMES
                </span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Premium</span> Slot Games
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-semibold">
                Pilih dari koleksi game premium kami dengan RTP tertinggi di industri
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="group relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
                >
                  {game.hot && (
                    <div className="absolute -top-4 right-6">
                      <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-sm font-black shadow-lg animate-pulse flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        HOT
                      </div>
                    </div>
                  )}

                  <div className={`w-24 h-24 bg-gradient-to-br ${game.gradient} rounded-3xl mb-6 flex items-center justify-center text-5xl group-hover:rotate-12 transition-transform duration-500 shadow-2xl mx-auto`}>
                    {game.image}
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-center group-hover:text-yellow-400 transition-colors">{game.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-sm text-gray-400 mb-1">RTP</div>
                      <div className="text-xl font-black text-green-400">{game.rtp}</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-sm text-gray-400 mb-1">Max Win</div>
                      <div className="text-xl font-black text-yellow-400">{game.maxWin}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentPage('login')}
                    className={`w-full py-4 bg-gradient-to-r ${game.gradient} hover:shadow-2xl hover:shadow-yellow-500/50 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                  >
                    <Play className="w-6 h-6" />
                    PLAY NOW
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Winners Section */}
        <div id="winners" className="relative py-24 px-6 bg-gradient-to-b from-yellow-900/10 to-transparent border-y border-yellow-500/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Latest</span> Big Winners
              </h2>
              <p className="text-2xl text-gray-400 font-semibold">Join mereka yang sudah menang hari ini!</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {winners.map((winner, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl font-black shadow-lg">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-black text-xl">{winner.name}</div>
                        <div className="text-gray-400">{winner.game}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {winner.amount}
                      </div>
                      <div className="text-sm text-gray-400">{winner.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-r from-yellow-600 to-red-600 rounded-3xl p-16 text-center shadow-2xl shadow-yellow-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <Crown className="w-20 h-20 mx-auto mb-6 text-yellow-300 animate-bounce" />
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  Ready to Win Big?
                </h2>
                <p className="text-2xl mb-10 opacity-90 font-semibold">
                  Dapatkan bonus 200% untuk member baru + 100 free spins!
                </p>
                <button
                  onClick={() => setCurrentPage('login')}
                  className="px-16 py-6 bg-white text-orange-600 hover:bg-gray-100 rounded-2xl font-black text-2xl transition-all duration-300 hover:scale-110 shadow-2xl inline-flex items-center gap-4"
                >
                  <Rocket className="w-8 h-8" />
                  JOIN NOW & CLAIM BONUS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative border-t border-yellow-500/20 py-12 px-6 bg-black/80">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="w-6 h-6 text-yellow-400" />
                  <span className="font-black text-xl">ROYAL SLOTS</span>
                </div>
                <p className="text-gray-400 text-sm">Premium casino gaming experience with the highest RTP in the industry.</p>
              </div>
              <div>
                <h4 className="font-black mb-4 text-yellow-400">Games</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Slot Games</li>
                  <li>Jackpot Games</li>
                  <li>Live Casino</li>
                </ul>
              </div>
              <div>
                <h4 className="font-black mb-4 text-yellow-400">Support</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Help Center</li>
                  <li>Payment Methods</li>
                  <li>Responsible Gaming</li>
                </ul>
              </div>
              <div>
                <h4 className="font-black mb-4 text-yellow-400">Legal</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>License Info</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-yellow-500/20 pt-8 text-center text-gray-400 text-sm">
              <p className="mb-2">&copy; 2024 Royal Slots. All rights reserved.</p>
              <p className="text-xs">18+ only. Please gamble responsibly.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-black to-purple-900 flex items-center justify-center px-6">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative bg-white/5 backdrop-blur-2xl border-2 border-yellow-500/30 rounded-3xl p-10 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
              <Crown className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black text-white mb-3">Member Login</h2>
            <p className="text-gray-400 font-semibold">Start your winning journey</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-black text-gray-300 mb-3">Email / Username</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-yellow-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all font-semibold"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-gray-300 mb-3">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border-2 border-yellow-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all font-semibold"
                  placeholder="••••••••"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-xl font-black text-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Play className="w-6 h-6" />
              START PLAYING
            </button>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-yellow-400 hover:text-yellow-300 text-sm font-bold">Forgot Password?</a>
          </div>

          <button
            onClick={() => setCurrentPage('landing')}
            className="mt-8 w-full text-center text-gray-400 hover:text-white transition-colors font-bold"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-black to-purple-900 text-white">
      <nav className="border-b border-yellow-500/30 backdrop-blur-xl bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black">ROYAL SLOTS</span>
                <div className="text-xs text-yellow-400">Premium Gaming</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-red-600/20 border border-yellow-500/30 rounded-full">
                <Wallet className="w-5 h-5 text-yellow-400" />
                <span className="font-black text-lg">Rp {balance.toLocaleString('id-ID')}</span>
              </div>
              
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all">
                <Settings className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => {
                  setCurrentPage('landing');
                  setEmail('');
                  setPassword('');
                }}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-b from-yellow-600/20 to-purple-600/20 backdrop-blur-xl border-2 border-yellow-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  Diamond Fortune
                </h2>
                <button
                  onClick={() => setSoundOn(!soundOn)}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
                >
                  {soundOn ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
                </button>
              </div>

              <div className="bg-gradient-to-b from-black/50 to-black/30 rounded-2xl p-8 mb-8 border-4 border-yellow-500/50 shadow-inner">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {slots.map((symbol, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-8 flex items-center justify-center border-2 border-yellow-500/30 ${
                        isSpinning ? 'animate-bounce' : ''
                      }`}
                    >
                      <div className="text-8xl">{symbol}</div>
                    </div>
                  ))}
                </div>

                {lastWin > 0 && !isSpinning && (
                  <div className="text-center mb-6 animate-pulse">
                    <div className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      🎉 WIN: Rp {lastWin.toLocaleString('id-ID')} 🎉
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => setBetAmount(Math.max(50000, betAmount - 50000))}
                    className="py-4 bg-white/10 hover:bg-white/20 rounded-xl font-black text-xl transition-all"
                    disabled={isSpinning}
                  >
                    - 50K
                  </button>
                  <div className="py-4 bg-gradient-to-r from-yellow-600/30 to-red-600/30 border border-yellow-500/50 rounded-xl font-black text-2xl flex items-center justify-center">
                    Rp {betAmount.toLocaleString('id-ID')}
                  </div>
                  <button
                    onClick={() => setBetAmount(Math.min(1000000, betAmount + 50000))}
                    className="py-4 bg-white/10 hover:bg-white/20 rounded-xl font-black text-xl transition-all"
                    disabled={isSpinning}
                  >
                    + 50K
                  </button>
                </div>

                <button
                  onClick={handleSpin}
                  disabled={isSpinning || balance < betAmount}
                  className={`w-full py-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-2xl font-black text-3xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-4 ${
                    isSpinning || balance < betAmount ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {isSpinning ? (
                    <>
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      SPINNING...
                    </>
                  ) : (
                    <>
                      <Play className="w-8 h-8" />
                      SPIN NOW
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-400 mb-1">RTP</div>
                  <div className="text-2xl font-black text-green-400">96.5%</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-400 mb-1">Max Win</div>
                  <div className="text-2xl font-black text-yellow-400">5000x</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-400 mb-1">Lines</div>
                  <div className="text-2xl font-black text-purple-400">25</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Your Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Wins:</span>
                  <span className="font-black text-green-400">Rp {totalWins.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Balance:</span>
                  <span className="font-black text-yellow-400">Rp {balance.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Level:</span>
                  <span className="font-black text-purple-400">Gold Member</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-black mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <Coins className="w-5 h-5" />
                  Add Credits
                </button>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <Gift className="w-5 h-5" />
                  Claim Bonus
                </button>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <History className="w-5 h-5" />
                  Game History
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-black mb-6">Other Hot Games</h3>
              <div className="space-y-3">
                {games.slice(1, 4).map((game) => (
                  <button
                    key={game.id}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all flex items-center gap-3"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${game.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                      {game.image}
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-bold">{game.name}</div>
                      <div className="text-xs text-gray-400">{game.rtp} RTP</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}