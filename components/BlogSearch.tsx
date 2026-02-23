"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { FiSearch, FiX } from "react-icons/fi";

interface BlogSearchProps {
    initialArticles: any[];
}

export default function BlogSearch({ initialArticles }: BlogSearchProps) {
    const [query, setQuery] = useState("");

    const filteredArticles = initialArticles.filter((article) => {
        const searchStr = `${article.title} ${article.excerpt} ${article.tags?.join(" ")}`.toLowerCase();
        return searchStr.includes(query.toLowerCase());
    });

    return (
        <div className="w-full">
            <div className="relative mb-12 max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-500 text-lg" />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles by title, tag, or topic..."
                    className="block w-full pl-12 pr-10 py-4 glass border-border rounded-2xl bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-lg"
                />
                {query && (
                    <button
                        onClick={() => setQuery("")}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                    >
                        <FiX className="text-lg" />
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                ))}
            </div>

            {filteredArticles.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-xl text-white mb-2">No results found for &quot;{query}&quot;</p>
                    <p className="text-gray-500">Try a different search term or category.</p>
                    <button
                        onClick={() => setQuery("")}
                        className="mt-6 text-primary hover:text-primary-light transition-colors"
                    >
                        Clear search
                    </button>
                </div>
            )}
        </div>
    );
}
