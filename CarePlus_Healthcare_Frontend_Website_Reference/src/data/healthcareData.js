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
    image: '/images/dr-emily-davis.jpg'
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
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=600'
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
    longDescription: 'Our Cardiology Department provides comprehensive cardiovascular care ranging from early diagnostic screening to advanced interventional cardiology procedures. Equipped with modern cardiac catheterization laboratories and 24/7 emergency response teams, our cardiologists deliver world-class treatment for heart disease, arrhythmias, and vascular conditions.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
    treatments: [
      'Coronary Angioplasty & Stenting',
      '3D Echocardiography',
      'Pacemaker & ICD Implantation',
      'Preventive Heart Screening',
      'Hypertension Management',
      'Cardiac Rehabilitation'
    ],
    facilities: [
      '24/7 Emergency Cardiac Care Unit',
      'Advanced Flat-Panel Cath Lab',
      'Dedicated Cardiac ICU',
      'Non-Invasive Diagnostic Suite'
    ]
  },
  {
    id: 'neurology',
    name: 'Neurology',
    tagline: 'Brain & Spine Institute',
    description: 'Brain, spine, and nervous system disorders diagnosis, stroke unit, and specialized neuro-imaging.',
    longDescription: 'The Neurology Department offers specialized care for complex brain, spinal cord, and peripheral nerve disorders. Our multidisciplinary neurosciences team utilizes state-of-the-art neuro-imaging, EEG, and MRI technology to treat strokes, epilepsy, Parkinson’s disease, chronic migraines, and neurodegenerative conditions.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600',
    treatments: [
      'Acute Stroke Intervention',
      'Comprehensive Epilepsy Care',
      'Migraine & Headache Clinic',
      'Spine & Nerve Disorder Therapy',
      'Parkinson’s & Movement Disorder Care',
      'Neuro-Rehabilitation'
    ],
    facilities: [
      '24/7 Acute Stroke Response Team',
      '3T High-Definition MRI & CT Scanner',
      'Video-EEG Monitoring Suite',
      'Dedicated Neuro-ICU'
    ]
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    tagline: 'Bone & Joint Surgery',
    description: 'Bone, joint and muscle care, advanced trauma surgery, joint replacements, and sports physical therapy.',
    longDescription: 'Our Orthopedic Department specializes in restoring mobility and relieving joint pain through cutting-edge surgical and non-surgical treatments. From computer-assisted total knee and hip replacements to arthroscopic sports injury therapies, our experienced orthopedic surgeons deliver exceptional outcomes.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    treatments: [
      'Total Knee & Hip Replacement',
      'Arthroscopic Shoulder & Knee Surgery',
      'Complex Trauma Reconstruction',
      'Spine & Disc Surgery',
      'Sports Injury Rehabilitation',
      'Pediatric Orthopedics'
    ],
    facilities: [
      'Ultra-Clean Laminar Airflow Operation Theaters',
      'Advanced Sports Rehabilitation Center',
      'Computer-Navigated Joint Replacement Unit',
      'Comprehensive Bone Densitometry (DEXA)'
    ]
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    tagline: 'Child Healthcare',
    description: 'Complete healthcare for infants and children, NICU facility, adolescent care, and growth monitoring.',
    longDescription: 'The Pediatrics Department delivers compassionate, family-centered medical care for newborns, infants, children, and adolescents. With dedicated Level III NICU facilities and pediatric subspecialists, we manage everything from routine developmental assessments to complex childhood illnesses.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600',
    treatments: [
      'Newborn Care & NICU Services',
      'Childhood Vaccination & Immunization',
      'Pediatric Asthma & Allergy Care',
      'Growth & Developmental Audits',
      'Childhood Infection Treatment',
      'Pediatric Nutrition Counseling'
    ],
    facilities: [
      'Level III Neonatal Intensive Care Unit (NICU)',
      'Child-Friendly Outpatient Clinics',
      '24/7 Emergency Pediatric Response',
      'Pediatric Isolation Units'
    ]
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    tagline: 'Women’s Health',
    description: 'Women’s health and maternity care, birthing suites, fetal medicine, and laparoscopic procedures.',
    longDescription: 'Our Obstetrics & Gynecology Department provides holistic healthcare tailored to women at every stage of life. From high-risk pregnancy monitoring and luxury birthing suites to advanced minimally invasive laparoscopic gynecological surgeries, our team prioritizes safety, dignity, and comfort.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    treatments: [
      'High-Risk Maternity & Antenatal Care',
      'Laparoscopic Hysterectomy & Myomectomy',
      'PCOS & Hormonal Disorder Management',
      'Infertility Evaluation & Counseling',
      'Menopause & Well-Woman Health',
      'Fetal Medicine & 4D Ultrasound'
    ],
    facilities: [
      'State-of-the-Art Birthing Suites',
      'Advanced Minimally Invasive Surgical Suite',
      'Fetal Wellbeing Monitoring Station',
      'Post-Natal Care & Lactation Clinic'
    ]
  },
  {
    id: 'dental',
    name: 'Dental Care',
    tagline: 'Oral Health & Surgery',
    description: 'Oral health and dental treatments, digital X-rays, laser dentistry, and cosmetic orthodontics.',
    longDescription: 'The Dental Care Department offers full-spectrum oral healthcare, aesthetic smile enhancements, and oral surgical procedures in a relaxed, painless environment. Utilizing digital intra-oral scanners, laser dentistry, and premium implant systems, our dental experts restore beautiful smiles.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600',
    treatments: [
      'Computer-Guided Dental Implants',
      'Single-Visit Painless Root Canal',
      'Cosmetic Smile Design & Veneers',
      'Invisible Orthodontic Aligners',
      'Laser Gum Treatment',
      'Teeth Whitening & Oral Prophylaxis'
    ],
    facilities: [
      'Digital Low-Radiation Intra-Oral X-Rays',
      'Laser Dental Treatment Suites',
      'Pain-Free Anesthesia Systems',
      'Strict Autoclave Sterilization Unit'
    ]
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
  },
  {
    id: 4,
    title: 'Managing Stress & Mental Health in Daily Life',
    excerpt: 'Practical mindfulness techniques, breathing exercises, and lifestyle adjustments to protect your mental health.',
    date: 'April 28, 2026',
    category: 'Mental Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    content: 'Chronic stress can negatively impact your cardiovascular health and immune system. Practicing 10 minutes of daily mindfulness meditation, engaging in regular outdoor walks, maintaining work-life boundaries, and seeking guidance from certified mental health professionals can dramatically improve emotional resilience.'
  },
  {
    id: 5,
    title: 'Essential Ergonomics & Posture Tips for Desk Workers',
    excerpt: 'Prevent spinal strain, neck pain, and repetitive stress injuries with proper workplace ergonomics.',
    date: 'April 20, 2026',
    category: 'Orthopedics',
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=600',
    content: 'Long hours of sitting can place undue strain on your lumbar spine and cervical vertebrae. Ensure your monitor is at eye level, keep your feet flat on the floor, take a 5-minute movement break every hour, and incorporate back-strengthening stretches into your daily routine.'
  },
  {
    id: 6,
    title: 'Nutrition & Gut Health: The Brain-Gut Connection',
    excerpt: 'Discover how gut microbiota influences digestion, mood regulation, and long-term metabolic health.',
    date: 'April 12, 2026',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600',
    content: 'Your gut microbiome plays a pivotal role in overall physical and cognitive health. Consuming prebiotic fibers, fermented foods like yogurt and kefir, minimizing processed sugars, and staying well-hydrated helps nourish beneficial gut bacteria.'
  },
  {
    id: 7,
    title: 'Pediatric Care: Healthy Sleep Habits for Growing Children',
    excerpt: 'How consistent sleep schedules improve cognitive development, immunity, and growth in young children.',
    date: 'April 5, 2026',
    category: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80&w=600',
    content: 'Adequate sleep is critical for brain development, physical growth, and immune defense in children. Establish a calming screen-free bedtime routine, maintain consistent sleep hours, and ensure a quiet, comfortable sleep environment.'
  },
  {
    id: 8,
    title: 'Preventing Joint & Bone Loss in Senior Years',
    excerpt: 'Key exercise strategies and dietary calcium recommendations to maintain bone density and mobility.',
    date: 'March 29, 2026',
    category: 'Senior Health',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    content: 'As we age, preserving bone mineral density and joint flexibility is essential for maintaining independent mobility. Weight-bearing exercises, resistance training, adequate Vitamin D3/Calcium intake, and regular bone density screenings protect against osteoporosis.'
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
