"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
    language?: string;
}

export default function CodeBlock({ children, className, language }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    // Extract text from raw children if possible
    const textContent = typeof children === "string"
        ? children
        : (children as any)?.props?.children?.toString() || "";

    const handleCopy = () => {
        navigator.clipboard.writeText(textContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6 overflow-hidden rounded-xl border border-border bg-code">
            <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-border text-xs text-gray-400">
                <span className="font-mono">{language || "text"}</span>
                <button
                    onClick={handleCopy}
                    className="hover:text-white transition-colors flex items-center gap-1 p-1"
                    aria-label="Copy code"
                >
                    {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
                <pre className={className}>
                    <code>{children}</code>
                </pre>
            </div>
        </div>
    );
}
