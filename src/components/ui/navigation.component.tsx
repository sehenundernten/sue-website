"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: "/#angebot", label: "Angebote" },
    { href: "/#was-wir-machen", label: "Was wir machen" },
    { href: "/#ueber-uns", label: "Über uns" },
    { href: "/#mitglied-werden", label: "Mitglied werden" },
    { href: "/#kontakt", label: "Kontakt", isPrimary: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-beige/80 backdrop-blur-xl shadow-sm"
          : "bg-brand-beige/90 backdrop-blur-xl"
      } border-b border-brand-beige/80`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 xl:px-0 py-4 lg:py-6"
        role="navigation"
        aria-label="Hauptnavigation"
      >
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="block focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded"
              onClick={closeMenu}
            >
              <Image
                src="/sue-logo.svg"
                alt="Sehen und Ernten Logo"
                width={120}
                height={235}
                className="h-8 w-auto lg:h-10"
                priority
              />
              <span className="sr-only">sehen und ernten e.V.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul
            role="list"
            className="hidden lg:flex flex-row justify-end items-center gap-6"
            aria-label="Hauptmenü"
          >
            {navigationItems.map((item, index) => (
              <li key={index}>
                {item.isPrimary ? (
                  <Button variant="primary" size="primary" asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ) : (
                  <Button variant="link" className="text-md font-bold" asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-brand-gray hover:bg-brand-beige/50 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={toggleMenu}
          >
            <span className="sr-only">
              {isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            </span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-brand-gray transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-brand-gray transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-brand-gray transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
          aria-hidden={!isMenuOpen}
        >
          <ul
            role="list"
            className="py-4 space-y-2 border-t border-brand-beige/50 mt-4"
            aria-label="Mobilmenü"
          >
            {navigationItems.map((item, index) => (
              <li key={index}>
                {item.isPrimary ? (
                  <Button
                    variant="primary"
                    size="primary"
                    className="w-full justify-center"
                    asChild
                  >
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="link"
                    className="w-full justify-start text-lg font-bold py-3"
                    asChild
                  >
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
