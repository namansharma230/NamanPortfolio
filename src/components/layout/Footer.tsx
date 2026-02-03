"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const iconMap: Record<string, any> = {
        FaGithub,
        FaLinkedin,
        FaEnvelope,
    };

    return (
        <footer className="relative border-t border-primary/20 bg-dark-100/50 backdrop-blur-sm">
            <div className="container-custom px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-syncopate font-bold text-gradient mb-4">
                            Naman Sharma
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Full-Stack Developer & AI Enthusiast building innovative solutions
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4 mb-4">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = iconMap[social.icon];
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-dark-200 border border-primary/30 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors"
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: "0 0 20px rgba(233, 30, 140, 0.5)"
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon />
                                    </motion.a>
                                );
                            })}
                        </div>
                        <p className="text-gray-400 text-sm">namannsharma4@gmail.com</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-primary/10 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Naman Sharma. One Pixel at a Time
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg z-40"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 30px rgba(233, 30, 140, 0.8)"
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowUp />
                </motion.button>
            )}
        </footer>
    );
}
