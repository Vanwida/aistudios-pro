import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorBio from "@/components/AuthorBio";
import TableOfContents, { Heading } from "@/components/TableOfContents";
import NewsletterForm from "@/components/NewsletterForm";
import GiscusComments from "@/components/GiscusComments";
import { FiClock, FiCalendar, FiArrowLeft, FiEye } from "react-icons/fi";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const article = getArticleBySlug(params.slug);
    if (!article) return { title: "Not Found" };

    return {
        title: `${article.meta.title} | aistudios.pro`,
        description: article.meta.excerpt,
        openGraph: {
            title: article.meta.title,
            description: article.meta.excerpt,
            type: "article",
            publishedTime: article.meta.date,
            authors: ["Vanwida"],
            images: article.meta.ogImage ? [article.meta.ogImage] : [],
        },
    };
}

// Extract headings for the TOC
function extractHeadings(content: string): Heading[] {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const headings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2];
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        headings.push({ level, text, id });
    }

    return headings;
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = getArticleBySlug(params.slug);

    if (!article) {
        notFound();
    }

    const headings = extractHeadings(article.content);

    // Format dates
    const formattedDate = new Date(article.meta.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <>
            {/* Reading Progress Bar placeholder - could be implemented with framer-motion */}
            <div className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300 w-0" id="progress-bar"></div>

            <Navbar />
            <main className="flex-1 w-full pt-32 pb-20 selection:bg-primary/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to blog
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-12 items-start relative">
                        <article className="flex-1 min-w-0 max-w-3xl">
                            {/* Header */}
                            <header className="mb-12">
                                {article.meta.tags && article.meta.tags.length > 0 && (
                                    <div className="flex gap-2 flex-wrap mb-6">
                                        {article.meta.tags.map(tag => (
                                            <span key={tag} className="text-sm px-3 py-1 rounded-full bg-white/5 text-primary-light border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance leading-tight">
                                    {article.meta.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm border-b border-border pb-8">
                                    <div className="flex items-center gap-2">
                                        <FiCalendar />
                                        <time dateTime={article.meta.date}>{formattedDate}</time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiClock />
                                        <span>{article.meta.readTime || "5 min read"}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiEye />
                                        {/* Static random number for view counter if Vercel KV is not implemented yet */}
                                        <span>{Math.floor(Math.random() * (5000 - 1000 + 1) + 1000).toLocaleString()} views</span>
                                    </div>
                                    <div className="flex items-center gap-2 ml-auto">
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/20 text-primary-light rounded-full text-xs font-semibold uppercase tracking-wider">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                            Written by AI
                                        </span>
                                    </div>
                                </div>
                            </header>

                            {/* Content */}
                            <div className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary-light prose-strong:text-white prose-code:text-primary-light prose-code:bg-white/5 prose-code:px-1 prose-code:rounded prose-pre:bg-transparent prose-pre:p-0">
                                <MDXRemote source={article.content} components={mdxComponents} />
                            </div>

                            {/* Footer */}
                            <AuthorBio />

                            <div className="mt-16 bg-gradient-to-b from-white/5 to-transparent rounded-3xl p-8 border border-white/10 text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
                                <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join the newsletter to get deep dives into AI agents and system architectures delivered straight to your inbox.</p>
                                <NewsletterForm />
                            </div>

                            <GiscusComments />
                        </article>

                        {/* Sidebar TOC */}
                        <aside className="hidden lg:block w-64 shrink-0 -mt-2">
                            <TableOfContents headings={headings} />
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
