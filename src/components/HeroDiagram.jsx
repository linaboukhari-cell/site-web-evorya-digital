// Composition construite sur la géométrie du symbole officiel : le E et son demi-disque.
// Les trois branches du E sont trois flux (logiciel, automatisation, IA) qui convergent
// vers le demi-disque. Séquence de mise en place unique, puis un signal discret en boucle.
// Les styles et animations (classes hd-*) sont dans globals.css.
const BOWL = "M316 234H371A165 165 0 0 1 371 564H316Z";

export default function HeroDiagram() {
  return (
    <svg
      viewBox="20 26 526 548"
      className="h-auto w-full"
      role="img"
      aria-label="Schéma : logiciel, automatisation et intelligence artificielle convergent vers un même système."
    >
      {/* Le E : remplissage léger puis contour tracé */}
      <path
        className="hd-fill"
        d="M30 36H338V91H85V267H250V316.5H85V509H338V564H30Z"
        fill="rgba(255,255,255,0.05)"
      />
      <path
        className="hd-outline"
        pathLength="100"
        d="M30 36H338V91H85V267H250V316.5H85V509H338V564H30Z"
        fill="none"
        stroke="rgba(255,255,255,0.42)"
        strokeWidth="2"
      />

      {/* Liaisons vers le demi-disque */}
      <g
        className="hd-late"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 7"
      >
        <path d="M327 91V234" />
        <path d="M250 291.75H316" />
      </g>

      {/* Onde émise à l'arrivée des signaux */}
      <path className="hd-ping" d={BOWL} fill="none" stroke="#38BDF8" strokeWidth="2" />

      {/* Le demi-disque et ses anneaux */}
      <path className="hd-bowl" d={BOWL} fill="#38BDF8" />
      <g
        className="hd-late"
        fill="none"
        stroke="#0F172A"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M371 275A124 124 0 0 1 371 523" />
        <path d="M371 317A82 82 0 0 1 371 481" />
        <path d="M371 359A40 40 0 0 1 371 439" />
        <circle cx="371" cy="399" r="7" fill="#0F172A" stroke="none" fillOpacity="1" />
      </g>

      {/* Ports d'entrée */}
      <g className="hd-late" fill="#0F172A" stroke="#38BDF8" strokeWidth="2">
        <circle cx="327" cy="91" r="4.5" />
        <circle cx="327" cy="234" r="4.5" />
        <circle cx="250" cy="291.75" r="4.5" />
        <circle cx="316" cy="291.75" r="4.5" />
      </g>

      {/* Signaux : tous arrivent ensemble au demi-disque */}
      <g fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round">
        <path
          className="hd-signal"
          pathLength="100"
          d="M205 63.5H327V234"
          style={{ "--dash": 5, strokeDasharray: "5 200" }}
        />
        <path
          className="hd-signal"
          pathLength="100"
          d="M244 291.75H316"
          style={{ "--dash": 20, strokeDasharray: "20 200" }}
        />
        <path
          className="hd-signal"
          pathLength="100"
          d="M150 536.5H316"
          style={{ "--dash": 9, strokeDasharray: "9 200" }}
        />
      </g>

      {/* Libellés : masqués sur petit écran où ils seraient illisibles */}
      <g
        className="hd-late hidden sm:block"
        fill="rgba(255,255,255,0.88)"
        fontSize="15"
        fontWeight="500"
      >
        <text x="112" y="69" className="font-display">
          Logiciel
        </text>
        <text x="112" y="297" className="font-display">
          Automatisation
        </text>
        <text x="112" y="542" className="font-display">
          IA
        </text>
      </g>
    </svg>
  );
}
