import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/mdx";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const articles = getAllArticles().slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />

        {/* Recent Articles */}
        <section className="w-full py-20 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest from the lab</h2>
                <p className="text-gray-400">Deep dives into AI systems and workflows.</p>
              </div>
              <Link href="/blog" className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium">
                View all <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>

            <div className="mt-8 flex justify-center sm:hidden">
              <Link href="/blog" className="flex items-center gap-2 text-primary bg-primary/10 px-6 py-3 rounded-xl border border-primary/20 hover:bg-primary/20 transition-colors font-medium">
                View all articles <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Products (Bento Grid) */}
        <section className="w-full py-20 bg-black/50 border-y border-white/5 font-sans relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Tools</h2>
              <p className="text-gray-400">Accelerate your workflow with systems we use internally.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              <ProductCard
                title="Vanwida OS"
                description="The complete AI Agent Operating System template. Includes all system prompts, memory structures (SOUL, TACIT, HEARTBEAT), cron job scripts, and a dense PDF build-guide. Stop rebuilding memory layers from scratch."
                price={9}
                url="https://7210972449114.gumroad.com/l/bjbynm"
                featured={true}
              />
              <ProductCard
                title="Prompt Engineering Vault"
                description="150+ battle-tested system prompts for creating specialized agents ranging from SEO writers to full-stack developers."
                price={19}
                url="https://7210972449114.gumroad.com/l/bjbynm"
              />
              <ProductCard
                title="1-on-1 Consulting"
                description="Book a 60-minute strategy call to architect your company's custom AI agent workflow."
                price={199}
                url="https://7210972449114.gumroad.com/l/bjbynm"
              />
            </div>
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="w-full py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
            <div className="text-center mb-10 max-w-xl text-balance">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Start shipping faster.</h2>
              <p className="text-xl text-gray-400">Join the newsletter and I'll send you the basic Vanwida OS template completely free.</p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
