"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    onClick?: () => void;
    href?: string;
    className?: string;
    icon?: ReactNode;
}

export default function Button({
    children,
    variant = "primary",
    onClick,
    href,
    className = "",
    icon,
}: ButtonProps) {
    const baseStyles = "px-8 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 justify-center";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_40px_rgba(233,30,140,0.8)] hover:scale-105",
        secondary: "bg-dark-100 text-white border border-primary/30 hover:border-primary hover:shadow-[0_0_20px_rgba(233,30,140,0.5)] hover:scale-105",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_30px_rgba(233,30,140,0.6)] hover:scale-105",
    };

    const Component = motion.button;

    if (href) {
        return (
            <motion.a
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
                {children}
                {icon && <span>{icon}</span>}
            </motion.a>
        );
    }

    return (
        <Component
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
            {icon && <span>{icon}</span>}
        </Component>
    );
}
