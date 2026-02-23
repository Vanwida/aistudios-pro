import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSearch from "@/components/BlogSearch";
import { getAllArticles } from "@/lib/mdx";

export const metadata = {
    title: "Blog | aistudios.pro",
    description: "Deep dives into building AI agents, operating systems, and automated workflows.",
};

export default function BlogList() {
    const articles = getAllArticles();

    return (
        <>
            <Navbar />
            <main className="flex-1 w-full pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="max-w-3xl mb-12">
                        <h1 className="text-5xl font-bold text-white mb-6">Writing</h1>
                        <p className="text-xl text-gray-400">
                            Tutorials, system designs, and thoughts on the future of autonomous software.
                        </p>
                    </div>

                    <BlogSearch initialArticles={articles} />
                </div>
            </main>
            <Footer />
        </>
    );
}
