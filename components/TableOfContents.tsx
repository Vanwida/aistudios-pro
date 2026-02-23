"use client";

import { useEffect, useState } from "react";

export interface Heading {
    level: number;
    text: string;
    id: string;
}

interface TableOfContentsProps {
    headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        // Determine active heading based on scroll position
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        headings.forEach((heading) => {
            const el = document.getElementById(heading.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto hidden lg:block w-64 p-4 rounded-xl border border-border/50 glass text-sm">
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Table of Contents</h4>
            <ul className="space-y-2.5">
                {headings.map((heading, index) => {
                    const isActive = activeId === heading.id;
                    return (
                        <li
                            key={`${heading.id}-${index}`}
                            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
                        >
                            <a
                                href={`#${heading.id}`}
                                className={`block transition-colors ${isActive
                                        ? "text-primary font-medium"
                                        : "text-gray-400 hover:text-gray-200"
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById(heading.id);
                                    if (el) {
                                        window.scrollTo({
                                            top: el.offsetTop - 100, // Offset for navbar
                                            behavior: "smooth",
                                        });
                                    }
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
