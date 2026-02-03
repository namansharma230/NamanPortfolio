"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import Card from "../ui/Card";
import { EXPERIENCE } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Experience() {
    return (
        <SectionWrapper id="experience" className="bg-dark-100/30">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Section Title */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <p className="text-primary uppercase tracking-wider text-sm mb-2">Career Path</p>
                    <h2 className="text-4xl md:text-5xl font-syncopate font-bold text-white">
                        My <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={fadeInUp}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(233,30,140,0.8)] z-10" />

                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-16 md:ml-0`}>
                                    <Card>
                                        {/* Company Logo Placeholder */}
                                        <div className="w-16 h-16 rounded-lg bg-dark-200 border border-primary/30 flex items-center justify-center mb-4">
                                            <span className="text-2xl font-syncopate font-bold text-primary">
                                                {exp.company.charAt(0)}
                                            </span>
                                        </div>

                                        {/* Role & Company */}
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                                        <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

                                        {/* Description */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                                    <span className="text-primary mt-1">▹</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
