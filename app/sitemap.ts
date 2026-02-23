import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aistudios.pro';

    // Get all articles
    const articles = getAllArticles();

    const articleUrls = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as any,
        priority: 0.8,
    }));

    const routes = [
        '',
        '/blog',
        '/products',
        '/about',
        '/free',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as any,
        priority: route === '' ? 1 : 0.9,
    }));

    return [...routes, ...articleUrls];
}
