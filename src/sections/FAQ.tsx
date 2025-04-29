
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: "How does Typhon's AI predict crypto market trends?",
        answer: "Typhon analyzes vast amounts of on-chain data, market indicators, social sentiment, and historical patterns through advanced machine learning algorithms. Our AI continuously learns and adapts to evolving market conditions to provide increasingly accurate predictions."
    },
    {
        question: "Is my data secure with Typhon?",
        answer: "Absolutely. We employ enterprise-grade encryption and never store your private keys or seed phrases. All connections are secure, and we conduct regular third-party security audits to ensure the highest level of protection for your data."
    },
    {
        question: "What blockchains does Typhon support?",
        answer: "Typhon supports major blockchains including Bitcoin, Ethereum, Solana, Binance Smart Chain, Polygon, Avalanche, and many more. We're continuously expanding our blockchain coverage to provide comprehensive insights across the crypto ecosystem."
    },
    {
        question: "Do I need technical knowledge to use Typhon?",
        answer: "No. Typhon is designed to be accessible for both crypto novices and experts. Our intuitive interface presents complex blockchain data and AI insights in an easy-to-understand format, while still offering advanced features for technical users."
    },
    {
        question: "What are the pricing plans for Typhon?",
        answer: "Typhon offers flexible pricing tiers including a free plan with basic features, and premium plans with advanced AI insights, portfolio optimization, and security features. Visit our pricing page for detailed information on each plan's features and limits."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-typhon-dark relative">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                        <span className="smooth-lightning-text">Frequently Asked Questions</span>
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Have questions about Typhon? Find answers to the most common questions below.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="mb-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 flex justify-between items-center text-left"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-[#5ca9d6]" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-[#5ca9d6]" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-300">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;