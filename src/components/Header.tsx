"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { siteConfig, services } from "@/lib/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change (resize)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Company Name */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-dark">
              Excel <span className="text-red-brand">Roof Systems</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-brand transition-colors rounded-md"
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {servicesDropdownOpen && (
                    <div className="absolute left-0 top-full mt-0 w-72 rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-2">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm font-semibold text-dark hover:bg-gray-light hover:text-red-brand transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="my-1 border-t border-gray-border" />
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-light hover:text-red-brand transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-brand transition-colors rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-sm font-semibold text-dark hover:text-red-brand transition-colors"
            >
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-red-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                {siteConfig.phone}
              </span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-red-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-brand-dark transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-dark"
            >
              <svg
                className="h-5 w-5 text-red-brand"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-light hover:text-red-brand transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-border bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-light hover:text-red-brand transition-colors"
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-border pl-3">
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-dark hover:text-red-brand transition-colors"
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:text-red-brand transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-light hover:text-red-brand transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Mobile CTA */}
            <div className="pt-3 border-t border-gray-border">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-md bg-red-brand px-4 py-3 text-center text-sm font-semibold text-white hover:bg-red-brand-dark transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
