import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, services } from "@/lib/siteData";
import CTABanner from "@/components/CTABanner";

/* ------------------------------------------------------------------ */
/*  Blog content: 400-600 words of unique SEO content per post        */
/* ------------------------------------------------------------------ */

const blogContent: Record<string, string> = {
  "commercial-roof-repair-kalamazoo-mi": `
    <h2 class="mt-8 text-2xl font-bold text-gray-900">Why Kalamazoo Businesses Need Reliable Roof Repair</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Kalamazoo, Michigan, experiences some of the harshest weather patterns in the Midwest. From heavy snowfall in winter to intense thunderstorms in summer, commercial roofs in the area take a beating year after year. For business owners in Kalamazoo and throughout Southwest Michigan, having access to dependable commercial roof repair is not a luxury — it is a necessity. A damaged roof can lead to water intrusion, structural issues, inventory loss, and even forced closures that hurt your bottom line.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Common Commercial Roof Problems in Southwest Michigan</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Commercial buildings in the Kalamazoo area frequently deal with membrane punctures, seam failures, flashing deterioration, and ponding water. Flat roofs, which are the most common type on commercial structures, are especially susceptible to pooling water after Michigan&apos;s frequent rain events. Left unaddressed, even small issues can escalate into expensive problems. Businesses in Three Rivers, Portage, and Schoolcraft face similar challenges due to the shared regional climate. Regular inspections and timely repairs are the most effective strategy for keeping these problems under control.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Repair Options for Kalamazoo Commercial Roofs</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Depending on the extent of the damage, commercial roof repairs in Kalamazoo can range from targeted patch repairs and sealant applications to more comprehensive restoration work. Minor issues like small punctures or isolated seam failures can often be fixed quickly with minimal disruption to your operations. For more widespread damage, a full roof coating or restoration may be the most cost-effective path forward, extending the life of your existing roof by 10 to 20 years without the expense of a complete tear-off and replacement.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Choosing the Right Roofing Contractor</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      When selecting a commercial roofing contractor in Southwest Michigan, look for a company with extensive experience in restoration and repair — not just new construction. Excel Roof Systems specializes exclusively in commercial roof restoration and repair for businesses throughout Kalamazoo, Three Rivers, Vicksburg, Sturgis, and the surrounding region. We understand the specific challenges that Michigan weather creates and tailor our repair solutions accordingly. Every project begins with a thorough free inspection so you know exactly what needs to be done and what it will cost before any work begins.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Protect Your Investment Today</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Your commercial roof is one of the most important components of your building. Don&apos;t wait for a small problem to become a major expense. Whether you own a warehouse in Kalamazoo, a retail building in Portage, or a manufacturing facility in Three Rivers, Excel Roof Systems is ready to help. Contact us today for a free commercial roof inspection and find out how we can keep your roof — and your business — protected for years to come.
    </p>
  `,

  "signs-your-commercial-roof-needs-restoration": `
    <h2 class="mt-8 text-2xl font-bold text-gray-900">Recognizing Early Warning Signs</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Many commercial building owners in Southwest Michigan do not realize their roof is failing until water is already dripping onto equipment or inventory. The truth is that most roof failures give plenty of warning signs long before a catastrophic leak occurs. Recognizing these signs early can save your business thousands of dollars and prevent disruptions to your operations. Whether your building is in Kalamazoo, Three Rivers, or anywhere else in the region, staying ahead of roof problems is always the smartest approach.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Visible Membrane Damage and Blistering</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      One of the most obvious signs that your commercial roof needs restoration is visible damage to the roofing membrane. This includes blistering, cracking, splitting, or areas where the membrane has pulled away from seams and flashings. On flat roofs common across commercial buildings in Kalamazoo and Portage, membrane deterioration is accelerated by Michigan&apos;s freeze-thaw cycles. UV exposure during summer months further degrades roofing materials. If you can see any of these issues during a visual inspection, it is time to call a professional.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Ponding Water and Drainage Issues</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      If water remains on your roof for more than 48 hours after rain, you have a ponding problem. Ponding water adds significant weight to your roof structure and accelerates membrane deterioration. It is one of the most common issues we see on commercial buildings throughout Southwest Michigan. Poor drainage can result from clogged drains, sagging decking, or improper roof slope. Addressing ponding water early through restoration and drainage improvements can prevent far more costly structural repairs down the road.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Rising Energy Bills and Interior Stains</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Not all signs of roof failure are visible from the rooftop. If your energy bills have been steadily increasing, your roof&apos;s insulation may be compromised due to moisture intrusion. Water stains on interior ceilings or walls, musty odors, and mold growth are all indicators that your roof is no longer keeping water out effectively. Business owners in Schoolcraft, Vicksburg, and Sturgis should pay close attention to these interior clues, as catching them early can mean the difference between a restoration and a full replacement.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">When to Act on These Warning Signs</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      If you have noticed any of these warning signs, the time to act is now. Roof restoration is significantly more affordable than a full tear-off and replacement, but it is only an option when the underlying roof structure is still sound. The longer you wait, the more likely it is that damage will progress beyond the point where restoration is viable. Excel Roof Systems offers free inspections for commercial buildings across Southwest Michigan. We will assess your roof&apos;s condition, explain your options, and provide a transparent quote with no obligation.
    </p>
  `,

  "flat-roof-repair-vs-replacement": `
    <h2 class="mt-8 text-2xl font-bold text-gray-900">The Flat Roof Dilemma for Business Owners</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      If your commercial building has a flat roof — and most commercial buildings in Kalamazoo, Three Rivers, and Southwest Michigan do — you will eventually face an important decision: should you repair the roof or replace it entirely? Both options have their place, but making the wrong choice can cost your business significantly more than necessary. Understanding the key factors that determine whether repair or replacement is right for your situation will help you make a confident, informed decision.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">When Flat Roof Repair Makes Sense</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Flat roof repair is typically the best option when the damage is localized and the overall roof system is still in fair to good condition. This includes situations like isolated leaks, small membrane tears, minor flashing failures, or limited ponding water issues. If your roof is less than 15 years old and the underlying insulation and decking are dry and structurally sound, repairs combined with a professional coating system can extend the roof&apos;s useful life by another 10 to 20 years at a fraction of the replacement cost.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">When Replacement Becomes Necessary</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Full roof replacement is warranted when the damage is widespread, the roof has exceeded its expected lifespan, or when moisture has compromised the insulation and decking beneath the membrane. Signs that replacement may be necessary include large areas of saturated insulation, significant structural sagging, multiple failed repair attempts, and widespread membrane deterioration. For buildings in Southwest Michigan that have endured decades of harsh winters, replacement sometimes becomes the only viable long-term solution.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">The Cost Difference Is Significant</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      A full flat roof replacement can cost three to five times more than a professional restoration. For a typical 10,000-square-foot commercial building in Kalamazoo or Portage, the difference can easily amount to tens of thousands of dollars. Restoration also generates far less waste, requires less labor, and causes minimal disruption to your business operations. Many building owners are surprised to learn that their roof is a strong candidate for restoration even when they assumed replacement was inevitable.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Get an Honest Assessment</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      The key to making the right decision is getting an honest, thorough assessment from a commercial roofing specialist. At Excel Roof Systems, we never recommend replacement when restoration will do the job effectively. We serve businesses throughout Kalamazoo, Three Rivers, Sturgis, Schoolcraft, and the broader Southwest Michigan area. Our free inspection and detailed report give you the information you need to make the best decision for your building and your budget. Contact us today to schedule your assessment.
    </p>
  `,

  "roof-coatings-for-commercial-buildings": `
    <h2 class="mt-8 text-2xl font-bold text-gray-900">What Are Commercial Roof Coatings?</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Commercial roof coatings are liquid-applied membrane systems that create a seamless, waterproof barrier over your existing roof. Unlike traditional roofing materials that come in sheets or panels, coatings are applied as a fluid that cures into a durable, flexible membrane. This seamless application eliminates the seams and joints that are the most common failure points on commercial roofs. For business owners in Kalamazoo, Three Rivers, and across Southwest Michigan, roof coatings represent one of the most cost-effective ways to extend roof life and improve building performance.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Types of Roof Coatings Available</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      There are several types of commercial roof coatings, each suited to different roofing substrates and conditions. Silicone coatings are excellent for roofs with ponding water issues, as they do not break down when submerged. Acrylic coatings are highly reflective and work well on roofs in good condition that primarily need UV protection and weatherproofing. Polyurethane coatings provide superior impact resistance and adhesion, making them ideal for high-traffic roofs. At Excel Roof Systems, we evaluate your specific roof and recommend the coating system that will deliver the best long-term results for your building.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Energy Savings and Reflectivity</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      One of the most significant benefits of commercial roof coatings is their reflective properties. White and light-colored coatings can reflect up to 85 percent of solar radiation, dramatically reducing the amount of heat transferred into your building. For commercial buildings in Southwest Michigan, this translates to meaningful savings on cooling costs during the warm months. Many businesses in Portage, Vicksburg, and the Kalamazoo area report noticeable reductions in their energy bills after having a reflective coating applied to their commercial roof.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">The Application Process</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      The roof coating application process begins with a thorough cleaning and preparation of the existing roof surface. Any existing damage, open seams, or deteriorated flashing is repaired before the coating is applied. The coating is then sprayed or rolled onto the roof in multiple passes to achieve the proper thickness. The entire process typically takes just a few days for most commercial buildings, with minimal noise and disruption to your daily operations. There is no tear-off, no disposal of old roofing materials, and no exposure of your building&apos;s interior to the elements.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Is Your Roof a Candidate for Coating?</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Most commercial roofs in reasonable condition are excellent candidates for a coating system. The roof membrane must be structurally sound and the underlying insulation must be dry. If your roof meets these criteria, a professional coating can add 10 to 20 years of additional service life. Excel Roof Systems provides free roof inspections for commercial buildings throughout Kalamazoo, Three Rivers, Sturgis, Schoolcraft, and all of Southwest Michigan. Schedule your inspection today to find out if a roof coating is the right solution for your building.
    </p>
  `,

  "how-often-should-commercial-roof-be-inspected": `
    <h2 class="mt-8 text-2xl font-bold text-gray-900">The Importance of Regular Roof Inspections</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Your commercial roof is one of your building&apos;s most critical assets, yet it is often the most overlooked. Regular inspections are the single most effective way to protect your roofing investment, prevent costly emergency repairs, and extend the overall lifespan of your roof. For business owners in Kalamazoo, Three Rivers, and throughout Southwest Michigan, where weather conditions can be particularly punishing, a proactive inspection schedule is essential for avoiding unpleasant and expensive surprises.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Recommended Inspection Frequency</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Industry best practices recommend that commercial roofs be inspected at least twice per year — once in the spring and once in the fall. The spring inspection assesses any damage from winter snow loads, ice damming, and freeze-thaw cycles that are common in Michigan. The fall inspection ensures your roof is ready to handle another harsh winter. In addition to these biannual inspections, your roof should be inspected after any significant weather event, including hail storms, high winds, heavy snow, or tornadoes, all of which occur regularly in Southwest Michigan.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">What a Professional Inspection Covers</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      A thorough commercial roof inspection covers far more than a simple visual check. Professional inspectors examine the entire membrane surface for signs of wear, damage, or deterioration. They check all seams, flashings, penetrations, and edge details. Drainage systems including gutters, downspouts, and internal drains are evaluated for proper function. The inspector also looks for signs of ponding water, structural issues, and compromised insulation. After the inspection, you receive a detailed report with photographs documenting any issues found and recommendations for corrective action.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">The Cost of Skipping Inspections</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Many business owners in Portage, Schoolcraft, Vicksburg, and the broader Kalamazoo area skip regular roof inspections to save money. Unfortunately, this almost always ends up costing significantly more in the long run. A small membrane tear that would cost a few hundred dollars to repair can become a major leak causing thousands of dollars in interior damage if left undetected for even a few months. Regular inspections catch these small issues before they escalate, keeping maintenance costs predictable and manageable.
    </p>

    <h2 class="mt-8 text-2xl font-bold text-gray-900">Schedule Your Free Inspection</h2>
    <p class="mt-4 leading-relaxed text-gray-700">
      Excel Roof Systems offers free commercial roof inspections for businesses across Southwest Michigan, including Kalamazoo, Three Rivers, Sturgis, and all surrounding communities. Our inspections are thorough, documented, and come with no obligation. We believe that every business owner deserves to know the true condition of their roof so they can make informed decisions about maintenance and budgeting. Contact us today to schedule your free inspection and take the first step toward protecting your commercial roofing investment.
    </p>
  `,
};

/* ------------------------------------------------------------------ */
/*  Related services mapping per blog post                            */
/* ------------------------------------------------------------------ */

const relatedServiceSlugs: Record<string, string[]> = {
  "commercial-roof-repair-kalamazoo-mi": [
    "flat-roof-repair",
    "roof-restoration",
    "roof-inspections",
  ],
  "signs-your-commercial-roof-needs-restoration": [
    "roof-restoration",
    "roof-inspections",
    "roof-coatings",
  ],
  "flat-roof-repair-vs-replacement": [
    "flat-roof-repair",
    "roof-restoration",
    "roof-coatings",
  ],
  "roof-coatings-for-commercial-buildings": [
    "roof-coatings",
    "roof-restoration",
    "roof-maintenance",
  ],
  "how-often-should-commercial-roof-be-inspected": [
    "roof-inspections",
    "roof-maintenance",
    "roof-leak-detection",
  ],
};

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                          */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const content = blogContent[slug] ?? "";
  const relatedSlugs = relatedServiceSlugs[slug] ?? [];
  const relatedServices = services.filter((s) =>
    relatedSlugs.includes(s.slug)
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-gray-300">{formatDate(post.date)}</p>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <article
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
              Related Services
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-block font-semibold text-red-brand">
                    Learn More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner />
    </>
  );
}
