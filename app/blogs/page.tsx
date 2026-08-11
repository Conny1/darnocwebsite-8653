// app/blogs/page.tsx
import Link from "next/link";
import blogsData from "@/data/blog-post.json";


export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Guides & Articles</h1>
          <p className="text-slate-600 text-lg">Insights and tutorials from our team.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogsData.map((post) => (
            <article key={post.slug} className="border border-slate-200 rounded-2xl p-6 hover:border-blue-600 transition-colors bg-slate-50/50 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  <Link href={`/blogs   /${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm line-clamp-3">{post.meta_description}</p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-200">
                <span>{post.reading_time}</span>
                <Link href={`/blogs/${post.slug}`} className="font-semibold text-blue-600 hover:text-blue-800">
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}