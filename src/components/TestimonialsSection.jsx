import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    condition: 'CKD Patient',
    review: "Dr. Pavan's expertise and compassion gave me a new lease on life. My CKD has been managed brilliantly — I feel healthier than I have in years. The entire team is incredibly attentive and professional.",
  },
  {
    name: 'Priya Nair',
    condition: 'AKI Recovery',
    review: "When I was rushed in with acute kidney injury, the team acted swiftly and saved my kidneys. Dr. Pavan explained every step clearly and made sure I was comfortable throughout my recovery.",
  },
  {
    name: 'Venkatesh Reddy',
    condition: 'Dialysis Patient',
    review: "I have been on dialysis here for two years and the care is exceptional. The staff treat you like family. The facility is spotless and the sessions are always on time. Truly the best in Hyderabad.",
  },
  {
    name: 'Anitha Krishnan',
    condition: 'Transplant Follow-Up',
    review: "Post-transplant follow-up with Dr. Pavan has been seamless. He monitors every detail and is always reachable. My transplant is thriving and I owe that to this incredible clinic.",
  },
]

const cardStyle = {
  background: 'rgba(255,255,255,0.40)',
  backdropFilter: 'blur(40px)',
  WebkitBackdropFilter: 'blur(40px)',
  border: '1px solid rgba(255,255,255,0.50)',
  borderRadius: 32,
  boxShadow: '0 24px 80px rgba(113,9,8,0.10), 0 4px 16px rgba(113,9,8,0.06)',
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const t = testimonials[index]

  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: '#FFF8F4' }}>

      {/* Decorative blob top-right */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FC9F5E 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }} className="text-center mb-12">
          <p className="mb-3 font-bold" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FB6603' }}>
            Testimonials
          </p>
          <h2 className="font-display font-bold leading-tight mb-4" style={{ fontSize: 48, color: '#710908' }}>
            Patient Stories
          </h2>
          <p style={{ fontSize: 18, color: '#A35E5D' }}>Real experiences from patients whose lives we've touched.</p>
        </motion.div>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          <div style={cardStyle} className="px-8 sm:px-16 py-12 sm:py-16">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <Quote size={40} style={{ color: '#FB6603', opacity: 0.20 }} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                {/* Review */}
                <p className="font-display leading-relaxed mb-8 mx-auto"
                  style={{ fontSize: 19, color: '#710908', maxWidth: 768 }}>
                  "{t.review}"
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill="#FB6603" style={{ color: '#FB6603' }} />
                  ))}
                </div>

                {/* Avatar + name */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                    style={{ background: 'linear-gradient(135deg, #710908, #FB6603)' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-bold" style={{ color: '#710908' }}>{t.name}</p>
                    <p style={{ fontSize: 14, color: '#A35E5D' }}>{t.condition}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            {/* Prev */}
            <button onClick={prev} aria-label="Previous"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.75)', color: '#710908', boxShadow: '0 4px 16px rgba(113,9,8,0.08)' }}>
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to ${i + 1}`}
                  style={{
                    height: 8,
                    width: i === index ? 32 : 8,
                    borderRadius: 8,
                    background: i === index ? '#FB6603' : '#DBAB9D',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button onClick={next} aria-label="Next"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.75)', color: '#710908', boxShadow: '0 4px 16px rgba(113,9,8,0.08)' }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
