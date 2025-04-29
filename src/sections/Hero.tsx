"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { LineChart, Lock, Database, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { fadeIn } from "../utils/motion";

const Hero = () => {

  const router = useRouter();

  const With_Typhon_Token = () => {
    router.push("/home");
  }

  const Buy_Token = () => {
    window.location.href = "https://pump.fun/coin/4MzQPrNDpuGZjd4VeNimKfvFj4qUfmSySAyN9frxvKTy";
  }

  return (
    <div className="w-full hero-gradient min-h-screen pt-20 flex items-center relative overflow-hidden" id='hero'>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-[60%] text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              <span className="smooth-lightning-text">Smart Chatbot</span> That Talks Tokens<br />
              and Guides Your <span className="smooth-lightning-text">Crypto Moves</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Meet the intelligent chatbot built exclusively to engage seamlessly with tokens. Unlock insights, predict market movements, optimize your portfolio,
              and make smarter investment decisions—all through natural, human-like conversations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#5ca9d6] hover:bg-none border border-[#5ca9d6] px-4 py-2 rounded-lg font-[500] hover:bg-[#5ca9d6] transition duration-150" onClick={() => With_Typhon_Token()}><span className='text-white'>With Typhon Token</span></button>
              <button className="bg-transparent hover:bg-none border border-[#5ca9d6] px-4 py-2 rounded-lg font-[500] hover:bg-[#5ca9d6] transition duration-150" onClick={() => Buy_Token()}><span className='text-white'>Buy Token</span></button>
            </div>
            <div className='w-full flex justify-start items-center gap-4 mt-8'>
              <div className='flex justify-center items-center gap-1'>
                <Star className='text-yellow-500' />
                <Star className='text-yellow-500' />
                <Star className='text-yellow-500' />
                <Star className='text-yellow-500' />
                <Star className='text-yellow-500' />
              </div>

              <div className="">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                />
              </div>
              <span className='text-3xl font-bold'>3,000,000+</span>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center">
                <LineChart className="h-6 w-6 mr-2 text-[#5ca9d6]" />
                <span className="text-gray-300">Real-time Analysis</span>
              </div>
              <div className="flex items-center">
                <Lock className="h-6 w-6 mr-2 text-[#5ca9d6]" />
                <span className="text-gray-300">Advanced Security</span>
              </div>
              <div className="flex items-center">
                <Database className="h-6 w-6 mr-2 text-[#5ca9d6]" />
                <span className="text-gray-300">Blockchain Intelligence</span>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <motion.div variants={fadeIn("right", "tween", 0.3, 1)}>
                <Link href="https://x.com/typhonlabs" target='_blank'>
                  <Image width={40} height={40} src="/twitter.png" alt="" />
                </Link>
              </motion.div>
              <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
                <Link href="https://discord.gg/A8UauYAm" target='_blank'>
                  <Image width={40} height={40} src="/discord.png" alt="" />
                </Link>
              </motion.div>
              <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
                <Link href="https://github.com/laurence57l" target='_blank'>
                  <Image width={40} height={40} src="/github.png" alt="" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-[40%] mt-12 lg:mt-0 animate-float">
            <div className="relative w-full">
              <img src="/hero.png" alt="Hero" className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
