"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import { PERSONAL_INFO } from "@/lib/constants";
import { supabase } from "@/lib/supabase";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        name: data.name,
                        email: data.email,
                        subject: data.subject,
                        message: data.message,
                    },
                ]);

            if (error) throw error;

            console.log("Form submitted successfully");
            setSubmitStatus("success");
            reset();

            setTimeout(() => {
                setSubmitStatus("idle");
            }, 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");

            setTimeout(() => {
                setSubmitStatus("idle");
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionWrapper id="contact">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Section Title */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <p className="text-primary uppercase tracking-wider text-sm mb-2">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl font-syncopate font-bold text-white">
                        Contact <span className="text-gradient">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left: Contact Info */}
                    <motion.div variants={fadeInUp} className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Let&apos;s work together
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Email</h4>
                                    <a
                                        href={`mailto:${PERSONAL_INFO.email}`}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {PERSONAL_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Location</h4>
                                    <p className="text-gray-400">{PERSONAL_INFO.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div variants={fadeInUp}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    Name *
                                </label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/30 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-white font-medium mb-2">
                                    Email *
                                </label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/30 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-white font-medium mb-2">
                                    Subject *
                                </label>
                                <input
                                    {...register("subject", { required: "Subject is required" })}
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/30 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="What's this about?"
                                />
                                {errors.subject && (
                                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/30 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                variant="primary"
                                className="w-full"
                                icon={<FaPaperPlane />}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>

                            {/* Success/Error Messages */}
                            {submitStatus === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-400 text-center"
                                >
                                    ✓ Message sent successfully!
                                </motion.p>
                            )}
                            {submitStatus === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-center"
                                >
                                    ⚠ Failed to send message. Please try again.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
