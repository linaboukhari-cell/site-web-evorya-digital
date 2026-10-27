"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/data/company";

const projectTypes = [
  "Ingénierie logicielle",
  "Automatisation",
  "Intelligence artificielle",
  "Conception digitale",
  "Autre",
];

const validate = (data) => {
  const errors = {};
  if (!data.name?.trim()) errors.name = "Veuillez indiquer votre nom.";
  if (!data.email?.trim()) {
    errors.email = "Veuillez indiquer votre adresse e-mail.";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email.trim())) {
    errors.email = "Cette adresse e-mail semble invalide.";
  }
  if (!data.message?.trim() || data.message.trim().length < 10) {
    errors.message = "Votre message doit contenir au moins 10 caractères.";
  }
  return errors;
};

const buildMailto = (data) => {
  const lines = [`Nom : ${data.name.trim()}`, `E-mail : ${data.email.trim()}`];
  if (data.company?.trim()) lines.push(`Entreprise : ${data.company.trim()}`);
  if (data.projectType) lines.push(`Type de projet : ${data.projectType}`);
  const body = `${lines.join("\n")}\n\n${data.message.trim()}`;
  const subject = "Demande de contact depuis le site Evorya Digital";
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// Formulaire statique : aucun service d'envoi n'est configuré, donc rien n'est transmis
// depuis le site et aucun succès n'est simulé. Après validation, le message est préparé
// dans la messagerie de l'utilisateur. Pour brancher un service plus tard, remplacer
// buildMailto par l'appel à l'API dans handleSubmit.
export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [mailto, setMailto] = useState(null);
  const summaryRef = useRef(null);
  const mailRef = useRef(null);

  const errorList = Object.entries(errors);

  useEffect(() => {
    if (errorList.length > 0) summaryRef.current?.focus();
  }, [errors]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mailto) mailRef.current?.focus();
  }, [mailto]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const found = validate(data);
    setErrors(found);
    setMailto(Object.keys(found).length === 0 ? buildMailto(data) : null);
  };

  const describe = (field) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => mailto && setMailto(null)}
      noValidate
      aria-label="Formulaire de contact"
      className="rounded-box border border-line bg-white p-6 sm:p-8"
    >
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="form-errors-title"
          className="mb-6 rounded-box border border-red-700 bg-red-50 p-4 text-red-900"
        >
          <p id="form-errors-title" className="font-semibold">
            Le formulaire contient des erreurs
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errorList.map(([field, message]) => (
              <li key={field}>
                <a
                  href={`#${field}`}
                  className="underline"
                  onClick={(event) => {
                    event.preventDefault();
                    document.getElementById(field)?.focus();
                  }}
                >
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mb-6 text-sm text-slate-600">
        Les champs marqués d’un astérisque (*) sont obligatoires.
      </p>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Nom complet <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            className="field"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm font-medium text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Adresse e-mail <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            className="field"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm font-medium text-red-700">
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
              Entreprise <span className="font-normal text-slate-600">(facultatif)</span>
            </label>
            <input id="company" name="company" type="text" autoComplete="organization" className="field" />
          </div>
          <div>
            <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-ink">
              Type de projet <span className="font-normal text-slate-600">(facultatif)</span>
            </label>
            <select id="projectType" name="projectType" defaultValue="" className="field">
              <option value="">Choisir…</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            Votre message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={describe("message")}
            className="field resize-y"
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm font-medium text-red-700">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary">
          Préparer mon e-mail
        </button>
        <p id="form-note" className="text-sm text-slate-600">
          Aucun message n’est envoyé depuis le site : il est préparé dans votre messagerie.
        </p>
      </div>

      <div role="status" aria-live="polite">
        {mailto && (
          <div className="mt-6 rounded-box border border-brand/30 bg-brand-soft p-5">
            <p className="font-display font-semibold text-ink">Votre message est prêt.</p>
            <p className="mt-1 text-slate-700">
              Ouvrez votre messagerie pour l’envoyer à {company.email}.
            </p>
            <a ref={mailRef} href={mailto} className="btn btn-primary mt-4">
              Ouvrir ma messagerie
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
