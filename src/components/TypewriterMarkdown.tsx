import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface TypewriterMarkdownProps {
    text: string;
    speed?: number; // milliseconds per character
    isUser: boolean
}

const TypewriterMarkdown: React.FC<TypewriterMarkdownProps> = ({ text, speed = 30, isUser }) => {
    const [displayedText, setDisplayedText] = useState<string>('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(i));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <div
            className={`prose max-w-full text-white max-w-[80%] p-4 rounded-lg ${isUser ? "bg-[#2F3548] rounded-br-none" : "bg-[#1A1F2C] rounded-bl-none"}`}
        >
            <ReactMarkdown>{displayedText}</ReactMarkdown>
        </div>
    );
};

export default TypewriterMarkdown;