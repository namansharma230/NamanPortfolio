"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import Button from "../ui/Button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
    const [typedText, setTypedText] = useState("");
    const skills = ["Full-Stack Developer", "AI Enthusiast", "Problem Solver"];
    const [skillIndex, setSkillIndex] = useState(0);

    useEffect(() => {
        let currentText = "";
        let currentIndex = 0;
        const currentSkill = skills[skillIndex];

        const typingInterval = setInterval(() => {
            if (currentIndex < currentSkill.length) {
                currentText += currentSkill[currentIndex];
                setTypedText(currentText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    const deletingInterval = setInterval(() => {
                        if (currentText.length > 0) {
                            currentText = currentText.slice(0, -1);
                            setTypedText(currentText);
                        } else {
                            clearInterval(deletingInterval);
                            setSkillIndex((prev) => (prev + 1) % skills.length);
                        }
                    }, 50);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [skillIndex, skills]);

    const iconMap: Record<string, any> = {
        FaGithub,
        FaLinkedin,
        FaEnvelope,
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container-custom px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Greeting */}
                    <motion.p
                        className="text-primary text-lg md:text-xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hi, I&apos;m
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-syncopate font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {PERSONAL_INFO.name}
                    </motion.h1>

                    {/* Typed Text */}
                    <motion.div
                        className="h-16 md:h-20 flex items-center justify-center mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-poppins font-medium text-gradient">
                            {typedText}
                            <span className="inline-block w-1 h-8 md:h-10 bg-primary ml-1 animate-pulse" />
                        </h2>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {PERSONAL_INFO.bio}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Button href="#projects" variant="primary">
                            View Projects
                        </Button>
                        <Button href="/resume.pdf" variant="outline">
                            Download Resume
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = iconMap[social.icon];
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-dark-100 border border-primary/30 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors"
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: "0 0 20px rgba(233, 30, 140, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon className="text-xl" />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
            >
                <FaChevronDown className="text-primary text-2xl" />
            </motion.div>
        </section>
    );
}
