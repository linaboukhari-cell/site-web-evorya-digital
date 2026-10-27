import Image from "next/image";
import Icon from "@/components/Icon";

// Illustrations CONCEPTUELLES des projets : schémas construits pour la page, jamais des captures
// d'écran d'interfaces réelles (seule exception : la capture fournie de Tunisia Study, ci-dessous). Aucun chiffre, logo ou donnée réelle n'y figure.
// Elles sont décoratives (aria-hidden) ; la mention « Illustration conceptuelle » est affichée
// à côté de chacune par le composant Projects.

// INNVORIQ : facture, entités extraites, règles de validation R1 à R18, alerte par e-mail.
export function InvoiceVisual() {
  const cells = Array.from({ length: 18 }, (_, index) => index);
  const flagged = 12;

  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-[28rem] text-[0.8125rem] leading-tight text-slate-300">
      <div className="flex items-stretch gap-2.5">
        <div className="flex w-[8rem] shrink-0 flex-col rounded-box bg-paper p-3">
          <span className="h-2 w-9 rounded-sm bg-slate-300" />
          <span className="mt-1.5 h-1.5 w-6 rounded-sm bg-slate-200" />
          <span className="mt-3 h-3.5 w-full rounded-sm bg-sky/20 ring-2 ring-sky" />
          <span className="mt-3 h-1.5 w-full rounded-sm bg-slate-200" />
          <span className="mt-1.5 h-1.5 w-4/5 rounded-sm bg-slate-200" />
          <span className="mt-1.5 h-1.5 w-full rounded-sm bg-slate-200" />
          <span className="ml-auto mt-auto h-4 w-14 rounded-sm bg-sky/20 ring-2 ring-sky" />
        </div>

        <Icon name="chevron" className="h-5 w-5 shrink-0 self-center text-sky" />

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
          {["Montants", "Identifiants", "Dates"].map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-box border border-ink-line bg-ink px-2.5 py-2"
            >
              <span className="w-[4.6rem] shrink-0 truncate">{label}</span>
              <span className="h-2 flex-1 rounded-sm bg-sky/70" />
            </div>
          ))}
          <p className="text-slate-400">15 catégories d’entités</p>
        </div>
      </div>

      <div className="mt-3 rounded-box border border-ink-line bg-ink p-3">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="shieldCheck" className="h-4 w-4 text-sky" />
            Validation DGI
          </span>
          <span className="text-slate-400">R1 à R18</span>
        </div>
        <div className="mt-2.5 grid grid-cols-9 gap-1.5">
          {cells.map((index) =>
            index === flagged ? (
              <span
                key={index}
                className="flex aspect-square items-center justify-center rounded-sm bg-sky text-ink"
              >
                <Icon name="alert" className="h-3 w-3" />
              </span>
            ) : (
              <span
                key={index}
                className="flex aspect-square items-center justify-center rounded-sm bg-ink-line text-sky"
              >
                <Icon name="check" className="h-3 w-3" />
              </span>
            )
          )}
        </div>
      </div>

      <p className="mt-3 inline-flex items-center gap-2 text-sky">
        <Icon name="mail" className="h-4 w-4" />
        Alerte ciblée par e-mail
      </p>
    </div>
  );
}

// Tunisia Study : capture RÉELLE de la page d'accueil de la plateforme, fournie par l'équipe
// (public/projects/tunisia-study-interface.webp). Ce n'est pas une illustration : elle est
// légendée « Capture de la plateforme ». "unoptimized" sert le fichier tel quel, sans passer
// par l'optimiseur d'images de Next (le fichier est déjà recadré et compressé).
export function TunisiaStudyShot() {
  return (
    <Image
      src="/projects/tunisia-study-interface.webp"
      alt="Capture de la page d’accueil de Tunisia Study : menu, titre « #Booste Ton Niveau », boutons d’action et illustration 3D."
      width={960}
      height={712}
      unoptimized
      className="mx-auto h-auto w-full max-w-[19.5rem] rounded-box ring-1 ring-white/25"
    />
  );
}

// Prospection et marketing : étapes connectées d'un workflow, sans outil ni canal précis.
export function WorkflowVisual() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex w-full max-w-[22rem] items-center gap-0.5 text-[0.8125rem] font-medium leading-tight text-ink"
    >
      <div className="flex w-[4.25rem] shrink-0 flex-col items-center gap-2 rounded-box bg-white px-1 py-3 text-center">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-box bg-ink text-white">
          <Icon name="search" className="h-4 w-4" />
        </span>
        Prospects
      </div>

      <Icon name="chevron" className="h-4 w-4 shrink-0 text-slate-500" />

      <div className="min-w-0 flex-1 rounded-box border-2 border-ink bg-white px-1.5 py-3">
        <div className="text-center">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-box bg-brand-soft text-brand-strong">
            <Icon name="flow" className="h-4 w-4" />
          </span>
          <p className="mt-2 font-display text-xs font-semibold">Workflow automatisé</p>
        </div>
        <div className="mt-2.5 space-y-1.5">
          {["w-full", "w-4/5", "w-3/5"].map((width) => (
            <div key={width} className="flex items-center gap-1.5">
              <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-brand-strong" />
              <span className={`h-1.5 rounded-sm bg-slate-300 ${width}`} />
            </div>
          ))}
        </div>
      </div>

      <Icon name="chevron" className="h-4 w-4 shrink-0 text-slate-500" />

      <div className="flex w-[4.25rem] shrink-0 flex-col items-center gap-2 rounded-box bg-white px-1 py-3 text-center">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-box bg-brand text-white">
          <Icon name="target" className="h-4 w-4" />
        </span>
        Suivi des actions
      </div>
    </div>
  );
}

// Assistant admissions : exemple de conversation générique entre un candidat et un assistant.
export function ChatVisual() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-[20.5rem] overflow-hidden rounded-box border border-brand/15 bg-white text-[0.8125rem] leading-snug"
    >
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
          <Icon name="chat" className="h-3.5 w-3.5" />
        </span>
        <span className="font-display font-semibold text-ink">Assistant d’admissions</span>
      </div>
      <div className="space-y-2 p-3">
        <p className="ml-auto max-w-[80%] rounded-box rounded-br-none bg-brand px-3 py-2 text-white">
          Bonjour, comment candidater&nbsp;?
        </p>
        <p className="max-w-[88%] rounded-box rounded-bl-none bg-mist px-3 py-2 text-ink">
          Bonjour&nbsp;! Je vous renseigne sur les admissions et je vous oriente.
        </p>
        <p className="ml-auto max-w-[80%] rounded-box rounded-br-none bg-brand px-3 py-2 text-white">
          Merci, par où commencer&nbsp;?
        </p>
      </div>
    </div>
  );
}
