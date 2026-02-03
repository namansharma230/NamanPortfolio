"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import SkillBadge from "../ui/SkillBadge";
import { SKILLS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const categories = Object.keys(SKILLS);

    const displayedSkills = activeCategory
        ? { [activeCategory]: SKILLS[activeCategory as keyof typeof SKILLS] }
        : SKILLS;

    return (
        <SectionWrapper id="skills" className="bg-dark-100/30">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Section Title */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <p className="text-primary uppercase tracking-wider text-sm mb-2">What I Know</p>
                    <h2 className="text-4xl md:text-5xl font-syncopate font-bold text-white">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === null
                            ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(233,30,140,0.5)]"
                            : "bg-dark-100 text-gray-300 border border-primary/30 hover:border-primary"
                            }`}
                    >
                        All Skills
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(233,30,140,0.5)]"
                                : "bg-dark-100 text-gray-300 border border-primary/30 hover:border-primary"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="space-y-12"
                    layout
                >
                    {Object.entries(displayedSkills).map(([category, skills]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-syncopate font-bold text-white">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <SkillBadge
                                        key={`${category}-${skill.name}-${index}`}
                                        name={skill.name}
                                        icon={skill.icon}
                                        proficiency={skill.proficiency}
                                        showProficiency={true}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
