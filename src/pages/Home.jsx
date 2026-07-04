import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServiceCards from '../components/ServiceCards'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import SpecialitiesGrid from '../components/SpecialitiesGrid'
import DoctorSection from '../components/DoctorSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceCards />
      <AboutSection />
      <StatsSection />
      <SpecialitiesGrid />
      <DoctorSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
