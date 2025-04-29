import { motion } from "framer-motion";
import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ToTop = () => {

    const [isTopButtonShow, setIsTopButtonShow] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsTopButtonShow(true);
            } else {
                setIsTopButtonShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Link
            href="#hero"
            className={`fixed w-14 h-14 bg-transparent border border-[#5ca9d6] flex justify-center items-center bottom-10 right-10 rounded-full cursor-pointer
                transition-all duration-500 ease-in-out
                transform
                ${isTopButtonShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
            `}>
            <ArrowBigDownDash className="rotate-180 text-[#5ca9d6]" />
        </Link>
    )
}

export default ToTop;