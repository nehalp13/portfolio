import { title } from "framer-motion/client";
import {
    awsclf,
    az900,
    sc900,
    pl900,
    dp100,
    web_developer,
    cloud,
    software_engineer,
    backend_engineer,
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
    cognixia,
    codex,
    jobit,
    tripagency,
    progresstracker,
    pandaspizzeria,
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
      title: "Software Engineer",
      icon: software_engineer,
    },
    {
      title: "Cloud Developer",
      icon: cloud,
    },
    {
      title: "Backend Engineer",
      icon: backend_engineer,
    },
    {
      title: "Web Developer",
      icon: web_developer,
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
      title: "Backend Engineer",
      company_name: "Cognixia",
      icon: cognixia,
      iconBg: "#E6DEDD",
      date: "September 2024 - Present",
      points: [
        "Developed a CRUD based Progress Tracker full stack application with robust business logic in Python.",
        "Used Pandas to structure user data and track progress metrics.",
        "NumPy was applied for mathematical computations, such as calculating progress percentages or ratings.",
        "Structured data in MySQL, applied SQLAlchemy for ORM, and built custom database connections using Jupyter Notebooks for data seeding.",
        "Implemented features like user authentication, progress tracking, real-time updates and advanced querying.",
      ]
    },
    {
      title: "Software Engineer",
      company_name: "M19 Material Intelligence Lab",
      icon: m19,
      iconBg: "#01061a",
      date: "June 2023 - August 2024",
      points: [
        "Built an e-commerce for lab data dashboard utilizing Razor Pages in .NET Core, employing C# and HTML.",
        "Engineered Google Cloud Function based REST endpoints to create JSON payloads, sourced from Firebase Firestore (NoSQL) database and tested API on Postman.",
        "Configured Firewalls and routing protocols to optimize security and network performance.",
        "Executed Google Ads campaigns that increased brand awareness and generated a 15% lead.",
        "Deployed Kubernetes Engine to containerize and manage data processing applications.",
        "Monitored network system using CURL to analyze data flow across LAN/WAN networks, reducing troubleshooting time by 30%.",
        "Troubleshot DNS failures and HTTP/s connectivity issues for clients.",
        "Integrated Google Analytics for tracking and reporting website traffic and increased business revenue by 45%.",
        "Managed Pub/Sub to facilitate real-time messaging and data streaming between microservices.",
        "Executed Trigger Events to automate emails based on data entries, Firebase Authentication for secure user sign-in.",
        "Configured scalable data pipelines using Google Cloud Storage (GCS) for seamless ingestion and data storage.",
      ],
    },
    {
      title: "Python Web Developer",
      company_name: "Intel",
      icon: intel,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Exploited MoRTH data for pinpointing accident locations on road networks.",
        "Spearheaded the development of a web mapping application, incorporating Leaflet-GIS tool.",
        "Seamlessly integrated Python's Folium and Pandas libraries for robust mapping capabilities.",
        "Acquired practical expertise in spatial data applications, leveraging CSV data to pinpoint nearby hospitals.",
      ],
    },
  ];
  
  const badges = [
    {
      title: "DP-100",
      icon: dp100,
      badge_link: "https://learn.microsoft.com/api/credentials/share/en-us/NehalPatel-4820/38F7D17971381625?sharingId=7B3DCF1E72BE8B4C",
    },
    {
      title: "CLF-C02",
      icon: awsclf,
      badge_link: "https://www.credly.com/badges/1350f666-fcd4-49ba-89e2-a436f745afc2/public_url",
    },
    {
      title: "AZ-900",
      icon: az900,
      badge_link: "https://learn.microsoft.com/api/credentials/share/en-us/NehalPatel-4820/C2BA13CD1148F3E3?sharingId=7B3DCF1E72BE8B4C",
    },
    {
      title: "SC-900",
      icon: sc900,
      badge_link: "https://learn.microsoft.com/api/credentials/share/en-us/NehalPatel-4820/A8FBDBF35FAE4CE?sharingId=7B3DCF1E72BE8B4C",
    },
    {
      title: "PL-900",
      icon: pl900,
      badge_link: "https://learn.microsoft.com/api/credentials/share/en-us/NehalPatel-4820/7B1ADBFA054C78FD?sharingId=7B3DCF1E72BE8B4C",
    },
  ];
  
  const projects = [
    {
      name: "Progress Tracker",
      description: 
        "Created a comprehensive Progress Tracker application featuring a CRUD architecture, integrating Python for core logic and tools for advanced data handling. Implemented database solutions with SQLAlchemy for seamless interactions and utilized Jupyter Notebooks for efficient data initialization.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sqlalchemy",
          color: "green-text-gradient",
        },
        {
          name: "jupyter_notebooks",
          color: "pink-text-gradient",
        }
      ],
      image: progresstracker,
      source_code_link: "https://github.com/nehalp13/CapstoneProject",
    },
    {
      name: "Pandas Pizzeria - Data Analysis",
      description: 
        "Aggregated and transformed multiple CSV datasets into a unified dataframe using Pandas to analyze sales patterns. Generated detailed statistical summaries and visualized customer behavior and seasonal trends for actionable insights.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "data_analytics",
          color: "green-text-gradient",
        },
        {
          name: "jupyter_notebooks",
          color: "pink-text-gradient",
        }
      ],
      image: pandaspizzeria,
      source_code_link: "https://github.com/nehalp13/PandasPizzeria-DataAnalysis",
    },
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
      source_code_link: "https://github.com/nehalp13/codex",
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
      source_code_link: "https://medium.com/@nehalpatel2001/azure-vms-and-hestiacp-integration-streamlining-your-website-server-management-0a08fc6ec88b",
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
      source_code_link: "https://travel-agency-nehalp13.vercel.app",
    },
  ];
  
  export { services, technologies, experiences, badges, projects };
