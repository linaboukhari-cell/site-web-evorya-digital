"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

// Bouton + fenêtre de détails basée sur l'élément <dialog> natif : piège à focus, fermeture par
// Échap, arrière-plan inerte et retour du focus au bouton sont gérés par le navigateur.
// Le contenu (children) reste rendu côté serveur ; seul ce petit composant est côté client.
export default function ProjectDialog({
  triggerLabel,
  triggerClassName,
  title,
  subtitle,
  category,
  children,
}) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();
  const subtitleId = useId();

  const lockScroll = (locked) => {
    const root = document.documentElement;
    if (locked) {
      // Compense la largeur de la barre de défilement pour éviter un saut de mise en page.
      root.style.setProperty("--scrollbar", `${window.innerWidth - root.clientWidth}px`);
      root.classList.add("is-locked");
    } else {
      root.classList.remove("is-locked");
      root.style.removeProperty("--scrollbar");
    }
  };

  const open = () => {
    lockScroll(true);
    dialogRef.current?.showModal();
    // Le navigateur donnerait le focus au conteneur défilant : on le place sur le bouton de fermeture.
    closeRef.current?.focus();
  };

  const close = () => dialogRef.current?.close();

  // Fermeture par n'importe quel moyen (bouton, Échap, arrière-plan, navigation).
  const handleClose = () => {
    lockScroll(false);
    triggerRef.current?.focus();
  };

  useEffect(() => () => lockScroll(false), []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        aria-haspopup="dialog"
        onClick={open}
      >
        {triggerLabel}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={subtitleId}
        onClose={handleClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="project-dialog light-surface m-auto w-[calc(100%-1.5rem)] max-w-3xl rounded-box border border-line bg-white p-0 text-slate-700 backdrop:bg-ink/70"
      >
        <div className="max-h-[calc(100dvh-1.5rem)] overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-white px-6 py-2.5 sm:px-8">
            <h2
              id={titleId}
              className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-[1.75rem]"
            >
              {title}
            </h2>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Fermer la fenêtre"
              className="-mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-box text-ink transition-colors duration-200 hover:bg-mist"
            >
              <Icon name="close" className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <p className="text-sm font-medium text-slate-600">{category}</p>
            <p id={subtitleId} className="mt-1 font-display text-xl font-medium leading-snug text-ink">
              {subtitle}
            </p>
            <div className="mt-6">{children}</div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-line bg-paper px-6 py-5 sm:px-8">
            <Link href="/contact" className="btn btn-primary" onClick={close}>
              Parler de ce projet
            </Link>
            <button type="button" className="btn btn-line" onClick={close}>
              Fermer
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
