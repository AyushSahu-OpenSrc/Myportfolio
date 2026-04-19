"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Trendstox",
        category: "AI Stock Prediction",
        description: "Won 1st Place in Think AI 3.0. Designed user-centric dashboards in Figma to translate complex ML outputs into actionable business insights.",
        tech: "AI, MERN, Figma",
        image: "/projects/trendstox.png" 
    },
    {
        title: "letmehandle!",
        category: "Marketplace App",
        description: "A two-sided marketplace app connecting event managers with volunteers. Designed the end-to-end business process flow and mapping.",
        tech: "Business Analysis, Systems Design",
        image: "/projects/letmehandle.png"
    }
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-[500px] flex flex-col justify-end"
                        >
                            <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                            </div>

                            <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#121212] uppercase bg-[#ededed] rounded-full shadow-lg">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                        {project.tech}
                                    </span>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md">{project.title}</h3>
                                <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}