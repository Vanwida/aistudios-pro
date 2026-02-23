"use client";

import { useEffect } from "react";

interface GiscusProps {
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
}

export default function GiscusComments() {
    useEffect(() => {
        const script = document.createElement("script");
        const container = document.getElementById("giscus-container");

        if (!container) return;

        // Clear any existing children to prevent duplicates on navigation
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "vanwidaAI/aistudios-pro"); // Placeholder, update to actual repo
        script.setAttribute("data-repo-id", "R_XXXXXXXXXX"); // Placeholder
        script.setAttribute("data-category", "Announcements");
        script.setAttribute("data-category-id", "DIC_XXXXXXXXXX"); // Placeholder
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "bottom");
        script.setAttribute("data-theme", "transparent_dark");
        script.setAttribute("data-lang", "en");
        script.crossOrigin = "anonymous";
        script.async = true;

        container.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return <div id="giscus-container" className="mt-16 pt-8 border-t border-border" />;
}
