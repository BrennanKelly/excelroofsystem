import type { Metadata } from "next";
import { faqs } from "@/lib/siteData";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about commercial roofing restoration, coatings, inspections, and repair services in Southwest Michigan.",
};

export default function FAQPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Get answers to the most common questions about commercial roofing
            restoration, maintenance, and repair services.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-full w-1 flex-shrink-0 rounded bg-red-brand" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h2>
                    <p className="mt-3 leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
