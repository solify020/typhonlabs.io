"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
import { ReactNode } from "react";

type textProps = {
  title: string | ReactNode;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: textProps) => (
  <div>
    <motion.p
      variants={textContainer}
      className={`text-[40px] gradient-text font-bold ${textStyles}`}
    >
      {typeof title === "string" &&
        Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
    </motion.p>
  </div>
);

export const TitleText = ({ title, textStyles }: textProps) => (
  <div>
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] gradient-text ${textStyles}`}
    >
      {title}
    </motion.h2>
  </div>
);
