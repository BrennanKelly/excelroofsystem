import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, primaryAreas } from "@/lib/siteData";
import CTABanner from "@/components/CTABanner";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Excel Roof Systems",
  description:
    "Learn about Excel Roof Systems, a commercial roofing restoration company serving Southwest Michigan. Experienced team, A+ BBB rating, and cost-effective solutions.",
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Excel Roof Systems",
          description: metadata.description as string,
          url: `${siteConfig.url}/about`,
        }}
      />

      {/* Page Header */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            About Excel Roof Systems
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Your trusted commercial roofing restoration specialists in Southwest
            Michigan
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Who We Are */}
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-dark">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Located in Centreville, Michigan, Excel Roof Systems serves all of
              Southwest Michigan and Northern Indiana as a premier commercial
              roofing restoration company. With years of experience and an A+
              rating from the Better Business Bureau, we have built our
              reputation on delivering quality workmanship and honest service to
              businesses throughout the region. We specialize in commercial
              roofing restoration, providing cost-effective alternatives to
              full roof replacement that protect your investment and keep your
              business running smoothly.
            </p>
          </div>

          {/* Our Mission */}
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-dark">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to provide cost-effective roof restoration solutions
              that extend the life of your commercial roof and save your business
              money. We believe in honest work and quality materials — every
              project we take on reflects our commitment to doing the job right
              the first time. By restoring and protecting your existing roof, we
              help you avoid the high cost and disruption of a full roof
              replacement while delivering long-lasting results you can count on.
            </p>
          </div>

          {/* Our Approach */}
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-dark">
              Our Approach
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Every project begins with a thorough roof inspection. We carefully
              assess your roof&apos;s current condition, identify problem areas,
              and recommend the best restoration, repair, or coating solution for
              your specific situation. We then provide a detailed quote with
              transparent pricing so you know exactly what to expect. Our focus
              is always on restoration over replacement — because in most cases,
              a well-executed restoration delivers the protection you need at a
              fraction of the cost of tearing off and replacing your entire roof.
            </p>
          </div>

          {/* Our Team */}
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-dark">Our Team</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our team is made up of skilled professionals who take pride in
              their craft. Every crew member is trained and experienced in
              commercial roofing restoration techniques, and we follow strict
              safety protocols on every job site. We invest in cutting-edge
              equipment and ongoing training to ensure our team delivers the
              highest quality results for every client, every time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
