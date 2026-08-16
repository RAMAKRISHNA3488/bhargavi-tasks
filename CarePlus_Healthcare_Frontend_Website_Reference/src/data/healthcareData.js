export const servicesData = [
  {
    id: 'cardiology',
    title: 'Cardiology',
    iconName: 'Heart',
    description: 'Comprehensive heart care, diagnostic testing, angioplasty, and treatment for all cardiovascular conditions.',
    details: 'Our Cardiology department offers advanced diagnostics including ECG, Echo, Stress tests, and catheterization. Our team of expert cardiologists provides personalized care for heart health.',
    features: ['ECG & Echocardiogram', 'Angioplasty & Stenting', 'Heart Rhythm Monitoring', 'Preventive Cardiology']
  },
  {
    id: 'neurology',
    title: 'Neurology',
    iconName: 'Brain',
    description: 'Advanced care for brain, spinal cord, nervous system disorders, migraines, stroke, and epilepsy.',
    details: 'We specialize in treating neurological conditions with cutting-edge MRI, EEG, and rehabilitation services.',
    features: ['Stroke Emergency Care', 'Migraine Management', 'Epilepsy & Seizure Care', 'Neuro-rehabilitation']
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    iconName: 'Activity',
    description: 'Expert treatment for bones, joint replacements, sports injuries, spine care, and muscle conditions.',
    details: 'Our orthopedic specialists perform minimally invasive joint replacement surgeries and comprehensive sports injury treatment.',
    features: ['Total Joint Replacement', 'Arthroscopic Surgery', 'Spine & Back Care', 'Sports Injury Rehabilitation']
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    iconName: 'Baby',
    description: 'Complete compassionate healthcare, vaccinations, and growth tracking for infants, children, and teens.',
    details: 'Pediatric care tailored for newborn health, routine developmental checks, immunizations, and child illness treatment.',
    features: ['Newborn Care Unit', 'Childhood Vaccination', 'Growth & Nutrition Audit', 'Pediatric Intensive Care']
  },
  {
    id: 'gynecology',
    title: 'Gynecology',
    iconName: 'UserCheck',
    description: 'Comprehensive women’s health care, maternity services, prenatal care, and gynecological surgeries.',
    details: 'Providing holistic care for women at all stages of life, from adolescent care to pregnancy and menopause management.',
    features: ['Prenatal & High-Risk Pregnancy', 'Minimal Invasive Surgery', 'Menopause Care', 'Fertility Counseling']
  },
  {
    id: 'dental',
    title: 'Dental Care',
    iconName: 'Smile',
    description: 'Complete oral health treatments, cosmetic dentistry, root canals, dental implants, and whitening.',
    details: 'State-of-the-art dental clinic delivering painless procedures, teeth aligners, cosmetic enhancements, and oral hygiene.',
    features: ['Cosmetic Dentistry', 'Dental Implants', 'Painless Root Canal', 'Teeth Whitening & Cleaning']
  }
];

export const doctorsData = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    title: 'Senior Consultant Cardiologist',
    experience: '10+ Years',
    experienceNum: 10,
    rating: 4.9,
    reviewsCount: 240,
    education: 'MD, DM Cardiology (Harvard Medical School)',
    languages: 'English, French',
    about: 'Dr. Sarah Johnson is a renowned cardiologist specializing in interventional cardiology and preventive heart care. She has successfully performed over 1,500 cardiac procedures with exceptional clinical outcomes.',
    expertise: ['Heart Failure Management', 'Coronary Angioplasty', 'Arrhythmia Treatment', 'Hypertension & Cholesterol Care'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Dr. Michael Brown',
    specialty: 'Neurology',
    title: 'Chief Neurologist',
    experience: '12+ Years',
    experienceNum: 12,
    rating: 4.9,
    reviewsCount: 320,
    education: 'MD, DM Neurology (Johns Hopkins University)',
    languages: 'English, Spanish',
    about: 'Dr. Michael Brown is a highly experienced neurologist specializing in the diagnosis and treatment of disorders of the brain, spinal cord, and nervous system with a patient-centered approach.',
    expertise: ['Headache & Migraine', 'Epilepsy', 'Stroke Management', 'Multiple Sclerosis', "Parkinson's Disease"],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    specialty: 'Pediatrics',
    title: 'Pediatric Specialist',
    experience: '8+ Years',
    experienceNum: 8,
    rating: 4.8,
    reviewsCount: 190,
    education: 'MD Pediatrics (Stanford University School of Medicine)',
    languages: 'English, German',
    about: 'Dr. Emily Davis is dedicated to providing compassionate healthcare to children from birth through adolescence. She is passionate about preventive child health and immunization.',
    expertise: ['Newborn Care', 'Pediatric Asthma', 'Immunization & Vaccines', 'Developmental Milestone Tracking'],
    image: 'https://images.unsplash.com/photo-1594824813566-78a011a68d06?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    title: 'Orthopedic & Joint Replacement Surgeon',
    experience: '15+ Years',
    experienceNum: 15,
    rating: 5.0,
    reviewsCount: 410,
    education: 'MS Orthopedics (Columbia University)',
    languages: 'English',
    about: 'Dr. James Wilson is a master surgeon specializing in total joint replacements, complex fracture reconstruction, and sports medicine therapies.',
    expertise: ['Knee & Hip Replacement', 'Arthroscopic Knee Surgery', 'Sports Injury Trauma', 'Spine Disorders'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    name: 'Dr. Olivia Martinez',
    specialty: 'Gynecology',
    title: 'Senior Obstetrician & Gynecologist',
    experience: '9+ Years',
    experienceNum: 9,
    rating: 4.9,
    reviewsCount: 215,
    education: 'MD OB-GYN (Yale School of Medicine)',
    languages: 'English, Spanish',
    about: 'Dr. Olivia Martinez provides comprehensive reproductive healthcare, high-risk pregnancy monitoring, and minimally invasive laparoscopic surgeries.',
    expertise: ['High-Risk Maternity Care', 'Laparoscopic Surgery', 'PCOS & Hormonal Care', 'Menopause Wellness'],
    image: 'https://images.unsplash.com/photo-1594824813566-78a011a68d06?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 6,
    name: 'Dr. Daniel Lee',
    specialty: 'Dental Care',
    title: 'Dental Surgeon & Implantologist',
    experience: '7+ Years',
    experienceNum: 7,
    rating: 4.8,
    reviewsCount: 180,
    education: 'DDS (UCLA School of Dentistry)',
    languages: 'English, Mandarin',
    about: 'Dr. Daniel Lee is an expert dental surgeon providing aesthetic dental smile design, full mouth restoration, and painless root canal treatments.',
    expertise: ['Smile Design & Veneers', 'Dental Implants', 'Root Canal Treatment', 'Invisalign Aligners'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600'
  }
];

export const departmentsData = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    tagline: 'Heart & Vascular Care',
    description: 'Heart and blood vessel disorders treatment, state-of-the-art cath labs, and cardiac rehabilitation.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    tagline: 'Brain & Spine Institute',
    description: 'Brain, spine, and nervous system disorders diagnosis, stroke unit, and specialized neuro-imaging.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    tagline: 'Bone & Joint Surgery',
    description: 'Bone, joint and muscle care, advanced trauma surgery, joint replacements, and sports physical therapy.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    tagline: 'Child Healthcare',
    description: 'Complete healthcare for infants and children, NICU facility, adolescent care, and growth monitoring.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    tagline: 'Women’s Health',
    description: 'Women’s health and maternity care, birthing suites, fetal medicine, and laparoscopic procedures.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'dental',
    name: 'Dental Care',
    tagline: 'Oral Health & Surgery',
    description: 'Oral health and dental treatments, digital X-rays, laser dentistry, and cosmetic orthodontics.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600'
  }
];

export const packagesData = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: '$49',
    period: '/One Time',
    isPopular: false,
    badgeText: '',
    features: [
      'General Consultation',
      'Basic Blood Test',
      'Urine Test',
      'BP & BMI Check',
      'Health Report'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Package',
    price: '$99',
    period: '/One Time',
    isPopular: true,
    badgeText: 'Most Popular',
    features: [
      'All Basic Package Tests',
      'Lipid Profile',
      'Blood Sugar (Fasting)',
      'ECG',
      'Doctor Consultation'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: '$149',
    period: '/One Time',
    isPopular: false,
    badgeText: '',
    features: [
      'All Standard Package Tests',
      'Thyroid Profile',
      'Vitamin D Test',
      'X-Ray',
      'Detailed Report'
    ]
  }
];

export const blogsData = [
  {
    id: 1,
    title: '10 Tips for a Healthy Heart',
    excerpt: 'Simple steps to keep your heart healthy, maintain lower blood pressure, and reduce cardiovascular risks.',
    date: 'May 15, 2026',
    category: 'Heart Care',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600',
    content: 'Taking care of your heart is the cornerstone of lifelong vitality. Incorporate 30 minutes of moderate aerobic exercise daily, follow a Mediterranean-style diet high in fiber and low in saturated fats, keep stress levels managed, and schedule regular blood pressure checkups with your doctor.'
  },
  {
    id: 2,
    title: 'Benefits of Regular Health Checkups',
    excerpt: 'Why regular checkups are important for early disease detection, prevention, and maintaining optimal wellness.',
    date: 'May 10, 2026',
    category: 'Preventive Health',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    content: 'Routine screening tests can catch silent health conditions long before noticeable symptoms develop. From lipid profiles to blood sugar and organ screening, annual checkups empower you to make proactive decisions for your long-term well-being.'
  },
  {
    id: 3,
    title: 'How to Boost Your Immunity',
    excerpt: 'Natural ways to strengthen your immune system through nutrient-rich foods, restorative sleep, and hydration.',
    date: 'May 5, 2026',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600',
    content: 'A strong immune system protects your body against infections. Focus on eating a colorful variety of fruits rich in Vitamin C, staying hydrated, getting 7-8 hours of sound sleep, and taking daily Vitamin D supplements during seasonal shifts.'
  }
];

export const faqsData = [
  {
    id: 1,
    question: 'How can I book an appointment?',
    answer: 'You can easily book an appointment online through our website by clicking "Book Appointment", selecting your preferred doctor or department, choosing date/time, and submitting the form. You can also call us directly at +1 (012) 345 6789.'
  },
  {
    id: 2,
    question: 'What should I bring to my appointment?',
    answer: 'Please bring a valid photo ID, your insurance card, past medical history records, and a list of any current medications you are taking.'
  },
  {
    id: 3,
    question: 'Do you accept insurance?',
    answer: 'Yes! We accept most major health insurance providers. Please contact our front desk or check with your insurance provider to confirm specific coverage details.'
  },
  {
    id: 4,
    question: 'What are your clinic hours?',
    answer: 'Our outpatient clinic is open Monday through Saturday from 8:00 AM to 8:00 PM. Emergency care and emergency hotline services are available 24/7.'
  },
  {
    id: 5,
    question: 'How can I get my test results?',
    answer: 'Test results are uploaded securely to your patient portal within 24-48 hours. You will also receive an SMS/Email alert once your detailed report is ready for viewing.'
  },
  {
    id: 6,
    question: 'What emergency services do you provide?',
    answer: 'Our 24/7 Emergency Department provides immediate trauma care, emergency cardiac catheterization, pediatric acute response, and intensive care unit (ICU) support.'
  },
  {
    id: 7,
    question: 'Can I cancel or reschedule my appointment?',
    answer: 'Yes, you can reschedule or cancel your appointment free of charge at least 24 hours prior to your scheduled time via your booking confirmation link or by calling our support line.'
  }
];

export const statsData = [
  { value: '20+', label: 'Years of Experience' },
  { value: '15K+', label: 'Happy Patients' },
  { value: '50+', label: 'Expert Doctors' },
  { value: '10+', label: 'Medical Departments' }
];

export const heroBadges = [
  { title: 'Experienced Doctors', subtitle: 'Highly qualified specialists', icon: 'UserCheck' },
  { title: '24/7 Support', subtitle: 'Always here for you', icon: 'Clock' },
  { title: 'Modern Facilities', subtitle: 'State-of-the-art tech', icon: 'ShieldCheck' }
];
