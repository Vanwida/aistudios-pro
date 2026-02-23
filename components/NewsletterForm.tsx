"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setMessage("Success! Check your email for the template.");
            setEmail("");
        } catch (err: any) {
            setStatus("error");
            setMessage(err.message || "Failed to subscribe.");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto relative group">
            {/* Glowing background effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-2 text-white">Get the free Vanwida OS</h3>
                <p className="text-gray-400 text-sm mb-6">
                    A starter template with SOUL.md, AGENTS.md, IDENTITY.md to plug right into your new AI agent setup.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="text-gray-500" />
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            disabled={status === "loading" || status === "success"}
                            className="block w-full pl-10 pr-3 py-3 border border-border rounded-xl bg-black/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-xl transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? (
                            <span className="animate-pulse">Sending...</span>
                        ) : status === "success" ? (
                            <span>Sent!</span>
                        ) : (
                            <>
                                <span>Get it free</span>
                                <FiArrowRight />
                            </>
                        )}
                    </button>

                    {message && (
                        <p className={`text-sm text-center mt-2 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
