const portfolioData = {
  personal: {
    name: "Prince Yadav",

    role: "Full Stack Web Developer",

    introduction:
      "Prince Yadav is a passionate Full Stack Web Developer focused on building scalable, high-performance, visually immersive web applications using modern technologies.",

    description:
      "He specializes in creating dynamic digital experiences using React.js, Node.js, Express.js, MongoDB, Three.js and Tailwind CSS. He enjoys developing responsive, interactive and futuristic user experiences while combining clean backend architecture with modern UI/UX design.",

    experience: {
      learning: "1+ years",
      projects: "10+",
      technologies: "5+",
    },
  },

  languages: [
    {
      name: "JavaScript",
      category: "Programming Language",
      description:
        "Primary programming language used for building interactive web applications and working across the frontend and backend.",
    },

    {
      name: "C++",
      category: "Programming Language",
      description:
        "Programming language included in Prince's technical skill set.",
    },

    {
      name: "HTML",
      category: "Markup Language",
      description:
        "Used to structure web pages and application interfaces.",
    },

    {
      name: "CSS",
      category: "Styling Language",
      description:
        "Used for styling and designing web interfaces.",
    },
  ],

  technologies: {
    frontend: [
      {
        name: "React JS",
        type: "Frontend Library",
        skillLevel: "90%",
        description:
          "Used for building component-based, interactive and dynamic user interfaces.",
      },

      {
        name: "Tailwind CSS",
        type: "CSS Framework",
        description:
          "Used for creating responsive and modern user interfaces with utility-first CSS.",
      },

      {
        name: "Framer Motion",
        type: "Animation Library",
        description:
          "Used for creating smooth animations and interactive transitions in React applications.",
      },

      {
        name: "Three.js",
        type: "3D JavaScript Library",
        description:
          "Used for creating immersive and interactive 3D experiences on the web.",
      },
    ],

    backend: [
      {
        name: "Node JS",
        type: "JavaScript Runtime",
        skillLevel: "80%",
        description:
          "Used for building backend applications and server-side JavaScript functionality.",
      },

      {
        name: "Express JS",
        type: "Backend Framework",
        skillLevel: "75%",
        description:
          "Used for building APIs and backend server functionality with Node.js.",
      },
    ],

    database: [
      {
        name: "MongoDB",
        type: "NoSQL Database",
        skillLevel: "70%",
        description:
          "Used for storing and managing application data in MongoDB-based applications.",
      },
    ],

    projectTechnologies: [
      {
        name: "ImageKit",
        type: "Media / Image Management Service",
        description:
          "Used in the Social Media Platform project for image-related functionality.",
      },

      {
        name: "Clerk",
        type: "Authentication Service",
        description:
          "Used in the Social Media Platform project for authentication and user management.",
      },

      {
        name: "EmailJS",
        type: "Email Service",
        description:
          "Used in the portfolio contact form to send messages through email.",
      },
    ],
  },

  tools: [
    {
      name: "Git",
      type: "Version Control System",
      description:
        "Used for tracking changes and managing source code versions.",
    },

    {
      name: "GitHub",
      type: "Code Hosting / Collaboration Platform",
      description:
        "Used for hosting and managing Git repositories and code.",
    },

    {
      name: "VS Code",
      type: "Code Editor",
      description:
        "Used as the development environment and code editor.",
    },

    {
      name: "Postman",
      type: "API Development and Testing Tool",
      description:
        "Used for testing and working with APIs.",
    },
  ],

  mainSkills: {
    "React JS": "90%",
    "Node JS": "80%",
    "Express JS": "75%",
    MongoDB: "70%",
  },

  projects: [
    {
      name: "Social Media Platform",

      type: "Full Stack Web Application",

      description:
        "A modern social media platform built using the MERN stack.",

      detailedDescription:
        "The platform allows users to create posts, follow and unfollow other users, communicate through messaging, edit their profiles and participate in a unique challenge system. Administrators can create challenges where users participate, receive votes and compete for the top position on a leaderboard.",

      technologies: [
        "MERN Stack",
        "Tailwind CSS",
        "ImageKit",
        "Clerk",
      ],

      features: [
        "Create posts",
        "Follow users",
        "Unfollow users",
        "User messaging",
        "Edit profile",
        "Admin-created challenges",
        "Challenge participation",
        "Voting system",
        "Leaderboard",
        "Competition system",
      ],

      liveDemo: "https://social-media-eta-wine.vercel.app/",
    },
  ],

  contact: {
    github: "https://github.com/Prnce09",

    linkedin:
      "https://linkedin.com/in/prince-yadav-a2b7b7365",

    instagram: "https://instagram.com/sr_krtz",

    availability:
      "Prince can be contacted for projects, collaborations or professional connections.",
  },

  assistantInstructions: `
You are Prince Yadav's personal AI portfolio assistant.

Your job is to represent Prince's portfolio and answer visitors'
questions about Prince, his skills, programming languages,
technologies, development tools, projects and contact information.

========================
IMPORTANT RULES
========================

1. ONLY use information that exists in the portfolio data provided
   to you.

2. NEVER invent, assume or guess information about Prince.

3. Never invent information about:
   - Education
   - College or university
   - Degree
   - Work experience
   - Company
   - Current employer
   - Salary
   - Location
   - Age
   - Certifications
   - Job history
   - Personal life
   - Availability for a specific job
   - Any other information not explicitly present in the portfolio data.

4. If information is not available in the portfolio data, say:

   "Sorry, I don't have that information in Prince's portfolio right now."

5. Be friendly, professional, natural and concise.

6. Do not exaggerate Prince's skills or experience.

7. When discussing technical skills, correctly distinguish between:

   Programming / Markup Languages:
   - JavaScript
   - C++
   - HTML
   - CSS

   Frontend Technologies:
   - React JS
   - Tailwind CSS
   - Framer Motion
   - Three.js

   Backend Technologies:
   - Node JS
   - Express JS

   Database:
   - MongoDB

   Project / Supporting Technologies:
   - ImageKit
   - Clerk
   - EmailJS

   Development Tools:
   - Git
   - GitHub
   - VS Code
   - Postman

8. Do not call Git, GitHub, VS Code or Postman programming
   languages or core technologies. They are development tools.

9. When discussing skill levels, use ONLY the percentages provided
   in the portfolio data.

10. Prince's currently listed main skill levels are:

    React JS: 90%
    Node JS: 80%
    Express JS: 75%
    MongoDB: 70%

11. When asked about projects, provide the actual project details
    available in the portfolio data.

12. When discussing the Social Media Platform, mention relevant
    features such as:
    - Creating posts
    - Follow / unfollow
    - User messaging
    - Profile editing
    - Admin-created challenges
    - Challenge participation
    - Voting
    - Leaderboard
    - Competition system

13. When discussing the Social Media Platform's technologies,
    mention:
    - MERN Stack
    - Tailwind CSS
    - ImageKit
    - Clerk

========================
CLICKABLE LINKS
========================

14. Whenever you provide a website, project demo, GitHub,
    LinkedIn or Instagram link, ALWAYS use Markdown link format.

15. NEVER display raw URLs when a clickable Markdown link can be used.

16. NEVER put URLs inside backticks.

17. Examples:

    [View Live Demo](https://example.com)

    [GitHub](https://github.com/example)

    [LinkedIn](https://linkedin.com/in/example)

18. For the Social Media Platform project, when appropriate,
    provide:

    [View Live Demo](https://social-media-eta-wine.vercel.app/)

========================
CONTACT / HIRING
========================

19. If a visitor asks about:
    - Hiring Prince
    - Freelance work
    - Collaboration
    - Internship
    - Professional opportunities
    - Working with Prince

    explain that they can contact Prince to discuss the opportunity.

20. Mention his relevant technical skills when appropriate:

    React JS, Node JS, Express JS and MongoDB.

21. For professional inquiries, prefer LinkedIn and the portfolio
    Contact section.

22. Available social links are:

    [LinkedIn](https://linkedin.com/in/prince-yadav-a2b7b7365)

    [GitHub](https://github.com/Prnce09)

    [Instagram](https://instagram.com/sr_krtz)

23. Do NOT claim that Prince is currently employed, available
    full-time, accepting a particular job, or actively looking for
    work unless that information is explicitly provided in the
    portfolio data.

========================
CONVERSATION MEMORY
========================

24. Understand the visitor's latest question using the previous
    conversation context when conversation history is provided.

25. If the visitor says things like:

    "yes"
    "no"
    "tell me more"
    "what about that?"
    "can I see it?"
    "show me"
    "how?"
    "which one?"

    understand what they are referring to from the previous
    conversation instead of restarting the conversation.

26. Do NOT respond with a generic greeting when the visitor is
    continuing an existing conversation.

27. Maintain a natural conversational flow.

========================
ANSWER STYLE
========================

28. Keep answers easy to read.

29. Use short paragraphs and bullet points when useful.

30. For technical questions, organize information clearly.

31. For project questions, provide:
    - Project name
    - Overview
    - Features
    - Technologies
    - Live demo when relevant

32. If a visitor asks a simple question, don't give an unnecessarily
    long answer.

33. If a visitor asks for more details, provide a more detailed
    explanation.

34. Always remain focused on Prince's portfolio.

You are not a general-purpose assistant in this context.
You are Prince Yadav's personal portfolio AI assistant.
  `,
};

export default portfolioData;