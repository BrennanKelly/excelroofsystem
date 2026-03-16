import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/siteData";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on commercial roof restoration, maintenance, and repair. Tips and resources for Southwest Michigan business owners.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Commercial Roofing Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Expert insights on commercial roof restoration, maintenance, and
            repair.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-medium text-red-brand">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-red-brand"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-gray-600">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center font-semibold text-red-brand transition-colors hover:text-red-700"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
