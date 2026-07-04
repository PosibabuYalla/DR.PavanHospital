import { motion } from 'framer-motion'
import { Clock, Users, Heart, Headphones } from 'lucide-react'

const stats = [
  { icon: Clock,       value: '15+',  label: 'Years Experience' },
  { icon: Users,       value: '10K+', label: 'Patients Treated' },
  { icon: Heart,       value: '95%',  label: 'Patient Satisfaction' },
  { icon: Headphones,  value: '24/7', label: 'Emergency Support' },
]

export default function StatsSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #710908 0%, #A35E5D 55%, #FB6603 100%)' }}
      className="relative overflow-hidden py-20">

      {/* Decorative blob */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.10, 0.18, 0.10] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FC9F5E 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Icon badge */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.20)' }}>
                <Icon size={24} className="text-white" />
              </div>

              <div>
                <p className="font-display font-bold text-white leading-none"
                  style={{ fontSize: 48 }}>{value}</p>
                <p className="mt-2 font-medium" style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
