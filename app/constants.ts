export const EXPERIENCES = [
  {
    title: `Cloud Platform Engineer`,
    company: `Telkomsel`,
    period: `February 2024 - June 2024`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Elevated data processing efficiency by automating data extraction from Datadog, saving 70% in manual processing time and enabling data-driven insights through AI-based analysis.`,
      `Reduced infrastructure setup time by 50% by developing a reusable AWS EC2 module with Terraform, ensuring consistent environment provisioning across 3+ production setups.`,
      `Enhanced security compliance by implementing a centralized AWS permissions platform, cutting security incidents by 30% and achieving 100% adherence to security protocols.`,
    ],
  },
  {
    title: `Software Engineer`,
    company: `Tokopedia`,
    period: `September 2023 - December 2023`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Boosted AI chatbot effectiveness by refining prompt engineering with the HYDE method, improving response relevance by 25% and raising user satisfaction scores by 15%.`,
      `Strengthened codebase maintainability by refactoring 20+ core components, reducing debugging time by 40%, which allowed faster issue resolution and onboarding for new developers.`,
      `Achieved 95% test coverage with a comprehensive unit testing suite, decreasing production bugs by 30% and significantly enhancing overall code stability.`,
    ],
  },
  {
    title: `Software Engineer`,
    company: `Dana Indonesia`,
    period: `May 2023 - July 2023`,
    location: `Jakarta, Indonesia`,
    type: `Apprenticeships`,
    current: false,
    responsibilities: [
      `Collaborated on Dana's fraud detection system, unifying frontend, backend, and cloud technologies to bolster financial security.`,
      `Crafted a high-performance fraud detection web app that analyzes and predicts fraud in up to 10,000 transaction records in under 1 second.`,
      `Implemented frontend, backend, and deployment processes independently, collaborating with three machine learning engineers, resulting in an 80% reduction in fraud detection time compared to manual review.`,
    ],
  },
  {
    title: `Backend Engineer`,
    company: `Nomura Research Institute`,
    period: `August 2022 - May 2023`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Cut recruitment process time by 50% by automating stages from initial testing to interviews, saving 20+ hours weekly and improving candidate experience.`,
      `Streamlined employee operations with a custom management system, reducing administrative task time by 40% and enhancing department workflow transparency.`,
      `Increased HR system scalability by 60% with CQRS and event-driven architecture, supporting a 30% growth in internal employee interactions.`,
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Pomodoro Focus - Stay Productive',
    description:
      'Boost your productivity with this elegant Pomodoro timer featuring task management and progress analytics.',
    images: ['/pomo1.jpeg', '/pomo2.jpeg', '/pomo3.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS', 'HTML5'],
    liveDemo: 'https://pomodoro.pragusga.com',
    sourceCode: 'https://github.com/pragusga25/pomodoro',
    carouselDelay: 5300,
  },
  {
    title: 'AI Resume Reviewer',
    description:
      'Get instant, professional feedback on your resume with AI-powered analysis',
    images: [
      '/rev0.jpeg',
      '/rev1.jpeg',
      '/rev2.jpeg',
      '/rev5.jpeg',
      '/rev3.jpeg',
      '/rev4.jpeg',
    ],
    techStack: [
      'Google Vertex',
      'Node.js',
      'Typescript',
      'React',
      'Next.js',
      'Tailwind CSS',
    ],
    liveDemo: 'https://resume-reviewer.pragusga.com',
    sourceCode: 'https://github.com/pragusga25/ai-resume-reviewer',
    carouselDelay: 4500, // 3 seconds
  },
  {
    title: 'Adhan',
    description:
      'Adhan is a web app visualizing the continuous cycle of the Islamic call to prayer across global time zones.',
    images: ['/adhand.jpeg', '/adhan3.jpeg', '/adhanw.jpeg', '/adhan4.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS', 'Three.js'],
    liveDemo: 'https://adhan.pragusga.com',
    sourceCode: 'https://github.com/pragusga25/adhan',
    carouselDelay: 6000, // 6 seconds
  },
  {
    title: 'Image Watermarker',
    description:
      'Easily create custom watermarks for your images. Adjust text, size, position, and style to personalize your watermark.',
    images: ['/wm-banner-1.png', '/wm-banner-2.png', '/wm-banner.png'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    liveDemo: 'https://wm.pragusga.com',
    carouselDelay: 5500, // 3 seconds
  },
  {
    title: 'Resonance',
    description:
      'Enjoy real-time canvas animations, mood-responsive wave patterns, color therapy, and binaural beat visualization.',
    images: ['/resonance-banner.png', '/resonance-banner-1.png'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    liveDemo: 'https://resonance.pragusga.com',
    carouselDelay: 4000, // 4 seconds
  },
  {
    title: 'Snake Game',
    description:
      'Play the classic Snake game. Control the snake to eat food and grow longer without hitting the walls or itself.',
    images: ['/snake.jpeg', '/snake2.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/pragusga25/snake',
    liveDemo: 'https://snake.pragusga.com',
    carouselDelay: 5000, // 5 seconds
  },
  {
    title: 'Earthquake Early Warning System (EEWS)',
    description:
      'The EEWS project developed a scalable, event-driven system using deep learning and Apache Kafka for real-time earthquake detection.',
    images: ['/eews.jpeg', '/eews1.jpeg'],
    techStack: [
      'Python',
      'Go',
      'Kafka',
      'Docker',
      'MongoDB',
      'Prometheus',
      'Grafana',
    ],
    carouselDelay: 7000, // 6 seconds
  },
  {
    title: 'Quiz Islam',
    description: 'Test your knowledge of Islam with this quiz app.',
    images: ['/quiz-islam1.jpeg', '/quiz-islam2.jpeg', '/quiz-islam3.jpeg'],
    techStack: [
      'Typescript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
    ],
    liveDemo: 'https://quiz-islam.pragusga.com',
    carouselDelay: 5900, // 6 seconds
  },
  {
    title: 'CariKajian',
    description: 'Search for Islamic lectures and events in Indonesia.',
    images: ['/carikajian.png'],
    techStack: [
      'Typescript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
    ],
    liveDemo: 'https://carikajian.com',
    carouselDelay: 9000, // 6 seconds
  },

  {
    title: 'Sudoku',
    description:
      'Play Sudoku online. Choose from easy, medium, and hard difficulty levels.',
    images: ['/sudoku.png', '/sudoku2.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/pragusga25/sudoku',
    liveDemo: 'https://sudoku.pragusga.com',
    carouselDelay: 6200, // 3.5 seconds
  },
  {
    title: 'Tic Tac Toe',
    description: 'Play Tic Tac Toe against the computer. Try to win!',
    images: ['/tictactoe1.jpeg', '/tictactoe.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/pragusga25/tictactoe',
    liveDemo: 'https://tictactoe.pragusga.com',
    carouselDelay: 4500, // 4.5 seconds
  },

  {
    title: 'CryptoBot',
    description:
      'CryptoBot is an AI chatbot that specializes in cryptocurrency topics. Ask CryptoBot about the latest prices and can send you email!',
    images: ['/cryptobot.jpeg'],
    techStack: [
      'Typescript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Google Vertex',
    ],
    liveDemo: 'https://cryptobot.pragusga.com',
    carouselDelay: 3300, // 6 seconds
  },
];
