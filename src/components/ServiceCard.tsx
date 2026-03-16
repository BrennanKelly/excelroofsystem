import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: string;
}

export default function ServiceCard({
  title,
  description,
  slug,
  icon,
}: ServiceCardProps) {
  const firstLetter = icon.charAt(0).toUpperCase();

  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-brand text-lg font-bold text-white">
        {firstLetter}
      </div>
      <h3 className="text-xl font-bold text-dark">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link
        href={`/services/${slug}`}
        className="mt-4 inline-block font-semibold text-red-brand transition hover:text-red-700"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}
