"use client";

import { useState, type FormEvent } from "react";

const roofTypes = [
  "Flat Roof",
  "Metal Roof",
  "TPO",
  "EPDM",
  "Modified Bitumen",
  "Built-Up",
  "Other",
  "Not Sure",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-gray-100 p-8 text-center md:p-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-dark">Thank You!</h3>
        <p className="mt-2 text-gray-600">
          Your request has been submitted. We&apos;ll be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-gray-100 p-6 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-red-brand focus:outline-none focus:ring-1 focus:ring-red-brand"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-red-brand focus:outline-none focus:ring-1 focus:ring-red-brand"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-red-brand focus:outline-none focus:ring-1 focus:ring-red-brand"
          />
        </div>

        {/* Business Name */}
        <div>
          <label
            htmlFor="business"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Business Name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-red-brand focus:outline-none focus:ring-1 focus:ring-red-brand"
          />
        </div>

        {/* Roof Type */}
        <div className="sm:col-span-2">
          <label
            htmlFor="roofType"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Roof Type
          </label>
          <select
            id="roofType"
            name="roofType"
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-dark focus:border-red-brand focus:outline-none focus:ring-1 focus:ring-red-brand"
          >
            <option value="" disabled>
              Select a roof type
            </option>
            {roofTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-red-brand focus:outline-none focus:ring-1 focus:ring-red-brand"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-red-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-red-700 sm:w-auto"
      >
        Submit Request
      </button>
    </form>
  );
}
