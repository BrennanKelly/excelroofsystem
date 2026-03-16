import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/siteData";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Full Description */}
          <p className="text-lg leading-relaxed text-gray-700">
            {service.description}
          </p>

          {/* Why Choose Us */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-dark md:text-3xl">
              Why Choose Us for {service.title}
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-brand text-sm font-bold text-white">
                  ✓
                </span>
                <span className="text-gray-700">
                  Decades of hands-on experience with commercial roofing systems
                  of every type and size.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-brand text-sm font-bold text-white">
                  ✓
                </span>
                <span className="text-gray-700">
                  Premium materials and proven techniques that deliver lasting,
                  high-quality results.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-brand text-sm font-bold text-white">
                  ✓
                </span>
                <span className="text-gray-700">
                  Proudly serving Southwest Michigan including Kalamazoo, Three
                  Rivers, Portage, and surrounding communities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-brand text-sm font-bold text-white">
                  ✓
                </span>
                <span className="text-gray-700">
                  Free, no-obligation quotes with transparent pricing and honest
                  recommendations.
                </span>
              </li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-dark md:text-3xl">
              Our Process
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[
                {
                  step: 1,
                  title: "Inspection",
                  text: "We conduct a thorough on-site inspection of your commercial roof to understand its current condition and identify all areas of concern.",
                },
                {
                  step: 2,
                  title: "Assessment",
                  text: "Our team analyzes the inspection findings and determines the most cost-effective approach to address your roof's needs.",
                },
                {
                  step: 3,
                  title: "Proposal",
                  text: "You receive a detailed proposal with clear scope of work, transparent pricing, and a projected timeline for completion.",
                },
                {
                  step: 4,
                  title: "Execution",
                  text: "Our experienced crew completes the work on schedule using premium materials, keeping you informed every step of the way.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-brand text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-dark">
            Related Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => (
              <ServiceCard
                key={related.slug}
                title={related.title}
                description={related.shortDescription}
                slug={related.slug}
                icon={related.icon}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block font-semibold text-red-brand transition hover:text-red-700"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading={`Get a Free ${service.title} Estimate`}
        subtext="Contact us today for a no-obligation assessment and quote tailored to your building's needs."
      />
    </>
  );
}
