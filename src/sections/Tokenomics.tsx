
import React from 'react';
import { Coins, Lock, Percent } from 'lucide-react';
import { motion } from 'framer-motion';

const tokenomicsData = [
    {
        icon: <Coins className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Total Supply",
        value: "1,000,000,00",
        description: "Fixed maximum token supply"
    },
    {
        icon: <Percent className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Liqudity",
        value: "100%",
        description: "Strategic pricing for sustainable growth"
    },
    {
        icon: <Percent className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Token Tax",
        value: "0%",
        description: "Competitive staking incentives"
    },
    {
        icon: <Lock className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Lock State",
        value: "Locked",
        description: "Long-term value alignment"
    }
];

const TokenomicsSection = () => {
    return (
        <section className="py-20 bg-[#161616] relative" id='tokenomics'>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                        <span className="smooth-lightning-text">Tokenomics</span>
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Our token economics are designed for long-term sustainability and value creation.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tokenomicsData.map((item, index) => (
                        <div key={index} 
                            className="feature-card group text-center">
                            <div className="mb-6 flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#5ca9d6] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-2xl font-bold text-[#5ca9d6] mb-2">{item.value}</p>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TokenomicsSection;