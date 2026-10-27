import Link from "next/link";
import Icon from "@/components/Icon";
import ProjectDialog from "@/components/ProjectDialog";
import {
  InvoiceVisual,
  TunisiaStudyShot,
  WorkflowVisual,
  ChatVisual,
} from "@/components/ProjectVisuals";
import { innvoriq, tunisiaStudy, prospection, assistantAdmissions } from "@/data/projects";

const CAPTION = "Illustration conceptuelle";
const CAPTION_SHOT = "Capture de la plateforme";

// Une surface et un accent par projet, tirés de la palette du logo ; mêmes rayons, mêmes icônes.
const tones = {
  // Bleu relevé sur l'interface de Tunisia Study : la capture s'y fond.
  platform: {
    frame: "bg-[#0138C8]",
    caption: "text-white",
    tile: "bg-brand-soft text-brand-strong",
  },
  mist: {
    frame: "bg-mist",
    caption: "text-slate-600",
    tile: "bg-ink text-white",
  },
  soft: {
    frame: "bg-brand-soft",
    caption: "text-slate-600",
    tile: "bg-brand text-white",
  },
};

function Category({ icon, tile, children }) {
  return (
    <p className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-box ${tile}`}>
        <Icon name={icon} className="h-5 w-5" />
      </span>
      {children}
    </p>
  );
}

function Highlights({ items }) {
  return (
    <ul aria-label="Points clés" className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item.text} className="flex items-start gap-3 text-[0.9375rem] text-slate-700">
          <Icon name={item.icon} className="mt-0.5 h-5 w-5 shrink-0 text-brand-strong" />
          {item.text}
        </li>
      ))}
    </ul>
  );
}

// Carte standard : illustration d'un côté (au-dessus en grand écran), contenu et action de l'autre.
function ProjectCard({ project, icon, tone, Visual, caption = CAPTION, ItemTitle, children, action }) {
  const t = tones[tone];
  return (
    <article className="group light-surface flex flex-col overflow-hidden rounded-box border border-transparent bg-white transition-colors duration-300 ease-soft hover:border-sky focus-within:border-sky md:flex-row lg:flex-col">
      <div
        className={`relative flex h-[17rem] items-center justify-center overflow-hidden px-6 pb-10 pt-6 md:h-auto md:min-h-[17rem] md:w-[44%] lg:w-full ${t.frame}`}
      >
        <div className="w-full transition-transform duration-500 ease-soft group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Visual />
        </div>
        <p className={`absolute bottom-3 left-4 text-xs ${t.caption}`}>{caption}</p>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <Category icon={icon} tile={t.tile}>
          {project.category}
        </Category>
        <ItemTitle className="mt-4 text-h3">{project.name}</ItemTitle>
        <p className="mt-3 text-slate-600">{project.description}</p>
        {children}
        <div className="mt-auto pt-7">{action}</div>
      </div>
    </article>
  );
}

function InnvoriqCard({ ItemTitle }) {
  const p = innvoriq;
  return (
    <article className="group dark-surface overflow-hidden rounded-box border border-ink-line bg-ink-raised transition-colors duration-300 ease-soft hover:border-sky/70 focus-within:border-sky/70 lg:col-span-3">
      <div className="grid lg:grid-cols-12">
        <div className="p-7 sm:p-10 lg:col-span-7 lg:p-12">
          <p className="flex items-center gap-2.5 text-sm font-medium text-slate-300">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-box bg-sky/15 text-sky">
              <Icon name="cpu" className="h-5 w-5" />
            </span>
            {p.category}
          </p>

          <ItemTitle className="mt-6 font-display text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white">
            {p.name}
          </ItemTitle>
          <p className="mt-4 max-w-[34rem] font-display text-xl font-medium leading-snug text-white">
            {p.fullName}
          </p>
          <p className="mt-4 max-w-measure text-slate-300">{p.description}</p>

          <ul aria-label="Indicateurs du projet" className="mt-8 grid gap-3 sm:grid-cols-3">
            {p.indicators.map((indicator) => (
              <li
                key={indicator.label}
                className={`rounded-box border p-4 ${
                  indicator.objective ? "border-dashed border-sky/70" : "border-ink-line"
                }`}
              >
                {indicator.objective && (
                  <p className="mb-2 flex items-center gap-1.5 text-sm font-medium text-sky">
                    <Icon name="target" className="h-4 w-4" />
                    Objectif du projet
                  </p>
                )}
                <p className="font-display text-3xl font-bold leading-none text-white">
                  {indicator.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{indicator.label}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ProjectDialog
              triggerLabel="Découvrir le projet"
              triggerClassName="btn btn-sky"
              title={p.name}
              subtitle={p.fullName}
              category={p.category}
            >
              <p className="text-lead text-slate-600">{p.description}</p>
              <ul className="mt-8 grid gap-px overflow-hidden rounded-box border border-line bg-line sm:grid-cols-2">
                {p.features.map((feature) => (
                  <li key={feature.title} className="bg-white p-5 sm:p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-box bg-brand-soft text-brand-strong">
                      <Icon name={feature.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold leading-snug">{feature.title}</h3>
                    <p className="mt-1.5 text-slate-600">{feature.text}</p>
                    {feature.objective && (
                      <p className="mt-3 rounded-box border border-dashed border-brand/40 bg-brand-soft px-3 py-2 text-sm text-slate-700">
                        Il s’agit d’un objectif du projet, et non d’une performance mesurée ou
                        garantie.
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </ProjectDialog>
          </div>
        </div>

        <div className="relative flex min-h-[21rem] items-center justify-center border-t border-ink-line bg-ink px-6 pb-12 pt-8 lg:col-span-5 lg:border-l lg:border-t-0">
          <div className="w-full transition-transform duration-500 ease-soft group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <InvoiceVisual />
          </div>
          <p className="absolute bottom-3 left-4 text-xs text-slate-400">{CAPTION}</p>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ titleAs: Title = "h2" }) {
  // Les titres de cartes suivent le titre de la section : h1 > h2 sur une page dédiée, h2 > h3 sur l’accueil.
  const ItemTitle = Title === "h1" ? "h2" : "h3";

  return (
    <section
      id="projets"
      aria-labelledby="projects-title"
      className="dark-surface section bg-ink"
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <Title id="projects-title" className="text-h2 text-white">
            Nos projets
          </Title>
          <p className="mt-6 max-w-measure text-lead text-slate-300">
            Quatre solutions, présentées par leurs fonctionnalités : intelligence artificielle,
            automatisation et numérique éducatif.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <InnvoriqCard ItemTitle={ItemTitle} />

          <ProjectCard
            project={tunisiaStudy}
            icon="graduation"
            tone="platform"
            Visual={TunisiaStudyShot}
            caption={CAPTION_SHOT}
            ItemTitle={ItemTitle}
            action={
              <a
                href={tunisiaStudy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visiter la plateforme
                <Icon name="external" className="h-4 w-4" />
                <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
              </a>
            }
          >
            <Highlights items={tunisiaStudy.highlights} />
          </ProjectCard>

          <ProjectCard
            project={prospection}
            icon="flow"
            tone="mist"
            Visual={WorkflowVisual}
            ItemTitle={ItemTitle}
            action={
              <Link href="/contact" className="btn btn-line">
                Discuter de ce projet
              </Link>
            }
          >
            <Highlights items={prospection.highlights} />
          </ProjectCard>

          <ProjectCard
            project={assistantAdmissions}
            icon="chat"
            tone="soft"
            Visual={ChatVisual}
            ItemTitle={ItemTitle}
            action={
              <Link href="/contact" className="btn btn-line">
                Discuter de ce projet
              </Link>
            }
          >
            <Highlights items={assistantAdmissions.highlights} />
          </ProjectCard>
        </div>

        <p className="mt-8 max-w-measure text-sm text-slate-400">
          Les visuels d’INNVORIQ, de l’automatisation de la prospection et de l’assistant sont des
          illustrations conceptuelles : ils ne reproduisent pas les interfaces réelles. L’aperçu de
          Tunisia Study est une capture de la plateforme.
        </p>
      </div>
    </section>
  );
}
