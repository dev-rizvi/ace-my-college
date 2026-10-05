export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
}

export interface CourseStream {
  id: string;
  title: string;
  icon: string;
  popularDegrees: string[];
  topCareers: string[];
  duration: string;
  demand: string;
  accentColor: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  studentAction: string;
  aceGuidance: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  college: string;
  quote: string;
  rating: number;
  image: string;
  city: string;
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  streams: string[];
  image: string;
  campusType?: string;
  rating?: number;
  reviewsCount?: number;
  established: number;
  accreditation: string;
  feesRange: string;
  avgPackage: string;
  highestPackage: string;
  featured: boolean;
  tagline: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'student' | 'college' | 'general';
}

export interface EntranceExam {
  id: string;
  name: string;
  fullName: string;
  initialLetter: string;
  category: 'btech-mtech' | 'management' | 'computer-apps';
  categoryLabel: string;
  badgeColor: string;
  conductingBody: string;
  courses: string[];
  level: string;
  examMode: string;
  frequency: string;
  shortDescription: string;
  eligibility: string;
  syllabusOverview: string;
  examPattern: string;
  keyDates: string;
  topColleges: string[];
  officialWebsite: string;
}

export const TRUST_STATS = [
  { value: "5000+", label: "Students Counselled", icon: "GraduationCap" },
  { value: "2500+", label: "Successful Admissions", icon: "Users" },
  { value: "200+", label: "Partner Institutions", icon: "Building2" },
  { value: "100%", label: "Placement Support", icon: "Award" },
  { value: "4.9/5", label: "Average Rating", icon: "Star" }
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "career-discovery",
    icon: "Compass",
    title: "Career Discovery",
    shortDesc: "Find careers that match interests and strengths",
    fullDesc: "Interest, aptitude and aspiration-led conversations that help students identify meaningful directions and high-growth careers.",
    badge: "Foundation"
  },
  {
    id: "course-exploration",
    icon: "BookOpen",
    title: "Course Exploration",
    shortDesc: "Discover courses and learning pathways",
    fullDesc: "Clear explanation of courses, entry requirements, progression routes, specializations, and long-term career outcomes.",
    badge: "Clarity"
  },
  {
    id: "college-comparison",
    icon: "School",
    title: "College Comparison",
    shortDesc: "Compare colleges on what matters to you",
    fullDesc: "Relevant institution options based on academic profile, ROI, fees, location, placements, accreditations, and personal fit.",
    badge: "Decision"
  },
  {
    id: "expert-guidance",
    icon: "UserCheck",
    title: "Expert Guidance",
    shortDesc: "Personalised counselling and admission support",
    fullDesc: "1-on-1 mentorship, documentation support, seat confirmation, and seamless transition into your chosen campus.",
    badge: "Admission"
  }
];

export const COURSE_STREAMS: CourseStream[] = [
  {
    id: "engineering",
    title: "Engineering & Technology (B.Tech & M.Tech)",
    icon: "Cpu",
    popularDegrees: [
      "B.Tech (CSE, AI & ML, ECE, Civil, Mechanical)",
      "M.Tech (Advanced Computing, VLSI, Robotics)",
      "Artificial Intelligence & Machine Learning",
      "Electronics & Communication Engineering"
    ],
    topCareers: ["Software Architect", "AI/ML Engineer", "Robotics Specialist", "Structural / Core Engineer"],
    duration: "4 Years (UG) / 2 Years (PG)",
    demand: "High Growth",
    accentColor: "#FA6400"
  },
  {
    id: "management",
    title: "Management & Commerce (MBA, PGDM, BBA, B.Com)",
    icon: "Briefcase",
    popularDegrees: [
      "MBA (Finance, Marketing, HR, Business Analytics)",
      "PGDM (AICTE Approved Dual Specialization)",
      "BBA (Management & Entrepreneurship)",
      "B.Com & B.Com (Hons)"
    ],
    topCareers: ["Brand Strategist", "Investment Banker", "Corporate Consultant", "Business Analyst"],
    duration: "2 Years (PG) / 3 Years (UG)",
    demand: "Top Corporate ROI",
    accentColor: "#0A3871"
  },
  {
    id: "computer-applications",
    title: "Computer Applications (BCA & MCA)",
    icon: "Laptop",
    popularDegrees: [
      "BCA (Cloud Computing & Web Technologies)",
      "MCA (Full Stack & Enterprise Software)",
      "Data Science & Analytics",
      "Cybersecurity & Networks"
    ],
    topCareers: ["Full Stack Developer", "Systems Architect", "Cloud DevOps Specialist", "Database Administrator"],
    duration: "3 Years (BCA) / 2 Years (MCA)",
    demand: "Rapid Industry Demand",
    accentColor: "#0284C7"
  },
  {
    id: "medical",
    title: "Medical & Health Sciences",
    icon: "Stethoscope",
    popularDegrees: ["MBBS", "BDS", "B.Pharm", "B.Sc Nursing", "Biotechnology"],
    topCareers: ["Doctor / Surgeon", "Clinical Researcher", "Pharmacologist", "Healthcare Manager"],
    duration: "4.5 - 5.5 Years",
    demand: "Consistent High Demand",
    accentColor: "#0A3871"
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    icon: "Scale",
    popularDegrees: ["BA LLB (Hons)", "BBA LLB", "LLM Corporate Law"],
    topCareers: ["Corporate Counsel", "Litigation Lawyer", "Legal Analyst", "Civil Services"],
    duration: "3 - 5 Years",
    demand: "High Prestige",
    accentColor: "#D97706"
  },
  {
    id: "design",
    title: "Design & Architecture",
    icon: "Palette",
    popularDegrees: ["B.Des (UI/UX, Fashion)", "B.Arch", "Interior Architecture"],
    topCareers: ["Product Designer", "Architect", "Creative Director", "UX Researcher"],
    duration: "4 - 5 Years",
    demand: "Creative Boom",
    accentColor: "#8B5CF6"
  }
];

export const STUDENT_JOURNEY: JourneyStep[] = [
  {
    step: 1,
    title: "Discover",
    tagline: "Explore careers, fields & opportunities",
    description: "Uncover possibilities across 200+ career trajectories and modern industry domains.",
    studentAction: "Share your passions, favorite subjects, hobbies and career dreams.",
    aceGuidance: "Diagnostic profiling and open discussion to introduce emerging fields you might not know about.",
    icon: "Search"
  },
  {
    step: 2,
    title: "Understand",
    tagline: "Assess strengths, interests & aspirations",
    description: "Deep dive into your aptitude, personality traits, and individual strengths.",
    studentAction: "Participate in a 1-on-1 profile discovery conversation with an experienced mentor.",
    aceGuidance: "We map your academic track record and aptitude to viable, high-potential career clusters.",
    icon: "Brain"
  },
  {
    step: 3,
    title: "Explore",
    tagline: "Discover courses & learning pathways",
    description: "Learn about different undergraduate and postgraduate degrees and specializations.",
    studentAction: "Review syllabus structures, future certifications, and practical skill requirements.",
    aceGuidance: "Transparent breakdown of course eligibility, progression curves, and industry value.",
    icon: "BookOpen"
  },
  {
    step: 4,
    title: "Compare",
    tagline: "Compare colleges on what matters to you",
    description: "Objective side-by-side analysis of fee structures, accreditations, faculties and placements.",
    studentAction: "Filter campuses by location, campus amenities, budget and peer culture.",
    aceGuidance: "Unbiased comparison matrix with genuine NIRF rankings, NAAC grades, and placement proofs.",
    icon: "GitCompare"
  },
  {
    step: 5,
    title: "Match",
    tagline: "Find the best options that fit your profile",
    description: "Zeroing in on institutions where your academic score, budget and goals align perfectly.",
    studentAction: "Shortlist your top 3-5 colleges with tailored cutoffs and scholarship eligibility.",
    aceGuidance: "Our 'Whole-Student Matching' principle ensures you don't overspend or settle for less.",
    icon: "Target"
  },
  {
    step: 6,
    title: "Choose",
    tagline: "Make the right, informed choice with confidence",
    description: "Collaborative decision making involving both students and parents without pressure.",
    studentAction: "Finalize your top preferred college and dream course with complete clarity.",
    aceGuidance: "'Guidance, Not Pressure' — we walk your family through all factors until you feel 100% assured.",
    icon: "CheckCircle"
  },
  {
    step: 7,
    title: "ACE",
    tagline: "Apply, enroll & transition successfully",
    description: "Effortless application submission, documentation, scholarship claims, and admission letters.",
    studentAction: "Complete formalities with direct counselor assistance at every single step.",
    aceGuidance: "Direct liaison with university admissions to ensure priority processing and verified documentation.",
    icon: "Send"
  },
  {
    step: 8,
    title: "Grow",
    tagline: "Continue learning, growing & building your future",
    description: "Ongoing relationship beyond enrollment including internships, skill workshops, and career readiness.",
    studentAction: "Access our alumni networks, industry webinars, and campus mentorship circles.",
    aceGuidance: "Lifelong student partner — supporting your journey from fresh admit to successful professional.",
    icon: "TrendingUp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ananya Singh",
    course: "B.Tech Computer Science & AI",
    college: "SRM University / Bennett",
    quote: "ACE MY CAMPUS helped me discover the right career path and find a college that truly fits me. The guidance was honest, personalised and extremely helpful from day one.",
    rating: 5,
    image: "/images/testimonial-ananya.jpg",
    city: "Lucknow, UP"
  },
  {
    id: "2",
    name: "Rohan Verma",
    course: "MBA in Business Analytics",
    college: "BBD University & Corporate Tie-ups",
    quote: "Before speaking to ACE MY CAMPUS, my parents and I were completely overwhelmed by glossy university ads. ACE cut through the noise, evaluated our budget, and matched me with high-placement programs.",
    rating: 5,
    image: "/images/testimonial-rohan.jpg",
    city: "Kanpur, UP"
  },
  {
    id: "3",
    name: "Dr. Priya Sharma",
    course: "MBBS & Health Sciences",
    college: "Integral Institute of Medical Sciences",
    quote: "The admission process for medical colleges is notorious for misinformation. The team at ACE MY CAMPUS gave us complete transparency on fees, affiliations, and clinical exposure.",
    rating: 5,
    image: "/images/testimonial-priya.jpg",
    city: "Varanasi, UP"
  }
];

export const COLLEGES: College[] = [
  {
    id: "bbdu-lucknow",
    name: "Babu Banarasi Das University (BBDU)",
    shortName: "BBDU Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Computer Applications", "Law & Legal Studies"],
    image: "/images/colleges/bbdu.jpg",
    campusType: "100+ Acre Tech & Sports Campus",
    established: 2010,
    accreditation: "UGC & AICTE Approved",
    feesRange: "₹1.2L - ₹2.5L / year",
    avgPackage: "₹6.5 LPA",
    highestPackage: "₹44 LPA",
    featured: true,
    tagline: "Premier private university campus in Lucknow with modern research labs, sports complex, and top placements."
  },
  {
    id: "amity-lucknow",
    name: "Amity University Lucknow",
    shortName: "Amity Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Computer Applications", "Law & Legal Studies"],
    image: "/images/colleges/amity.jpg",
    campusType: "Global High-Tech Wi-Fi Campus",
    established: 2004,
    accreditation: "NAAC A+ Accredited",
    feesRange: "₹1.8L - ₹3.2L / year",
    avgPackage: "₹7.2 LPA",
    highestPackage: "₹38 LPA",
    featured: true,
    tagline: "Global curriculum, vibrant campus life, corporate tie-ups, and extensive multinational placements."
  },
  {
    id: "jaipuria-indore",
    name: "Jaipuria Institute of Management",
    shortName: "Jaipuria Institute",
    city: "Indore / Lucknow",
    state: "Madhya Pradesh / UP",
    streams: ["Management & Commerce"],
    image: "/images/colleges/jaipuria.jpg",
    campusType: "Premier Business School Campus",
    established: 1995,
    accreditation: "AACSB Member • NAAC A+ • NBA Accredited",
    feesRange: "₹4.5L - ₹6.2L / year",
    avgPackage: "₹11.5 LPA",
    highestPackage: "₹22 LPA",
    featured: true,
    tagline: "Top-ranked management institute known for PGDM excellence, industry mentors, and stellar ROI."
  },
  {
    id: "aimt-lucknow",
    name: "Ambalika Institute of Management & Technology (AIMT)",
    shortName: "AIMT Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Computer Applications"],
    image: "/images/colleges/aimt.jpg",
    campusType: "Leading Engineering & Tech Hub",
    established: 2008,
    accreditation: "AKTU Affiliated • AICTE Approved • NBA Accredited",
    feesRange: "₹90K - ₹1.8L / year",
    avgPackage: "₹5.8 LPA",
    highestPackage: "₹21 LPA",
    featured: true,
    tagline: "Distinguished institute in Lucknow specializing in B.Tech, BCA, MCA, and MBA with advanced tech labs."
  },
  {
    id: "maharishi-noida",
    name: "Maharishi University of Information Technology",
    shortName: "Maharishi University",
    city: "Noida / Lucknow",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Computer Applications", "Law & Legal Studies"],
    image: "/images/colleges/maharishi.jpg",
    campusType: "Modern Multidisciplinary Campus",
    established: 2013,
    accreditation: "UGC Recognized",
    feesRange: "₹1.1L - ₹2.2L / year",
    avgPackage: "₹6.0 LPA",
    highestPackage: "₹24 LPA",
    featured: true,
    tagline: "Innovative curriculum focusing on modern information technology, data science, law, and business."
  },
  {
    id: "bennett-university",
    name: "Bennett University (Times Group)",
    shortName: "Bennett University",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Computer Applications", "Law & Legal Studies"],
    image: "/images/colleges/bennett.jpg",
    campusType: "Times Group Ivy-League Pedagogy",
    established: 2016,
    accreditation: "UGC Recognized",
    feesRange: "₹3.2L - ₹4.8L / year",
    avgPackage: "₹11.2 LPA",
    highestPackage: "₹1.2 CPA",
    featured: true,
    tagline: "Backed by The Times Group with premier global partnerships, AI centers of excellence, and high packages."
  },
  {
    id: "srm-modinagar",
    name: "SRM Institute of Science & Technology (NCR)",
    shortName: "SRM NCR",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Computer Applications"],
    image: "/images/colleges/srm.jpg",
    campusType: "Engineering & Innovation Hub",
    established: 1997,
    accreditation: "NAAC A++ Grade",
    feesRange: "₹2.0L - ₹3.5L / year",
    avgPackage: "₹8.4 LPA",
    highestPackage: "₹50 LPA",
    featured: true,
    tagline: "National powerhouse for computer science, robotics, mechanical, and core engineering."
  },
  {
    id: "integral-lucknow",
    name: "Integral University",
    shortName: "Integral University",
    city: "Lucknow",
    state: "Uttar Pradesh",
    streams: ["Medical & Health Sciences", "Engineering & Technology", "Management & Commerce"],
    image: "/images/colleges/integral.jpg",
    campusType: "Premier Healthcare & Research Campus",
    established: 2004,
    accreditation: "NAAC A+ Grade, UGC",
    feesRange: "₹1.4L - ₹4.5L / year",
    avgPackage: "₹5.8 LPA",
    highestPackage: "₹24 LPA",
    featured: false,
    tagline: "Reputed for premier medical, allied health sciences, pharmacy, and engineering research facilities."
  },
  {
    id: "upes-dehradun",
    name: "UPES Dehradun",
    shortName: "UPES",
    city: "Dehradun",
    state: "Uttarakhand",
    streams: ["Engineering & Technology", "Management & Commerce", "Law & Legal Studies", "Design & Architecture"],
    image: "/images/colleges/upes.jpg",
    campusType: "Himalayan Foothills Energy & Tech Hub",
    established: 2003,
    accreditation: "NIRF Top 50 • NAAC A",
    feesRange: "₹2.8L - ₹4.2L / year",
    avgPackage: "₹8.8 LPA",
    highestPackage: "₹50 LPA",
    featured: false,
    tagline: "Renowned energy, law, computer science, and aviation specialized programs."
  }
];

export const INSTITUTION_PILLARS = [
  {
    id: "lead-gen",
    icon: "Target",
    title: "Lead Generation",
    description: "Connecting education brands with the right prospects through performance marketing built around clear KPIs, maximising ROI and enrolment conversions.",
    metrics: "4.2x Average ROI on Paid Campaigns"
  },
  {
    id: "branding",
    icon: "Award",
    title: "Institutional Branding",
    description: "Building a powerful institutional story and telling it through a strategic mix of creative visual assets, CXO positioning, and student success narratives.",
    metrics: "Over 5 Million Target Impressions"
  },
  {
    id: "social-media",
    icon: "Share2",
    title: "Social Media Marketing",
    description: "Reaching Gen Z and millennial students with high-engagement video, student reels, campus tours, and data-driven targeting on Instagram, YouTube & LinkedIn.",
    metrics: "65% Higher Student Engagement"
  },
  {
    id: "outreach",
    icon: "Megaphone",
    title: "Outreach & Recruitment",
    description: "Orchestrating high-impact school connect programs, career conclaves, alumni brand ambassadors, and multi-city counselling drives.",
    metrics: "Direct Access to 200+ Feeder Schools"
  }
];

export const MARKETING_FUNNEL_STEPS = [
  { step: "01", channel: "Social Media Ads", detail: "Meta, Google & YouTube High-Intent Student Targeting", icon: "Radio" },
  { step: "02", channel: "WhatsApp & Tele-Calling", detail: "Real-time query response & consultative follow-ups", icon: "PhoneCall" },
  { step: "03", channel: "Emailer Sequences", detail: "Brochure delivery, faculty webinars & campus insights", icon: "Mail" },
  { step: "04", channel: "Insightful Analytics", detail: "Cost per qualified lead (CPL) & application conversion tracking", icon: "BarChart3" }
];

/* Official 8 FAQs directly from Ace My Campus curriculum & document */
export const FAQS: FAQItem[] = [
  {
    category: 'student',
    question: "How does Ace My Campus help me find the right college?",
    answer: "Ace My Campus helps students discover and explore colleges based on their course preferences, academic profile, location, budget and career goals."
  },
  {
    category: 'student',
    question: "Can Ace My Campus help me compare colleges?",
    answer: "Yes. Students can explore colleges and compare relevant information such as courses, fees, campus facilities, admissions and career-related information."
  },
  {
    category: 'student',
    question: "Can I get personalised college recommendations?",
    answer: "Yes. Students can share their academic profile, interests and preferences to receive guidance on colleges and courses that may match their requirements."
  },
  {
    category: 'general',
    question: "Can parents use Ace My Campus?",
    answer: "Absolutely. Parents can use the platform to explore colleges, understand admission options and support their child's college-selection journey."
  },
  {
    category: 'student',
    question: "Can I get help with the admission process?",
    answer: "Yes. Ace My Campus can guide students through the admission journey, including understanding eligibility, applications, deadlines and available options."
  },
  {
    category: 'student',
    question: "Can I find scholarships and financial-aid information?",
    answer: "Yes. Students can explore available scholarship opportunities and understand the eligibility requirements before applying."
  },
  {
    category: 'college',
    question: "Does Ace My Campus guarantee admission?",
    answer: "No. Final admission decisions are made by the respective college or university based on its eligibility criteria, admission process and seat availability."
  },
  {
    category: 'general',
    question: "How do I get started?",
    answer: "Start by exploring colleges and courses that match your interests, academic profile and career goals, and then connect with the Ace My Campus team for guidance."
  }
];

/* Comprehensive National & State Entrance Exams for B.Tech, M.Tech, BBA, MBA, PGDM, BCA, MCA */
export const ENTRANCE_EXAMS: EntranceExam[] = [
  // --- B.Tech & M.Tech Exams ---
  {
    id: "jee-main",
    name: "JEE Main",
    fullName: "Joint Entrance Examination (Main)",
    initialLetter: "J",
    category: "btech-mtech",
    categoryLabel: "B.Tech & M.Tech",
    badgeColor: "#1D4ED8",
    conductingBody: "National Testing Agency (NTA)",
    courses: ["B.Tech", "B.E.", "B.Arch", "B.Planning"],
    level: "Undergraduate (UG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Twice a Year (Session 1: Jan/Feb, Session 2: April)",
    shortDescription: "The premier national gateway for admission to NITs, IIITs, CFTIs, and qualifying test for JEE Advanced.",
    eligibility: "10+2 with Physics, Mathematics and Chemistry/Bio/Technical Vocational with 75% marks (65% for SC/ST).",
    syllabusOverview: "Class 11 and 12 CBSE curriculum covering Physics, Chemistry, and Mathematics.",
    examPattern: "300 marks total. 90 questions (Physics, Chemistry, Maths - 30 each) with MCQs and Numerical Value questions.",
    keyDates: "Registration: Nov - Jan | Exam: Jan & April | Results: Feb & April",
    topColleges: ["NITs (Trichy, Surathkal, Warangal)", "IIITs", "BBDU", "Bennett University", "Amity University"],
    officialWebsite: "https://jeemain.nta.ac.in"
  },
  {
    id: "jee-advanced",
    name: "JEE Advanced",
    fullName: "Joint Entrance Examination (Advanced)",
    initialLetter: "A",
    category: "btech-mtech",
    categoryLabel: "B.Tech & M.Tech",
    badgeColor: "#B91C1C",
    conductingBody: "IIT Organizing Institute (Rotational)",
    courses: ["B.Tech", "B.S.", "Dual Degree B.Tech-M.Tech"],
    level: "Undergraduate (UG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Once a Year (May)",
    shortDescription: "Exclusive entrance exam for undergraduate admissions to all 23 Indian Institutes of Technology (IITs).",
    eligibility: "Top 2,50,000 rankers in JEE Main (Paper 1) + 75% in Class 12 board exams.",
    syllabusOverview: "In-depth concept applications in Physics, Chemistry, and Advanced Mathematics.",
    examPattern: "Two mandatory papers (Paper 1 & Paper 2) of 3 hours each containing MCQs, Numerical and Matrix matches.",
    keyDates: "Registration: April/May | Exam: Late May | Results: June",
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kanpur", "IIT Kharagpur"],
    officialWebsite: "https://jeeadv.ac.in"
  },
  {
    id: "gate",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    initialLetter: "G",
    category: "btech-mtech",
    categoryLabel: "B.Tech & M.Tech",
    badgeColor: "#059669",
    conductingBody: "IISc Bangalore and 7 IITs",
    courses: ["M.Tech", "M.E.", "Ph.D.", "PSU Recruitment"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Once a Year (February)",
    shortDescription: "National entrance examination for M.Tech admissions in IITs/NITs and entry-level officer recruitment in top PSUs.",
    eligibility: "Completed or in final year of B.Tech/B.E./B.Pharm/M.Sc in relevant technical disciplines.",
    syllabusOverview: "Discipline-specific engineering syllabus + General Aptitude and Engineering Mathematics.",
    examPattern: "65 questions for 100 marks (General Aptitude 15 marks + Technical Engineering Subject 85 marks).",
    keyDates: "Registration: Aug - Oct | Exam: First two weekends of February | Results: March",
    topColleges: ["IISc Bangalore", "IITs", "NITs", "Central Universities", "BBDU", "AIMT"],
    officialWebsite: "https://gate2026.iitr.ac.in"
  },
  {
    id: "cuet-ug-tech",
    name: "CUET UG (B.Tech)",
    fullName: "Common University Entrance Test (Undergraduate)",
    initialLetter: "C",
    category: "btech-mtech",
    categoryLabel: "B.Tech & M.Tech",
    badgeColor: "#2563EB",
    conductingBody: "National Testing Agency (NTA)",
    courses: ["B.Tech (CSE, AI, Robotics)", "B.Sc (Hons)", "Integrated Tech"],
    level: "Undergraduate (UG)",
    examMode: "Hybrid / CBT Examination",
    frequency: "Once a Year (May - June)",
    shortDescription: "Single gateway for undergraduate engineering & technical courses across Central, State, and top Private universities.",
    eligibility: "10+2 passed with Physics, Mathematics, Chemistry/Computer Science.",
    syllabusOverview: "Class 12 NCERT curriculum for Domain subjects (PCM/CS) + Language and General Test.",
    examPattern: "Domain subject tests of 45-60 minutes each with Multiple Choice Questions (+5 / -1 marking).",
    keyDates: "Registration: Feb - March | Exam: May - June | Results: July",
    topColleges: ["Delhi University (CIC)", "BHU", "Maharishi University", "BBDU", "Bennett University"],
    officialWebsite: "https://cuetug.ntaonline.in"
  },
  {
    id: "bitsat",
    name: "BITSAT",
    fullName: "BITS Admission Test",
    initialLetter: "B",
    category: "btech-mtech",
    categoryLabel: "B.Tech & M.Tech",
    badgeColor: "#D97706",
    conductingBody: "Birla Institute of Technology and Science (BITS Pilani)",
    courses: ["B.E. (Hons)", "M.Sc (Tech)"],
    level: "Undergraduate (UG)",
    examMode: "Computer Based Test (CBT)",
    frequency: "Twice a Year (Session 1: May, Session 2: June)",
    shortDescription: "Online entrance exam for admission into integrated first-degree B.E. programs at Pilani, Goa, and Hyderabad campuses.",
    eligibility: "10+2 with minimum 75% aggregate in Physics, Chemistry & Mathematics, and min 60% in each.",
    syllabusOverview: "Physics, Chemistry, Mathematics, English Proficiency, and Logical Reasoning.",
    examPattern: "130 questions for 390 marks in 3 hours with speed and accuracy bonus questions.",
    keyDates: "Registration: Jan - April | Session 1: May | Session 2: June",
    topColleges: ["BITS Pilani", "BITS Goa Campus", "BITS Hyderabad Campus"],
    officialWebsite: "https://bitsadmission.com"
  },
  {
    id: "viteee",
    name: "VITEEE",
    fullName: "VIT Engineering Entrance Examination",
    initialLetter: "V",
    category: "btech-mtech",
    categoryLabel: "B.Tech & M.Tech",
    badgeColor: "#7C3AED",
    conductingBody: "Vellore Institute of Technology (VIT)",
    courses: ["B.Tech (CSE, ECE, Civil, Mechanical, AI)"],
    level: "Undergraduate (UG)",
    examMode: "Computer Based Test (CBT)",
    frequency: "Once a Year (April)",
    shortDescription: "Entrance exam for B.Tech programs across VIT Vellore, Chennai, AP, and Bhopal campuses.",
    eligibility: "10+2 with 60% aggregate in Physics, Chemistry, and Mathematics/Biology.",
    syllabusOverview: "Maths/Bio (40), Physics (35), Chemistry (35), Aptitude (10), English (5).",
    examPattern: "125 MCQs in 2.5 hours with NO negative marking.",
    keyDates: "Registration: Nov - March | Exam: Late April | Results: May",
    topColleges: ["VIT Vellore", "VIT Chennai", "VIT Bhopal", "VIT AP"],
    officialWebsite: "https://vit.ac.in"
  },
  {
    id: "wbjee",
    name: "WBJEE",
    fullName: "West Bengal Joint Entrance Examination",
    initialLetter: "W",
    category: "btech-mtech",
    categoryLabel: "B.Tech & M.Tech",
    badgeColor: "#0284C7",
    conductingBody: "West Bengal Joint Entrance Examinations Board",
    courses: ["B.Tech", "B.E.", "B.Pharm"],
    level: "Undergraduate (UG)",
    examMode: "OMR Based (Pen & Paper)",
    frequency: "Once a Year (April)",
    shortDescription: "State-level entrance examination for engineering, technology, and pharmacy colleges in West Bengal.",
    eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 45% marks.",
    syllabusOverview: "Mathematics (100 marks), Physics (50 marks), Chemistry (50 marks).",
    examPattern: "Two papers (Paper 1: Maths, Paper 2: Physics & Chemistry) for a total of 200 marks.",
    keyDates: "Registration: Dec - Jan | Exam: April | Results: June",
    topColleges: ["Jadavpur University", "Heritage Institute of Technology", "IEM Kolkata"],
    officialWebsite: "https://wbjeeb.nic.in"
  },

  // --- Management Exams (MBA, PGDM, BBA) ---
  {
    id: "cat",
    name: "CAT",
    fullName: "Common Admission Test",
    initialLetter: "C",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#FA6400",
    conductingBody: "Indian Institutes of Management (IIMs Rotational)",
    courses: ["MBA", "PGDM", "Executive MBA"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Once a Year (Last Sunday of November)",
    shortDescription: "India's premier MBA entrance exam accepted by all 21 IIMs, FMS, SPJIMR, MDI, and top management universities.",
    eligibility: "Bachelor's Degree with minimum 50% marks (45% for SC/ST/PwD) or final year students.",
    syllabusOverview: "VARC (Verbal Ability & Reading Comprehension), DILR (Data Interpretation & Logical Reasoning), QA (Quantitative Aptitude).",
    examPattern: "66 questions in 120 minutes (40 mins per sectional time limit). +3 marks for correct, -1 for MCQ incorrect.",
    keyDates: "Notification: July | Registration: Aug - Sept | Exam: Late Nov | Results: Jan",
    topColleges: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "FMS Delhi", "Jaipuria Institute", "Amity University"],
    officialWebsite: "https://iimcat.ac.in"
  },
  {
    id: "xat",
    name: "XAT",
    fullName: "Xavier Aptitude Test",
    initialLetter: "X",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#0A3871",
    conductingBody: "XLRI Jamshedpur on behalf of XAMI",
    courses: ["MBA", "PGDM", "Global Business Leadership"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Once a Year (First Sunday of January)",
    shortDescription: "Renowned national MBA entrance exam testing analytical ability, decision-making, and critical business problem solving.",
    eligibility: "Recognized Bachelor's degree in any discipline or candidates appearing in final year.",
    syllabusOverview: "Decision Making (DM), Verbal and Logical Ability (VALR), Quantitative Ability & DI (QA & DI), and General Knowledge.",
    examPattern: "Around 100 questions in 210 minutes with XLRI's distinctive Decision Making section.",
    keyDates: "Registration: July - Nov | Exam: Early Jan | Results: Late Jan",
    topColleges: ["XLRI Jamshedpur & Delhi", "XIMB", "IMT Ghaziabad", "Jaipuria Institute", "BBDU"],
    officialWebsite: "https://xatonline.in"
  },
  {
    id: "mat",
    name: "MAT",
    fullName: "Management Aptitude Test",
    initialLetter: "M",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#059669",
    conductingBody: "All India Management Association (AIMA)",
    courses: ["MBA", "PGDM"],
    level: "Postgraduate (PG)",
    examMode: "CBT (Computer Based), PBT (Paper Based), and IBT (Internet Based)",
    frequency: "4 Times a Year (Feb, May, Sept, Dec)",
    shortDescription: "Nationally recognized, high-frequency test accepted by over 600+ AICTE-approved B-Schools across India.",
    eligibility: "Graduate in any discipline from a recognized university. Final year students also eligible.",
    syllabusOverview: "Language Comprehension, Mathematical Skills, Data Analysis & Sufficiency, Intelligence & Critical Reasoning, Indian & Global Environment.",
    examPattern: "150 questions in 120 minutes with +1 mark for correct and -0.25 mark for wrong answers.",
    keyDates: "Cycles in Feb, May, Sept & Dec | Quick results within 2 weeks",
    topColleges: ["Jaipuria Institute of Management", "Amity University", "BBDU", "AIMT", "Bennett University"],
    officialWebsite: "https://mat.aima.in"
  },
  {
    id: "cmat",
    name: "CMAT",
    fullName: "Common Management Admission Test",
    initialLetter: "C",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#2563EB",
    conductingBody: "National Testing Agency (NTA)",
    courses: ["MBA", "PGDM"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Once a Year (May)",
    shortDescription: "AICTE-affiliated national MBA entrance exam accepted by all AICTE-approved institutions and university departments.",
    eligibility: "Graduation in any discipline with minimum 50% marks (45% for reserved categories).",
    syllabusOverview: "Quantitative Techniques & DI, Logical Reasoning, Language Comprehension, General Awareness, Innovation & Entrepreneurship.",
    examPattern: "100 questions (20 per section) for 400 marks in 180 minutes. +4 for correct, -1 for incorrect.",
    keyDates: "Registration: Feb - April | Exam: May | Results: June",
    topColleges: ["JBIMS Mumbai", "SIMSREE", "Jaipuria Institute", "AIMT Lucknow", "BBDU Lucknow"],
    officialWebsite: "https://cmat.nta.nic.in"
  },
  {
    id: "snap",
    name: "SNAP",
    fullName: "Symbiosis National Aptitude Test",
    initialLetter: "S",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#DC2626",
    conductingBody: "Symbiosis International (Deemed University)",
    courses: ["MBA (General, Marketing, IT, Telecom, Operations)"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT)",
    frequency: "3 Attempts in December (Best score counted)",
    shortDescription: "University-level MBA entrance exam for admission into all 16 Symbiosis B-Schools.",
    eligibility: "Graduate with 50% marks (45% for SC/ST) from any statutory or recognized university.",
    syllabusOverview: "General English (15), Analytical & Logical Reasoning (25), Quantitative, Data Interpretation & Data Sufficiency (20).",
    examPattern: "Speed test of 60 questions in 60 minutes. +1 mark for correct, -0.25 for incorrect.",
    keyDates: "Registration: Aug - Nov | Exam: 3 sessions in Dec | Results: Jan",
    topColleges: ["SIBM Pune", "SCMHRD Pune", "SIIB Pune", "SIBM Bangalore", "SIBM Hyderabad"],
    officialWebsite: "https://snaptest.org"
  },
  {
    id: "nmat",
    name: "NMAT by GMAC",
    fullName: "NMIMS Management Aptitude Test",
    initialLetter: "N",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#9333EA",
    conductingBody: "Graduate Management Admission Council (GMAC)",
    courses: ["MBA", "PGDM"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Adaptive Test",
    frequency: "Testing window from October to December (up to 3 attempts)",
    shortDescription: "Candidate-friendly entrance test for NMIMS Mumbai and 40+ leading partner business schools.",
    eligibility: "Bachelor's degree (10+2+3/4) in any discipline with minimum 50% aggregate marks.",
    syllabusOverview: "Language Skills (36), Quantitative Skills (36), Logical Reasoning (36).",
    examPattern: "108 questions in 120 minutes with adaptive sectional scoring and NO negative marking.",
    keyDates: "Registration: Aug - Oct | Testing Window: Oct - Dec | Retakes allowed",
    topColleges: ["NMIMS School of Business Management", "K J Somaiya", "XIM University", "SDA Bocconi Asia Center"],
    officialWebsite: "https://nmat.org"
  },
  {
    id: "cuet-pg-mba",
    name: "CUET PG (MBA)",
    fullName: "Common University Entrance Test (Postgraduate)",
    initialLetter: "C",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#0284C7",
    conductingBody: "National Testing Agency (NTA)",
    courses: ["MBA", "PGDM", "Master in Management Studies"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT)",
    frequency: "Once a Year (March)",
    shortDescription: "Centralized admission test for MBA programs in Central, State, and participating private universities.",
    eligibility: "Bachelor's degree with 50% marks in any stream.",
    syllabusOverview: "Language Comprehension, Verbal Ability, Mathematical/Quantitative Ability, Data Interpretation, Logical Reasoning.",
    examPattern: "75 questions for 300 marks in 105 minutes. +4 for correct, -1 for negative.",
    keyDates: "Registration: Dec - Feb | Exam: March | Results: April",
    topColleges: ["TISS Mumbai", "JNU", "BHU Varanasi", "BBDU", "Maharishi University"],
    officialWebsite: "https://pgcuet.samarth.ac.in"
  },
  {
    id: "ipmat",
    name: "IPMAT",
    fullName: "Integrated Program in Management Aptitude Test",
    initialLetter: "I",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#EA580C",
    conductingBody: "IIM Indore & IIM Rohtak",
    courses: ["BBA + MBA (5-Year Dual Degree Integrated Program)"],
    level: "Undergraduate to Postgraduate (Integrated)",
    examMode: "Computer Based Test (CBT)",
    frequency: "Once a Year (May)",
    shortDescription: "Prestigious entrance test for Class 12 students seeking direct entry into IIM 5-Year Integrated Management degrees.",
    eligibility: "10+2 or equivalent with minimum 60% aggregate marks (55% for SC/ST/PwD) and age limit under 20.",
    syllabusOverview: "Quantitative Ability (Short Answer & MCQ) and Verbal Ability.",
    examPattern: "100 questions in 120 minutes with sectional timing of 40 minutes each.",
    keyDates: "Registration: Feb - April | Exam: May | Interview & Merit: June",
    topColleges: ["IIM Indore", "IIM Rohtak", "IIM Ranchi", "Nirma University", "TAPMI BBA"],
    officialWebsite: "https://iimidr.ac.in"
  },
  {
    id: "mah-mba-cet",
    name: "MAH MBA CET",
    fullName: "Maharashtra MBA / MMS Common Entrance Test",
    initialLetter: "M",
    category: "management",
    categoryLabel: "MBA, PGDM & BBA",
    badgeColor: "#16A34A",
    conductingBody: "State Common Entrance Test Cell, Maharashtra",
    courses: ["MBA", "MMS (Master of Management Studies)"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Once a Year (March)",
    shortDescription: "State-level gateway for MBA/MMS admissions across 300+ management colleges in Maharashtra.",
    eligibility: "Bachelor's degree with at least 50% marks (45% for backward class categories).",
    syllabusOverview: "Logical Reasoning (75), Abstract Reasoning (25), Quantitative Aptitude (50), Verbal Ability/Reading Comprehension (50).",
    examPattern: "200 questions in 150 minutes with 1 mark per question and NO negative marking.",
    keyDates: "Registration: Jan - Feb | Exam: March | CAP Rounds: June - July",
    topColleges: ["JBIMS Mumbai", "SIMSREE", "PUMBA", "KJ Somaiya", "Welingkar"],
    officialWebsite: "https://cetcell.mahacet.org"
  },

  // --- Computer Applications Exams (BCA & MCA) ---
  {
    id: "nimcet",
    name: "NIMCET",
    fullName: "NIT MCA Common Entrance Test",
    initialLetter: "N",
    category: "computer-apps",
    categoryLabel: "BCA & MCA",
    badgeColor: "#0A3871",
    conductingBody: "National Institutes of Technology (Rotational NIT)",
    courses: ["MCA (Master of Computer Applications)"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Once a Year (June)",
    shortDescription: "India's highest-prestige entrance examination for Master of Computer Applications (MCA) admissions into NITs.",
    eligibility: "B.Sc / B.Sc (Hons) / BCA / BIT with Mathematics/Statistics as one subject with 60% marks (6.5 CGPA).",
    syllabusOverview: "Mathematics (50 questions), Analytical Ability & Logical Reasoning (40), Computer Awareness (20), General English (10).",
    examPattern: "120 questions for 1000 marks in 2 hours with weighted sectional scoring (+4 to +8 marks per correct answer).",
    keyDates: "Notification: Feb | Registration: March - April | Exam: Early June | Counselling: July",
    topColleges: ["NIT Trichy", "NIT Surathkal", "NIT Warangal", "NIT Allahabad (MNNIT)", "NIT Calicut"],
    officialWebsite: "https://nimcet.admissions.nic.in"
  },
  {
    id: "cuet-pg-mca",
    name: "CUET PG (MCA)",
    fullName: "Common University Entrance Test PG - Computer Applications",
    initialLetter: "C",
    category: "computer-apps",
    categoryLabel: "BCA & MCA",
    badgeColor: "#2563EB",
    conductingBody: "National Testing Agency (NTA)",
    courses: ["MCA", "M.Sc Computer Science", "M.Sc Data Science"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT)",
    frequency: "Once a Year (March)",
    shortDescription: "Centralized admission test for MCA programs across central, state, and top private universities in India.",
    eligibility: "BCA, B.Sc (CS/IT), or Bachelor's Degree with Mathematics at 10+2 level or graduation level with 50% marks.",
    syllabusOverview: "Data Structures, Operating Systems, Computer Architecture, Discrete Math, C/C++ Programming, Digital Electronics.",
    examPattern: "75 subject-specific questions in 105 minutes for 300 marks (+4 for correct, -1 for wrong).",
    keyDates: "Registration: Dec - Feb | Exam: March | Results: April | Admissions: May - July",
    topColleges: ["JNU Delhi", "BHU Varanasi", "BBDU Lucknow", "AIMT Lucknow", "Maharishi University"],
    officialWebsite: "https://pgcuet.samarth.ac.in"
  },
  {
    id: "mah-mca-cet",
    name: "MAH MCA CET",
    fullName: "Maharashtra MCA Common Entrance Test",
    initialLetter: "M",
    category: "computer-apps",
    categoryLabel: "BCA & MCA",
    badgeColor: "#059669",
    conductingBody: "State Common Entrance Test Cell, Maharashtra",
    courses: ["MCA (2-Year Professional Degree)"],
    level: "Postgraduate (PG)",
    examMode: "Computer Based Test (CBT - Online)",
    frequency: "Once a Year (March/April)",
    shortDescription: "Official state entrance test for 2-year Master of Computer Applications seats across Maharashtra engineering & tech colleges.",
    eligibility: "BCA or Bachelor Degree in Computer Science with 50% marks, or B.Sc/B.Com/B.A. with Math at 10+2 or Graduation with 50%.",
    syllabusOverview: "Mathematics & Statistics (30), Logical/Abstract Reasoning (30), English Comprehension (20), Computer Concepts (20).",
    examPattern: "100 questions for 200 marks in 90 minutes. +2 marks per question with NO negative marking.",
    keyDates: "Registration: Jan - Feb | Exam: March | Results: April | CAP Centralized Seat Allotment: July",
    topColleges: ["VJTI Mumbai", "SPIT Mumbai", "MET Institute of Computer Science", "PUMBA"],
    officialWebsite: "https://cetcell.mahacet.org"
  },
  {
    id: "ipu-cet",
    name: "IPU CET (BCA / MCA)",
    fullName: "Indraprastha University Common Entrance Test",
    initialLetter: "I",
    category: "computer-apps",
    categoryLabel: "BCA & MCA",
    badgeColor: "#FA6400",
    conductingBody: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    courses: ["BCA", "MCA (Software Engineering)"],
    level: "UG & PG",
    examMode: "Computer Based Test (CBT)",
    frequency: "Once a Year (April/May)",
    shortDescription: "Prominent university entrance exam for admissions to BCA & MCA colleges affiliated with GGSIPU in Delhi NCR.",
    eligibility: "10+2 with 50% marks + English & Mathematics or Computer Applications for BCA; BCA/B.Sc IT or Math with 50% for MCA.",
    syllabusOverview: "English Language, Mathematics, Computer Awareness, and General Knowledge.",
    examPattern: "100 MCQs in 150 minutes for 400 marks (+4 for correct, -1 for incorrect).",
    keyDates: "Registration: Feb - April | Exam: Late April/May | Counselling: June",
    topColleges: ["MAIT Delhi", "MSIT Delhi", "BVICAM Delhi", "VIPS Delhi"],
    officialWebsite: "https://ipu.ac.in"
  },
  {
    id: "cuet-ug-bca",
    name: "CUET UG (BCA)",
    fullName: "Common University Entrance Test (BCA Pathway)",
    initialLetter: "C",
    category: "computer-apps",
    categoryLabel: "BCA & MCA",
    badgeColor: "#7C3AED",
    conductingBody: "National Testing Agency (NTA)",
    courses: ["BCA", "B.Sc Computer Science", "B.Sc Information Technology"],
    level: "Undergraduate (UG)",
    examMode: "Hybrid / Computer Based Test",
    frequency: "Once a Year (May)",
    shortDescription: "All-India entrance pathway for admission into undergraduate BCA & Computer Science programs across leading universities.",
    eligibility: "10+2 in any stream with Mathematics or Computer Science / Informatics Practices preferred.",
    syllabusOverview: "Section 1: English, Section 2: Mathematics / Applied Math or Computer Science, Section 3: General Test.",
    examPattern: "MCQs with 50 questions per domain (attempt 40) in 45-60 minutes. +5 for correct, -1 for incorrect.",
    keyDates: "Registration: Feb - March | Exam: May | Results: July",
    topColleges: ["BBDU Lucknow", "Amity University", "Maharishi University", "AIMT Lucknow", "Bennett University"],
    officialWebsite: "https://cuetug.ntaonline.in"
  }
];

