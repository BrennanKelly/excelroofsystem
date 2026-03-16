import type { Metadata } from "next";
import {
  siteConfig,
  primaryAreas,
  secondaryAreas,
  additionalAreas,
} from "@/lib/siteData";
import CTABanner from "@/components/CTABanner";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Excel Roof Systems serves Southwest Michigan communities including Kalamazoo, Three Rivers, Portage, Schoolcraft, Vicksburg, and Sturgis with commercial roofing services.",
};

export default function ServiceAreasPage() {
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Roofing Services",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
      },
    },
    areaServed: [
      ...primaryAreas.map((area) => ({
        "@type": "City",
        name: area.name,
        containedInPlace: {
          "@type": "State",
          name: area.state === "MI" ? "Michigan" : area.state,
        },
      })),
      ...secondaryAreas.map((area) => ({
        "@type": "Place",
        name: area,
      })),
    ],
  };

  return (
    <>
      <SchemaMarkup schema={serviceAreaSchema} />

      {/* Page Header */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Commercial Roofing Service Areas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Proudly serving businesses across Southwest Michigan and beyond with
            expert commercial roofing restoration, repair, and maintenance.
          </p>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-dark md:text-4xl">
            Primary Service Areas
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {primaryAreas.map((area) => (
              <div
                key={area.name}
                className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-dark">{area.name}</h3>
                <p className="mt-1 text-sm font-medium text-red-brand">
                  {area.state === "MI" ? "Michigan" : area.state}
                </p>
                <p className="mt-3 text-gray-600">
                  Commercial roofing restoration and repair services in{" "}
                  {area.name}, {area.state === "MI" ? "Michigan" : area.state}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary & Additional Areas */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-dark md:text-4xl">
            Additional Coverage
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {secondaryAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-lg border border-gray-200 bg-white p-5"
                >
                  <h3 className="font-bold text-dark">{area}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Commercial roofing services available throughout {area}.
                  </p>
                </div>
              ))}
              {additionalAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-lg border border-gray-200 bg-white p-5"
                >
                  <h3 className="font-bold text-dark">{area}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Extended commercial roofing coverage across {area}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-dark md:text-4xl">
            Local Expertise, Regional Reach
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Based in Southwest Michigan, we understand the unique challenges that
            local weather conditions pose to commercial roofs. From harsh winters
            with heavy snow loads and ice damming to hot summers with intense UV
            exposure, our team knows what it takes to keep your building
            protected year-round. We are familiar with the commercial buildings,
            industrial facilities, and local building codes throughout the
            region, allowing us to deliver roofing solutions tailored to your
            specific needs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
