// app/sitemap.ts
import { MetadataRoute } from "next";
import blogsData from "@/data/blog-post.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://modulor.co.ke";

  const blogPosts = blogsData.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.published_date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...blogPosts,
  ];
}