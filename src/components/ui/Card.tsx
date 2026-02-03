"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <motion.div
            className={`glass rounded-xl p-6 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? {
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(233, 30, 140, 0.2)"
            } : {}}
        >
            {children}
        </motion.div>
    );
}
