"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "../landingcomponents";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className="paddings relative z-10 py-20" id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
          <span className="smooth-lightning-text">About Typhon</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-[15px] font-normal text-xl md:text-2xl text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Typhon&nbsp;&nbsp;</span>is an advanced AI that interacts with tokens like a human, providing real-time insights, predicting market trends, and optimizing crypto investments. Key features include portfolio management, security scanning, blockchain investigation, tokenomics optimization, and NFT & gaming strategy support.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
