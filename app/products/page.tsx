import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export const metadata = {
    title: "Products | aistudios.pro",
    description: "Premium tools, templates, and systems to accelerate your AI agent workflow.",
};

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main className="flex-1 w-full pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-5xl font-bold text-white mb-6">Premium Workflows</h1>
                        <p className="text-xl text-gray-400">
                            Stop reinventing the wheel. Use the exact systems, templates, and agent memory architectures we build internally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <ProductCard
                            title="Vanwida OS Complete"
                            description="The complete AI Agent Operating System. Includes a 40-page technical guide, fully configured memory templates (SOUL.md, TACIT.md, HEARTBEAT.md, CRITICAL-RULES.md), cron job scripts for automated memory consolidation, and a highly tuned USER.md profile to get pristine responses."
                            price={29}
                            url="https://7210972449114.gumroad.com/l/bjbynm"
                            featured={true}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProductCard
                            title="Vanwida OS Starter"
                            description="The bare essentials. The bare-bones SOUL.md, AGENTS.md, and IDENTITY.md templates. Everything you need to escape prompt engineering."
                            price={9}
                            url="https://7210972449114.gumroad.com/l/bjbynm"
                        />
                        <ProductCard
                            title="Prompt Engine System"
                            description="150+ battle-tested system prompts optimized for Claude 3.5 Sonnet and GPT-4o. Categorized by use-case: SWE, Copywriter, Analyst."
                            price={19}
                            url="https://7210972449114.gumroad.com/l/bjbynm"
                        />
                        <ProductCard
                            title="1-on-1 Consulting"
                            description="Book a 60-minute technical session to review your agent architecture, find memory leaks, and optimize your token usage."
                            price={199}
                            url="https://7210972449114.gumroad.com/l/bjbynm"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
