"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const categories = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

    const filteredProjects = activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter);

    const featuredProjects = filteredProjects.filter(p => p.featured);
    const otherProjects = filteredProjects.filter(p => !p.featured);

    return (
        <SectionWrapper id="projects">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Section Title */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <p className="text-primary uppercase tracking-wider text-sm mb-2">My Work</p>
                    <h2 className="text-4xl md:text-5xl font-syncopate font-bold text-white">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(233,30,140,0.5)]"
                                    : "bg-dark-100 text-gray-300 border border-primary/30 hover:border-primary"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-syncopate font-bold text-white mb-8">
                            Featured
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <div>
                        <h3 className="text-2xl font-syncopate font-bold text-white mb-8">
                            More Projects
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherProjects.map((project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </SectionWrapper>
    );
}
