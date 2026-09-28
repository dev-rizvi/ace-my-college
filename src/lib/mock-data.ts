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
    title: "Engineering & Technology",
    icon: "Cpu",
    popularDegrees: ["B.Tech (CSE, AI & ML)", "M.Tech", "Data Science", "Robotics"],
    topCareers: ["Software Architect", "AI Engineer", "Cybersecurity Specialist", "Cloud Architect"],
    duration: "4 Years (UG) / 2 Years (PG)",
    demand: "High Growth",
    accentColor: "#FA6400"
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
    id: "management",
    title: "Management & Commerce",
    icon: "Briefcase",
    popularDegrees: ["MBA (Dual Spec)", "BBA", "B.Com (Hons)", "FinTech & Analytics"],
    topCareers: ["Investment Banker", "Product Manager", "Brand Strategist", "Business Analyst"],
    duration: "2 - 3 Years",
    demand: "Top Corporate ROI",
    accentColor: "#041630"
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
  },
  {
    id: "global",
    title: "Postgraduate & Global Pathways",
    icon: "Globe",
    popularDegrees: ["Global MBA", "MS in US/UK/Canada", "Dual Degree Programs"],
    topCareers: ["Global Consultant", "Research Fellow", "Tech Lead", "International Trade"],
    duration: "1 - 2 Years",
    demand: "Global Mobility",
    accentColor: "#0284C7"
  },
  {
    id: "more",
    title: "Applied Sciences & Humanities",
    icon: "Sparkles",
    popularDegrees: ["Journalism & Mass Comm", "Psychology", "Hotel Management", "Animation"],
    topCareers: ["Media Strategist", "Clinical Psychologist", "Hospitality Executive", "Content Director"],
    duration: "3 Years",
    demand: "Dynamic Emerging",
    accentColor: "#2563EB"
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
    shortName: "BBDU",
    city: "Lucknow",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Law & Legal Studies", "Design & Architecture"],
    image: "/images/colleges/bbdu.jpg",
    campusType: "100+ Acre Tech & Sports Campus",
    established: 2010,
    accreditation: "UGC & AICTE Approved",
    feesRange: "₹1.2L - ₹2.5L / year",
    avgPackage: "₹6.5 LPA",
    highestPackage: "₹44 LPA",
    featured: true,
    tagline: "Premier private university campus in Lucknow with state-of-the-art sports and tech labs."
  },
  {
    id: "amity-lucknow",
    name: "Amity University, Lucknow Campus",
    shortName: "Amity Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Law & Legal Studies", "Applied Sciences & Humanities"],
    image: "/images/colleges/amity.jpg",
    campusType: "Global High-Tech Wi-Fi Campus",
    established: 2004,
    accreditation: "NAAC A+ Accredited",
    feesRange: "₹1.8L - ₹3.2L / year",
    avgPackage: "₹7.2 LPA",
    highestPackage: "₹38 LPA",
    featured: true,
    tagline: "Global curriculum, vibrant campus life, and extensive multinational placements."
  },
  {
    id: "integral-lucknow",
    name: "Integral University",
    shortName: "Integral",
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
    tagline: "Reputed for premier medical, allied health sciences, and engineering research facilities."
  },
  {
    id: "bennett-university",
    name: "Bennett University (Times Group)",
    shortName: "Bennett",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce", "Law & Legal Studies", "Applied Sciences & Humanities"],
    image: "/images/colleges/bennett.jpg",
    campusType: "Times Group Ivy-League Pedagogy",
    established: 2016,
    accreditation: "UGC Recognized",
    feesRange: "₹3.2L - ₹4.8L / year",
    avgPackage: "₹11.2 LPA",
    highestPackage: "₹1.2 CPA",
    featured: true,
    tagline: "Backed by The Times Group with premier global partnerships and industry tie-ups."
  },
  {
    id: "srm-modinagar",
    name: "SRM Institute of Science & Technology (NCR)",
    shortName: "SRM NCR",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    streams: ["Engineering & Technology", "Management & Commerce"],
    image: "/images/colleges/srm.jpg",
    campusType: "Engineering & Innovation Hub",
    established: 1997,
    accreditation: "NAAC A++ Grade",
    feesRange: "₹2.0L - ₹3.5L / year",
    avgPackage: "₹8.4 LPA",
    highestPackage: "₹50 LPA",
    featured: true,
    tagline: "National powerhouse for computer science, robotics, and core engineering."
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
    featured: true,
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

export const FAQS: FAQItem[] = [
  {
    category: 'student',
    question: "Is student career counselling really free at ACE MY CAMPUS?",
    answer: "Yes, 100%! Our initial career discovery, profile evaluation, and course guidance sessions for students and parents are completely free. We believe every student deserves clarity without commercial pressure."
  },
  {
    category: 'student',
    question: "How do you help compare colleges objectively?",
    answer: "We analyze verified metrics including actual tuition fee ROI, verified average placement packages, NAAC/NIRF accreditation status, faculty-to-student ratios, and authentic alumni reviews—not just marketing brochures."
  },
  {
    category: 'student',
    question: "What does 'Career Before College' mean?",
    answer: "Most students pick a college first and figure out their career later. We reverse that flawed approach: first, we identify your true strengths and career trajectory, and only then choose the right course and best-fit institution."
  },
  {
    category: 'college',
    question: "How does ACE MY CAMPUS assist universities with student recruitment?",
    answer: "We act as your dedicated strategic education marketing partner. We run targeted digital campaigns, school outreach conclaves, tele-counselling follow-ups, and campus branding to connect you with genuinely interested and academically aligned students."
  },
  {
    category: 'college',
    question: "Where is ACE MY CAMPUS headquartered?",
    answer: "We are headquartered in Lucknow, Uttar Pradesh, with active outreach and counselling networks across North and Central India, partnering with 500+ premier colleges and universities."
  },
  {
    category: 'general',
    question: "How can I book an in-person or online counselling session?",
    answer: "Simply click 'Get Guidance' or 'Get Free Counselling' anywhere on this site, fill out your current class and interested stream, or reach our counsellors directly on WhatsApp."
  }
];
