import { getAllArticles } from "@/lib/mdx";

export async function GET() {
    const articles = getAllArticles();
    const baseUrl = "https://aistudios.pro";

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>aistudios.pro Blog</title>
      <link>${baseUrl}</link>
      <description>Deep dives into building AI agents, operating systems, and automated workflows.</description>
      <language>en</language>
      ${articles
            .map(
                (article) => `
        <item>
          <title><![CDATA[${article.title}]]></title>
          <link>${baseUrl}/blog/${article.slug}</link>
          <description><![CDATA[${article.excerpt}]]></description>
          <pubDate>${new Date(article.date).toUTCString()}</pubDate>
          <guid>${baseUrl}/blog/${article.slug}</guid>
        </item>`
            )
            .join("")}
    </channel>
  </rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
}
