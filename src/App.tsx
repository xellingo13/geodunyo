import { useState, useMemo, ReactNode, useEffect } from 'react';
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
  Info,
  Plus,
  QrCode,
  Download
} from 'lucide-react';
import { Language, Translation, GeoItem } from './types';
import { data as initialData, translations } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('uz');
  const [activeTab, setActiveTab] = useState<'home' | 'continents' | 'oceans' | 'countries' | 'videos'>('home');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  
  // Local storage management
  const [customData, setCustomData] = useState<{
    continents: GeoItem[];
    oceans: GeoItem[];
    countries: GeoItem[];
  }>(() => {
    const saved = localStorage.getItem('geo_custom_data');
    return saved ? JSON.parse(saved) : { continents: [], oceans: [], countries: [] };
  });

  useEffect(() => {
    localStorage.setItem('geo_custom_data', JSON.stringify(customData));
  }, [customData]);

  const mergedData = useMemo(() => ({
    continents: [...initialData.continents, ...customData.continents],
    oceans: [...initialData.oceans, ...customData.oceans],
    countries: [...initialData.countries, ...customData.countries],
    videos: initialData.videos
  }), [customData]);

  const t: Translation = translations[lang];

  const currentItem = useMemo(() => {
    if (!selectedItem) return null;
    const all = [...mergedData.continents, ...mergedData.oceans, ...mergedData.countries];
    return all.find(item => item.id === selectedItem);
  }, [selectedItem, mergedData]);

  const handleAddItem = (newItem: GeoItem, category: 'continents' | 'oceans' | 'countries') => {
    setCustomData(prev => ({
      ...prev,
      [category]: [...prev[category], newItem]
    }));
    setIsAddModalOpen(false);
  };

  const renderAddModal = () => {
    if (!isAddModalOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/40 backdrop-blur-md">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white w-full max-w-2xl rounded-[2.5rem] p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        >
          <h2 className="text-2xl font-black text-blue-900 mb-6">{t.addItem}</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const category = formData.get('category') as any;
            const item: GeoItem = {
              id: Math.random().toString(36).substr(2, 9),
              name: {
                uz: formData.get('name_uz') as string,
                kaa: formData.get('name_kaa') as string,
                ru: formData.get('name_ru') as string,
                en: formData.get('name_en') as string,
              },
              description: {
                uz: formData.get('desc_uz') as string,
                kaa: formData.get('desc_kaa') as string,
                ru: formData.get('desc_ru') as string,
                en: formData.get('desc_en') as string,
              },
              facts: {
                uz: (formData.get('facts_uz') as string).split('\n'),
                kaa: (formData.get('facts_kaa') as string).split('\n'),
                ru: (formData.get('facts_ru') as string).split('\n'),
                en: (formData.get('facts_en') as string).split('\n'),
              },
              image: formData.get('image') as string || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
              color: "#3b82f6"
            };
            handleAddItem(item, category);
          }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <select name="category" className="p-4 bg-blue-50 rounded-2xl font-bold text-blue-900 border-2 border-blue-100 outline-none">
                 <option value="continents">{t.continents}</option>
                 <option value="oceans">{t.oceans}</option>
                 <option value="countries">{t.countries}</option>
               </select>
               <input name="image" placeholder={t.imageLabel} className="p-4 bg-blue-50 rounded-2xl font-bold border-2 border-blue-100 outline-none" />
            </div>

            <div className="space-y-4">
              <div className="flex gap-2 items-center text-xs font-black text-blue-300 uppercase tracking-widest px-2">
                <Languages size={14} />
                {t.nameLabel} (UZ / KAA / RU / EN)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input required name="name_uz" placeholder="Uzbek" className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 outline-none" />
                <input required name="name_kaa" placeholder="Qaraqalpaq" className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 outline-none" />
                <input required name="name_ru" placeholder="Russian" className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 outline-none" />
                <input required name="name_en" placeholder="English" className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 outline-none" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-black text-blue-300 uppercase tracking-widest px-2">{t.descLabel}</div>
              <textarea required name="desc_uz" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 outline-none h-24" placeholder="Uzbek..."></textarea>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-black text-blue-300 uppercase tracking-widest px-2">{t.factLabel} (UZ)</div>
              <textarea required name="facts_uz" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 outline-none h-24" placeholder="Fakt 1&#10;Fakt 2..."></textarea>
              {/* Note: Simplified for the demo, normally we'd have facts in all languages in the form too */}
              <input type="hidden" name="facts_kaa" value="Sample fact" />
              <input type="hidden" name="facts_ru" value="Sample fact" />
              <input type="hidden" name="facts_en" value="Sample fact" />
              <input type="hidden" name="desc_kaa" value="Sample desc" />
              <input type="hidden" name="desc_ru" value="Sample desc" />
              <input type="hidden" name="desc_en" value="Sample desc" />
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={() => setIsAddModalOpen(false)}
                className="flex-1 py-4 bg-gray-100 text-gray-500 font-black rounded-2xl uppercase tracking-widest"
              >
                {t.cancel}
              </button>
              <button 
                type="submit" 
                className="flex-1 py-4 bg-brand-green text-white font-black rounded-2xl shadow-lg uppercase tracking-widest"
              >
                {t.save}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  };

  const renderQRModal = () => {
    const appUrl = process.env.APP_URL || window.location.origin;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(appUrl)}`;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/60 backdrop-blur-md">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl text-center"
        >
          <h2 className="text-2xl font-black text-blue-900 mb-2">{t.qrTitle}</h2>
          <p className="text-xs text-slate-500 mb-8 font-bold leading-relaxed">{t.qrDesc}</p>
          
          <div className="bg-blue-50 p-6 rounded-[2rem] mb-8 border-4 border-dashed border-blue-100 inline-block">
            <img src={qrUrl} alt="QR Code" className="w-48 h-48 mx-auto mix-blend-multiply" />
          </div>

          <div className="flex flex-col gap-3">
             <a 
               href={qrUrl} 
               download="qrcode.png"
               target="_blank"
               rel="noreferrer"
               className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-2 uppercase tracking-widest hover:bg-blue-700 transition-colors"
             >
               <Download size={20} />
               Yuklab olish
             </a>
             <button 
               onClick={() => setIsQRModalOpen(false)}
               className="w-full py-4 bg-gray-100 text-gray-500 font-black rounded-2xl uppercase tracking-widest"
             >
               {t.back}
             </button>
          </div>
        </motion.div>
      </div>
    );
  };

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
            <button 
              onClick={() => setIsQRModalOpen(true)}
              className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
              title={t.shareQR}
            >
              <QrCode size={20} />
            </button>
            <div className="w-[1px] h-4 bg-blue-100 mx-1" />
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

            {activeTab !== 'home' && activeTab !== 'videos' && (
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="w-full p-6 bg-white border-4 border-dashed border-blue-100 rounded-[2rem] text-blue-400 font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
                <Plus size={20} />
                {t.addItem}
              </button>
            )}
            
            <div className="bg-brand-orange rounded-[2.5rem] p-6 shadow-lg text-white">
              <p className="text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Kun fakti</p>
              <p className="text-sm font-medium leading-relaxed italic">
                "{t.title === "Dunyo bo'ylab sayohat" ? "Tinch okeani Yer sharining deyarli uchdan bir qismini egallaydi!" : mergedData.continents[0].facts[lang][0]}"
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
                  {mergedData.videos.map((video) => (
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
                  {mergedData[activeTab as 'continents' | 'oceans' | 'countries'].map(item => (
                    <motion.div
                      layoutId={item.id}
                      key={item.id}
                      onClick={() => setSelectedItem(item.id)}
                      className="group cursor-pointer bg-white rounded-[2rem] p-4 shadow-md hover:shadow-xl transition-all border-b-4 border-gray-50 flex items-center gap-4"
                    >
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
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
                <StatCard value={`${mergedData.continents.length}`} label={t.continents} color="bg-white/10" />
                <StatCard value={`${mergedData.oceans.length}`} label={t.oceans} color="bg-white/10" />
                <StatCard value={`${mergedData.countries.length}`} label={t.countries} color="bg-white/10" />
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

      <AnimatePresence>
        {isAddModalOpen && renderAddModal()}
      </AnimatePresence>

      <AnimatePresence>
        {isQRModalOpen && renderQRModal()}
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

