import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogsData from "@/data/blog-post.json";
// Add this export to your [slug]/page.tsx
export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}


interface ContentHeading {
  type: "heading_2";
  text: string;
}

interface ContentParagraph {
  type: "paragraph";
  text: string;
}

interface ContentList {
  type: "list";
  items: string[];
}

type ContentBlock = ContentHeading | ContentParagraph | ContentList;

interface BlogPost {
  slug: string;
  title: string;
  meta_description: string;
  category: string;
  reading_time: string;
  published_date: string;
  keywords: string[];
  author: {
    name: string;
    role: string;
  };
  content: ContentBlock[];
  call_to_action: {
    headline: string;
    subheadline: string;
    button_text: string;
    link: string;
  };
}

// Dynamic SEO metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = (blogsData as BlogPost[]).find((b) => b.slug === slug);

  if (!post) return { title: "Page Not Found | Modulo" };

  return {
    title: `${post.title} | Modulo`,
    description: post.meta_description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: "article",
      publishedTime: post.published_date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.meta_description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = (blogsData as BlogPost[]).find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to all guides
        </Link>

        {/* Article Header */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-blue-600">
            <span className="bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-normal">{post.reading_time}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-normal">
              {new Date(post.published_date).toLocaleDateString("en-KE", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-sm text-slate-600">
            <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-900 border border-slate-200">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-slate-900">{post.author.name}</p>
              <p className="text-xs text-slate-500">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "heading_2":
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-slate-900 tracking-tight pt-6 pb-2 border-b border-slate-200"
                  >
                    {block.text}
                  </h2>
                );

              case "paragraph":
                return (
                  <p key={index} className="whitespace-pre-line text-slate-700">
                    {block.text}
                  </p>
                );

              case "list":
                return (
                  <ul key={index} className="space-y-2 my-4 pl-4 border-l-2 border-blue-600">
                    {block.items.map((item, i) => (
                      <li key={i} className="text-slate-700 text-sm sm:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </div>

        {/* Keywords */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-2">
          {post.keywords.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Call To Action Box */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {post.call_to_action.headline}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            {post.call_to_action.subheadline}
          </p>
          <div className="pt-2">
            <Link
              href={post.call_to_action.link}
              className="inline-flex items-center justify-center bg-black hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm"
            >
              {post.call_to_action.button_text} →
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
}