export const WORK_EXPERIENCES = [
  {
    title: `Software Engineer`,
    company: `PT Edukarir Global Nusantara`,
    period: `February - May 2025`,
    location: `Remote`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Designed core features for the RBB Try-Out platform with a focus on UX and scalability.`,
      `Developed and deployed an auto-certificate generator for 350+ users.`,
      `Improved backend performance and reduced manual tasks.`,
    ],
  },
  {
    title: `Website Administrator`,
    company: `Information System Department at UIN Suska Riau`,
    period: `December 2023 - January 2025`,
    location: `Pekanbaru, Indonesia`,
    type: `Contract`,
    current: false,
    responsibilities: [
      `Maintained website with 100% uptime and improved structure.`,
      `Published 30+ updates to keep students informed.`,
      `Enhanced accessibility and resolved issues, reducing errors by 30%.`,
    ],
  },
  {
    title: `Laboratory Assistant`,
    company: `Information System Department at UIN Suska Riau`,
    period: `October 2023 - December 2024`,
    location: `Pekanbaru, Indonesia`,
    type: `Contract`,
    current: false,
    responsibilities: [
      `Served as a Practicum Assistant for the Computer Network Management course.`,
      `Handled and managed networks to ensure optimal connectivity.`,
      `Managed 66 computers and 5 active switches across 3 laboratories to ensure smooth hardware operations.`,
      `Managed laboratory software, ensuring updates and functionality for tools like SSE UMPTKIN, Visual Studio Code, NetBeans, Cisco Packet Tracer, VirtualBox, XAMPP, and more.`,
    ],
  },
  {
    title: `Software Engineer`,
    company: `Information System Department at UIN Suska Riau`,
    period: `January 2024 - August 2024`,
    location: `Pekanbaru, Indonesia`,
    type: `Project-Based Internship`,
    current: false,
    responsibilities: [
      `Developed the Laboratory Assistant Registration System (LARIS) as part of a practical work internship project.`,
      `Conducted a feasibility test for the Laboratory Assistant Registration System (LARIS) using the PIECES method, involving 41 respondents (students and lecturers), and achieved an average score of 83.23% (Highly Feasible).`,
      `Performed system analysis and design using Object-Oriented Analysis and Design (OOAD), including Use Case Diagram, Activity Diagram, Sequence Diagram, Class Diagram, Database Design, Menu Structure, and Interface Design.`,
      `Developed system with Laravel 10.`,
      `Tested system performance through User Acceptance Testing (UAT) with 20 respondents, obtaining a score of 4.19 (Agree) in terms of usability, efficiency, and design.`,
    ],
  },
  {
    title: `Customer Relationship Management`,
    company: `PT Telkom Indonesia (Persero) Tbk`,
    period: `July - December 2021`,
    location: `Pekanbaru, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Managed customer data and acquired 100+ customers during the internship.`,
      `Handled customer calls, providing product info, billing assistance, and technical s`,
      `Resolved issues, managed complaints, and offered modem upgrades for improved internet speed.`,
    ],
  },
];

export const BOOTCAMP_EXPERIENCES = [
  {
    title: `Full Stack Developer`,
    company: `Coding Camp powered by DBS Foundation`,
    period: `February - July 2025`,
    location: `Online`,
    type: `Study Independent`,
    current: false,
    responsibilities: [
      `Selected as one of 3,157 accepted participants from a pool of over 60,000 applicants.`,
      `Graduated with Distinction (Top 10% in the Learning Path) with a clean record.`,
      `Recognized among the top 600 most active students in Instructor-Led Training sessions for tech and soft skills.`,
      `Ranked among the top 5 students with the highest engagement in weekly consultation sessions.`,
      `Developed a culinary exploration website as a Capstone Project Foodinary.`,
    ],
  },
  {
    title: `Android Developer`,
    company: `Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka`,
    period: `August 2024 - January 2025`,
    location: `Online`,
    type: `Study Independent`,
    current: false,
    responsibilities: [
      `Selected as one of 4,636 accepted participants from a pool of 45,851 applicants.`,
      `Graduated with Distinction (Top 10% in the Learning Path) with a clean record.`,
      `Recognized among the top 1,000 most active students in Instructor-Led Training sessions for tech and soft skills.`,
      `Ranked among the top 5 students with the highest engagement in weekly consultation sessions.`,
      `Developed a skin disease detection application as a Capstone Project DAISY.`,
    ],
  },
  {
    title: `Junior Web Developer`,
    company: `Digital Talent Scholarship by KOMINFO`,
    period: `July - August 2024`,
    location: `Online`,
    type: `Professional Training & Certification`,
    current: false,
    responsibilities: [
      `Learned and applied front-end and back-end development skills aligned with industry standards.`,
      `Gained hands-on experience in designing responsive websites and resolving bugs to enhance user experience.`,
      `Collaborated on real-world web projects to implement best practices in UI/UX and coding structure.`,
      `Successfully passed the national competency assessment and received the BNSP certification as a Junior Web Developer.`,
    ],
  },
  {
    title: `Junior Network Administrator`,
    company: `Digital Talent Scholarship by KOMINFO`,
    period: `June - July 2023`,
    location: `Online`,
    type: `Professional Training & Certification`,
    current: false,
    responsibilities: [
      `Gained hands-on experience in configuring and managing Cisco routers and switches in lab simulations.`,
      `Mastered key topics including IP addressing, subnetting, BGP, and routing protocols through guided labs.`,
      `Developed the ability to troubleshoot network issues and design efficient, scalable network topologies.`,
      `Successfully passed the national competency exam and earned the BNSP certification as a Junior Network Administrator.`,
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Foodinary',
    description:
      'Discover and explore diverse local and international cuisines with a clean and interactive culinary website.',
    images: ['/project/foodinary.png'],
    techStack: ['JavaScript', 'IndexedDB', 'Postman', 'HTML5', 'API Integration'],
    liveDemo: 'https://foodinary.vercel.app/',
    sourceCode: 'https://github.com/foodinary-project/frontend-backend',
  },
  {
    title: 'Dermatological AI System for Your Skin (DAISY)',
    description:
      'AI-powered app for detecting and identifying skin diseases through smart image analysis.',
    images: ['/project/daisy.png',],
    techStack: [
      'Kotlin',
      'MVVM Architecture',
      'API Integration',
      'Android Studio',
      'Postman',
      'Tensorflow Lite',
    ],
    liveDemo: 'https://drive.google.com/file/d/1Jo6_KHcN_VGNs3oTdz2VHrz8KQzzsRmm/view?usp=sharing',
    sourceCode: 'https://github.com/daniharmade/DaisyApps',
  },
  {
    title: 'Laboratory Assistant Registration Information System (LARIS)',
    description:
      'A web-based system for managing the digital registration and selection process of laboratory assistant candidates.',
    images: ['/project/laris.png'],
    techStack: ['Laravel', 'Blade', 'JavaScript', 'Bootstrap', 'jQuery', 'MySQL', 'Tcpdf'],
    liveDemo: 'https://laris.lab-si.uin-suska.ac.id/',
  },
];

export const CERTIFICATIONS = [
  {
    title: "Specializing in Front-End and Back End Developer",
    issuedBy: "Coding Camp powered by DBS Foundation",
    date: "July 2025",
    images: ["/certificate/CodingCamp.jpg"],
    certificateUrl: "/pdf/DBSFCodingCamp.pdf",
  },
  {
    title: "Specializing in Mobile Development",
    issuedBy: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    date: "January 2025",
    images: ["/certificate/BangkitAcademy.jpg"],
    certificateUrl: "/pdf/BangkitAcademy.pdf",
  },
  {
    title: "Junior Web Developer",
    issuedBy: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "November 2024",
    images: ["/certificate/BNSP-JWD.jpg"],
    certificateUrl: "/pdf/JuniorWebDeveloper.pdf",
  },
  {
    title: "Junior Web Developer - Bootcamp",
    issuedBy: "Kementerian Komunikasi dan Informatika",
    date: "October 2024",
    images: ["/certificate/VSGA-JWD.png"],
    certificateUrl: "/pdf/VSGA-JWD.pdf",
  },
  {
    title: "Software Engineer Internship",
    issuedBy: "Linkupcareer.id",
    date: "May 2025",
    images: ["/certificate/Internship-Linkupcareer.png"],
    certificateUrl: "/pdf/Internship-Linkupcareer.pdf",
  },
  {
    title: "Intermediate Android Development",
    issuedBy: "Dicoding",
    date: "December 2024",
    images: ["/certificate/Dicoding-AndroidIntermediate.jpg"],
    certificateUrl: "https://www.dicoding.com/certificates/GRX54REOYP0M",
  },
  {
    title: "Design Thinking Workshop",
    issuedBy: "Samsung Solve for Tomorrow 2025",
    date: "Oktober 2024",
    images: ["/certificate/sft.jpg"],
    certificateUrl: "/pdf/sft.pdf",
  },
  {
    title: "Green Digital Certificate 2025",
    issuedBy: "INCO Academy",
    date: "September 2025",
    images: ["/certificate/IncooAcademy.png"],
    certificateUrl: "https://learning.inco-group.co/admin/tool/certificate/index.php?code=9417713479DH",
  },
  {
    title: "Data Engineering Professional Certification",
    issuedBy: "Rapidminer",
    date: "Jul 2023",
    images: ["/certificate/RapidMiner.png"],
    certificateUrl: "/pdf/RapidMiner.pdf",
  },
  {
    title: "Intermediate Web Development",
    issuedBy: "Dicoding",
    date: "May 2025",
    images: ["/certificate/Dicoding-WebIntermediate.jpg"],
    certificateUrl: "https://www.dicoding.com/certificates/KEXL7RGV0XG2",
  },
  {
    title: "Junior Network Administrator - Bootcamp",
    issuedBy: "Kementerian Komunikasi dan Informatika",
    date: "August 2023",
    images: ["/certificate/VSGA-JNA.png"],
    certificateUrl: "/pdf/VSGA-JNA.pdf",
  },
  {
    title: "Junior Network Administrator",
    issuedBy: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "September 2023",
    images: ["/certificate/BNSP-JNA.jpg"],
    certificateUrl: "/pdf/JuniorNetworkAdministrator.pdf",
  },
  {
    title: "CCNAv7: Enterprise Networking, Security, and Automation.",
    issuedBy: "Cisco Networking Academy",
    date: "December 2020",
    images: ["/certificate/Cisco.JPG"],
    certificateUrl: "/pdf/Cisco.pdf",
  },
  {
    title: "Certified Developer",
    issuedBy: "Alibaba Cloud",
    date: "September 2022",
    images: ["/certificate/Alibaba-Developer.jpg"],
    certificateUrl: "/pdf/Alibaba-Developer.pdf",
  },
  {
    title: "English for Business Communication",
    issuedBy: "The British Institute (TBI)",
    date: "June 2025",
    images: ["/certificate/TBI.jpg"],
    certificateUrl: "/pdf/TBI.pdf",
  },
  {
    title: "Big Data Analysis for Water-related Applications",
    issuedBy: "United Nations University",
    date: "July 2025",
    images: ["/certificate/Big Data Analysis for Water-related Applications.jpg"],
    certificateUrl: "https://lc.unu.edu/certificates/a32d1755f1eb4ff9a17de8aa83e744c4",
  },
  {
    title: "Implementation Machine Learning for Android",
    issuedBy: "Dicoding",
    date: "November 2024",
    images: ["/certificate/Dicoding-PenerapanMLAndroid.jpg"],
    certificateUrl: "https://www.dicoding.com/certificates/6RPNY702RZ2M",
  },
  {
    title: "Jetpack Compose for Android",
    issuedBy: "Dicoding",
    date: "December 2024",
    images: ["/certificate/Dicoding-Jetpack.jpg"],
    certificateUrl: "https://www.dicoding.com/certificates/GRX54REOYP0M",
  },
  {
    title: "Backend using JavaScript",
    issuedBy: "Dicoding",
    date: "January 2025",
    images: ["/certificate/Dicoding-BackEndPemula.jpg"],
    certificateUrl: "https://www.dicoding.com/certificates/GRX53KYJKZ0M",
  },
  {
    title: "Kotlin Programming Language",
    issuedBy: "Dicoding",
    date: "September 2024",
    images: ["/certificate/Dicoding-Kotlin.jpg"],
    certificateUrl: "https://www.dicoding.com/certificates/2VX34W68QZYQ",
  },
  {
    title: "Structured Query Language (SQL)",
    issuedBy: "Dicoding",
    date: "August 2023",
    images: ["/certificate/Dicoding-SQL.jpg"],
    certificateUrl: "https://www.dicoding.com/certificates/KEXL066LYPG2",
  },
  {
    title: "Git Github for Beginners",
    issuedBy: "Dicoding",
    date: "February 2025",
    images: ["/certificate/Dicoding-GitGithub.jpg"],
    certificateUrl: "https://www.dicoding.com/certificates/2VX3KJ9D4XYQ",
  },
  {
    title: "Test of Arabic as a Foreign Language (TOAFL)",
    issuedBy: "Lisanul Arab",
    date: "September 2025",
    images: ["/certificate/TOAFL.jpg"],
    certificateUrl: "/pdf/TOAFL.pdf",
  },
];

export const AWARDS = [
  {
    title: "2nd Place Winner – Scientific Poster & Final Project Competition",
    issuedBy: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
    issueDate: "October 2025",
    description:
      "Won 2nd Place in the Scientific Poster & Final Project Competition at GALAKSI (Gebyar Akademik, Olahraga, dan Kesenian Sistem Informasi), held in celebration of the 23rd Anniversary of the Information Systems Study Program. The competition assessed students’ abilities to organize, visualize, and present their research or final project results in a scientific and creative manner.",
    certificateUrl: "/pdf/Juara 2 Lomba Poster.pdf",
  },
  {
    title: "Awardee of Bank Indonesia Scholarship 2025",
    issuedBy: "Bank Indonesia",
    issueDate: "August 2025",
    description:
      "Recipient of the Bank Indonesia Scholarship 2025, awarded for academic excellence, leadership, and social contribution. Active GenBI member in community service, education, and empowerment programs.",
    certificateUrl: "/pdf/BeasiswaBI.pdf",
  },
  {
    title: "Top 10% Best Full Stack Developer Graduate",
    issuedBy: "Coding Camp powered by DBS Foundation",
    issueDate: "July 2025",
    description:
      "Achieved Distinction Graduate status, recognized as a top 10% performer among 1,610 participants in the Full Stack Developer learning path, Coding Camp powered by DBS Foundation 2025.",
    certificateUrl: "https://www.youtube.com/watch?v=k-iDDXPWuuI",
  },
  {
    title: "Top 10% Best Android Developer Graduate",
    issuedBy: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    issueDate: "July 2025",
    description:
      "Achieved Distinction Graduate status, recognized as a top 10% performer among 1,150 participants in the Android Developer learning path of the Mobile Development track, Bangkit Academy 2024 Batch 2.",
    certificateUrl: "https://www.youtube.com/watch?v=XsncfWizpQY",
  },
];

export const EDUCATION_HISTORY = [
  {
    university: "Universitas Islam Negeri Suska Riau",
    major: "Information Systems",
    degree: "Bachelor of Computer",
    gpa: "3.88/4.00",
    period: "2022 - Present (Expected Graduation: 2026)",
    location: "Pekanbaru, Riau",
    activities: [
      "Head of Publication and Socialization Division in GenBI UIN Suska Riau.",
      "Awardee of Bank Indonesia Scholarship 2025.",
      "Laboratory Assistant and Website Administrator Information System Department.",
      "Relevant Coursework: Algorithm and Programming, Object Oriented Programming, Management of Database, Human-Computer Interaction, Web Programming, Information System Analysis, Software Engineering, Geographic Information Systems (GIS), and Intelligent Information System.",
    ]
  },
];

export const ORGANIZATION_HISTORY = [
  {
    name: "Generasi Baru Indonesia (GenBI) UIN Suska Riau",
    division: "Publication and Socialization",
    role: "Head of Division",
    period: "August 2025 - Present",
    jobdesk: [
      "Komisariat Universitas Islam Negeri Sultan Syarif Kasim Riau",
    ],
  },
  {
    name: "Information System Networking Club Research UIN Suska Riau",
    division: "Research and Scientific Publications & Website Administrator",
    role: "Staff",
    period: "Dec 2022 - Jul 2025",
    jobdesk: [
      "Studying and deepening knowledge of computer networks as well as web and application development through various activities and research within the club.",
      "Participating in research initiatives and scientific publications related to information systems and networking.",
      "Assisting in organizing research activities, discussions, and the publication of technical papers within the club.",
      "Managing the website of the Information System Networking Club (ISNC) Research at UIN Suska Riau.",
    ],
  },
  {
    name: "Google Developer Student Clubs UIN Suska Riau",
    division: "Learner",
    role: "Member",
    period: "Nov 2022 - Oct 2025",
    jobdesk: [
      "Actively participating in activities and events of the Google Developer Student Clubs.",
      "Coordinating with peers on technical projects and initiatives to enhance development and programming skills.",
    ],
  },
];
