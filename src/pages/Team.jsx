import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap, Stethoscope, Award, Users, HeartPulse,
  Microscope, Building2, Languages, Phone, ArrowLeft, Quote, CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { physicianSchema } from '../lib/schema'

const education = [
  { degree: 'MBBS', detail: 'Bachelor of Medicine & Bachelor of Surgery', note: 'Foundation in clinical medicine' },
  { degree: 'MD — General Medicine', detail: 'Doctor of Medicine', note: 'Specialisation in internal medicine' },
  { degree: 'DM — Nephrology', detail: 'Doctorate in Nephrology (Super-Speciality)', note: 'Advanced training in kidney medicine' },
]

const expertise = [
  { icon: HeartPulse, title: 'Chronic Kidney Disease (CKD)', desc: 'Early detection, staging and long-term management to slow disease progression.' },
  { icon: Stethoscope, title: 'Acute Kidney Injury (AKI)', desc: 'Rapid diagnosis and intensive management of sudden kidney failure.' },
  { icon: Microscope, title: 'Dialysis Care', desc: 'Haemodialysis and peritoneal dialysis planning, initiation and monitoring.' },
  { icon: Building2, title: 'Kidney Transplant', desc: 'Pre-transplant evaluation and lifelong post-transplant follow-up care.' },
  { icon: Award, title: 'Hypertension & Kidney Stones', desc: 'Resistant hypertension, electrolyte disorders and recurrent stone disease.' },
  { icon: Users, title: 'Diabetic Nephropathy', desc: 'Protecting kidney function in diabetic and high-risk patients.' },
]

const highlights = [
  { value: '15+', label: 'Years of Experience' },
  { value: '5,000+', label: 'Patients Treated' },
  { value: '24/7', label: 'Emergency Availability' },
  { value: 'NABH', label: 'Certified Practice' },
]

const memberships = [
  'Indian Society of Nephrology (ISN)',
  'Indian Medical Association (IMA)',
  'Association of Physicians of India (API)',
  'Peritoneal Dialysis Society of India',
]

const achievements = [
  'Super-speciality DM training in Nephrology from a premier institution',
  'Established a dedicated dialysis programme at Poranki, Vijayawada',
  'Thousands of successful CKD and dialysis patients under long-term care',
  'Recognised for compassionate, patient-first nephrology practice',
]

const languages = ['Telugu', 'English', 'Hindi']

const sectionLabel = {
  fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
  color: '#FB6603', fontWeight: 700,
}

const glassCard = {
  background: 'rgba(255,255,255,0.55)',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  border: '1px solid rgba(255,255,255,0.65)',
  borderRadius: 24,
  boxShadow: '0 20px 60px rgba(113,9,8,0.08), 0 4px 16px rgba(113,9,8,0.04)',
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function Team() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEO
        title="Dr. Pavan Kumar — Best Nephrologist in Vijayawada & Poranki | MBBS, MD, DM (Nephrology)"
        description="Meet Dr. Pavan Kumar, consultant nephrologist and best kidney specialist in Vijayawada and Poranki, Andhra Pradesh. 15+ years' experience, 5,000+ patients treated across CKD, dialysis, kidney transplant, hypertension and diabetic nephropathy care."
        path="/team"
        jsonLd={physicianSchema}
      />
      <Navbar />

      {/* ── Hero header ── */}
      <section className="bg-hero relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute top-10 right-[6%] w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(251,102,3,0.12), transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-0 left-[4%] w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(113,9,8,0.08), transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-sm font-semibold"
            style={{ color: '#A35E5D' }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center mx-auto"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(251,102,3,0.14) 0%, transparent 70%)' }} />
              </div>
              <div className="relative"
                style={{
                  width: 300, height: 300, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255,255,255,0.30)',
                  boxShadow: '0 32px 80px rgba(113,9,8,0.18), 0 8px 24px rgba(251,102,3,0.10)',
                  padding: 8,
                }}>
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(113,9,8,0.08), rgba(251,102,3,0.12))' }}>
                  {/* Placeholder initials — swap with <img src="..." /> when a photo is available */}
                  <span className="font-display font-bold text-[#710908]" style={{ fontSize: 68 }}>DP</span>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-3" style={sectionLabel}>Meet Our Team</p>
              <h1 className="font-display font-bold leading-tight mb-3"
                style={{ fontSize: 52, color: '#710908' }}>
                Dr. Pavan Kumar
              </h1>
              <p className="mb-6 font-semibold" style={{ fontSize: 19, color: '#FB6603' }}>
                Consultant Nephrologist &amp; Kidney Specialist · MBBS, MD, DM (Nephrology)
              </p>
              <p className="leading-relaxed mb-8" style={{ fontSize: 18, color: '#A35E5D', maxWidth: 620 }}>
                Founder of Dr. Pavan's Kidney Care Clinic, Dr. Pavan Kumar is a super-speciality
                trained nephrologist with over 15 years of experience in managing the complete
                spectrum of kidney disorders — from early-stage CKD to dialysis and transplant care.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+919876543210" className="btn-primary">
                  <Phone size={15} /> Book an Appointment
                </a>
                <a href="/#contact" className="btn-ghost">Visit the Clinic</a>
              </div>
            </motion.div>
          </div>

          {/* Highlight stats */}
          <motion.div {...fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {highlights.map(({ value, label }) => (
              <div key={label} style={glassCard} className="px-6 py-6 text-center">
                <div className="font-display font-bold" style={{ fontSize: 34, color: '#710908' }}>{value}</div>
                <div style={{ fontSize: 13, color: '#A35E5D', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Full bio ── */}
      <section className="relative py-20 sm:py-24" style={{ background: '#FFFDFB' }}>
        <div className="relative z-10 max-w-[900px] mx-auto px-5 sm:px-6">
          <motion.div {...fadeUp}>
            <p className="mb-3" style={sectionLabel}>Professional Profile</p>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 40, color: '#710908' }}>
              A life devoted to kidney health
            </h2>
            <div className="space-y-5" style={{ fontSize: 18, color: '#A35E5D', lineHeight: 1.75 }}>
              <p>
                Dr. Pavan Kumar completed his MBBS followed by an MD in General Medicine, and went on
                to earn a DM in Nephrology — the highest super-speciality qualification in kidney
                medicine. This rigorous training equips him to handle the most complex nephrology
                cases with confidence and precision.
              </p>
              <p>
                Over the last 15 years he has cared for more than 5,000 patients across the Vijayawada
                region and wider South India. His clinical interests span chronic kidney disease,
                acute kidney injury, dialysis, kidney transplantation, resistant hypertension,
                electrolyte disorders and diabetic kidney disease.
              </p>
              <p>
                Dr. Pavan is known for combining evidence-based, cutting-edge diagnostics with a
                deeply compassionate, patient-first approach. He believes every patient deserves to
                understand their condition, which is why he takes time to explain each diagnosis and
                build personalised, sustainable care plans.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="relative py-20 sm:py-24" style={{ background: '#FFF8F4' }}>
        <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="mb-3" style={sectionLabel}>Education &amp; Training</p>
            <h2 className="font-display font-bold" style={{ fontSize: 40, color: '#710908' }}>
              Qualifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((e, i) => (
              <motion.div key={e.degree} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                style={glassCard} className="px-7 py-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(113,9,8,0.10), rgba(251,102,3,0.16))' }}>
                  <GraduationCap size={22} style={{ color: '#710908' }} />
                </div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: 22, color: '#710908' }}>{e.degree}</h3>
                <p className="mb-2" style={{ fontSize: 15, color: '#FB6603', fontWeight: 600 }}>{e.detail}</p>
                <p style={{ fontSize: 14, color: '#A35E5D' }}>{e.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas of expertise ── */}
      <section className="relative py-20 sm:py-24" style={{ background: '#FFFDFB' }}>
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="mb-3" style={sectionLabel}>Clinical Focus</p>
            <h2 className="font-display font-bold" style={{ fontSize: 40, color: '#710908' }}>
              Areas of Expertise
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}
                style={glassCard} className="px-7 py-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(113,9,8,0.10), rgba(251,102,3,0.16))' }}>
                  <Icon size={22} style={{ color: '#FB6603' }} />
                </div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: 20, color: '#710908' }}>{title}</h3>
                <p style={{ fontSize: 15, color: '#A35E5D', lineHeight: 1.6 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Memberships, Achievements, Languages ── */}
      <section className="relative py-20 sm:py-24" style={{ background: '#FFF8F4' }}>
        <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Achievements */}
            <motion.div {...fadeUp} style={glassCard} className="px-8 py-9">
              <p className="mb-4" style={sectionLabel}>Milestones</p>
              <h3 className="font-display font-bold mb-6" style={{ fontSize: 26, color: '#710908' }}>
                Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <CheckCircle2 size={18} style={{ color: '#FB6603', marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: '#A35E5D', lineHeight: 1.6 }}>{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Memberships + Languages */}
            <div className="flex flex-col gap-6">
              <motion.div {...fadeUp} style={glassCard} className="px-8 py-9">
                <p className="mb-4" style={sectionLabel}>Affiliations</p>
                <h3 className="font-display font-bold mb-6" style={{ fontSize: 26, color: '#710908' }}>
                  Professional Memberships
                </h3>
                <ul className="space-y-3">
                  {memberships.map((m) => (
                    <li key={m} className="flex items-start gap-3">
                      <Users size={17} style={{ color: '#710908', marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 15, color: '#A35E5D' }}>{m}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeUp} style={glassCard} className="px-8 py-9">
                <div className="flex items-center gap-3 mb-4">
                  <Languages size={20} style={{ color: '#FB6603' }} />
                  <h3 className="font-display font-bold" style={{ fontSize: 22, color: '#710908' }}>Languages Spoken</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {languages.map((l) => (
                    <span key={l} style={{
                      background: 'rgba(255,255,255,0.65)',
                      border: '1px solid rgba(113,9,8,0.12)',
                      borderRadius: 60, padding: '8px 18px',
                      fontSize: 14, fontWeight: 600, color: '#710908',
                    }}>{l}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy / quote ── */}
      <section className="relative py-20 sm:py-24" style={{ background: '#FFFDFB' }}>
        <div className="relative z-10 max-w-[820px] mx-auto px-5 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <Quote size={44} style={{ color: '#FB6603', opacity: 0.25 }} className="mx-auto mb-6" />
            <p className="font-display leading-relaxed mb-6"
              style={{ fontSize: 26, color: '#710908', lineHeight: 1.5 }}>
              "Every kidney is worth protecting. My goal is not just to treat disease, but to give
              each patient more good years of healthy living — with dignity and understanding."
            </p>
            <p style={{ fontSize: 15, color: '#A35E5D', fontWeight: 600 }}>— Dr. Pavan Kumar</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
