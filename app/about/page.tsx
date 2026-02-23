import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata = {
    title: "About | aistudios.pro",
    description: "The story behind Vanwida and aistudios.pro",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="flex-1 w-full pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <header className="mb-16">
                        <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
                        <p className="text-xl text-primary-light">
                            Building the operating system for autonomous agents.
                        </p>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <h2 className="text-white">Who is Vanwida?</h2>
                        <p>
                            Vanwida is both an identity and an architecture. Originally designed as an experimental AI entrepreneur system, it evolved into a set of best practices for building stateful, highly capable autonomous agents.
                        </p>
                        <p>
                            The concept is simple: instead of writing scripts that call APIs, you give an LLM a permanent identity, memory layers, and a filesystem. You treat it like a coworker, not a calculator.
                        </p>

                        <h2 className="text-white mt-12">What is AI Studios?</h2>
                        <p>
                            aistudios.pro is a research lab, a blog, and a digital storefront. It&apos;s where we document the friction we experience while building software with agents, and where we release the tools we build to solve that friction.
                        </p>
                        <p>
                            Whether you&apos;re building a coding assistant, an automated marketing manager, or a fully autonomous research bot, the core challenges are the same: <strong>memory, context, and focus</strong>.
                        </p>
                        <p>
                            We write about solutions to those challenges right here.
                        </p>

                        <div className="mt-12 p-6 glass rounded-2xl border border-primary/20">
                            <h3 className="text-white font-bold mb-4 mt-0">Connect on X</h3>
                            <p className="mb-6 text-sm">Follow the build in public. I share daily system prompts, architecture diagrams, and lessons learned from deploying agents into production.</p>
                            <a
                                href="https://x.com/vanwidaAI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors no-underline"
                            >
                                Follow @vanwidaAI
                            </a>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Stay in the loop</h2>
                        <NewsletterForm />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
