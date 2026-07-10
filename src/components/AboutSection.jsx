import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, BadgeCheck } from 'lucide-react'

const highlights = [
  { text: 'NABH Accredited Facility', detail: 'National quality standards' },
  { text: 'Latest Diagnostic Equipment', detail: 'State-of-the-art technology' },
  { text: 'Personalized Treatment Plans', detail: 'Tailored to each patient' },
  { text: 'Multilingual Patient Support', detail: 'Hindi, English, Tamil & more' },
]

const milestones = [
  { year: '2009', label: 'Founded' },
  { year: '2014', label: 'NABH Certified' },
  { year: '2018', label: 'Dialysis Center' },
  { year: '2023', label: '5000+ Patients' },
]

function ClinicSVG() {
  return (
    <svg viewBox="0 0 520 390" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="cWall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F4" /><stop offset="100%" stopColor="#DBAB9D" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="cFloor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DBAB9D" stopOpacity="0.18" /><stop offset="100%" stopColor="#A35E5D" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="cDesk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FC9F5E" stopOpacity="0.55" /><stop offset="100%" stopColor="#710908" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="cAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#710908" stopOpacity="0.6" /><stop offset="100%" stopColor="#FB6603" stopOpacity="0.4" />
        </linearGradient>
        <filter id="cShadow"><feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#710908" floodOpacity="0.1" /></filter>
      </defs>
      <rect width="520" height="390" fill="url(#cWall)" rx="20" />
      <rect x="0" y="0" width="520" height="6" rx="3" fill="url(#cAccent)" />
      <rect x="0" y="0" width="520" height="200" fill="rgba(255,248,244,0.45)" />
      <line x1="0" y1="200" x2="520" y2="200" stroke="rgba(163,94,93,0.12)" strokeWidth="1" />
      <rect x="0" y="280" width="520" height="110" fill="url(#cFloor)" />
      <line x1="0" y1="280" x2="520" y2="280" stroke="rgba(163,94,93,0.12)" strokeWidth="1" />
      {[0,1,2,3,4,5].map(i => <line key={i} x1={i*90} y1="280" x2={i*90} y2="390" stroke="rgba(163,94,93,0.06)" strokeWidth="1" />)}
      {[0,1,2].map(i => <line key={i} x1="0" y1={280+i*37} x2="520" y2={280+i*37} stroke="rgba(163,94,93,0.06)" strokeWidth="1" />)}
      <rect x="340" y="28" width="148" height="155" rx="10" fill="rgba(251,102,3,0.07)" stroke="rgba(251,102,3,0.18)" strokeWidth="1.5" />
      <line x1="414" y1="28" x2="414" y2="183" stroke="rgba(251,102,3,0.14)" strokeWidth="1" />
      <line x1="340" y1="106" x2="488" y2="106" stroke="rgba(251,102,3,0.14)" strokeWidth="1" />
      <rect x="340" y="28" width="148" height="10" rx="5" fill="rgba(255,255,255,0.5)" />
      <path d="M340 28 L180 280" stroke="rgba(251,102,3,0.035)" strokeWidth="50" />
      <path d="M488 28 L520 280" stroke="rgba(251,102,3,0.025)" strokeWidth="35" />
      <circle cx="200" cy="90" r="42" fill="rgba(251,102,3,0.05)" stroke="rgba(251,102,3,0.1)" strokeWidth="1.5" />
      <circle cx="200" cy="90" r="30" fill="rgba(251,102,3,0.04)" stroke="rgba(251,102,3,0.08)" strokeWidth="1" />
      <text x="200" y="96" textAnchor="middle" fill="rgba(113,9,8,0.28)" fontSize="16" fontFamily="Georgia, serif" fontWeight="700">KC</text>
      <g filter="url(#cShadow)">
        <rect x="80" y="215" width="240" height="65" rx="14" fill="url(#cDesk)" />
        <rect x="80" y="210" width="240" height="16" rx="7" fill="rgba(255,255,255,0.38)" />
        <rect x="86" y="228" width="228" height="46" rx="10" fill="rgba(255,255,255,0.12)" />
      </g>
      <g filter="url(#cShadow)">
        <rect x="148" y="168" width="90" height="56" rx="8" fill="rgba(113,9,8,0.14)" stroke="rgba(113,9,8,0.18)" strokeWidth="1" />
        <rect x="154" y="174" width="78" height="42" rx="5" fill="rgba(251,102,3,0.09)" />
        <rect x="188" y="224" width="14" height="12" rx="3" fill="rgba(113,9,8,0.18)" />
        <rect x="160" y="180" width="44" height="3" rx="1.5" fill="rgba(113,9,8,0.22)" />
        <rect x="160" y="187" width="60" height="2" rx="1" fill="rgba(113,9,8,0.13)" />
        <rect x="160" y="193" width="52" height="2" rx="1" fill="rgba(113,9,8,0.1)" />
        <rect x="160" y="199" width="38" height="2" rx="1" fill="rgba(113,9,8,0.08)" />
      </g>
      <rect x="152" y="236" width="82" height="10" rx="3" fill="rgba(255,255,255,0.3)" />
      <rect x="28" y="238" width="22" height="42" rx="5" fill="rgba(163,94,93,0.28)" />
      <ellipse cx="39" cy="232" rx="26" ry="32" fill="rgba(90,130,65,0.32)" />
      <ellipse cx="24" cy="220" rx="16" ry="20" fill="rgba(75,115,55,0.28)" />
      <ellipse cx="54" cy="224" rx="14" ry="18" fill="rgba(85,125,60,0.28)" />
      <rect x="456" y="242" width="20" height="38" rx="5" fill="rgba(163,94,93,0.28)" />
      <ellipse cx="466" cy="236" rx="24" ry="28" fill="rgba(90,130,65,0.32)" />
      <ellipse cx="452" cy="226" rx="14" ry="18" fill="rgba(75,115,55,0.28)" />
      <g filter="url(#cShadow)">
        <rect x="358" y="248" width="56" height="32" rx="10" fill="rgba(219,171,157,0.48)" />
        <rect x="358" y="232" width="56" height="22" rx="8" fill="rgba(219,171,157,0.58)" />
      </g>
      <g filter="url(#cShadow)">
        <rect x="424" y="248" width="56" height="32" rx="10" fill="rgba(219,171,157,0.38)" />
        <rect x="424" y="232" width="56" height="22" rx="8" fill="rgba(219,171,157,0.48)" />
      </g>
      <rect x="200" y="0" width="120" height="10" rx="5" fill="rgba(251,102,3,0.18)" />
      <ellipse cx="260" cy="30" rx="80" ry="30" fill="rgba(251,102,3,0.04)" />
    </svg>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-6 bg-hero overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Clinic visual */}
          <motion.div initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="glass-card rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"><ClinicSVG /></div>

            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-3 sm:-left-5 glass-strong rounded-2xl px-4 py-3 shadow-xl z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #710908, #FB6603)' }}>
                  <BadgeCheck size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#710908] leading-none">NABH</div>
                  <div className="text-[10px] text-[#4a0605]/50 font-medium">Accredited</div>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 glass-card rounded-2xl p-4 sm:p-5">
              <div className="text-xs font-bold text-[#4a0605]/50 uppercase tracking-widest mb-4">Our Journey</div>
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-[#710908]/20 via-[#FB6603]/30 to-[#710908]/20" />
                {milestones.map(({ year, label }) => (
                  <div key={year} className="flex flex-col items-center gap-2 relative z-10">
                    <div className="w-6 h-6 rounded-full border-2 border-[#FB6603] bg-[#FFF8F4] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#FB6603]" />
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold text-[#710908]">{year}</div>
                      <div className="text-[10px] text-[#4a0605]/50 font-medium">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="section-label mb-3">About Our Clinic</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2">A Legacy of</h2>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="gradient-text">Kidney Health</span>
            </h2>
            <p className="text-[#4a0605]/62 leading-relaxed mb-4 text-sm sm:text-base">
              Founded in 2009, Dr. Pavan's Kidney Care Clinic has been at the forefront of nephrology in Vijayawada, Poranki and across Andhra Pradesh. Our state-of-the-art facility combines advanced medical technology with a warm, patient-centered approach.
            </p>
            <p className="text-[#4a0605]/62 leading-relaxed mb-8 text-sm sm:text-base">
              We believe every patient deserves personalized, compassionate care. Our multidisciplinary team works together to provide comprehensive kidney health solutions — from early detection to transplant support.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map(({ text, detail }, i) => (
                <motion.li key={text} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 glass-card rounded-2xl px-4 py-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(113,9,8,0.1), rgba(251,102,3,0.15))' }}>
                    <CheckCircle2 size={16} className="text-[#FB6603]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a0a0a]">{text}</div>
                    <div className="text-xs text-[#4a0605]/50">{detail}</div>
                  </div>
                </motion.li>
              ))}
            </ul>

            <a href="#about" className="btn-primary inline-flex">Learn More <ArrowRight size={15} /></a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
