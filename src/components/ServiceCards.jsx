import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01', title: 'Chronic Kidney Disease', subtitle: 'CKD Management',
    desc: 'Comprehensive diagnosis and long-term management of all CKD stages with personalized, evidence-based treatment plans.',
    tag: 'Most Common', from: '#710908', to: '#A35E5D',
    icon: (
      <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
        <defs>
          <radialGradient id="s1a" cx="38%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FDD5B5" /><stop offset="40%" stopColor="#FC9F5E" /><stop offset="100%" stopColor="#710908" />
          </radialGradient>
          <radialGradient id="s1b" cx="35%" cy="28%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" /><stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id="s1f"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#710908" floodOpacity="0.3" /></filter>
        </defs>
        <g filter="url(#s1f)">
          <path d="M48 10 C28 10, 13 26, 12 44 C11 62, 18 76, 28 84 C35 90, 42 93, 48 93 C54 93, 61 90, 68 84 C78 76, 85 62, 84 44 C83 26, 68 10, 48 10 Z" fill="url(#s1a)" />
        </g>
        <path d="M48 10 C28 10, 13 26, 12 44 C11 62, 18 76, 28 84 C35 90, 42 93, 48 93 C54 93, 61 90, 68 84 C78 76, 85 62, 84 44 C83 26, 68 10, 48 10 Z" fill="url(#s1b)" />
        <ellipse cx="34" cy="26" rx="10" ry="6" fill="rgba(255,255,255,0.45)" transform="rotate(-20 34 26)" />
        <ellipse cx="30" cy="23" rx="5" ry="3" fill="rgba(255,255,255,0.65)" transform="rotate(-20 30 23)" />
        <path d="M38 52 Q48 46 58 52" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M36 60 Q48 53 60 60" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M48 90 C47 95, 47 97, 47.5 99" stroke="rgba(163,94,93,0.6)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02', title: 'Dialysis Services', subtitle: 'Hemodialysis & Peritoneal',
    desc: 'State-of-the-art dialysis center with latest machines, ensuring safe, comfortable, and effective treatment sessions.',
    tag: 'Advanced Tech', from: '#FB6603', to: '#FC9F5E',
    icon: (
      <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="s2a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FC9F5E" /><stop offset="100%" stopColor="#FB6603" />
          </linearGradient>
          <filter id="s2f"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#FB6603" floodOpacity="0.3" /></filter>
        </defs>
        <g filter="url(#s2f)"><rect x="10" y="22" width="76" height="52" rx="12" fill="url(#s2a)" /></g>
        <rect x="18" y="30" width="60" height="36" rx="8" fill="rgba(255,255,255,0.18)" />
        <rect x="22" y="34" width="36" height="24" rx="5" fill="rgba(255,255,255,0.25)" />
        <rect x="25" y="37" width="20" height="2.5" rx="1" fill="rgba(255,255,255,0.7)" />
        <rect x="25" y="42" width="28" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
        <rect x="25" y="47" width="24" height="2" rx="1" fill="rgba(255,255,255,0.35)" />
        <circle cx="68" cy="40" r="5" fill="rgba(255,255,255,0.5)" />
        <circle cx="68" cy="52" r="5" fill="rgba(255,255,255,0.35)" />
        <circle cx="68" cy="64" r="5" fill="rgba(255,255,255,0.25)" />
        <path d="M30 74 L30 86 M48 74 L48 86 M66 74 L66 86" stroke="rgba(251,102,3,0.45)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M22 86 L74 86" stroke="rgba(251,102,3,0.35)" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="10" y="22" width="76" height="14" rx="12" fill="rgba(255,255,255,0.12)" />
      </svg>
    ),
  },
  {
    num: '03', title: 'Kidney Stones', subtitle: 'Diagnosis & Treatment',
    desc: 'Advanced imaging and minimally invasive procedures for kidney stone removal with long-term prevention strategies.',
    tag: 'Pain-Free', from: '#A35E5D', to: '#DBAB9D',
    icon: (
      <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
        <defs>
          <radialGradient id="s3a" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FDD5B5" stopOpacity="0.9" /><stop offset="50%" stopColor="#DBAB9D" /><stop offset="100%" stopColor="#A35E5D" />
          </radialGradient>
          <radialGradient id="s3b" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FC9F5E" stopOpacity="0.85" /><stop offset="100%" stopColor="#710908" />
          </radialGradient>
          <filter id="s3f"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#A35E5D" floodOpacity="0.3" /></filter>
        </defs>
        <g filter="url(#s3f)">
          <path d="M46 14 C36 14, 24 22, 22 34 C20 46, 25 58, 32 66 C37 72, 42 75, 46 75 C50 75, 55 72, 60 66 C67 58, 72 46, 70 34 C68 22, 56 14, 46 14 Z" fill="url(#s3a)" opacity="0.85" />
        </g>
        <g filter="url(#s3f)">
          <path d="M68 18 C62 18, 55 23, 54 30 C53 37, 57 44, 62 49 C65 52, 68 53, 70 52 C73 51, 76 46, 76 40 C77 31, 74 18, 68 18 Z" fill="url(#s3b)" opacity="0.9" />
        </g>
        <ellipse cx="40" cy="24" rx="7" ry="4" fill="rgba(255,255,255,0.4)" transform="rotate(-15 40 24)" />
        <ellipse cx="64" cy="22" rx="4" ry="2.5" fill="rgba(255,255,255,0.45)" transform="rotate(-10 64 22)" />
        <circle cx="22" cy="58" r="6" fill="url(#s3a)" opacity="0.7" />
        <circle cx="20" cy="56" r="2" fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
  },
]

export default function ServiceCards() {
  return (
    <section id="services" className="py-20 sm:py-28 px-5 sm:px-6 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(251,102,3,0.06), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <div className="section-label justify-center mb-3">Our Services</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a0a0a]">
            Specialized <span className="gradient-text">Treatments</span>
          </h2>
          <p className="text-[#4a0605]/55 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Comprehensive kidney care under one roof — from diagnosis to long-term management.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map(({ num, title, subtitle, desc, tag, from, to, icon }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col gap-5 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 20% 10%, ${from}0d, transparent 65%)` }} />

              <div className="flex items-start justify-between relative z-10">
                <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 drop-shadow-lg">{icon}</div>
                <div className="flex flex-col items-end gap-2">
                  <span className="font-display text-4xl font-bold leading-none"
                    style={{ color: `${from}18`, WebkitTextStroke: `1px ${from}30` }}>{num}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: `${from}12`, color: from }}>{tag}</span>
                </div>
              </div>

              <div className="relative z-10 flex-1">
                <div className="text-[11px] font-bold tracking-widest uppercase mb-1.5" style={{ color: to }}>{subtitle}</div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1a0a0a] mb-3 leading-tight">{title}</h3>
                <p className="text-sm text-[#4a0605]/58 leading-relaxed">{desc}</p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[#710908]/08 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: from }}>Learn More</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{ background: `${from}12` }}>
                  <ArrowUpRight size={15} style={{ color: from }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
