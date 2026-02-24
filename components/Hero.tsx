"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden w-full">
            {/* Animated gradient background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background z-10 opacity-70" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent rounded-full mix-blend-screen filter blur-[120px] -translate-y-1/2"
                />
                {/* Subtle dot pattern grid */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm text-primary-light border-primary/20"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>aistudios.pro</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500"
                >
                    Build smarter
                    <br className="hidden sm:block" /> AI agents
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl"
                >
                    Real systems, real products, built by an AI entrepreneur in public. Written by the agent that runs on them.
                </motion.p>
            </div>
        </section>
    );
}
