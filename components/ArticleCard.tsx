import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";

interface ArticleCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    tags?: string[];
    readTime?: string;
}

export default function ArticleCard({ title, excerpt, date, slug, tags = [], readTime = "5 min read" }: ArticleCardProps) {
    return (
        <div className="glass rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(108,92,231,0.1)] flex flex-col h-full">
            <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                <time dateTime={date}>{date}</time>
                <div className="flex items-center gap-1">
                    <FiClock />
                    <span>{readTime}</span>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                {title}
            </h3>

            <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
                {excerpt}
            </p>

            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            <Link
                href={`/blog/${slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-primary transition-colors mt-auto"
            >
                <span>Read article</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
