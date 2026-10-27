import Link from "next/link";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";

const linkClass =
  "inline-flex items-center gap-2.5 py-1.5 text-slate-300 transition-colors duration-200 hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-surface border-t border-ink-line bg-ink text-slate-300">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Evorya Digital, accueil" className="inline-block">
              <Logo decorative className="h-12 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-slate-400">
              Ingénierie logicielle, automatisation et intelligence artificielle.
            </p>
          </div>

          <nav aria-labelledby="footer-nav" className="lg:col-span-3">
            <h2 id="footer-nav" className="font-display text-base font-semibold text-white">
              Navigation
            </h2>
            <ul className="mt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-5">
            <h2 className="font-display text-base font-semibold text-white">Coordonnées</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${company.email}`} className={`${linkClass} break-all`}>
                  <Icon name="mail" className="h-5 w-5 shrink-0 text-sky" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 py-1.5">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                <address className="not-italic text-slate-300">
                  {company.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex flex-wrap gap-x-6">
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Icon name="linkedin" className="h-5 w-5 shrink-0 text-sky" />
                  LinkedIn
                  <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
                </a>
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Icon name="facebook" className="h-5 w-5 shrink-0 text-sky" />
                  Facebook
                  <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-ink-line pt-6 text-sm text-slate-400">
          © {year} Evorya Digital. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
