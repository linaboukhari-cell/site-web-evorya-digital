// Textes repris du contenu existant d'Evorya Digital ; aucun chiffre, client ou résultat.
const pillars = [
  {
    title: "Innovation stratégique",
    text: "Transformez vos idées audacieuses en systèmes numériques intelligents grâce à notre expertise.",
  },
  {
    title: "Solutions personnalisées",
    text: "Nous concevons des solutions sur mesure pour répondre aux besoins spécifiques de votre entreprise.",
  },
];

export default function About({ titleAs: Title = "h2" }) {
  const ItemTitle = Title === "h1" ? "h2" : "h3";
  return (
    <section id="a-propos" aria-labelledby="about-title" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Title id="about-title" className="text-h2 lg:col-span-7">
            Des produits numériques évolutifs, conçus sur mesure.
          </Title>
          <p className="text-lead text-slate-600 lg:col-span-5 lg:pt-3">
            Nous transformons vos idées les plus audacieuses en produits numériques évolutifs, avec
            excellence en ingénierie et conception créative.
          </p>
        </div>

        <ul className="mt-16 grid border-t border-line md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className={`py-8 md:py-10 ${
                index === 0 ? "md:pr-10" : "md:border-l md:border-line md:pl-10"
              }`}
            >
              <ItemTitle className="text-h3">{pillar.title}</ItemTitle>
              <p className="mt-3 max-w-measure text-slate-600">{pillar.text}</p>
            </li>
          ))}
        </ul>

        <p className="border-t border-line pt-6 text-slate-600">
          Evorya Digital est basée au Bardo, à Tunis.
        </p>
      </div>
    </section>
  );
}
