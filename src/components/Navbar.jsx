import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Doctor', href: '#doctor' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl"
      >
        <div className={`glass-pill rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-xl' : ''}`}>
          <a href="#home" className="relative flex items-center shrink-0 h-9 sm:h-10 w-36 sm:w-[126px]">
            <img src="/logos/logo.png" alt="Dr. Pavan's Kidney Care Clinic" className="absolute left-0 top-1/2 -translate-y-1/2 h-24 sm:h-[84px] w-auto object-contain" />
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = active === id
              return (
                <li key={label}>
                  <a href={href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'text-[#710908]' : 'text-[#4a0605]/60 hover:text-[#710908]'}`}>
                    {isActive && (
                      <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full"
                        style={{ background: 'rgba(113,9,8,0.07)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                    )}
                    <span className="relative z-10">{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <a href="tel:+919876543210" className="hidden md:flex btn-primary text-xs px-5 py-2.5 shrink-0">
            <Phone size={13} /> Call Now
          </a>

          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#710908]"
            style={{ background: 'rgba(113,9,8,0.07)' }}
            onClick={() => setOpen(!open)} aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
              style={{ background: 'rgba(255,253,251,0.97)', backdropFilter: 'blur(40px)', borderLeft: '1px solid rgba(255,255,255,0.8)' }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#710908]/08">
                <div className="flex items-center">
                  <img src="/logos/logo.png" alt="Dr. Pavan's Kidney Care Clinic" className="h-8 w-auto object-contain" />
                </div>
                <button onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#710908]"
                  style={{ background: 'rgba(113,9,8,0.07)' }}>
                  <X size={16} />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {links.map(({ label, href }, i) => (
                  <motion.a key={label} href={href}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium text-[#1a0a0a] hover:bg-[#710908]/06 transition-colors group">
                    {label}
                    <ChevronRight size={14} className="text-[#A35E5D] group-hover:translate-x-0.5 transition-transform" />
                  </motion.a>
                ))}
              </nav>

              <div className="px-4 pb-8 pt-4 border-t border-[#710908]/08">
                <a href="tel:+919876543210" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
                  <Phone size={15} /> Call Now
                </a>
                <p className="text-center text-xs text-[#4a0605]/40 mt-3">Mon–Sat · 9AM – 7PM</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
