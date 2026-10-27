import Icon from "@/components/Icon";

// Quatre illustrations abstraites construites avec la même grammaire que le logo :
// barres droites et demi-disques. Décoratives, donc masquées aux lecteurs d'écran.
function VisualCode() {
  return (
    <svg viewBox="0 0 208 130" className="h-auto w-full">
      <g fill="#FFFFFF" fillOpacity="0.16">
        <rect x="0" y="0" width="92" height="10" />
        <rect x="24" y="24" width="132" height="10" />
        <rect x="24" y="48" width="96" height="10" />
        <rect x="48" y="72" width="112" height="10" />
        <rect x="24" y="96" width="72" height="10" />
        <rect x="0" y="120" width="52" height="10" />
      </g>
      <rect x="24" y="48" width="40" height="10" fill="#38BDF8" />
      <path d="M156 24H161A5 5 0 0 1 161 34H156Z" fill="#38BDF8" />
    </svg>
  );
}

function VisualFlow() {
  return (
    <svg viewBox="0 0 208 132" className="h-auto w-full">
      <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
        <circle cx="14" cy="22" r="12" />
        <circle cx="14" cy="66" r="12" />
        <circle cx="14" cy="110" r="12" />
        <path d="M26 22H104V110H26M26 66H104M104 66H176" />
      </g>
      <path d="M176 50H182A16 16 0 0 1 182 82H176Z" fill="#FFFFFF" />
    </svg>
  );
}

function VisualCore() {
  return (
    <svg viewBox="0 0 208 132" className="h-auto w-full">
      <g fill="none" stroke="#1D6FEB" strokeWidth="3" strokeLinecap="round">
        <path d="M142 2A64 64 0 0 1 142 130" strokeOpacity="0.3" />
        <path d="M142 24A42 42 0 0 1 142 108" strokeOpacity="0.55" />
        <path d="M142 46A20 20 0 0 1 142 86" />
        <path d="M30 66H124" strokeOpacity="0.55" strokeDasharray="1 9" />
        <circle cx="16" cy="66" r="6" />
      </g>
      <path d="M142 56A10 10 0 0 1 142 76Z" fill="#1D6FEB" />
    </svg>
  );
}

function VisualInterface() {
  return (
    <svg viewBox="0 0 208 132" className="h-auto w-full">
      <rect x="1" y="1" width="206" height="130" rx="6" fill="none" stroke="#0F172A" strokeOpacity="0.3" strokeWidth="2" />
      <g fill="#0F172A" fillOpacity="0.2">
        <rect x="14" y="14" width="60" height="8" />
        <circle cx="190" cy="18" r="5" />
      </g>
      <g fill="#0F172A" fillOpacity="0.12">
        <rect x="14" y="36" width="110" height="82" rx="4" />
        <rect x="136" y="36" width="58" height="36" rx="4" />
      </g>
      <rect x="136" y="82" width="58" height="36" rx="4" fill="#1D6FEB" />
    </svg>
  );
}

// Textes des services : reprise du contenu du site Evorya existant (logiciels sur mesure,
// innovation technologique, conception digitale). Les libellés Automatisation et IA
// sont rédigés à partir du positionnement indiqué : à valider.
const services = [
  {
    id: "logiciel",
    title: "Ingénierie logicielle",
    text: "Des applications web et mobiles sur mesure, créées de toutes pièces. Conçues pour la performance et l’évolutivité.",
    icon: "code",
    tech: ["React", "Laravel", "Flutter", "React Native"],
    Visual: VisualCode,
    tone: "dark",
    span: "lg:col-span-7",
  },
  {
    id: "automatisation",
    title: "Automatisation",
    text: "Des processus métier automatisés et des outils connectés entre eux, pour réduire les tâches manuelles.",
    icon: "flow",
    Visual: VisualFlow,
    tone: "brand",
    span: "lg:col-span-5",
  },
  {
    id: "ia",
    title: "Intelligence artificielle",
    text: "Des systèmes intelligents intégrés à vos applications et à vos processus.",
    icon: "cpu",
    Visual: VisualCore,
    tone: "white",
    span: "lg:col-span-5",
  },
  {
    id: "design",
    title: "Conception digitale",
    text: "Des interfaces modernes et intuitives pour vos applications et sites web.",
    icon: "layout",
    Visual: VisualInterface,
    tone: "mist",
    span: "lg:col-span-7",
  },
];

// Quatre surfaces de la palette, une par service ; mêmes rayons, mêmes icônes, aucune ombre.
const tones = {
  dark: {
    card: "bg-ink text-slate-300",
    title: "text-white",
    tile: "bg-white/10 text-sky",
  },
  brand: {
    card: "bg-brand text-white",
    title: "text-white",
    tile: "bg-white/15 text-white",
  },
  white: {
    card: "border border-line bg-white text-slate-600",
    title: "text-ink",
    tile: "bg-brand-soft text-brand-strong",
  },
  mist: {
    card: "bg-mist text-slate-700",
    title: "text-ink",
    tile: "bg-white text-ink",
  },
};

export default function Services({ titleAs: Title = "h2" }) {
  // Les titres de cartes suivent le titre de la section : h1 > h2 sur une page dédiée, h2 > h3 sur l’accueil.
  const ItemTitle = Title === "h1" ? "h2" : "h3";
  return (
    <section id="services" aria-labelledby="services-title" className="section bg-paper">
      <div className="container-x">
        <div className="max-w-3xl">
          <Title id="services-title" className="text-h2">
            Services conçus pour l’impact
          </Title>
          <p className="mt-6 max-w-measure text-lead text-slate-600">
            Des solutions sur mesure pour répondre aux besoins spécifiques de votre entreprise.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 lg:grid-cols-12">
          {services.map(({ id, title, text, icon, tech, Visual, tone, span }) => {
            const t = tones[tone];
            return (
              <li
                key={id}
                className={`flex min-h-[21rem] flex-col rounded-box p-8 lg:p-10 ${span} ${t.card}`}
              >
                <div className="max-w-[26rem]">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-box ${t.tile}`}
                  >
                    <Icon name={icon} className="h-6 w-6" />
                  </span>
                  <ItemTitle className={`mt-6 text-h3 ${t.title}`}>{title}</ItemTitle>
                  <p className="mt-3">{text}</p>
                  {tech && (
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                      {tech.map((name) => (
                        <li
                          key={name}
                          className="rounded-box border border-ink-line px-3 py-1.5 text-sm font-medium text-slate-300"
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div aria-hidden="true" className="mt-auto w-44 self-end pt-10 sm:w-52">
                  <Visual />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
