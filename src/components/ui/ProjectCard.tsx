"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github?: string;
    demo?: string;
    category: string;
}

export default function ProjectCard({
    title,
    description,
    tech,
    image,
    github,
    demo,
    category,
}: ProjectCardProps) {
    return (
        <motion.div
            className="group relative rounded-xl overflow-hidden bg-dark-100 border border-primary/20 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 50px rgba(233, 30, 140, 0.3)"
            }}
        >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden bg-dark-200">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-gray-300 mb-4">{description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tech.map((t, i) => (
                            <span
                                key={i}
                                className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaGithub /> GitHub
                            </a>
                        )}
                        {demo && demo !== "#" && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
                <span className="text-xs text-primary uppercase tracking-wider">{category}</span>
                <h3 className="text-xl font-syncopate font-bold text-white mt-2 mb-2">{title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2 group-hover:opacity-0 transition-opacity duration-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
