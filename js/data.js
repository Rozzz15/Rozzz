// ========================================
// SITE DATA (CENTRALIZED CONTENT)
// Edit this object to update the entire website
// ========================================
const siteData = {
  personal: {
  name: "Rozel O. Ramos",
  title: "Professional Developer & Creative Problem Solver",
  email: "rozelramos17@gmail.com",
  altEmail: "rozelramos15@gmail.com",
  phone: "09166219195",
  location: "Brgy. Talolong Lopez, Quezon",
  image: "images/3.png"
  },
  hero: {
  subtitle: "Web & Application Developer • Digital Designer",
  titleStart: "I'm",
  titleName: "Rozel O. Ramos",
  description: "I design and build elegant websites and powerful applications that deliver seamless user experiences and lasting value.",
  ctaText: "Start a Project",
  ctaLink: "#contact"
  },
  about: {
  label: "Get to Know Me",
  title: "About Me",
  heading: "Empowering <span>Ideas</span> Through Code",
  bio: [
  "Hello! My name is Rozel O. Ramos, a BSIT student and a graduate of DICT at Polytechnic University of the Philippines (PUP). I am passionate about building innovative digital solutions, including websites, applications, and system-based projects.",
  "I enjoy transforming ideas into functional, user-friendly designs while continuously learning new technologies to improve my skills. My goal is to create efficient, visually appealing, and reliable applications that solve real-world problems."
  ],
  stats: [
  { number: 4, label: "Years Experience" },
  { number: 8, label: "Projects Completed" },
  { number: 24, label: "Happy Clients" }
  ]
  },
  resume: {
  summary: [
  "Passionate professional dedicated to delivering excellence in every project. With a keen eye for detail and a commitment to quality, I specialize in creating digital experiences that leave lasting impressions. My approach combines creativity with technical expertise, ensuring that each project not only meets but exceeds expectations.",
  "Currently pursuing a Bachelor of Science in Information Technology and a graduate of DICT at PUP, I focus on building efficient and reliable applications that solve real-world problems."
  ],
  experience: [
  {
  role: "Senior Developer",
  period: "2023 - Present",
  company: "Freelance / Projects",
  items: [
  "Lead development of cutting-edge digital solutions",
  "Collaborate with cross-functional teams to deliver high-quality products",
  "Optimize performance and ensure scalable architecture"
  ]
  }
  ],
  skills: [
  {
  category: "Frontend Development",
  items: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "TypeScript"]
  },
  {
  category: "Backend Development",
  items: ["Node.js", "Python", "PHP", "RESTful APIs", "GraphQL"]
  },
  {
  category: "Tools & Technologies",
  items: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Tailwind CSS"]
  }
  ],
  education: [
  {
  degree: "BS in Information Technology",
  period: "Current",
  school: "Polytechnic University of the Philippines (PUP)",
  description: "Focused on software development, cloud systems, and innovative IT solutions."
  },
  {
  degree: "Diploma in Information Communication Technology (DICT)",
  period: "Graduated",
  school: "Polytechnic University of the Philippines (PUP)",
  description: "Foundation in networking, programming, and digital communications."
  }
  ]
  },
  social: {
  facebook: "https://www.facebook.com/rozelolanda.ramos.9",
  instagram: "https://www.instagram.com/urboy.rozz/",
  github: "https://github.com/Rozzz15",
  linkedin: "#"
  },
  footer: {
  tagline: "Excellence in every endeavor"
  },
  aiBot: {
  name: "YNA",
  greeting: {
  en: "Hello! I'm YNA, Rozel's virtual assistant. How can I help you today?",
  tl: "Kumusta! Ako si YNA, ang virtual assistant ni Rozel. May maipaglilingkod ba ako sa iyo?"
  },
  placeholder: {
  en: "Ask me about Rozel's experience, skills, or projects...",
  tl: "Magtanong tungkol sa karanasan, skills, o projects ni Rozel..."
  },
  responses: [
  {
  keywords: ["hi", "hello", "kumusta", "hey", "halo", "morning", "afternoon", "evening", "greetings"],
  en: "Hello! I'm YNA, Rozel's personal AI assistant. I can tell you about his projects, skills, experience, or how to contact him. What's on your mind?",
  tl: "Kumusta! Ako si YNA, ang personal AI assistant ni Rozel. Maaari kitang tulungan tungkol sa kanyang mga projects, skills, karanasan, o kung paano siya makontak. Ano ang maipaglilingkod ko?"
  },
  {
  keywords: ["how are you", "musta", "how r u", "kabalitaan", "ayos"],
  en: "I'm functioning perfectly and ready to help! How's your day going? Would you like to see Rozel's latest work?",
  tl: "Mabuti naman ako at laging handang tumulong! Kumusta ang araw mo? Gusto mo bang makita ang mga huling proyekto ni Rozel?"
  },
  {
  keywords: ["experience", "trabaho", "karanasan", "work", "background", "history", "career", "nagtatrabaho"],
  en: "Rozel is a professional developer with over 1 year of experience in creating premium digital experiences, focusing on elegant and functional web solutions.",
  tl: "Si Rozel ay isang propesyonal na developer na may higit sa 1 taon na karanasan sa paggawa ng mga premium na digital experiences, lalo na sa mga eleganteng web solutions."
  },
  {
  keywords: ["skills", "kakayahan", "tech", "stack", "knowledge", "expert", "kayang gawin", "marunong"],
  en: "Rozel is an expert in Frontend (HTML, CSS, JavaScript, React, Vue.js), Backend (Node.js, Python, PHP), and UI/UX design tools. He focuses on building scalable and responsive applications.",
  tl: "Dalubhasa si Rozel sa Frontend (HTML, CSS, JS, React, Vue.js), Backend (Node.js, Python, PHP), at UI/UX design. Mahusay siya sa paggawa ng mga scalable at responsive na websites."
  },
  {
  keywords: ["projects", "proyekto", "portfolio", "awa", " gawa", "samples", "showcase", "sites"],
  en: "Rozel has worked on several featured projects including 'Monica Portfolio', 'Jimuel Gonzales', and others. You can scroll back up to the 'Featured Projects' section to see the full list with galleries!",
  tl: "Maraming nagawang proyekto si Rozel gaya ng 'Monica Portfolio', 'Jimuel Gonzales', at marami pang iba. Maaari mong tingnan ang 'Featured Projects' section sa itaas para sa buong listahan."
  },
  {
  keywords: ["contact", "email", "phone", "tawag", "mensahe", "reach", "hire", "talk", "konek", "location", "address", "tira", "lugar"],
  en: "You can reach Rozel via email at rozelramos17@gmail.com, call 09166219195, or visit him at Brgy. Talolong Lopez, Quezon. You can also use the contact form at the bottom of this page!",
  tl: "Maaari mong makontak si Rozel sa rozelramos17@gmail.com, tumawag sa 09166219195, o bisitahin siya sa Brgy. Talolong Lopez, Quezon. Pwede mo ring gamitin ang contact form sa ibaba."
  },
  {
  keywords: ["education", "school", "university", "degree", "aral", "tapos", "kolehiyo", "course"],
  en: "Rozel holds a Bachelor's Degree in Computer Science, where he developed a strong foundation in software engineering and system design.",
  tl: "Si Rozel ay nagtapos ng Bachelor's Degree in Computer Science, kung saan nakuha niya ang matibay na pundasyon sa software engineering at system design."
  },
  {
  keywords: ["service", "price", "bayad", "cost", "magkano", "singil", "offers", "packages", "quote"],
  en: "Rozel offers custom web development, UI/UX design, and branding services. Pricing depends on the complexity of your project. Let's discuss your vision—use the contact form below to get a quote!",
  tl: "Nag-aalok si Rozel ng web development, UI/UX design, at branding. Ang presyo ay depende sa hirap ng proyekto. Pag-usapan natin—gamitin ang contact form sa ibaba para sa quote!"
  },
  {
  keywords: ["social", "facebook", "instagram", "github", "linkedin", "links", "ig", "fb"],
  en: "Follow Rozel on Facebook, Instagram, and GitHub for latest updates and code snippets. Links are available at the footer of this website!",
  tl: "I-follow si Rozel sa Facebook, Instagram, at GitHub para sa mga updates. Ang mga links ay nasa footer ng website na ito!"
  },
  {
  keywords: ["resume", "cv", "biodata", "profile"],
  en: "You can view and download Rozel's full professional resume by clicking the 'Download Resume' button in the resume section above.",
  tl: "Maaari mong makita at ma-download ang buong resume ni Rozel sa pamamagitan ng pag-click sa 'Download Resume' button sa resume section sa itaas."
  }
  ],
  fallback: {
  en: "I'm not sure about that. Would you like to leave a message via the contact form?",
  tl: "Paumanhin, hindi ko po sigurado ang sagot diyan. Gusto niyo bang mag-iwan ng mensahe sa contact form?"
  }
  }
};

// ========================================
const projectsData = [
  {
  id: 1,
  title: "Jimuel Gonzales",
  category: "Web Portfolio",
  description: "Jimuel Gonzales is a visual storyteller and photographer showcasing a refined digital portfolio focused on emotion-driven imagery and timeless aesthetics. The website presents selected works across editorial, lifestyle, fashion, and fine art portraiture, highlighting a strong artistic vision and thoughtful design. It features a professional biography, curated portfolio, and clear contact section for collaborations and booking inquiries. This platform serves as both a creative showcase and a professional branding tool, designed to engage clients, collaborators, and industry partners.",
  image: ["images/jim1.png", "images/jim2.png", "images/jim3.png", "images/jim4.png", "images/jim5.png"],  video: "videos/jimuel.mp4", // Add video path here: e.g., "videos/demo.mp4"
  link: "https://jimuelgonzales.netlify.app/",
  featured: true,
  date: "2024-01-15"
  },
  {
  id: 2,
  title: "Monica Portfolio",
  category: "Web Portfolio",
  description: "Monica Portfolio is a sophisticated digital platform tailored for high-end fashion and lifestyle content. It features a curated selection of creative projects, emphasizing timeless elegance and premium positioning. The site integrates a cohesive visual identity with modern navigation, providing an immersive experience for industry professionals and fashion enthusiasts alike. Designed as a comprehensive branding tool, it showcases a unique artistic perspective through high-quality imagery and thoughtful editorial layouts.",
  image: ["images/mon1.png", "images/mon2.png", "images/mon3.png", "images/mon4.png", "images/mon5.png", "images/mon6.png"],  video: null, // Add video path here: e.g., "videos/demo.mp4"
  link: "https://monicaaa.netlify.app/",
  featured: true,
  date: "2023-11-20"
  },
  {
  id: 3,
  title: "Patrick David Rosario",
  category: "Web Portfolio",
  description: "Patrick David Rosario's portfolio is a dynamic showcase of creative digital design and mobile-first experiences. It highlights a specialized focus on intuitive user interfaces and seamless interaction design, blending modern aesthetic patterns with functional excellence. The platform serves as a professional gateway for design collaborations, featuring a robust gallery of work that emphasizes accessibility, smooth animations, and a user-centric approach to digital storytelling in the mobile landscape.",
  image: ["images/pat1.png", "images/pat2.png", "images/pat3.png", "images/pat4.png", "images/pat5.png", "images/pat6.png"],  video: "videos/patrick.mp4", // Add video path here: e.g., "videos/demo.mp4"
  link: "https://patrickdavidrosario.netlify.app/",
  featured: true,
  date: "2023-09-05"
  },
  {
  id: 4,
  title: "Vincent Carl Matucabe",
  category: "Web Portfolio",
  description: "Vincent Carl Matucabe's platform represents the intersection of technical engineering and modern web architecture. This comprehensive web application showcase highlights scalable infrastructure, robust API integrations, and cloud-native solutions. Built with a focus on reliability and high performance, the portfolio demonstrates a mastery of full-stack development practices, offering a professional lens into complex system designs and modern software development cycles for enterprise-level digital solutions.",
  image: ["images/vin1.png", "images/vin2.png", "images/vin3.png", "images/vin4.png", "images/vin5.png"],  video: "videos/vincent.mp4", // Add video path here: e.g., "videos/demo.mp4"
  link: "https://vincentcarlmatucabe.netlify.app/",
  featured: true,
  date: "2023-05-12"
  },
  {
  id: 5,
  title: "Luis Fernandez",
  category: "Web Portfolio",
  description: "Luis Fernandez Portfolio is a professional corporate-focused digital presence designed for streamlined information delivery and brand authority. It features a responsive layout and an integrated content management strategy that allows for seamless updates and professional project tracking. The website is optimized for modern business environments, emphasizing clean typography, intuitive navigation, and a structured presentation of professional services and achievements.",
  image: ["images/luz1.png", "images/luz2.png", "images/luz3.png", "images/luz4.png", "images/luz5.png"],  video: null, // Add video path here: "videos/luis-demo.mp4"
  link: "https://luisfernandezz.netlify.app/",
  featured: false,
  date: "2023-04-10"
  },
  {
  id: 6,
  title: "Jasmine H. Monterde",
  category: "Web Portfolio",
  description: "Jasmine H. Monterde Portfolio is a premium healthcare-oriented digital platform crafted to convey professionalism, reliability, and operational excellence. It incorporates a responsive interface and a refined content system that enables streamlined updates and clear service representation. Designed for modern medical and clinical environments, the site prioritizes elegant typography, intuitive navigation, and structured layouts that elevate brand authority, service clarity, and professional credibility.",
  image: ["images/jas.png", "images/jas2.png", "images/jas3.png", "images/jas4.png", "images/jas5.png", "images/jas6.png", "images/jas7.png"],  video: "videos/jasmine.mp4", // Add video path here: e.g., "videos/demo.mp4"
  link: "https://jassportfoliova.netlify.app/",
  featured: false,
  date: "2023-04-10"
  },
  {
  id: 7,
  title: "EYIR Medical Clinic",
  category: "Website",
  description: "EYIR Medical Clinic Website is a premium healthcare-focused digital platform designed to reflect professionalism, trust, and clinical excellence. The site features a fully responsive layout and an organized content management system, enabling seamless updates and clear presentation of services. Tailored for modern medical and clinic environments, it emphasizes refined typography, intuitive navigation, and structured layouts to strengthen brand authority, showcase services with clarity, and reinforce professional credibility.",
  image: ["images/eyir1.png", "images/eyir2.png", "images/eyir3.png", "images/eyir4.png", "images/eyir5.png", "images/eyir6.png"],  video: "videos/eyir-clinic-tour.mp4",
  link: "https://eyirclinic.netlify.app/",
  featured: false,
  date: "2023-04-10"
  },
  {
  id: 8,
  title: "Kainan sa Garahe",
  category: "Website",
  description: "Kainan Sa Garahe Website is a premium restaurant-focused digital platform designed to reflect warmth, authenticity, and culinary excellence. The site features a fully responsive layout and a structured content management system, enabling seamless updates and a clear presentation of menus, promotions, and services. Tailored for modern dining experiences, it emphasizes clean typography, intuitive navigation, and organized layouts to strengthen brand identity, showcase signature dishes with clarity, and reinforce the restaurant’s reputation for quality food and inviting ambiance.",
  image: ["images/kainan1.png", "images/kainan2.png", "images/kainan3.png", "images/kainan4.png", "images/kainan5.png", "images/kainan6.png", "images/kainan7.png"],  video: "videos/KSG.mp4",
  link: "https://kainansagaraherestu.netlify.app/",
  featured: false,
  date: "2023-04-10"
  }

];
