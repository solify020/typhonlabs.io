
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-br relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                        
                        Ready to <span className="smooth-lightning-text">Transform</span> Your Crypto Strategy?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} 
                        className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Join the growing community of investors using AI-powered insights to make smarter crypto decisions. Early access members receive exclusive benefits.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} 
                        className="mt-12 flex justify-center items-center space-x-8">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">1,500+</p>
                            <p className="text-gray-300">Early Users</p>
                        </div>
                        <div className="h-12 w-px bg-white/20"></div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">96%</p>
                            <p className="text-gray-300">Prediction Accuracy</p>
                        </div>
                        <div className="h-12 w-px bg-white/20"></div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">24/7</p>
                            <p className="text-gray-300">Market Monitoring</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;