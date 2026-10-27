import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { company, mapsUrl } from "@/data/company";

const linkClass =
  "font-medium text-brand-strong underline decoration-brand/30 underline-offset-4 transition-colors duration-200 hover:decoration-brand";

function Row({ icon, label, children }) {
  return (
    <li className="flex gap-4 py-5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-box bg-brand-soft text-brand-strong">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-display text-base font-semibold text-ink">{label}</p>
        {children}
      </div>
    </li>
  );
}

function NewTab() {
  return <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>;
}

export default function Contact({ titleAs: Title = "h2" }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section bg-paper">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Title id="contact-title" className="text-h2">
            Contactez-nous
          </Title>
          <p className="mt-6 max-w-measure text-lead text-slate-600">
            Vous avez un projet digital, un processus à automatiser ou une idée à concrétiser&nbsp;?
            Notre équipe est à votre écoute pour étudier votre besoin et échanger sur les solutions
            adaptées à vos objectifs.
          </p>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            <Row icon="mail" label="E-mail">
              <a href={`mailto:${company.email}`} className={`${linkClass} break-words`}>
                {company.email}
              </a>
            </Row>
            <Row icon="pin" label="Adresse">
              <address className="not-italic text-slate-600">
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} mt-2 inline-flex items-center gap-1.5`}
              >
                Voir sur Google Maps
                <Icon name="external" className="h-4 w-4" />
                <NewTab />
              </a>
            </Row>
            <Row icon="linkedin" label="LinkedIn">
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Page officielle Evorya Digital
                <NewTab />
              </a>
            </Row>
            <Row icon="facebook" label="Facebook">
              <a
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Page officielle Evorya Digital
                <NewTab />
              </a>
            </Row>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
