import Link from "next/link";
import { siteConfig } from "@/lib/siteData";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Get Your Free Commercial Roof Inspection",
  subtext = "Protect your business with a professional roof assessment. No cost, no obligation.",
}: CTABannerProps) {
  return (
    <section className="bg-red-brand py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {heading}
        </h2>
        {subtext && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {subtext}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-red-brand transition hover:bg-gray-100"
          >
            Call {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="inline-block rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-red-brand"
          >
            Request Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
