import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, services, primaryAreas } from "@/lib/siteData";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: `Commercial Roofing Restoration Experts | ${siteConfig.name}`,
  description:
    "Excel Roof Systems provides commercial roofing restoration, coatings, and repairs in Kalamazoo, Three Rivers, and Southwest Michigan. Free inspections. Call (269) 244-0032.",
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  name: siteConfig.name,
  telephone: siteConfig.phone,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    ...primaryAreas.map((area) => ({
      "@type": "City",
      name: area.name,
      addressRegion: area.state,
    })),
    { "@type": "State", name: "Michigan" },
    { "@type": "State", name: "Indiana" },
  ],
  serviceType: [
    "Commercial Roof Restoration",
    "Commercial Roof Coatings",
    "Flat Roof Repair",
    "Roof Maintenance",
    "Roof Inspections",
    "Roof Leak Detection",
    "Metal Roof Restoration",
    "Storm Damage Roofing",
  ],
  description:
    "Commercial roofing restoration, coatings, and repair services in Southwest Michigan.",
};

const featuredServices = [services[0], services[1], services[2], services[5]];

const whyChooseUs = [
  {
    number: "01",
    title: "Midwest Work Ethic",
    description:
      "Honest, hardworking professionals dedicated to doing the job right the first time.",
  },
  {
    number: "02",
    title: "Commercial Roofing Specialists",
    description:
      "Focused exclusively on commercial roofing restoration, repair, and maintenance.",
  },
  {
    number: "03",
    title: "Cost-Effective Restoration",
    description:
      "Restoration vs. replacement saves you up to 50-70% while extending your roof's lifespan.",
  },
  {
    number: "04",
    title: "Serving Michigan & Indiana",
    description:
      "Proudly serving Southwest Michigan, West Michigan, and Northern Indiana businesses.",
  },
];

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={homeSchema} />

      {/* ───────── Hero Section ───────── */}
      <section className="relative flex min-h-screen min-h-[600px] items-center bg-dark">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light/30 to-dark" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Commercial Roofing Restoration Experts in Southwest Michigan
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Serving Kalamazoo, Three Rivers, and surrounding West Michigan
              communities with expert roof restoration, coatings, and repairs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-red-brand px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-brand-dark"
              >
                Get Free Roof Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-dark"
              >
                Schedule Roof Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Services Overview ───────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              Commercial Roofing Services
            </h2>
            <p className="mt-4 text-lg text-gray-text">
              From restoration to emergency repairs, we provide comprehensive
              commercial roofing solutions across Southwest Michigan.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block text-lg font-semibold text-red-brand transition hover:text-red-brand-dark"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Why Choose Us ───────── */}
      <section className="bg-gray-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              Why Choose Excel Roof Systems
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-gray-border bg-white p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-brand text-lg font-bold text-white">
                  {item.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Service Area ───────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              Southwest Michigan Roofing Experts
            </h2>
            <p className="mt-4 text-lg text-gray-text">
              We proudly serve businesses throughout Southwest Michigan and the
              surrounding region with reliable commercial roofing services.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {primaryAreas.map((area) => (
              <span
                key={area.name}
                className="rounded-full border border-gray-border bg-white px-6 py-3 text-base font-medium text-dark shadow-sm"
              >
                {area.name}, {area.state}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/service-areas"
              className="inline-block text-lg font-semibold text-red-brand transition hover:text-red-brand-dark"
            >
              See All Service Areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── CTA Banner ───────── */}
      <CTABanner />

      {/* ───────── Contact / Lead Form ───────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — text & phone */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-dark sm:text-4xl">
                Get Your Free Commercial Roof Inspection
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-text">
                Ready to protect your commercial property? Reach out to our team
                for a no-cost, no-obligation roof inspection. We&apos;ll assess
                your roof&apos;s condition and provide honest recommendations
                tailored to your budget.
              </p>
              <div className="mt-8">
                <p className="text-sm font-medium uppercase tracking-wide text-gray-text">
                  Call Us Directly
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="mt-2 inline-block text-3xl font-extrabold text-red-brand transition hover:text-red-brand-dark sm:text-4xl"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <p className="mt-6 text-gray-text">
                Or fill out the form and we&apos;ll get back to you within one
                business day.
              </p>
            </div>

            {/* Right column — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
