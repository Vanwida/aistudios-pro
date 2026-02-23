import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export interface ArticleMeta {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    tags: string[];
    ogImage?: string;
    readTime?: string;
}

export interface Article {
    meta: ArticleMeta;
    content: string;
}

// Calculate read time roughly (200 words per minute)
function calculateReadTime(text: string): string {
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);
    return `${time} min read`;
}

export function getArticleBySlug(slug: string): Article | null {
    try {
        const realSlug = slug.replace(/\.mdx$/, "");
        const fullPath = path.join(blogDir, `${realSlug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        const meta: ArticleMeta = {
            title: data.title || "Untitled",
            slug: realSlug,
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt || "",
            tags: data.tags || [],
            ogImage: data.ogImage,
            readTime: data.readTime || calculateReadTime(content),
        };

        return { meta, content };
    } catch (err) {
        return null;
    }
}

export function getAllArticles(): ArticleMeta[] {
    if (!fs.existsSync(blogDir)) {
        return [];
    }

    const slugs = fs.readdirSync(blogDir);
    const articles = slugs
        .filter((slug) => slug.endsWith(".mdx"))
        .map((slug) => {
            const article = getArticleBySlug(slug);
            return article ? article.meta : null;
        })
        .filter((meta): meta is ArticleMeta => meta !== null)
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    return articles;
}
