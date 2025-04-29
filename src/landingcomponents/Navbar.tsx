"use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { navVariants } from "../utils/motion";
// import Link from "next/link";

// const Navbar = () => (
//   <header className="w-full h-[80px] flex items-center justify-center">
//       <div className="max-w-7xl w-full flex justify-between gap-8">
//         <Image
//           src="/logo.png"
//           width={130}
//           height={130}
//           alt="search"
//           className="object-contain"
//         />
//         <div className="flex justify-center items-center gap-8">
//           <div className="relative group">
//             <Link href="#tokenomics" className="font-[500]">Tokenomics</Link>
//             <div className="absolute bottom-0 w-0 h-[2px] bg-white group-hover:w-full slide-in-from-top-px duration-300"></div>
//           </div>
//           <div className="relative group">
//             <Link href="#userbenefits" className="font-[500]">User benefits</Link>
//             <div className="absolute bottom-0 w-0 h-[2px] bg-white group-hover:w-full slide-in-from-top-px duration-300"></div>
//           </div>
//           <div className="relative group">
//             <Link href="" className="font-[500]">About</Link>
//             <div className="absolute bottom-0 w-0 h-[2px] bg-white group-hover:w-full slide-in-from-top-px duration-300"></div>
//           </div>
//           <a href="/home" className="border px-5 py-2 rounded-lg bg-[#4d9dcb] font-[500] border-[#4d9dcb] hover:bg-transparent transition duration-300">With Typhon Token</a>
//         </div>
//       </div>
//   </header>
// );

// export default Navbar;

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const With_Typhon_Token = () => {
    router.push("/home");
  }

  const navItem = [
    {
      content : "About",
      path : "about"
    },
    {
      content: "Core Features",
      path: "features"
    },
    {
      content: "How It Works",
      path: "howitworks"
    },
    {
      content: "Tokenomics",
      path: "tokenomics"
    },
    {
      content: "Security & Trust",
      path: "security"
    },
    {
      content: "FAQ",
      path: "faq"
    },
  ]

  const Buy_Token = () => {
    window.location.href = "https://pump.fun/coin/4MzQPrNDpuGZjd4VeNimKfvFj4qUfmSySAyN9frxvKTy";
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-typhon-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <Image src="/logo.png" width={165} height={165} alt='Logo'/>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {
            navItem.map((item, index) => (
              <a key={index} href={`#${item.path}`} className="text-gray-300 hover:text-[#5ca9d6] transition-colors font-[500]">{item.content}</a>
            ))
          }
          <button className="bg-transparent hover:bg-none border border-[#5ca9d6] px-4 py-2 rounded-lg font-[500] hover:bg-[#5ca9d6] transition duration-150" onClick={() => Buy_Token()}><span className='text-white'>Buy Token</span></button>
          <Button className="button-primary" onClick={() => With_Typhon_Token()}><span className='text-white'>With Typhon Token</span></Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-typhon-dark/95 backdrop-blur-md py-4 px-4 border-b border-white/10">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-300 hover:text-typhon-highlight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-typhon-highlight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#security"
              className="text-gray-300 hover:text-typhon-highlight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-typhon-highlight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="button-primary w-full">Get Early Access</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;