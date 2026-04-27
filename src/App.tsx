import { useState, useMemo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe2, 
  Map as MapIcon, 
  Waves, 
  Flag, 
  PlayCircle, 
  Languages, 
  ChevronRight,
  ArrowLeft,
  Info
} from 'lucide-react';
import { Language, Translation } from './types';
import { data, translations } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [activeTab, setActiveTab] = useState<'home' | 'continents' | 'oceans' | 'countries' | 'videos'>('home');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const t: Translation = translations[lang];

  const currentItem = useMemo(() => {
    if (!selectedItem) return null;
    const all = [...data.continents, ...data.oceans, ...data.countries];
    return all.find(item => item.id === selectedItem);
  }, [selectedItem]);

  const renderDetail = () => {
    if (!currentItem) return null;
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      >
        <motion.div 
          onClick={() => setSelectedItem(null)}
          className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm"
        />
        <motion.div 
          layoutId={currentItem.id}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl border-b-8 border-blue-100 flex flex-col md:flex-row"
        >
          <button 
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform border border-blue-50"
          >
            <ArrowLeft className="text-blue-900" size={24} />
          </button>

          <div className="w-full md:w-1/2 h-64 md:h-auto sticky top-0 md:relative">
            <img 
              src={currentItem.image} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col gap-6">
            <div>
              <h2 className="text-4xl font-black text-blue-900 mb-4">{currentItem.name[lang]}</h2>
              <p className="text-slate-500 leading-relaxed font-medium">
                {currentItem.description[lang]}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-blue-50 pb-2">
                <Info size={16} className="text-blue-600" />
                <h3 className="text-sm font-black text-blue-900 uppercase tracking-widest">{t.interestingFacts}</h3>
              </div>
              <div className="grid gap-3">
                {currentItem.facts[lang].map((fact, i) => (
                  <div 
                    key={i} 
                    className="p-4 bg-blue-50 rounded-2xl text-sm font-bold text-blue-800 leading-relaxed border-l-4 border-blue-200"
                  >
                    {fact}
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedItem(null)}
              className="mt-4 w-full py-4 bg-slate-900 text-white font-black rounded-2xl uppercase tracking-widest hover:bg-slate-800 transition-colors"
            >
              {t.back}
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-blue-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b-4 border-blue-100 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              setActiveTab('home');
              setSelectedItem(null);
            }}
          >
            <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Globe2 className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-black text-blue-900 tracking-tight leading-none">GEODUNYO</h1>
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hidden sm:block">Bolalar uchun interaktiv geografiya</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-blue-100 shadow-sm">
            {(['uz', 'kaa', 'ru', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  lang === l 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-[1280px] mx-auto pt-28 pb-12 px-6">
        <div className="grid grid-cols-12 gap-6 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border-b-4 border-blue-200">
              <h2 className="text-sm font-black text-blue-900 mb-6 uppercase tracking-widest border-b-2 border-blue-50 pb-2">Kashfiyotlar</h2>
              <nav className="space-y-4">
                <SideButton 
                  active={activeTab === 'continents'}
                  icon="🌍" 
                  label={t.continents} 
                  onClick={() => setActiveTab('continents')} 
                  color="green"
                />
                <SideButton 
                  active={activeTab === 'oceans'}
                  icon="🌊" 
                  label={t.oceans} 
                  onClick={() => setActiveTab('oceans')} 
                  color="blue"
                />
                <SideButton 
                  active={activeTab === 'countries'}
                  icon="🚩" 
                  label={t.countries} 
                  onClick={() => setActiveTab('countries')} 
                  color="yellow"
                />
                <SideButton 
                  active={activeTab === 'videos'}
                  icon="🎬" 
                  label={t.videos} 
                  onClick={() => setActiveTab('videos')} 
                  color="rose"
                />
              </nav>
            </div>
            
            <div className="bg-brand-orange rounded-[2.5rem] p-6 shadow-lg text-white">
              <p className="text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Kun fakti</p>
              <p className="text-sm font-medium leading-relaxed italic">
                "{t.title === "Dunyo bo'ylab sayohat" ? "Tinch okeani Yer sharining deyarli uchdan bir qismini egallaydi!" : data.continents[0].facts[lang][0]}"
              </p>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              {activeTab === 'home' ? (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl border-b-4 border-gray-100 text-center"
                >
                  <div className="relative inline-block mb-8">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                      className="absolute -inset-8 text-blue-100 opacity-50"
                    >
                      <Globe2 size={160} />
                    </motion.div>
                    <Globe2 size={80} className="text-blue-600 relative z-10" />
                  </div>
                  <h2 className="text-4xl font-black text-blue-900 mb-4">{t.title}</h2>
                  <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">{t.subtitle}</p>
                  <button 
                    onClick={() => setActiveTab('continents')}
                    className="px-8 py-4 bg-brand-yellow text-brand-orange font-black rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform uppercase tracking-wider"
                  >
                    Boshlash →
                  </button>
                </motion.div>
              ) : activeTab === 'videos' ? (
                <div key="videos" className="flex flex-col gap-6">
                  {data.videos.map((video) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={video.id} 
                      className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border-b-4 border-gray-100"
                    >
                      <div className="aspect-video">
                        <iframe 
                          src={video.videoUrl} 
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-8 text-left">
                        <h3 className="text-xl font-black text-blue-900 mb-2">{video.title[lang]}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{video.description[lang]}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {data[activeTab as 'continents' | 'oceans' | 'countries'].map(item => (
                    <motion.div
                      layoutId={item.id}
                      key={item.id}
                      onClick={() => setSelectedItem(item.id)}
                      className="group cursor-pointer bg-white rounded-[2rem] p-4 shadow-md hover:shadow-xl transition-all border-b-4 border-gray-50 flex items-center gap-4"
                    >
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-black text-blue-900 text-sm tracking-tight">{item.name[lang]}</h3>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Stats Bar */}
          <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <div className="bg-blue-600 rounded-[2.5rem] p-6 text-white shadow-xl flex flex-col h-full">
              <h3 className="text-xs font-black mb-6 uppercase tracking-widest opacity-80 border-b border-white/20 pb-2">Dunyo Raqamlarda</h3>
              <div className="space-y-4">
                <StatCard value={`${data.continents.length}`} label={t.continents} color="bg-white/10" />
                <StatCard value={`${data.oceans.length}`} label={t.oceans} color="bg-white/10" />
                <StatCard value={`${data.countries.length}+`} label={t.countries} color="bg-white/10" />
              </div>
              <div className="mt-auto pt-8">
                <div className="bg-white p-3 rounded-2xl shadow-inner border-2 border-dashed border-blue-400">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    <div>
                      <p className="text-[8px] font-black text-blue-400 uppercase leading-none">QR Manbasi</p>
                      <p className="text-[10px] font-bold text-blue-800 italic leading-tight">"Geografiya sirlari" darsligidan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 bg-blue-100/50">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-blue-300 uppercase tracking-widest gap-4">
          <p>© 2026 GEODUNYO — Dunyo sirlarini biz bilan kashf et!</p>
          <div className="flex gap-6">
            <span className="hover:text-blue-500 cursor-pointer">Yordam</span>
            <span className="hover:text-blue-500 cursor-pointer">Fikr bildirish</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedItem && renderDetail()}
      </AnimatePresence>
    </div>
  );
}

function SideButton({ active, icon, label, onClick, color }: { active: boolean, icon: string, label: string, onClick: () => void, color: string }) {
  const colors: Record<string, string> = {
    green: 'bg-green-50 border-green-200 text-green-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    rose: 'bg-rose-50 border-rose-200 text-rose-800',
  };
  
  const iconColors: Record<string, string> = {
    green: 'bg-green-400',
    blue: 'bg-blue-400',
    yellow: 'bg-yellow-400',
    rose: 'bg-rose-400',
  };

  return (
    <button
      onClick={onClick}
      className={`w-full p-3 rounded-2xl border-2 flex items-center gap-3 transition-all ${
        active 
          ? colors[color] + ' shadow-inner scale-[0.98]' 
          : 'bg-white border-transparent hover:bg-slate-50 text-slate-600'
      }`}
    >
      <div className={`w-10 h-10 ${iconColors[color]} rounded-xl flex items-center justify-center text-xl shadow-sm text-white`}>
        {icon}
      </div>
      <span className="text-sm font-black uppercase tracking-tight">{label}</span>
    </button>
  );
}

function StatCard({ value, label, color }: { value: string, label: string, color: string }) {
  return (
    <div className={`${color} p-4 rounded-3xl`}>
      <p className="text-3xl font-black">{value}</p>
      <p className="text-[10px] uppercase font-bold opacity-70 tracking-widest">{label}</p>
    </div>
  );
}

