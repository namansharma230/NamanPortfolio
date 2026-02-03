"use client";

import { motion } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";
import Button from "../ui/Button";

interface MobileMenuProps {
    onClose: () => void;
}

const iconMap: Record<string, any> = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            onClose();
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-background/95 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Menu Content */}
            <motion.div
                className="relative ml-auto w-full max-w-sm h-full bg-dark-100 border-l border-primary/20 flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
                {/* Close Button */}
                <div className="flex justify-end p-6">
                    <motion.button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaTimes className="text-background text-xl" />
                    </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col items-end px-6 gap-6">
                    {NAV_LINKS.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-medium text-white hover:text-primary transition-colors"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                {/* Footer Section */}
                <div className="p-6 space-y-6">
                    {/* CTA Button */}
                    <Button variant="primary" className="w-full">
                        Drop your queries →
                    </Button>

                    {/* Contact Info */}
                    <div className="space-y-2">
                        <h3 className="text-white font-semibold">Get in touch</h3>
                        <p className="text-sm text-gray-400">namansharma230@gmail.com</p>
                        <p className="text-sm text-gray-400">Connect With Us</p>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <h3 className="text-white font-semibold">Location</h3>
                        <p className="text-sm text-gray-400">Faridabad, Haryana</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = iconMap[social.icon];
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-dark-200 border border-primary/30 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors"
                                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(233, 30, 140, 0.5)" }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
