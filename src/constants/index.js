import {
    uxr,
    uxd,
    da,
    webDesign,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    figma,
    raspberryPi,
    expedia,
    trias,
    unt,
    rnd,
    python,
    adobe,
    rLang,
    sketch,
    autoUI,
    smartHome,
    nerdfind,
    rnd4impproject,
    neuveon
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "UX Designer",
      icon: uxd,
    },
    {
      title: "UX Researcher",
      icon: uxr,
    },
    {
      title: "Web Designer",
      icon: webDesign,
    },
    {
      title: "Data Analysis",
      icon: da,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Adobe",
      icon: adobe,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "R-Lang",
      icon: rLang,
    },
    {
      name: "Sketch",
      icon: sketch,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "RaspberryPi",
      icon: raspberryPi,
    }
  ];
  
  const experiences = [
    {
      title: "Advisor",
      company_name: "[24]7.ai - Expedia",
      icon: expedia,
      iconBg: "#1D2547",
      date: "August 2018 - December 2018",
      points: [
        "Resolved customer problems for client company Expedia(UK) through the International voice processing team that improved customer feedback and ratings",
        "Enhanced customer experience by helping users affiliated with Expedia Air find answers to hotel and flight bookings",
        "Coordinated with the Back-Office to process pending refunds and waivers on flight bookings and cut losses due to third party errors"
      ],
    },
    {
      title: "Client Service Representative",
      company_name: "University of North Texas",
      icon: unt,
      iconBg: "#E6DEDD",
      date: "Oct 2019 - Feb 2020",
      points: [
        "Assisted the design team in editing posters for bringing in more students to purchase meal plans",
        "Managed production of labels and name tags, for the dining services",
        "Photographed new food products for campus advertisements"
      ],
    },
    {
      title: "UX Designer & Researcher",
      company_name: "Triquetra Healthcare & Technologies",
      icon: trias,
      iconBg: "#1D2547",
      date: "Jun 2020 - Aug 2020",
      points: [
        "Researched and analyzed important factors contributing to user satisfaction in healthcare applications",
        "Created wireframes and prototypes for the developer team",
        "Made creative decisions and setting design standards for the application",
        "Designed a maternity tracking application for women"
      ],
    },
    {
      title: "UX Designer & Researcher",
      company_name: "RND4Impact",
      icon: rnd,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Working on the design and development of a smart home application",
        "Applying accessibility guidelines for designing climate controllers",
        "Prototyping and styling micro-interactions for interactive components",
        "Working as the lead UX designer on the creation of an enterprise software that allows efficient tracking of volunteer activity and projects enrolled with RND4Impact"
      ],
    },
    {
      title: "Lead UX Designer & Researcher",
      company_name: "Neuveon Inc.",
      icon: neuveon,
      iconBg: "#1D2547",
      date: "Mar 2023 - Present",
      points: [
        "Designing and developing a social media platform for truth-based information exchange",
        "Designed and headed a comprehensive user study of a sample size of 30; to articulate users’ needs, pain points, and preferences, and translate them into applicable design choices",
        "Conducted iterative lo-fi design sessions, which will serve as the foundation for the development of the alpha version of the product",
        "Employed the double diamond UX model to streamline workflow and deliverables",
        "Executed creative online marketing approaches beyond traditional methods, enhancing brand visibility and differentiation in the competitive landscape"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tactile Automotive UI",
      description:
        "A research based solution to reduce distraction and strain stemming from infotainment usage by improving overall quality of interaction with the UI",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "raspberryPi",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: autoUI,
      source_code_link: "https://tactilevehicleui.framer.website/",
    },
    {
      name: "Nerd Finder",
      description:
        "Simplified tutor search at your fingertips for easy access to in-person learning instituitions, and encouragement of quality tutoring.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "adobe",
          color: "green-text-gradient",
        },
        {
          name: "rLang",
          color: "pink-text-gradient",
        },
      ],
      image: nerdfind,
      source_code_link: "https://tutfind.framer.website/",
    },
    {
      name: "RND4IMPACT",
      description:
        "Tracking the status of your volunteers and projects is now easy and engaging. With more emphasis given to aesthetics and micro-interactions.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "adobe",
          color: "green-text-gradient",
        },
        {
          name: "sketch",
          color: "pink-text-gradient",
        },
      ],
      image: rnd4impproject,
      source_code_link: "https://rnd4impact.framer.website/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };