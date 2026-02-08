import rollerSunScreen from '../assets/roller-screen/rollerscreen1.webp';
import rollerSunScreen2 from '../assets/roller-screen/rollerscreen2.webp';
import rollerSunScreen3 from '../assets/roller-screen/rollerscreen3.webp';
import blackout1 from '../assets/blackOut/blackout1.webp';
import blackout2 from '../assets/blackOut/blackout2.webp';
import blackout3 from '../assets/blackOut/blackout3.webp';
import vertical1 from '../assets/vertical/verticales1.webp';
import vertical2 from '../assets/vertical/verticales2.webp';
import vertical3 from '../assets/vertical/verticales3.webp';
import tradicional1 from '../assets/tradicional/tradicional1.webp';
import tradicional2 from '../assets/tradicional/tradicional2.webp';
import tradicional3 from '../assets/tradicional/tradicional3.webp';
import tradicional4 from '../assets/tradicional/tradicional4.webp';
import toldo1 from '../assets/toldos/toldo1.webp';
import toldo2 from '../assets/toldos/toldo2.webp';
import toldo3 from '../assets/toldos/toldo3.png';
import toldo4 from '../assets/toldos/toldo4.webp';
import toldo5 from '../assets/toldos/toldo5.webp';
import cerramiento1 from '../assets/cerramientos/cerramiento1.webp';
import cerramiento2 from '../assets/cerramientos/cerramiento2.webp';
import cerramiento3 from '../assets/cerramientos/cerramiento3.webp';



export const products = [
  {
    id: 1,
    name: "Cortina Roller Screen",
    slug: "cortina-roller-screen",
    category: "Roller Screen",
    images: [rollerSunScreen3, rollerSunScreen, rollerSunScreen2],
    seo: {
      title: "Cortina Roller Screen a Medida en Córdoba| Diseño y Control Solar – ALDUX",
      description: "Cortinas roller screen a medida con diseño moderno. Control solar, privacidad y materiales premium para hogares y oficinas.",
      canonical: "https://www.aldux.com.ar/productos/cortina-roller-screen"
    },
    content: {
      intro: "La cortina Roller Screen a medida es la elección ideal para quienes buscan control solar elegante sin resignar diseño ni visual exterior. Su tela técnica microperforada filtra la luz natural, reduce el calor y mejora el confort térmico del ambiente.",
      sections: [
        {
          h2: "Beneficios de la cortina roller screen",
          list: [
            "Filtrado solar eficiente",
            "Privacidad durante el día",
            "Estética minimalista y contemporánea",
            "Ideal para livings, estudios y oficinas",
            "Fabricación 100% a medida"
          ]
        }
      ]
    },
    faq: [
      { q: "¿La cortina roller screen bloquea totalmente la luz?", a: "No, filtra la luz natural manteniendo visibilidad hacia el exterior." },
      { q: "¿Es adecuada para oficinas premium?", a: "Sí, es una de las opciones más utilizadas en espacios corporativos modernos." }
    ]
  },

  {
    id: 2,
    name: "Cortina Blackout",
    slug: "cortina-roller-blackout",
    category: "Roller Blackout",
    images: [blackout1,blackout2,blackout3],
    seo: {
      title: "Cortina Blackout a Medida en Córdoba | Privacidad y Confort Total – ALDUX",
      description: "Cortinas blackout a medida. Bloqueo de luz, privacidad total y estética elegante para dormitorios y espacios premium.",
      canonical: "https://www.aldux.com.ar/productos/cortina-roller-blackout"
    },
    content: {
      intro: "La cortina blackout a medida es la solución ideal para quienes buscan oscuridad total, privacidad y confort visual, sin resignar diseño ni calidad estética. En ALDUX confeccionamos cortinas blackout a medida, utilizando telas de alta calidad y cuidando cada detalle para lograr un ambiente elegante, confortable y funcional.",
      sections: [
        {
          h2: "Beneficios de la cortina blackout",
          list: [
            "Bloqueo total de luz",
            "Privacidad absoluta",
            "Aislación visual y térmica",
            "Estética sofisticada",
            "Confección personalizada"
          ]
        }
      ]
    },
    faq: [
      { q: "¿La cortina blackout bloquea toda la luz?", a: "Sí, ofrece oscuridad total cuando está cerrada." },
      { q: "¿Es adecuada para dormitorios premium?", a: "Sí, es una de las opciones más elegidas para espacios de descanso." }
    ]
  },

  {
    id: 3,
    name: "Cortina Banda Vertical",
    slug: "bandas-verticales",
    category: "Bandas Verticales",
    images: [vertical1, vertical2,vertical3],
    seo: {
      title: "Cortina Banda Vertical a Medida en Córdoba | Diseño y Control de Luz – ALDUX",
      description: "Cortinas de banda vertical a medida. Control preciso de luz, privacidad y diseño elegante para oficinas y grandes ventanales.",
      canonical: "https://www.aldux.com.ar/productos/bandas-verticales"
    },
    content: {
      intro: "La cortina de banda vertical a medida es una solución clásica y funcional, especialmente diseñada para ventanales amplios, oficinas y espacios corporativos donde se requiere un control preciso de la luz y la privacidad. En ALDUX fabricamos cortinas de banda vertical a medida, utilizando materiales de alta calidad y mecanismos resistentes, logrando una solución duradera, elegante y adaptable a cada espacio.",
      sections: [
        {
          h2: "Beneficios de la cortina banda vertical",
          list: [
            "Control preciso de la luz",
            "Ideal para ventanales y oficinas",
            "Estética prolija y funcional",
            "Fácil mantenimiento",
            "Fabricación a medida"
          ]
        }
      ]
    },
    faq: [
      { q: "¿Dónde se recomienda usar cortinas de banda vertical?", a: "Son ideales para oficinas, salas de reuniones y ventanales de grandes dimensiones." },
      { q: "¿Se pueden fabricar a medida?", a: "Sí, todas las cortinas de banda vertical de ALDUX son personalizadas." }
    ]
  },

  {
    id: 4,
    name: "Cortinas Tradicionales",
    slug: "cortinas-tradicionales",
    category: "Cortinas Tradicionales",
    images: [tradicional1, tradicional2, tradicional3, tradicional4],
    seo: {
      title: "Cortinas Tradicionales a Medida en Córdoba| Elegancia y Diseño – ALDUX",
      description: "Cortinas tradicionales a medida. Texturas, caída perfecta y diseño elegante para interiores sofisticados.",
      canonical: "https://www.aldux.com.ar/productos/cortinas-tradicionales"
    },
    content: {
      intro: "Las cortinas tradicionales a medida aportan calidez, textura y elegancia a los ambientes, siendo una elección atemporal dentro del diseño de interiores. En ALDUX trabajamos cortinas tradicionales personalizadas, cuidando la selección de telas, la confección y la caída, para lograr un resultado armónico que acompañe el estilo del espacio, ya sea clásico, contemporáneo o moderno. Son ideales para livings, dormitorios y espacios donde el diseño textil cumple un rol protagonista, combinando funcionalidad, privacidad y estética.",
      sections: [
        {
          h2: "Beneficios de las cortinas tradicionales",
          list: [
            "Elegancia y calidez visual",
            "Amplia variedad de telas",
            "Excelente caída y terminaciones",
            "Adaptables a distintos estilos",
            "Confección a medida"
          ]
        }
      ]
    },
    faq: [
      { q: "¿Las cortinas tradicionales son a medida?", a: "Sí, cada cortina se confecciona según el espacio y la tela elegida." },
      { q: "¿Se pueden combinar con otros sistemas?", a: "Sí, pueden complementarse con roller o blackout." }
    ]
  },

  {
    id: 5,
    name: "Toldos para Exteriores",
    slug: "toldos-proyectables",
    category: "Toldos Proyectables",
    images: [toldo1, toldo2, toldo3, toldo4, toldo5],
    seo: {
      title: "Toldos a Medida para Exteriores en Córdoba | Diseño y Protección – ALDUX",
      description: "Toldos a medida para exteriores. Protección solar, confort térmico y diseño premium para hogares y comercios.",
      canonical: "https://www.aldux.com.ar/productos/toldos-proyectables"
    },
    content: {
      intro: "Los toldos a medida de ALDUX están pensados para proteger y jerarquizar espacios exteriores, aportando sombra, confort térmico y diseño. Fabricados con materiales resistentes y terminaciones de alta calidad, nuestros toldos son ideales para terrazas, galerías, balcones y espacios comerciales, integrándose de forma armónica con la arquitectura del lugar.",
      sections: [
        {
          h2: "Beneficios de los toldos a medida",
          list: [
            "Protección solar eficiente",
            "Mayor confort en exteriores",
            "Materiales resistentes y durables",
            "Diseño moderno y funcional",
            "Fabricación a medida"
          ]
        }
      ]
    },
    faq: [{ q: "¿Los toldos protegen del sol y del calor?", a: "Sí. Nuestros toldos están diseñados para reducir la radiación solar y el calor, mejorando el confort térmico de los espacios exteriores." },
    { q: "¿Los toldos son aptos para uso residencial y comercial?", a: "Sí. Instalamos toldos tanto en viviendas particulares como en locales comerciales, restaurantes y oficinas." }]
  },

  {
    id: 6,
    name: "Cerramientos",
    slug: "cerramientos",
    category: "Cerramientos",
    images: [cerramiento1, cerramiento2, cerramiento3],
    seo: {
      title: "Cerramientos a Medida en Córdoba | Diseño y Funcionalidad – ALDUX",
      description: "Cerramientos a medida con diseño moderno. Protección, confort y estética premium para espacios interiores y exteriores.",
      canonical: "https://www.aldux.com.ar/productos/cerramientos"
    },
    content: {
      intro: "Los cerramientos a medida de ALDUX permiten ampliar, proteger y revalorizar espacios, integrando interior y exterior de manera elegante y funcional. Trabajamos con sistemas modernos y materiales de alta calidad, ideales para galerías, balcones, terrazas y espacios comerciales, logrando confort, protección climática y una estética sofisticada.",
      sections: [
        {
          h2: "Beneficios de los cerramientos",
          list: [
            "Aprovechamiento del espacio",
            "Protección contra clima y viento",
            "Diseño moderno y arquitectónico",
            "Ideal para proyectos premium",
            "Fabricación personalizada"
          ]
        }
      ]
    },
    faq: [{ q: "¿Los cerramientos protegen del clima?", a: "Sí. Brindan protección contra viento, lluvia y bajas temperaturas, permitiendo disfrutar del espacio durante todo el año." },
    { q: "¿Los cerramientos afectan la estética del lugar?", a: "No. En ALDUX priorizamos el diseño, utilizando sistemas modernos y materiales de alta calidad que se integran armónicamente a la arquitectura." }]
  }
];
