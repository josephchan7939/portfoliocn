"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("关于我");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>关于我</SectionHeading>
      <p className="mb-3">
        大学主修信息系统及信息技术专业,毕业之后主要从事软件开发领域{" "},在几年的Java和C++开发工作中,
        我发现了自己对WEB应用开发的强烈兴趣。{" "}于是我自学了JS和TS开发相关内容,并开始从事相关全栈开发工作项目达5年之久。{" "}
        我喜欢技术挑战,喜欢分析并解决问题的快乐。{" "}
        我熟悉的主要技术栈包括<span className=" font-medium">Node.js,Express,NestJS,React,Nextjs</span> 以及 <span className=" font-medium">Mysql,MongoDB</span>等,我也熟悉TypeScript和TypeORM.
        {" "}我非常享受学习新的技术。
    
      </p>

    </motion.section>
  );
}
