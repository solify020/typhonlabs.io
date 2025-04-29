import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Sign Up & Connect",
        description: "Create your account and securely connect your wallets or exchange APIs to enable personalized analysis.",
        color: "from-typhon-primary to-typhon-secondary"
    },
    {
        number: "02",
        title: "Set Your Preferences",
        description: "Define your investment goals, risk tolerance, and areas of interest to receive tailored insights.",
        color: "from-typhon-primary to-typhon-secondary"
    },
    {
        number: "03",
        title: "Receive AI Insights",
        description: "Get real-time analytics, predictions, and security alerts based on your portfolio and market conditions.",
        color: "from-typhon-primary to-typhon-secondary"
    },
    {
        number: "04",
        title: "Act With Confidence",
        description: "Make informed decisions backed by advanced AI analysis and comprehensive blockchain intelligence.",
        color: "from-typhon-primary to-typhon-secondary"
    }
];

const HowItWorksSection = () => {
    return (
        <section id="howitworks" className="py-20 bg-gradient-to-b from-[#161616] to-[#161616]/95 relative">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                        <span className="smooth-lightning-text">How It Works</span>
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Typhon streamlines your crypto journey with a simple yet powerful process designed for both beginners and experts.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
                    {steps.map((step, index) => (
                        <div key={index}  className="md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                            <div className="feature-card h-full flex flex-col">
                                <div className={`bg-gradient-to-r ${step.color} text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl mb-4`}>
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                                <p className="text-gray-300 flex-grow">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;