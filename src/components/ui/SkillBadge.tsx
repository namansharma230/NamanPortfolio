"use client";

import { motion } from "framer-motion";
import * as Icons from "react-icons/si";

interface SkillBadgeProps {
    name: string;
    icon?: string;
    proficiency?: number;
    showProficiency?: boolean;
}

export default function SkillBadge({
    name,
    icon,
    proficiency = 0,
    showProficiency = false
}: SkillBadgeProps) {
    // Dynamically get the icon component
    const IconComponent = icon ? (Icons as any)[icon] : null;

    return (
        <motion.div
            className="group relative px-4 py-2 rounded-full border border-primary/30 bg-dark-100/50 backdrop-blur-sm flex items-center gap-2 cursor-pointer overflow-hidden"
            whileHover={{
                scale: 1.05,
                borderColor: "rgba(233, 30, 140, 0.8)",
                boxShadow: "0 0 20px rgba(233, 30, 140, 0.5)"
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
        >
            {/* Icon */}
            {IconComponent && (
                <IconComponent className="text-primary text-lg group-hover:rotate-12 transition-transform duration-300" />
            )}

            {/* Name */}
            <span className="text-sm font-medium text-white">{name}</span>

            {/* Proficiency tooltip on hover */}
            {showProficiency && proficiency > 0 && (
                <motion.div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-100 border border-primary/50 px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                >
                    <span className="text-primary font-semibold">{proficiency}%</span> proficiency
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark-100 border-r border-b border-primary/50 rotate-45" />
                </motion.div>
            )}

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </motion.div>
    );
}
