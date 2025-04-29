import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const securityFeatures = [
    {
        icon: <Shield className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Advanced Encryption",
        description: "Enterprise-grade encryption protecting all your data and connections."
    },
    {
        icon: <Lock className="h-10 w-10 text-[#5ca9d6]" />,
        title: "No Private Key Storage",
        description: "We never store your private keys, seed phrases, or credentials."
    },
    {
        icon: <Key className="h-10 w-10 text-[#5ca9d6]" />,
        title: "Regular Security Audits",
        description: "Independent security audits ensuring platform integrity."
    }
];

const SecuritySection = () => {
    return (
        <section id="security" className="py-20 bg-[#161616]/90 relative">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                        <span className="smooth-lightning-text">Security & Trust</span>
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Your security is our top priority. Typhon employs industry-leading measures to protect your data and investments.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {securityFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                        >
                            <div className="mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SecuritySection;