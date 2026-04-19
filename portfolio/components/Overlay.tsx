"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const Section = ({
    text,
    subText,
    align = "center",
    start,
    end,
    scrollYProgress,
}: {
    text: string;
    subText?: string;
    align?: "left" | "center" | "right";
    start: number;
    end: number;
    scrollYProgress: MotionValue<number>;
}) => {
    const opacity = useTransform(
        scrollYProgress,
        [start - 0.05, start, end, end + 0.05],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start - 0.05, end + 0.05],
        [50, -50]
    );

    // Mobile: Aligns bottom & center. Desktop: Respects left/right/center alignment.
    const alignClass =
        align === "left"
            ? "justify-end pb-24 items-center text-center md:justify-center md:pb-0 md:items-start md:text-left"
            : align === "right"
                ? "justify-end pb-24 items-center text-center md:justify-center md:pb-0 md:items-end md:text-right"
                : "justify-end pb-24 items-center text-center md:justify-center md:pb-0 md:items-center md:text-center";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`fixed top-0 left-0 w-full h-full pointer-events-none flex flex-col px-6 md:px-20 z-20 ${alignClass}`}
        >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                {text}
            </h2>
            {subText && (
                <p className="text-lg md:text-2xl text-gray-200 mt-4 font-light tracking-wide max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {subText}
                </p>
            )}
        </motion.div>
    );
};

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <>
            <Section
                text="Ayush Sahu."
                subText="Software Engineer & Business Analyst"
                align="center"
                start={0.05}
                end={0.2}
                scrollYProgress={scrollYProgress}
            />
            <Section
                text="Bridging Tech & Strategy."
                subText="Specializing in the MERN Stack, AI Integration, and Process Modeling."
                align="left"
                start={0.3}
                end={0.45}
                scrollYProgress={scrollYProgress}
            />
            <Section
                text="Leadership & Impact."
                subText="Led 500+ student events & built hackathon-winning AI applications."
                align="left"
                start={0.6}
                end={0.75}
                scrollYProgress={scrollYProgress}
            />
        </>
    );
}