//"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
//import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { CarouselPlugin } from "./carouselimg";
import React from "react";
import { Separator } from "@/components/ui/separator"

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrls,
  sitelink
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
 // const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
    //    scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100  max-w-[50rem] border h-fit border-black/5 rounded-lg flex flex-col items-center overflow-hidden sm:pr-8  hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-full flex flex-col items-center gap-3">
      <CarouselPlugin imgUrls ={imageUrls}/>
           
       <Separator className=" h-2 bg-stone-800 dark:bg-slate-200 w-full"/>

          <h3 className="text-2xl font-semibold mt-4">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        {sitelink &&  
        <motion.div
        className="flex  items-center justify-center  px-4  text-sm font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
         <Link href={sitelink} rel="noopener noreferrer" target="_blank" className="group bg-black/[0.7] text-white my-4 rounded-md px-3 py-3 flex items-center gap-2  outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"> 
         项目详情         
         <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
         </Link>
         </motion.div>
        }
         </div>
        

          
          {/*
          className="absolute hidden sm:block top-0 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
      */}
        
        
      </section>
    </motion.div>
  );
}
