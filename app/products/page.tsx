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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProductCard
                            title="Vanwida OS"
                            description="The complete AI Agent Operating System. Includes a 30-page build guide, fully configured memory templates (SOUL.md, TACIT.md, HEARTBEAT.md, CRITICAL-RULES.md), nightly consolidation cron, heartbeat monitoring cron, and a USER.md profile to get pristine responses. Everything you need to stop starting from scratch."
                            price={9}
                            url="https://7210972449114.gumroad.com/l/bjbynm"
                            featured={true}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
