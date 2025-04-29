import React from 'react';
import { LineChart, Shield, Database, Activity, Search, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <LineChart className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Real-time Insights & Market Predictions",
        description: "Get ahead with AI-driven market analysis that predicts trends and identifies opportunities before they become obvious to others."
    },
    {
        icon: <Activity className="h-10 w-10 text-[#5ca9d6]" />,
        title: "AI-Driven Portfolio Management",
        description: "Optimize your investments with personalized recommendations tailored to your risk tolerance and financial goals."
    },
    {
        icon: <Shield className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Advanced Security Scanning",
        description: "Sleep soundly knowing our AI continuously scans for vulnerabilities and potential threats to your crypto assets."
    },
    {
        icon: <Database className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Deep Blockchain Investigation",
        description: "Unlock the power of on-chain data with comprehensive blockchain analytics and transaction pattern recognition."
    },
    {
        icon: <Search className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Optimized Tokenomics",
        description: "Evaluate token fundamentals and economic models to identify sustainable projects with long-term growth potential."
    },
    {
        icon: <Users className="h-10 w-10 text-[#5ca9d6]" />,
        title: "NFT & Gaming Strategy Support",
        description: "Make informed decisions in NFT markets and blockchain gaming with specialized AI insights tailored to digital assets."
    }
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 bg-[#161616] relative">

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                        <span className="smooth-lightning-text">Core Features</span>
                    </h1>

                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Typhon combines cutting-edge AI with deep blockchain expertise to provide you with unmatched crypto intelligence tools.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card group"
                        >
                            <div className="mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#5ca9d6] transition-colors">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;