"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Card from "../ui/Card";
import { PERSONAL_INFO, STATS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function About() {
    const [counts, setCounts] = useState<Record<string, number>>({});

    useEffect(() => {
        const targetValues: Record<string, number> = {};
        STATS.forEach((stat) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ""));
            targetValues[stat.label] = numericValue;
        });

        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            const newCounts: Record<string, number> = {};
            Object.entries(targetValues).forEach(([key, target]) => {
                newCounts[key] = Math.floor(target * progress);
            });

            setCounts(newCounts);

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounts(targetValues);
            }
        }, stepDuration);

        return () => clearInterval(interval);
    }, []);

    return (
        <SectionWrapper id="about">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Section Title */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <p className="text-primary uppercase tracking-wider text-sm mb-2">Get To Know Me</p>
                    <h2 className="text-4xl md:text-5xl font-syncopate font-bold text-white">
                        About <span className="text-gradient">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Profile Image */}
                    <motion.div variants={fadeInUp} className="relative">
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 glow-border group">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />

                            {/* Profile Image with animations */}
                            <motion.div
                                className="relative w-full h-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.img
                                    src="/images/profile.png"
                                    alt={PERSONAL_INFO.name}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Animated overlay on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </motion.div>

                            {/* Floating animation border glow */}
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-75 blur-xl"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Bio and Info */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {PERSONAL_INFO.title.split("|")[0].trim()}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {PERSONAL_INFO.bio}
                            </p>
                            <div className="space-y-2">
                                <p className="text-gray-300">
                                    <span className="text-primary font-semibold">🎓 Education:</span>{" "}
                                    {PERSONAL_INFO.degree} at {PERSONAL_INFO.university}
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-primary font-semibold">📍 Location:</span>{" "}
                                    {PERSONAL_INFO.location}
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-primary font-semibold">🎯 Graduation:</span>{" "}
                                    {PERSONAL_INFO.graduation}
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {STATS.map((stat, index) => (
                                <Card key={index} className="text-center" hover={false}>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, type: "spring" }}
                                    >
                                        <h4 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                                            {counts[stat.label] || 0}
                                            {stat.value.includes("+") && "+"}
                                        </h4>
                                        <p className="text-gray-400 text-sm">{stat.label}</p>
                                    </motion.div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
