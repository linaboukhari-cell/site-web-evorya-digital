"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile au changement de route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Échap ferme le menu et rend le focus au bouton
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`dark-surface sticky top-0 z-50 border-b bg-ink text-white transition-colors duration-300 ${
        scrolled || open ? "border-ink-line" : "border-transparent"
      }`}
    >
      <nav aria-label="Navigation principale">
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label="Evorya Digital, accueil" className="shrink-0">
            <Logo decorative className="h-11 w-auto" />
          </Link>

          {/* Liens desktop */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="relative block px-3.5 py-2.5 text-[0.9375rem] font-medium text-slate-300 transition-colors duration-200 hover:text-white aria-[current=page]:text-white after:absolute after:inset-x-3.5 after:bottom-0.5 after:h-0.5 after:bg-sky after:opacity-0 after:transition-opacity aria-[current=page]:after:opacity-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn btn-sky hidden min-h-[2.75rem] lg:inline-flex">
            Démarrer votre projet
          </Link>

          {/* Bouton mobile */}
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center rounded-box text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div id="menu-mobile" className="border-t border-ink-line bg-ink lg:hidden">
            <ul className="container-x py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="flex min-h-[3rem] items-center border-l-2 border-transparent pl-4 font-display text-lg font-medium text-slate-300 transition-colors hover:text-white aria-[current=page]:border-sky aria-[current=page]:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pb-3 pt-4">
                <Link href="/contact" className="btn btn-sky w-full">
                  Démarrer votre projet
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
