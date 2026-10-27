import Link from "next/link";
import HeroDiagram from "@/components/HeroDiagram";

export default function Hero() {
  return (
    <section className="dark-surface relative overflow-hidden bg-ink text-white">
      <div className="container-x grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <h1 className="font-display text-display text-white">
            Transformez vos idées en systèmes intelligents.
          </h1>
          <p className="mt-7 max-w-[34rem] text-lead text-slate-300">
            Evorya Digital conçoit des logiciels sur mesure, des automatisations et des solutions
            d’intelligence artificielle pour répondre aux besoins spécifiques de votre entreprise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-sky">
              Démarrer votre projet
            </Link>
            <Link href="/projets" className="btn btn-line-dark">
              Découvrir nos projets
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="mx-auto w-full max-w-[34rem] lg:ml-auto lg:mr-0 lg:max-w-[38rem]">
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
