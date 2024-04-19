import {
    awsclf,
    az900,
    sc900,
    pl900,
    web_developer,
    cloud,
    backend_developer,
    aws,
    gcp,
    azure,
    dotnet,
    firebase,
    mssql,
    python,
    javascript,
    reactjs,
    tailwind,
    nodejs,
    git,
    m19,
    intel,
    codex,
    jobit,
    tripagency,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "ABOUT",
    },
    {
      id: "work",
      title: "WORK",
    },
    {
      id: "projects",
      title: "PROJECTS",
    },
    {
      id: "certificates",
      title: "CERTIFICATIONS",
    },
    {
      id: "contact",
      title: "CONTACT",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web_developer,
    },
    {
      title: "Cloud Developer",
      icon: cloud,
    },
    {
      title: "Backend Developer",
      icon: backend_developer,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "Amazon web Services",
      icon: aws,
    },
    {
      name: "Google Cloud Platform",
      icon: gcp,
    },
    {
      name: "Microsoft Azure",
      icon: azure,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Dot NET Core",
      icon: dotnet,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Microsoft SQL Server",
      icon: mssql,
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
  ];
  
  const experiences = [
    {
      title: "Cloud Developer",
      company_name: "M19 Material Intelligence Lab",
      icon: m19,
      iconBg: "#01061a",
      date: "August 2023 - Present",
      points: [
        "Provisioned and managed infrastructure using GCP and Firebase, ensuring efficient and reliable deployment of resources.",
        "Engineered Google Cloud Functions-based REST endpoints to efficiently generate JSON payloads sourced from our Firestore database system.",
        "Rigorous Postman testing of APIs ensuring reliable and smooth operation",
        "Integrated GCP with NoSQL database",
        "Implemented robust API security measures using gcloud auth with bearer token authentication, ensuring confidentiality of web application's data.",
        "Used Cloud Functions to effortlessly notify stakeholders about product quotations",
        "Worked with database integration of NoSQL Firebase Firestore database with MVC .NET Core web application.",
        "Acquired proficiency in utilizing frameworks, implementing data structures, and developing modules.",
        "Automated email notifications using Firebase Trigger Events",
        "Employed Firebase Authentication to enhance the sign-in and onboarding process for end users.",
        "Established and managed Google Analytics to track website traffic and user activity, informing strategic decisions.",
        "Successfully deployed web application using Firebase Hosting, ensuring reliability and scalability for end users.",
        "Proficiently trained WotNot for chatbot functionality and executing Mailchimp automations for effective campaigns and newsletters.",
        "Facilitated collaboration between development teams and R&D, optimizing system performance.",
      ],
    },
    {
      title: "Industrial Trainee",
      company_name: "Intel",
      icon: intel,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Leveraged MoRTH data to identify accident hotspots on road networks, maintaining a refined CSV dataset of coordinates.",
        "Led the development of a web application mapping using GIS tools like Leaflet, enhancing geographical insights.",
        "Seamlessly integrated Python's Folium and Pandas libraries to overlay accident blackspot data onto Gujarat's geographical map.",
        "Applied spatial data techniques to locate nearby hospitals using CSV data, showcasing adeptness in spatial analysis and visualization.",
      ],
    },
  ];
  
  const badges = [
    {
      title: "CLF-C02",
      icon: awsclf,
      badge_link: "https://www.credly.com/badges/1350f666-fcd4-49ba-89e2-a436f745afc2/public_url",
    },
    {
      title: "AZ-900",
      icon: az900,
      badge_link: "https://www.credly.com/badges/51fa4bd1-daf2-49e4-a93c-876cbf830211/public_url",
    },
    {
      title: "SC-900",
      icon: sc900,
      badge_link: "https://www.credly.com/badges/efe5ff48-4d6f-4437-93be-593e2110703b/public_url",
    },
    {
      title: "PL-900",
      icon: pl900,
      badge_link: "https://www.credly.com/badges/88a7744d-f91e-4b6f-af62-3b6356ac64bb/public_url",
    },
  ];
  
  const projects = [
    {
      name: "Codex",
      description:
        "A sleek user interface reminiscent of the ChatGPT app, facilitating seamless communication with an advanced GPT-3 model API from OpenAI. Empowered users to seek assistance from the AI on JavaScript, React, or any programming language by providing code and receiving translations to another programming language.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: codex,
      source_code_link: "https://github.com/",
    },
    {
      name: "Multi-Cloud Deployment",
      description:
        "Managed website deployment across Google Cloud Platform (GCP) and Microsoft Azure, ensuring seamless connectivity by configuring DNS settings and nameservers for the domain. Utilizing the Hestia Control Panel, I optimized server management and web application hosting for enhanced performance and security, contributing to a robust online presence.",
      tags: [
        {
          name: "gcp",
          color: "blue-text-gradient",
        },
        {
          name: "microsoftazure",
          color: "green-text-gradient",
        },
        {
          name: "hestia",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Agency Site",
      description:
        "Developed a fully responsive travel agency website, employing HTML, CSS, and JavaScript to ensure a seamless user experience across all devices. The website was hosted as a static site on Amazon S3, creating dynamic and accessible online platforms.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: tripagency,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, badges, projects };