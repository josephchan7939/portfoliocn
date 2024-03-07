"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
//import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const formRef = useRef<HTMLFormElement>(null);

  

  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID||'', process.env.NEXT_PUBLIC_TEMPLATE_ID||'', e.currentTarget, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then(
        () => {
          // e.currentTarget.reset();
          // console.log("success!")
           
           toast.success("Email sent successfully!");
           formRef.current?.reset();
        },
        (error) => {
         // console.log(error);
          toast.error(error);
        },
      );
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:josephchan7939@gmail.com">
        josephchan7939@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        ref={formRef} onSubmit={sendEmail}
        /*
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
        */
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="user_email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="user_message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
