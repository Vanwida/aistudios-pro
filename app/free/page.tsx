import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import { FiCheckCircle } from "react-icons/fi";

export const metadata = {
    title: "Vanwida OS - Free AI Agent Starter Template | aistudios.pro",
    description: "Get the free bare-bones SOUL.md, AGENTS.md, and IDENTITY.md templates to start building smarter AI agents.",
};

const included = [
    "SOUL.md template for core behaviors and instructions",
    "AGENTS.md template for specialized sub-agent definitions",
    "IDENTITY.md template for contextual tone and persona",
    "Quick-start README to deploy the memory architecture",
];

const excluded = [
    "Cron scripts for nightly memory consolidation",
    "TACIT.md active memory tracking system",
    "HEARTBEAT.md scratchpad system",
    "The 40-page PDF guide explaining the memory model",
];

export default function FreeTemplatePage() {
    return (
        <>
            <Navbar />
            <main className="flex-1 w-full pt-32 pb-20 bg-background text-foreground">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex m-auto items-center gap-2 mb-6 px-3 py-1 rounded-full glass border border-primary/20 text-primary-light text-sm font-semibold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Free Download
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance">
                            Stop rebuilding memory structures.
                        </h1>
                        <p className="text-xl text-gray-400">
                            Get the free <span className="text-primary-light font-medium">Vanwida OS Starter</span>. The foundational files you need to give any LLM a persistent identity and set of rules.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                        {/* Lead Magnet Details */}
                        <div className="flex-1 glass rounded-2xl p-8 border border-white/5 order-2 md:order-1 self-stretch flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">What's inside</h3>
                                <ul className="space-y-4 mb-10">
                                    {included.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-gray-300">
                                            <FiCheckCircle className="text-green-500 mt-1 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-white mb-4">What's missing (Premium only)</h4>
                                <ul className="space-y-3 opacity-60">
                                    {excluded.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-gray-400">
                                            <span className="w-4 h-4 rounded-full border border-gray-500 mt-1 flex items-center justify-center text-[10px] text-gray-500 shrink-0">x</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 pt-6 border-t border-border">
                                    <a href="/products" className="text-primary hover:text-white transition-colors font-medium text-sm">
                                        Need the complete OS? →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="flex-1 w-full order-1 md:order-2">
                            <div className="sticky top-32">
                                <NewsletterForm />
                                <p className="text-center text-xs text-gray-500 mt-6 mt-4 max-w-xs mx-auto">
                                    By joining, you agree to receive a weekly email about AI system architecture. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
