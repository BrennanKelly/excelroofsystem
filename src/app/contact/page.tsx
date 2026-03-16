import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, primaryAreas } from "@/lib/siteData";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Excel Roof Systems for a free commercial roof inspection and quote. Serving Southwest Michigan and Northern Indiana. Call (269) 244-0032.",
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Excel Roof Systems",
          description: metadata.description as string,
          url: `${siteConfig.url}/contact`,
        }}
      />

      {/* Page Header */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Contact Excel Roof Systems
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Get your free commercial roof inspection and no-obligation quote
            today
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left Column: Contact Information */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-dark">
                Get in Touch
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Whether you need a roof inspection, have questions about our
                restoration services, or want to request a free quote, we are
                here to help. Reach out to our team and we will get back to you
                as soon as possible.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-brand/10">
                    <svg
                      className="h-6 w-6 text-red-brand"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-lg text-red-brand hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-brand/10">
                    <svg
                      className="h-6 w-6 text-red-brand"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-lg text-red-brand hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-brand/10">
                    <svg
                      className="h-6 w-6 text-red-brand"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Location</h3>
                    <p className="text-lg text-gray-700">
                      Centreville, Michigan
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-brand/10">
                    <svg
                      className="h-6 w-6 text-red-brand"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Service Area</h3>
                    <p className="text-lg text-gray-700">
                      Southwest Michigan, West Michigan, Northern Indiana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner heading="Ready to Protect Your Commercial Roof?" />
    </>
  );
}
