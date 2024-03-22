import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "首页",
    hash: "#home",
  },
  {
    name: "关于我",
    hash: "#about",
  },
  {
    name: "案例",
    hash: "#projects",
  },
  {
    name: "技术栈",
    hash: "#skills",
  },
  /**
  {
    name: "Experience",
    hash: "#experience",
  },
   */
  {
    name: "联系方式",
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
    title: "500PX图片交易站",
    description:
      "500px 是一个图片交易平台,主要为摄影师和对图片质量有较高要求的用户服务.我参与了前端和后端的整个开发过程。",
      
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
      "这是一个网络设备服务商的电商网站,主要销售网络设备,我用shopify构建。",
    tags: ["Shopify","Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773077/adop_index-1_yxn6pt.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773078/adop_index-2_jlgq1g.png",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709775959/adop_index-3_nsilg2.png"],
    sitelink:'https://iadop.com/'
  },
  {
    title: "BLND New media Art Courses",
    description:
      "这是一个新媒体艺术课程销售网站,主要包括在线课程，线下讲座以及博客部分,这是一个外包项目,我主要负责后端API和数据库部分。",
    tags: ["React", "Next.js", "Tailwind","Express.js","Nestjs", "Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773082/blnd_index-1_b90qmp.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773083/blnd_index-2_cukrrd.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773084/blnd_index-3_cmxdgo.jpg"],
    sitelink:'https://www.blnd.tw/'
  },
  {
    title: "Famulus Company Site",
    description:
      "财务顾问公司官方网站,外包项目,由我全栈开发。",
    tags: ["React", "Next.js",  "Tailwind", "Nestjs","Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773087/Famulus_index-1_nozza7.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773088/Famulus_index-2_ihxxmp.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773089/Famulus_index-3_w3aiyd.jpg"],
    sitelink:''
  },  
  {
    title: "Glasses gallery Ecommerce",
    description:
      "眼镜销售电商网站,主要用Nextjs,React和Nodejs,Nestjs构建,我主要负责后端数据库和API部分。",
    tags: ["React","NextJS","Nodejs","Nestjs", "Mysql"],
    imageUrls: ["https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773089/glassesgallery_index-1_jfiadq.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773090/glassesgallery_index-2_tdddux.jpg",
    "https://res.cloudinary.com/dvhoywgd8/image/upload/v1709773091/glassesgallery_index-3_dgnfrp.png"],
    sitelink:''
  },  
  {
    title: "Nissispace online courses",
    description:
      "在线教育平台,为老师在线开课提供服务,我主要负责后端API和数据库部分开发工作。",
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
      "酒店房间交易平台,卖家可以出售自己用不到的酒店房间,买家以优惠购买,我主要负责后端API和数据库部分开发工作。",
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
