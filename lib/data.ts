import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  /**
  {
    name: "Experience",
    hash: "#experience",
  },
   */
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "500PX Picshare",
    description:
      "I worked as a full-stack developer on this project for 2 years.Users can trade pics on the platform.I was involved in the whole project from frontend to backend.",
      
    tags: ["React", "Express.js", "Node.js", "Tailwind", "Redis","MongoDB"],
  //  imageUrl: ["500px_index-1_jln7xp.png","500px_index-2_egyu5i.png","500px_index-3_hqtb0k.png"],
   
   imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773074/500px_index-1_uldzry.png",
   "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773074/500px_index-2_rs41dq.jpg",
   "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773075/500px_index-3_zmyhfr.jpg",
   "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773075/500px_index-4_k3zqyr.jpg",
   "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773076/500px_index-5_s7frjy.jpg",
  "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773076/500px_index-6_gqgowu.jpg"],
 
   
   sitelink:'https://500px.com.cn/'
  },
  {
    title: "ADOP Ecommerce",
    description:
      "Network Equipments ecommerce website. It is a freelancer project which was built with shopify by me. ",
    tags: ["Shopify","Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773077/adop_index-1_yxn6pt.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773078/adop_index-2_jlgq1g.png",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709775959/adop_index-3_nsilg2.png"],
    sitelink:'https://iadop.com/'
  },
  {
    title: "BLND New media Art Courses",
    description:
      "A public web app for selling new media art courses. It has features like online courses,offline courses and blog articles.It was a freelancer project.I primarily work on the backend api part.",
    tags: ["React", "Next.js", "Tailwind","Express.js","Nestjs", "Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773082/blnd_index-1_b90qmp.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773083/blnd_index-2_cukrrd.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773084/blnd_index-3_cmxdgo.jpg"],
    sitelink:'https://www.blnd.tw/'
  },
  {
    title: "Famulus Company Site",
    description:
      "A finance consultant company website. I work as a full stack developer on it.",
    tags: ["React", "Next.js",  "Tailwind", "Nestjs","Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773087/Famulus_index-1_nozza7.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773088/Famulus_index-2_ihxxmp.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773089/Famulus_index-3_w3aiyd.jpg"],
    sitelink:''
  },  
  {
    title: "Glasses gallery Ecommerce",
    description:
      "A public web app for glasses ecommerce which was built with Magento. ",
    tags: ["Magento",  "Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773089/glassesgallery_index-1_jfiadq.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773090/glassesgallery_index-2_tdddux.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773091/glassesgallery_index-3_dgnfrp.png"],
    sitelink:'https://www.glassesgallery.com/'
  },  
  {
    title: "Nissispace online courses",
    description:
      "A online education web app which includes website and mobile app. i was primarily work on the backend,such as api and database",
    tags: ["React", "React Native","Next.js", "Tailwind", "Nodejs","Nestjs","Redis","Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773097/nissispace_index-1_fnvt9v.png",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773098/nissispace_index-2_jarkyr.png",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773099/nissispace_index-3_wor7d1.jpg",
     "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773100/nissispace_index-4_vix7vx.jpg"],
    sitelink:''
  },  
  {
    title: "Roomdeal Hotel Rooms Trade",
    description:
      "User can trade Hotel rooms on the platform. I was participated in the design and development of the app's underlying platform such as api and database.",
    tags: ["React", "Next.js",  "Tailwind", "Nodejs","Nestjs","Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773101/roomdeal_index-1_y1zuet.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773102/roomdeal_index-2_sqecp8.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773103/roomdeal_index-3_mcux3v.jpg",
     "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773104/roomdeal_index-4_heoyez.jpg"],
    sitelink:''
  },    
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "NestJS",
  "Tailwind",
  "TypeORM",
  "MySQL",
  "MongoDB",
  "Redis",
  "Zustand",
  "Shopify",
  "Magento",
   "Java",
  "C++",
  "Linux",
  "Git"
] as const;
