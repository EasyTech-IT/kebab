/* =========================================================
   CIHAN-ECK – DIGITAL MENU ENGINE
   CONFIGURATOR + PRICE CALCULATOR + CART
========================================================= */

"use strict";

/* =========================================================
   HELPER - START
========================================================= */

const $menu = (selector, parent = document) => parent.querySelector(selector);

const $$menu = (selector, parent = document) => [
  ...parent.querySelectorAll(selector),
];

const euro = (value) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);

/* =========================================================
   HELPER - END
========================================================= */

/* =========================================================
   MENU DATABASE - START
========================================================= */

const MENU = {
  /* =======================================================
     KONFIGURIERBARE BASICS
  ======================================================= */

  "doener-klassisch": {
    name: "Döner Kebab klassisch",
    category: "Döner Kebab",
    price: 10.0,

    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=900",

    description:
      "Unser klassischer Döner mit Kalbfleisch, frischem Salat und Sauce.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Brot",
      options: [
        {
          name: "Fladenbrot",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
      "Lollo Rosso",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "doener-traditionell": {
    name: "Döner Kebab traditionell Türkisch",
    category: "Döner Kebab",
    price: 10.5,

    image:
      "https://images.pexels.com/photos/5410404/pexels-photo-5410404.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Döner mit gegrilltem Gemüse und frischem Salat.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Brot",
      options: [
        {
          name: "Fladenbrot",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
      "Lollo Rosso",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "doener-94": {
    name: "Döner Kebab 94",
    category: "Döner Kebab",
    price: 9.5,

    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Döner mit Krautsalat, Zwiebeln, Tomaten und Gurken.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Brot",
      options: [
        {
          name: "Fladenbrot",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: ["Krautsalat", "Zwiebeln", "Tomaten", "Gurken"],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],

    specialOption: {
      name: "Döner klein",
      price: -3.0,
    },
  },

  /* =======================================================
     DÜRÜM
  ======================================================= */

  "duerum-klassisch": {
    name: "Wraps Dürüm Döner klassisch",
    category: "Dürüm",
    price: 9.5,

    image:
      "https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=900",

    description:
      "Dürüm mit Krautsalat, Zwiebeln, Eisbergsalat, Tomaten, Gurken und Rucola.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Wrap",
      options: [
        {
          name: "Dürüm Wrap",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "duerum-weichkaese": {
    name: "Wraps Dürüm Döner klassisch mit Weichkäse",
    category: "Dürüm",
    price: 10.0,

    image:
      "https://images.pexels.com/photos/8448321/pexels-photo-8448321.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Dürüm mit Weichkäse und frischem Salat.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Wrap",
      options: [
        {
          name: "Dürüm Wrap",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
      "Weichkäse",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "duerum-traditionell": {
    name: "Wraps Dürüm Döner traditionell Türkisch",
    category: "Dürüm",
    price: 10.5,

    image:
      "https://images.pexels.com/photos/4958790/pexels-photo-4958790.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Dürüm mit gegrilltem Gemüse und frischem Salat.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Wrap",
      options: [
        {
          name: "Dürüm Wrap",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  /* =======================================================
     LAHMACUN
  ======================================================= */

  "lahmacun-klassisch": {
    name: "Türkische Lahmacun Döner klassisch",
    category: "Lahmacun",
    price: 10.5,

    image:
      "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Lahmacun mit Dönerfleisch und klassischem Salat.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Lahmacun",
      options: [
        {
          name: "Lahmacun",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "lahmacun-traditionell": {
    name: "Türkische Lahmacun Döner traditionell Türkisch",
    category: "Lahmacun",
    price: 11.5,

    image:
      "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Lahmacun mit gegrilltem Gemüse und frischem Salat.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Lahmacun",
      options: [
        {
          name: "Lahmacun",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "lahmacun-kaese": {
    name: "Türkische Lahmacun Döner klassisch mit Käse",
    category: "Lahmacun",
    price: 11.0,

    image:
      "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Lahmacun mit Käse und klassischem Salat.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    bread: {
      label: "Lahmacun",
      options: [
        {
          name: "Lahmacun",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
      "Käse",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  /* =======================================================
     SALAT BOWLS
  ======================================================= */

  "salat-falafel": {
    name: "Salat Bowl mit Falafel",
    category: "Salat",
    price: 13.0,

    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Salat Bowl mit Falafel, gegrilltem Gemüse und Reis.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Eisbergsalat",
      "Gurken",
      "Rucola",
      "Tomaten",
      "Zwiebeln",
      "Cherrytomaten",
      "Lollo Rosso",
      "Oliven",
      "Weichkäse",
      "Reis",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "salat-halloumi": {
    name: "Salat Bowl mit Halloumi",
    category: "Salat",
    price: 11.0,

    image:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Salat Bowl mit Halloumi und gegrilltem Gemüse.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Eisbergsalat",
      "Gurken",
      "Rucola",
      "Tomaten",
      "Zwiebeln",
      "Cherrytomaten",
      "Oliven",
      "Lollo Rosso",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "salat-doener": {
    name: "Salat Bowl mit Döner",
    category: "Salat",
    price: 16.0,

    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Salat Bowl mit Dönerfleisch, Gemüse und Weichkäse.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Gegrilltes Gemüse",
      "Weichkäse",
      "Krautsalat",
      "Eisbergsalat",
      "Gurken",
      "Rucola",
      "Tomaten",
      "Zwiebeln",
      "Cherrytomaten",
      "Oliven",
      "Lollo Rosso",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "salat-weichkaese": {
    name: "Salat Bowl mit Weichkäse",
    category: "Salat",
    price: 9.5,

    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Salat Bowl mit Weichkäse und frischem Gemüse.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Eisbergsalat",
      "Gurken",
      "Rucola",
      "Tomaten",
      "Zwiebeln",
      "Cherrytomaten",
      "Oliven",
      "Lollo Rosso",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  /* =======================================================
     VEGETARISCH
  ======================================================= */

  "vegetarisch-kaese": {
    name: "Wraps Dürüm mit Käse",
    category: "Vegetarisch",
    price: 8.5,

    image:
      "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Vegetarischer Dürüm mit Käse und gegrilltem Gemüse.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Rucola",
      "Tomaten",
      "Gurken",
      "Käse",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "vegetarisch-halloumi": {
    name: "Wraps Dürüm mit Halloumi",
    category: "Vegetarisch",
    price: 9.0,

    image:
      "https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Vegetarischer Dürüm mit Halloumi und gegrilltem Gemüse.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Rucola",
      "Tomaten",
      "Gurken",
      "Halloumi",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "vegetarisch-falafel": {
    name: "Wraps Dürüm mit Falafel",
    category: "Vegetarisch",
    price: 9.5,

    image:
      "https://images.pexels.com/photos/6275192/pexels-photo-6275192.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Dürüm mit Falafel, Gemüse und Käse.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Rucola",
      "Tomaten",
      "Gurken",
      "Käse",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "weichkaese-fladen": {
    name: "Weichkäse im Fladenbrot",
    category: "Vegetarisch",
    price: 8.5,

    image:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Weichkäse im Fladenbrot mit gegrilltem Gemüse und Salat.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Rucola",
      "Tomaten",
      "Gurken",
      "Lollo Rosso",
      "Weichkäse",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "halloumi-fladen": {
    name: "Halloumi im Fladenbrot",
    category: "Vegetarisch",
    price: 9.0,

    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Halloumi im Fladenbrot mit gegrilltem Gemüse und Salat.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Rucola",
      "Tomaten",
      "Gurken",
      "Lollo Rosso",
      "Halloumi",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "falafel-fladen": {
    name: "Falafel im Fladenbrot",
    category: "Vegetarisch",
    price: 9.5,

    image:
      "https://images.pexels.com/photos/6275192/pexels-photo-6275192.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Falafel im Fladenbrot mit Gemüse, Salat und Käse.",

    configurable: true,

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Rucola",
      "Tomaten",
      "Gurken",
      "Lollo Rosso",
      "Käse",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "sigara-boerek": {
    name: "Sigara Börek",
    category: "Vegetarisch",
    price: 5.5,

    image:
      "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=900",

    description:
      "5 selbstgemachte Blätterteigrollen mit Weichkäse und Petersilie.",

    configurable: true,

    ingredients: ["Weichkäse", "Petersilie"],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "ispanak-boerek": {
    name: "Ispanak Börek",
    category: "Vegetarisch",
    price: 10.0,

    image:
      "https://images.pexels.com/photos/4955253/pexels-photo-4955253.jpeg?auto=compress&cs=tinysrgb&w=900",

    description:
      "Selbstgemachter Blätterteig mit Spinat, Weichkäse, Gemüse und Salat.",

    configurable: true,

    ingredients: [
      "Spinat",
      "Weichkäse",
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Eisbergsalat",
      "Rucola",
      "Zwiebeln",
      "Cherrytomaten",
      "Lollo Rosso",
      "Oliven",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  /* =======================================================
     DÖNERBOX
  ======================================================= */

  "box-pommes": {
    name: "Dönerbox mit Pommes",
    category: "Dönerbox",
    price: 8.5,

    image:
      "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Dönerfleisch mit Pommes, Salat und Sauce.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: ["Pommes", "Salat"],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "box-reis": {
    name: "Dönerbox mit Reis",
    category: "Dönerbox",
    price: 8.5,

    image:
      "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Dönerfleisch mit Reis, Salat und Sauce.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: ["Reis", "Salat"],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  "box-reis-pommes": {
    name: "Dönerbox mit Reis / Pommes",
    category: "Dönerbox",
    price: 10.0,

    image:
      "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Dönerfleisch mit Reis, Pommes, Gemüse und Salat.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: [
      "Reis",
      "Pommes",
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Tomaten",
      "Gurken",
      "Rucola",
      "Lollo Rosso",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  /* =======================================================
     TELLER
  ======================================================= */

  "doener-teller": {
    name: "Döner Teller",
    category: "Tellergerichte",
    price: 18.9,

    image:
      "https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=900",

    description:
      "Dönerfleisch mit Gemüse, Salat, Oliven und Reis oder Spicy-Wedges.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    side: {
      label: "Beilage",
      options: [
        {
          name: "Reis",
          price: 0,
        },
        {
          name: "Spicy-Wedges",
          price: 0,
        },
      ],
    },

    ingredients: [
      "Gegrilltes Gemüse",
      "Krautsalat",
      "Zwiebeln",
      "Eisbergsalat",
      "Cherrytomaten",
      "Rucola",
      "Lollo Rosso",
      "Oliven",
    ],

    sauces: ["Knoblauchsoße", "Joghurtsoße", "Chilisoße"],
  },

  iskender: {
    name: "Iskender Kebab",
    category: "Tellergerichte",
    price: 16.0,

    image:
      "https://images.pexels.com/photos/5410404/pexels-photo-5410404.jpeg?auto=compress&cs=tinysrgb&w=900",

    description:
      "Kalbfleisch mit geröstetem Fladenbrot, Tomaten, Tomatenmark, Joghurtsoße und Butterguss.",

    configurable: true,

    meat: {
      label: "Fleisch",
      options: [
        {
          name: "Kalbfleisch",
          price: 0,
          fixed: true,
        },
      ],
    },

    ingredients: ["Geröstetes Fladenbrot", "Frische Tomaten", "Tomatenmark"],

    sauces: ["Joghurtsoße"],
  },

  /* =======================================================
     BEILAGEN
  ======================================================= */

  pommes: {
    name: "Pommes",
    category: "Beilagen",
    price: 4.0,

    image:
      "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Knusprige Pommes.",

    configurable: true,
  },

  spicywedges: {
    name: "Spicy Wedges",
    category: "Beilagen",
    price: 4.5,

    image:
      "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Würzige Kartoffel-Wedges.",

    configurable: true,
  },

  ketchup: {
    name: "Ketchup",
    category: "Beilagen",
    price: 0.3,

    image:
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Portion Ketchup.",

    configurable: false,
  },

  mayonnaise: {
    name: "Mayonnaise",
    category: "Beilagen",
    price: 0.3,

    image:
      "https://images.pexels.com/photos/5677791/pexels-photo-5677791.jpeg?auto=compress&cs=tinysrgb&w=900",

    description: "Portion Mayonnaise.",

    configurable: false,
  },

  /* =======================================================
     GETRÄNKE
  ======================================================= */

  "coca-cola": {
    name: "Coca-Cola",
    category: "Getränke",
    price: 3.5,
    configurable: false,
  },

  "cola-light": {
    name: "Cola-Light",
    category: "Getränke",
    price: 3.5,
    configurable: false,
  },

  "fanta-sprite": {
    name: "Fanta / Sprite",
    category: "Getränke",
    price: 3.5,
    configurable: false,
  },

  "mezzo-mix": {
    name: "Mezzo Mix",
    category: "Getränke",
    price: 3.5,
    configurable: false,
  },

  "cola-zero": {
    name: "Cola-Zero",
    category: "Getränke",
    price: 3.5,
    configurable: false,
  },

  uludag: {
    name: "Uludag türkische Limonade",
    category: "Getränke",
    price: 3.5,
    configurable: false,
  },

  ayran: {
    name: "Ayran",
    category: "Getränke",
    price: 2.0,
    configurable: false,
  },

  gerolsteiner: {
    name: "Gerolsteiner Gourmet",
    category: "Getränke",
    price: 4.5,
    configurable: false,
  },

  apfelsaft: {
    name: "Apfelsaft",
    category: "Getränke",
    price: 2.5,
    configurable: false,
  },

  apfelsaftschorle: {
    name: "Apfelsaftschorle",
    category: "Getränke",
    price: 2.5,
    configurable: false,
  },

  kaffee: {
    name: "Kaffee",
    category: "Kaffee",
    price: 2.5,
    configurable: false,
  },

  cappuccino: {
    name: "Cappuccino",
    category: "Kaffee",
    price: 3.0,
    configurable: false,
  },

  espresso: {
    name: "Espresso",
    category: "Kaffee",
    price: 2.0,
    configurable: false,
  },

  latte: {
    name: "Latte Macchiato",
    category: "Kaffee",
    price: 3.6,
    configurable: false,
  },

  apfelwein: {
    name: "Apfelwein",
    category: "Getränke",
    price: 2.5,
    configurable: false,
    note: "0,25 l / 0,5 l: 2,50 € / 4,50 €",
  },

  "licher-pils": {
    name: "Licher Pils",
    category: "Getränke",
    price: 3.9,
    configurable: false,
    note: "0,3 l / 0,5 l: 3,90 € / 5,00 €",
  },

  efes: {
    name: "Efes Pilsener",
    category: "Getränke",
    price: 3.5,
    configurable: false,
  },

  rotwein: {
    name: "Rotwein",
    category: "Getränke",
    price: 5.5,
    configurable: false,
  },

  weisswein: {
    name: "Weißwein",
    category: "Getränke",
    price: 5.5,
    configurable: false,
  },
};

/* =========================================================
   EXTRAS DATABASE - START
========================================================= */

const EXTRAS = [
  {
    name: "Weichkäse",
    price: 1.5,
  },

  {
    name: "Jalapeños",
    price: 1.0,
  },

  {
    name: "Halloumi",
    price: 1.5,
  },

  {
    name: "Pommes im Brot",
    price: 1.0,
  },

  {
    name: "Schälchen Soße",
    price: 2.0,
  },

  {
    name: "Pommes im Wrap",
    price: 1.0,
  },

  {
    name: "Oliven",
    price: 1.0,
  },

  {
    name: "Extra Dönerfleisch",
    price: 3.5,
  },

  {
    name: "Zitrone",
    price: 0.5,
  },

  {
    name: "Portion Reis",
    price: 2.5,
  },

  {
    name: "Guacamole",
    price: 1.5,
  },

  {
    name: "Tomate-Aubergine",
    price: 1.5,
  },
];

/* =========================================================
   EXTRAS DATABASE - END
========================================================= */

/* =========================================================
   CONFIGURATOR STATE - START
========================================================= */

let activeProduct = null;

let currentConfiguration = {
  meat: null,
  bread: null,
  side: null,
  ingredients: [],
  sauce: null,
  extras: [],
  special: null,
};

let cart = [];

/* =========================================================
   CONFIGURATOR STATE - END
========================================================= */

/* =========================================================
   DOM ELEMENTS - START
========================================================= */

const menuModal = document.getElementById("menuModal");

const menuModalPanel = document.querySelector(".menu-modal-panel");

const modalImage = document.getElementById("modalImage");

const modalCategory = document.getElementById("modalCategory");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalBasePrice = document.getElementById("modalBasePrice");

const modalLivePrice = document.getElementById("modalLivePrice");

const modalOptions = document.getElementById("modalOptions");

const modalSummaryName = document.getElementById("modalSummaryName");

const modalSummaryPrice = document.getElementById("modalSummaryPrice");

const modalSummaryList = document.getElementById("modalSummaryList");

const addToCart = document.getElementById("addToCart");

const addToCartPrice = document.getElementById("addToCartPrice");

const cartDrawer = document.getElementById("cartDrawer");

const cartItems = document.getElementById("cartItems");

const cartEmpty = document.getElementById("cartEmpty");

const cartTotal = document.getElementById("cartTotal");

const cartCount = document.getElementById("cartCount");

const floatingCart = document.getElementById("floatingCart");

const floatingCartCount = document.getElementById("floatingCartCount");

const floatingCartTotal = document.getElementById("floatingCartTotal");

const mobileCartButton = document.getElementById("mobileCartButton");

const mobileCartCount = document.getElementById("mobileCartCount");

const clearCart = document.getElementById("clearCart");

/* =========================================================
   DOM ELEMENTS - END
========================================================= */

/* =========================================================
   LOCAL STORAGE - START
========================================================= */

const CART_STORAGE_KEY = "cihan_eck_menu_cart";

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);

    cart = saved ? JSON.parse(saved) : [];
  } catch {
    cart = [];
  }
}

/* =========================================================
   LOCAL STORAGE - END
========================================================= */

/* =========================================================
   PRICE CALCULATOR - START
========================================================= */

function calculateConfigurationPrice() {
  if (!activeProduct) {
    return 0;
  }

  let price = activeProduct.price;

  if (
    currentConfiguration.meat &&
    typeof currentConfiguration.meat.price === "number"
  ) {
    price += currentConfiguration.meat.price;
  }

  if (
    currentConfiguration.bread &&
    typeof currentConfiguration.bread.price === "number"
  ) {
    price += currentConfiguration.bread.price;
  }

  if (
    currentConfiguration.side &&
    typeof currentConfiguration.side.price === "number"
  ) {
    price += currentConfiguration.side.price;
  }

  if (
    currentConfiguration.special &&
    typeof currentConfiguration.special.price === "number"
  ) {
    price += currentConfiguration.special.price;
  }

  currentConfiguration.extras.forEach((extra) => {
    price += extra.price;
  });

  return Math.max(0, price);
}

/* =========================================================
   PRICE CALCULATOR - END
========================================================= */

/* =========================================================
   RESET CONFIGURATION - START
========================================================= */

function resetConfiguration(product) {
  currentConfiguration = {
    meat: product.meat?.options?.[0] || null,

    bread: product.bread?.options?.[0] || null,

    side: product.side?.options?.[0] || null,

    ingredients: product.ingredients ? [...product.ingredients] : [],

    sauce: product.sauces?.[0] || null,

    extras: [],

    special: null,
  };
}

/* =========================================================
   RESET CONFIGURATION - END
========================================================= */

/* =========================================================
   OPTION HTML - START
========================================================= */

function renderSingleOption(section, option, group) {
  const selected = currentConfiguration[group]?.name === option.name;

  return `
    <button
      type="button"
      class="config-option ${selected ? "selected" : ""}"
      data-group="${group}"
      data-option="${escapeHtml(option.name)}"
    >

      <span class="config-option-main">

        <span class="config-option-check">
          <i class="fas fa-check"></i>
        </span>

        ${escapeHtml(option.name)}

      </span>

      ${
        option.price
          ? `<span class="config-option-price">
              ${option.price > 0 ? "+" : ""}
              ${euro(option.price)}
             </span>`
          : `<span class="config-option-price">
              inklusive
             </span>`
      }

    </button>
  `;
}

function renderIngredients(product) {
  if (!product.ingredients?.length) {
    return "";
  }

  return `
    <section class="config-section">

      <div class="config-section-heading">

        <strong>
          Zutaten
        </strong>

        <small>
          Wähle nach deinem Geschmack
        </small>

      </div>

      <div class="config-options">

        ${product.ingredients
          .map((ingredient) => {
            const selected =
              currentConfiguration.ingredients.includes(ingredient);

            return `
              <button
                type="button"
                class="config-option ${selected ? "selected" : ""}"
                data-ingredient="${escapeHtml(ingredient)}"
              >

                <span class="config-option-main">

                  <span class="config-option-check">
                    <i class="fas fa-check"></i>
                  </span>

                  ${escapeHtml(ingredient)}

                </span>

              </button>
            `;
          })
          .join("")}

      </div>

    </section>
  `;
}

function renderSauces(product) {
  if (!product.sauces?.length) {
    return "";
  }

  return `
    <section class="config-section">

      <div class="config-section-heading">

        <strong>
          Sauce
        </strong>

        <small>
          Eine Auswahl
        </small>

      </div>

      <div class="config-options">

        ${product.sauces
          .map((sauce) => {
            const selected = currentConfiguration.sauce === sauce;

            return `
              <button
                type="button"
                class="config-option ${selected ? "selected" : ""}"
                data-sauce="${escapeHtml(sauce)}"
              >

                <span class="config-option-main">

                  <span class="config-option-check">
                    <i class="fas fa-check"></i>
                  </span>

                  ${escapeHtml(sauce)}

                </span>

              </button>
            `;
          })
          .join("")}

      </div>

    </section>
  `;
}

function renderExtras() {
  return `
    <section class="config-section">

      <div class="config-section-heading">

        <strong>
          Extras
        </strong>

        <small>
          Optional
        </small>

      </div>

      <div class="config-options">

        ${EXTRAS.map((extra) => {
          const selected = currentConfiguration.extras.some(
            (item) => item.name === extra.name,
          );

          return `
              <button
                type="button"
                class="config-option ${selected ? "selected" : ""}"
                data-extra="${escapeHtml(extra.name)}"
              >

                <span class="config-option-main">

                  <span class="config-option-check">
                    <i class="fas fa-check"></i>
                  </span>

                  ${escapeHtml(extra.name)}

                </span>

                <span class="config-option-price">
                  +${euro(extra.price)}
                </span>

              </button>
            `;
        }).join("")}

      </div>

    </section>
  `;
}

function renderSpecialOption(product) {
  if (!product.specialOption) {
    return "";
  }

  const option = product.specialOption;

  const selected = currentConfiguration.special !== null;

  return `
    <section class="config-section">

      <div class="config-section-heading">

        <strong>
          Variante
        </strong>

        <small>
          Optional
        </small>

      </div>

      <div class="config-options">

        <button
          type="button"
          class="config-option ${selected ? "selected" : ""}"
          data-special
        >

          <span class="config-option-main">

            <span class="config-option-check">
              <i class="fas fa-check"></i>
            </span>

            ${escapeHtml(option.name)}

          </span>

          <span class="config-option-price">
            ${euro(option.price)}
          </span>

        </button>

      </div>

    </section>
  `;
}

/* =========================================================
   OPTION HTML - END
========================================================= */

/* =========================================================
   RENDER CONFIGURATOR - START
========================================================= */

function renderConfigurator() {
  if (!activeProduct) {
    return;
  }

  modalCategory.textContent = activeProduct.category.toUpperCase();

  modalTitle.textContent = activeProduct.name;

  modalDescription.textContent =
    activeProduct.description ||
    "Stelle dein Gericht nach deinen Wünschen zusammen.";

  modalBasePrice.textContent = euro(activeProduct.price);

  modalImage.src = activeProduct.image || "";

  modalImage.alt = activeProduct.name;

  let html = "";

  /* -------------------------------------------------------
     FLEISCH
  ------------------------------------------------------- */

  if (activeProduct.meat) {
    html += `
      <section class="config-section">

        <div class="config-section-heading">

          <strong>
            ${escapeHtml(activeProduct.meat.label)}
          </strong>

          <small>
            ${
              activeProduct.meat.options.length === 1
                ? "Fest vorgegeben"
                : "Eine Auswahl"
            }
          </small>

        </div>

        <div class="config-options">

          ${activeProduct.meat.options
            .map((option) => renderSingleOption("meat", option, "meat"))
            .join("")}

        </div>

      </section>
    `;
  }

  /* -------------------------------------------------------
     BROT
  ------------------------------------------------------- */

  if (activeProduct.bread) {
    html += `
      <section class="config-section">

        <div class="config-section-heading">

          <strong>
            ${escapeHtml(activeProduct.bread.label)}
          </strong>

          <small>
            ${
              activeProduct.bread.options.length === 1
                ? "Eine Größe"
                : "Auswahl"
            }
          </small>

        </div>

        <div class="config-options">

          ${activeProduct.bread.options
            .map((option) => renderSingleOption("bread", option, "bread"))
            .join("")}

        </div>

      </section>
    `;
  }

  /* -------------------------------------------------------
     BEILAGE
  ------------------------------------------------------- */

  if (activeProduct.side) {
    html += `
      <section class="config-section">

        <div class="config-section-heading">

          <strong>
            ${escapeHtml(activeProduct.side.label)}
          </strong>

          <small>
            Eine Auswahl
          </small>

        </div>

        <div class="config-options">

          ${activeProduct.side.options
            .map((option) => renderSingleOption("side", option, "side"))
            .join("")}

        </div>

      </section>
    `;
  }

  /* -------------------------------------------------------
     ZUTATEN
  ------------------------------------------------------- */

  html += renderIngredients(activeProduct);

  /* -------------------------------------------------------
     SAUCE
  ------------------------------------------------------- */

  html += renderSauces(activeProduct);

  /* -------------------------------------------------------
     VARIANTE
  ------------------------------------------------------- */

  html += renderSpecialOption(activeProduct);

  /* -------------------------------------------------------
     EXTRAS
  ------------------------------------------------------- */

  if (activeProduct.configurable) {
    html += renderExtras();
  }

  modalOptions.innerHTML = html;

  updateConfiguratorPrice();
}

/* =========================================================
   RENDER CONFIGURATOR - END
========================================================= */

/* =========================================================
   UPDATE CONFIGURATOR - START
========================================================= */

function updateConfiguratorPrice() {
  const price = calculateConfigurationPrice();

  modalLivePrice.textContent = euro(price);

  modalSummaryPrice.textContent = euro(price);

  addToCartPrice.textContent = euro(price);

  modalSummaryName.textContent = activeProduct?.name || "Gericht";

  const summary = getConfigurationSummary();

  modalSummaryList.innerHTML = summary
    .map(
      (item) =>
        `<span class="summary-pill">
          ${escapeHtml(item)}
         </span>`,
    )
    .join("");
}

/* =========================================================
   UPDATE CONFIGURATOR - END
========================================================= */

/* =========================================================
   CONFIGURATION SUMMARY - START
========================================================= */

function getConfigurationSummary() {
  const summary = [];

  if (currentConfiguration.meat) {
    summary.push(currentConfiguration.meat.name);
  }

  if (currentConfiguration.bread) {
    summary.push(currentConfiguration.bread.name);
  }

  if (currentConfiguration.side) {
    summary.push(currentConfiguration.side.name);
  }

  currentConfiguration.ingredients.forEach((ingredient) => {
    summary.push(ingredient);
  });

  if (currentConfiguration.sauce) {
    summary.push(currentConfiguration.sauce);
  }

  if (currentConfiguration.special) {
    summary.push(currentConfiguration.special.name);
  }

  currentConfiguration.extras.forEach((extra) => {
    summary.push(`+ ${extra.name}`);
  });

  return summary;
}

/* =========================================================
   CONFIGURATION SUMMARY - END
========================================================= */

/* =========================================================
   OPEN CONFIGURATOR - START
========================================================= */

function openConfigurator(id) {
  const product = MENU[id];

  if (!product) {
    return;
  }

  activeProduct = product;

  resetConfiguration(product);

  renderConfigurator();

  menuModal.classList.add("open");

  menuModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("menu-modal-open");

  menuModalPanel.scrollTop = 0;
}

/* =========================================================
   OPEN CONFIGURATOR - END
========================================================= */

/* =========================================================
   CLOSE CONFIGURATOR - START
========================================================= */

function closeConfigurator() {
  menuModal.classList.remove("open");

  menuModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("menu-modal-open");

  activeProduct = null;
}

/* =========================================================
   CLOSE CONFIGURATOR - END
========================================================= */

/* =========================================================
   CONFIGURATOR EVENTS - START
========================================================= */

document.addEventListener("click", (event) => {
  const configureButton = event.target.closest("[data-configure]");

  if (configureButton) {
    openConfigurator(configureButton.dataset.configure);

    return;
  }

  const ingredient = event.target.closest("[data-ingredient]");

  if (ingredient && activeProduct) {
    const value = ingredient.dataset.ingredient;

    const exists = currentConfiguration.ingredients.includes(value);

    if (exists) {
      currentConfiguration.ingredients =
        currentConfiguration.ingredients.filter((item) => item !== value);
    } else {
      currentConfiguration.ingredients.push(value);
    }

    renderConfigurator();

    return;
  }

  const option = event.target.closest("[data-group]");

  if (option && activeProduct) {
    const group = option.dataset.group;

    const optionName = option.dataset.option;

    const source = activeProduct[group]?.options || [];

    const selected = source.find((item) => item.name === optionName);

    if (selected) {
      currentConfiguration[group] = selected;

      renderConfigurator();
    }

    return;
  }

  const sauce = event.target.closest("[data-sauce]");

  if (sauce && activeProduct) {
    currentConfiguration.sauce = sauce.dataset.sauce;

    renderConfigurator();

    return;
  }

  const extra = event.target.closest("[data-extra]");

  if (extra && activeProduct) {
    const name = extra.dataset.extra;

    const existing = currentConfiguration.extras.find(
      (item) => item.name === name,
    );

    if (existing) {
      currentConfiguration.extras = currentConfiguration.extras.filter(
        (item) => item.name !== name,
      );
    } else {
      const extraData = EXTRAS.find((item) => item.name === name);

      if (extraData) {
        currentConfiguration.extras.push(extraData);
      }
    }

    renderConfigurator();

    return;
  }

  const special = event.target.closest("[data-special]");

  if (special && activeProduct?.specialOption) {
    if (currentConfiguration.special) {
      currentConfiguration.special = null;
    } else {
      currentConfiguration.special = activeProduct.specialOption;
    }

    renderConfigurator();
  }
});

/* ---------------------------------------------------------
   MODAL CLOSE
--------------------------------------------------------- */

$$menu("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeConfigurator);
});

/* ---------------------------------------------------------
   ESC
--------------------------------------------------------- */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (menuModal.classList.contains("open")) {
      closeConfigurator();
    }

    if (cartDrawer.classList.contains("open")) {
      closeCart();
    }
  }
});

/* =========================================================
   CONFIGURATOR EVENTS - END
========================================================= */

/* =========================================================
   ADD TO CART - START
========================================================= */

addToCart.addEventListener("click", () => {
  if (!activeProduct) {
    return;
  }

  const price = calculateConfigurationPrice();

  const item = {
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),

    productId: Object.keys(MENU).find((key) => MENU[key] === activeProduct),

    name: activeProduct.name,

    image: activeProduct.image || "",

    price,

    configuration: JSON.parse(JSON.stringify(currentConfiguration)),

    summary: getConfigurationSummary(),
  };

  cart.push(item);

  saveCart();

  updateCart();

  closeConfigurator();

  openCart();
});

/* =========================================================
   ADD TO CART - END
========================================================= */

/* =========================================================
   CART - START
========================================================= */

function getCartTotal() {
  return cart.reduce((total, item) => total + Number(item.price || 0), 0);
}

function updateCart() {
  const total = getCartTotal();

  const count = cart.length;

  cartTotal.textContent = euro(total);

  floatingCartTotal.textContent = euro(total);

  floatingCartCount.textContent = count;

  mobileCartCount.textContent = count;

  cartCount.textContent = count === 1 ? "1 Gericht" : `${count} Gerichte`;

  if (!cart.length) {
    cartItems.innerHTML = "";

    cartEmpty.classList.remove("hidden");

    return;
  }

  cartEmpty.classList.add("hidden");

  cartItems.innerHTML = cart
    .map((item, index) => {
      const details = item.summary.slice(0, 6).join(" · ");

      return `
          <article class="cart-item">

            <div class="cart-item-image">

              <img
                src="${escapeAttribute(item.image)}"
                alt="${escapeAttribute(item.name)}"
              >

            </div>

            <div class="cart-item-content">

              <h3>
                ${escapeHtml(item.name)}
              </h3>

              <p>
                ${escapeHtml(details)}
              </p>

            </div>

            <strong class="cart-item-price">
              ${euro(item.price)}
            </strong>

            <button
              type="button"
              class="cart-item-remove"
              data-remove-cart="${index}"
            >
              <i class="fas fa-trash"></i>
              Entfernen
            </button>

          </article>
        `;
    })
    .join("");
}

function openCart() {
  cartDrawer.classList.add("open");

  cartDrawer.setAttribute("aria-hidden", "false");

  document.body.classList.add("cart-open");
}

function closeCart() {
  cartDrawer.classList.remove("open");

  cartDrawer.setAttribute("aria-hidden", "true");

  document.body.classList.remove("cart-open");
}

/* ---------------------------------------------------------
   OPEN CART BUTTONS
--------------------------------------------------------- */

floatingCart.addEventListener("click", openCart);

mobileCartButton.addEventListener("click", openCart);

/* ---------------------------------------------------------
   CLOSE CART
--------------------------------------------------------- */

$$menu("[data-close-cart]").forEach((button) => {
  button.addEventListener("click", closeCart);
});

/* ---------------------------------------------------------
   REMOVE CART ITEM
--------------------------------------------------------- */

document.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-cart]");

  if (!removeButton) {
    return;
  }

  const index = Number(removeButton.dataset.removeCart);

  cart.splice(index, 1);

  saveCart();

  updateCart();
});

/* ---------------------------------------------------------
   CLEAR CART
--------------------------------------------------------- */

clearCart.addEventListener("click", () => {
  if (!cart.length) {
    return;
  }

  cart = [];

  saveCart();

  updateCart();
});

/* =========================================================
   CART - END
========================================================= */

/* =========================================================
   CATEGORY NAVIGATION - START
========================================================= */

const categoryLinks = $$(".menu-category-bar a");

const categorySections = $$("[data-category-section]");

const categoryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.id;

      categoryLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
  },
);

categorySections.forEach((section) => categoryObserver.observe(section));

/* =========================================================
   CATEGORY NAVIGATION - END
========================================================= */

/* =========================================================
   MOBILE NAVIGATION - START
========================================================= */

const navToggle = document.querySelector(".nav-toggle");

const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");

  navToggle.setAttribute("aria-expanded", open);
});

$$menu(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");

    navToggle?.setAttribute("aria-expanded", "false");
  });
});

/* =========================================================
   MOBILE NAVIGATION - END
========================================================= */

/* =========================================================
   ESCAPE HTML - START
========================================================= */

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

/* =========================================================
   ESCAPE HTML - END
========================================================= */

/* =========================================================
   INITIALIZATION - START
========================================================= */

loadCart();

updateCart();

/* =========================================================
   INITIALIZATION - END
========================================================= */
