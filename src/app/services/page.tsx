import type { Metadata } from "next";
import { services } from "@/lib/siteData";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Commercial Roofing Services",
  description:
    "Comprehensive commercial roofing services including restoration, coatings, repairs, and inspections in Southwest Michigan. Cost-effective solutions for your business.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Commercial Roofing Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Comprehensive commercial roofing solutions to protect your business.
            From restoration and coatings to repairs and inspections, we deliver
            quality results you can count on.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Restoration Focus Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-dark md:text-4xl">
            Focused on Restoration, Not Replacement
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            At Excel Roof Systems, we specialize in cost-effective commercial
            roof restoration rather than costly full replacements. In many cases,
            your existing roof can be restored to like-new condition at a
            fraction of the replacement cost. Our restoration-first approach
            saves businesses significant money while extending roof life by 10 to
            20 years. We thoroughly assess every roof and recommend the most
            economical solution that delivers lasting protection for your
            building.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
