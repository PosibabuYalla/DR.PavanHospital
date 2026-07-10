// Shared schema.org structured data — keeps NAP (Name/Address/Phone) and
// local-SEO facts in one place so every page emits consistent JSON-LD.

const origin = typeof window !== 'undefined' ? window.location.origin : ''

export const clinicAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Door no: 13-204, beside Sono Vision, T V R Colony, Poranki',
  addressLocality: 'Vijayawada',
  addressRegion: 'Andhra Pradesh',
  postalCode: '521137',
  addressCountry: 'IN',
}

export const clinicGeo = {
  '@type': 'GeoCoordinates',
  latitude: 16.4744,
  longitude: 80.6947,
}

export const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Pavan Kumar',
  image: `${origin}/logos/logo.png`,
  url: `${origin}/team`,
  jobTitle: 'Consultant Nephrologist & Kidney Specialist',
  medicalSpecialty: 'Nephrology',
  honorificSuffix: 'MBBS, MD, DM (Nephrology)',
  description:
    "Dr. Pavan Kumar is a super-speciality trained nephrologist and one of the best kidney specialists in Vijayawada and Poranki, Andhra Pradesh, with 15+ years of experience treating 5,000+ patients across CKD, dialysis, kidney transplant and hypertension care.",
  telephone: '+91-98765-43210',
  email: 'info@drpavankidneycare.com',
  address: clinicAddress,
  worksFor: { '@type': 'MedicalClinic', name: "Dr. Pavan's Kidney Care Clinic" },
  memberOf: [
    'Indian Society of Nephrology (ISN)',
    'Indian Medical Association (IMA)',
    'Association of Physicians of India (API)',
    'Peritoneal Dialysis Society of India',
  ],
  knowsLanguage: ['Telugu', 'English', 'Hindi'],
}

export const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${origin}/#clinic`,
  name: "Dr. Pavan's Kidney Care Clinic",
  alternateName: 'Dr. Pavan Kumar Nephrology Clinic',
  description:
    "Dr. Pavan's Kidney Care Clinic is a leading nephrology centre in Poranki, Vijayawada, Andhra Pradesh — offering expert kidney specialist and best nephrologist care for CKD, dialysis, kidney stones, hypertension and kidney transplant follow-up.",
  url: origin,
  image: `${origin}/logos/logo.png`,
  logo: `${origin}/logos/logo.png`,
  telephone: '+91-98765-43210',
  email: 'info@drpavankidneycare.com',
  priceRange: '₹₹',
  address: clinicAddress,
  geo: clinicGeo,
  medicalSpecialty: 'Nephrology',
  areaServed: [
    { '@type': 'City', name: 'Vijayawada' },
    { '@type': 'Place', name: 'Poranki' },
    { '@type': 'State', name: 'Andhra Pradesh' },
    { '@type': 'City', name: 'Guntur' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  founder: { '@type': 'Person', name: 'Dr. Pavan Kumar' },
  employee: physicianSchema,
  hasMap: 'https://maps.google.com/?q=Door+no+13-204+beside+Sono+Vision+T+V+R+Colony+Poranki+Vijayawada+Andhra+Pradesh+521137',
  sameAs: [],
}
