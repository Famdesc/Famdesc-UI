export type ProductLocale = "es" | "fr";

export interface ProductTranslation {
  title: string;
  description: string;
  main: {
    content: string;
    imgAlt: string;
  };
  tabs: { title: string; id: string; dataTab: string }[];
  longDescription: {
    title: string;
    subTitle: string;
    btnTitle: string;
    btnURL: string;
  };
  descriptionList: { title: string; subTitle: string }[];
  specificationsLeft: { title: string; subTitle: string }[];
  specificationsRight: { title: string; subTitle: string }[];
  blueprintAlt: string;
}

export const productTranslations: Record<ProductLocale, ProductTranslation> = {
  es: {
    title: "FSA Line One Pro",
    description: "Audio cableado preciso para todos los días",
    main: {
      content:
        "FSA Line One Pro es la primera propuesta de Famdesc Sound Authority: auriculares intraauriculares con cable, creados para ofrecer una escucha estable, baja latencia y uso inmediato, sin baterías, recargas ni emparejamientos.",
      imgAlt:
        "Auriculares intraauriculares FSA Line One Pro con cable trenzado y conector de 3,5 mm",
    },
    tabs: [
      { id: "tabs-with-card-item-1", dataTab: "#tabs-with-card-1", title: "Descripción" },
      { id: "tabs-with-card-item-2", dataTab: "#tabs-with-card-2", title: "Especificaciones" },
      { id: "tabs-with-card-item-3", dataTab: "#tabs-with-card-3", title: "Diseño" },
    ],
    longDescription: {
      title: "Sonido fiable, sin depender de una batería",
      subTitle:
        "FSA significa Famdesc Sound Authority, la primera línea tecnológica premium del ecosistema Famdesc. Line One Pro nace como una alternativa práctica frente a los auriculares inalámbricos desechables o poco fiables: conexión directa de 3,5 mm, respuesta inmediata y una construcción pensada para estudiar, trabajar, viajar, jugar y escuchar música todos los días.",
      btnTitle: "Únete a la lista de espera",
      btnURL: "/es/waitlist",
    },
    descriptionList: [
      {
        title: "Sonido Hi-Fi mejorado",
        subTitle:
          "Un controlador dinámico de 10 mm busca voces claras, buen nivel de detalle y una respuesta equilibrada para el uso cotidiano.",
      },
      {
        title: "Baja latencia, sin recargas",
        subTitle:
          "La señal por cable evita baterías agotadas, problemas de emparejamiento y retrasos innecesarios en llamadas, juegos o edición.",
      },
      {
        title: "Construcción para acompañarte",
        subTitle:
          "Cable trenzado reforzado, carcasa metálica y conector de 3,5 mm chapado en oro y acodado para resistir mejor el uso frecuente.",
      },
      {
        title: "Validación responsable",
        subTitle:
          "El producto se ha diseñado teniendo en cuenta los requisitos CE, FCC, RoHS y WEEE. La documentación actualizada del proveedor se encuentra en revisión antes de publicar afirmaciones definitivas.",
      },
    ],
    specificationsLeft: [
      { title: "Audio", subTitle: "Sonido Hi-Fi mejorado mediante un controlador dinámico de 10 mm." },
      { title: "Aislamiento", subTitle: "El ajuste intraauricular ayuda a reducir el ruido del entorno sin electrónica activa." },
      { title: "Micrófono", subTitle: "Micrófono HD integrado para llamadas, reuniones y comunicación diaria." },
      { title: "Cable", subTitle: "Cable trenzado reforzado, preparado para evitar enredos y soportar el transporte cotidiano." },
      { title: "Conector", subTitle: "Conector universal de 3,5 mm, chapado en oro y con diseño acodado en L." },
    ],
    specificationsRight: [
      { title: "Alimentación", subTitle: "No necesita batería." },
      { title: "Respuesta", subTitle: "Conexión cableada de baja latencia para trabajo, viajes, estudio y entretenimiento." },
      { title: "Carcasa", subTitle: "Construcción metálica premium con diseño intraauricular ergonómico." },
      { title: "Estuche", subTitle: "Incluye un estuche premium pensado para guardar el producto sin enredos." },
      { title: "Distribución", subTitle: "Preparado para distribución mediante Amazon FBA. El enlace público se añadirá después del lanzamiento." },
    ],
    blueprintAlt: "Detalles de diseño y componentes de FSA Line One Pro",
  },
  fr: {
    title: "FSA Line One Pro",
    description: "Un son filaire précis, pensé pour le quotidien",
    main: {
      content:
        "FSA Line One Pro inaugure Famdesc Sound Authority : des écouteurs intra-auriculaires filaires conçus pour offrir une écoute stable, une faible latence et une utilisation immédiate, sans batterie, recharge ni appairage.",
      imgAlt:
        "Écouteurs intra-auriculaires FSA Line One Pro avec câble tressé et connecteur 3,5 mm",
    },
    tabs: [
      { id: "tabs-with-card-item-1", dataTab: "#tabs-with-card-1", title: "Présentation" },
      { id: "tabs-with-card-item-2", dataTab: "#tabs-with-card-2", title: "Caractéristiques" },
      { id: "tabs-with-card-item-3", dataTab: "#tabs-with-card-3", title: "Conception" },
    ],
    longDescription: {
      title: "Un son fiable, sans dépendre d'une batterie",
      subTitle:
        "FSA, pour Famdesc Sound Authority, est la première ligne technologique premium de l'écosystème Famdesc. Line One Pro propose une réponse concrète aux écouteurs sans fil jetables ou imprévisibles : une connexion directe de 3,5 mm, une restitution immédiate et une conception faite pour étudier, travailler, voyager, jouer et écouter chaque jour.",
      btnTitle: "Rejoindre la liste d'attente",
      btnURL: "/fr/waitlist",
    },
    descriptionList: [
      {
        title: "Son Hi-Fi optimisé",
        subTitle:
          "Un transducteur dynamique de 10 mm vise des voix claires, des détails précis et un équilibre agréable au quotidien.",
      },
      {
        title: "Faible latence, aucune recharge",
        subTitle:
          "Le signal filaire évite les batteries vides, les difficultés d'appairage et les décalages inutiles pendant les appels, le jeu ou le montage.",
      },
      {
        title: "Conçu pour vous accompagner",
        subTitle:
          "Câble tressé renforcé, coque métallique et connecteur 3,5 mm coudé et plaqué or favorisent une utilisation régulière et durable.",
      },
      {
        title: "Une validation menée avec rigueur",
        subTitle:
          "Le produit est conçu en tenant compte des exigences CE, FCC, RoHS et WEEE. Les documents actualisés du fournisseur sont vérifiés avant toute déclaration définitive.",
      },
    ],
    specificationsLeft: [
      { title: "Audio", subTitle: "Son Hi-Fi optimisé grâce à un transducteur dynamique de 10 mm." },
      { title: "Isolation", subTitle: "L'ajustement intra-auriculaire atténue les bruits ambiants sans électronique active." },
      { title: "Microphone", subTitle: "Microphone HD intégré pour les appels, réunions et échanges quotidiens." },
      { title: "Câble", subTitle: "Câble tressé renforcé, conçu pour limiter les nœuds et accompagner les déplacements." },
      { title: "Connecteur", subTitle: "Connecteur universel 3,5 mm, plaqué or et coudé en L." },
    ],
    specificationsRight: [
      { title: "Alimentation", subTitle: "Aucune batterie nécessaire." },
      { title: "Réactivité", subTitle: "Connexion filaire à faible latence pour le travail, les voyages, les études et les loisirs." },
      { title: "Coque", subTitle: "Construction métallique premium et forme intra-auriculaire ergonomique." },
      { title: "Étui", subTitle: "Étui premium inclus pour ranger les écouteurs tout en limitant les nœuds." },
      { title: "Distribution", subTitle: "Préparé pour une distribution Amazon FBA. Le lien public sera ajouté après le lancement." },
    ],
    blueprintAlt: "Détails de conception et composants du FSA Line One Pro",
  },
};
