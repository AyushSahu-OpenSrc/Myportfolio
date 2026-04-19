"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "OWASP Committee, TCET",
        role: "Vice Chairperson",
        period: "Experience",
        description: "Identified a core business need for cybersecurity awareness, defining project scope for 500+ students. Gathered requirements to design targeted technical workshops (Bug Bounty, Web Security).",
    },
    {
        company: "UGC Committee – NEP Saarthi, TCET",
        role: "Member",
        period: "Experience",
        description: "Managed the lifecycle of 6+ projects aligned with the NEP framework. Facilitated cross-functional collaboration aimed at improving student innovation and career guidance processes.",
    },
    {
        company: "Event Management",
        role: "Coordinator & Leader",
        period: "3 Years Experience",
        description: "Recognized for strong communication and leadership skills while hosting and anchoring multiple college-level cultural and technical events.",
    },
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-white text-center"
                >
                    Career Timeline
                </motion.h2>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                            <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-widest">{exp.period}</div>
                            <h3 className="text-3xl font-bold text-white mb-1">{exp.company}</h3>
                            <h4 className="text-xl text-gray-400 mb-4">{exp.role}</h4>
                            <p className="text-gray-300 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}