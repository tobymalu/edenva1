export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

// Rutas de las páginas "fijas" (no generadas desde una colección) por idioma.
// Sirve para el selector de idioma y para construir hrefs sin hardcodear
// el prefijo /en/ por todos lados.
export const routes = {
  es: {
    home: "/",
    tours: "/tours/",
    blog: "/blog/",
    faq: "/faq/",
    contact: "/contacto/",
    about: "/nosotros/",
    terms: "/terminos/",
    privacy: "/privacidad/",
    cancellation: "/cancelaciones/",
  },
  en: {
    home: "/en/",
    tours: "/en/tours/",
    blog: "/en/blog/",
    faq: "/en/faq/",
    contact: "/en/contact/",
    about: "/en/about/",
    terms: "/en/terms/",
    privacy: "/en/privacy/",
    cancellation: "/en/cancellation-policy/",
  },
} as const;

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.tours": "Tours",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.about": "Nosotros",

    "cta.bookNow": "¡Reservar ahora!",
    "cta.bookAdventure": "Reserva tu aventura",
    "cta.bookShort": "Reservar",
    "cta.learnMore": "Más información",
    "cta.call": "Llamar",
    "cta.whatsapp": "WhatsApp",
    "cta.viewAllTours": "Ver todos los tours",
    "cta.viewAllPosts": "Ver todo el blog",
    "cta.send": "Enviar",
    "cta.backHome": "Volver al inicio",

    "trust.freeCancellation": "Cancelación gratuita hasta 24h antes",
    "trust.waitlist": "Cupo limitado — únete a la lista de espera",

    "price.title": "Precio",
    "price.adult": "Adulto",
    "price.child": "Niño",
    "price.duration": "Duración",
    "price.type": "Tipo de tour",
    "price.hours": "horas",

    "tour.includes": "Incluye",
    "tour.notIncluded": "No incluye",
    "tour.schedule": "Horario",
    "tour.departure": "Salida",
    "tour.return": "Regreso",
    "tour.days": "Días",
    "tour.important": "Importante",
    "tour.gallery": "Galería",
    "tour.contactUs": "¡Contáctanos!",

    "home.heroTitle": "Vive La Magia De La Naturaleza En Edenva",
    "home.heroText":
      "Descubre un paraíso ecológico único en Puerto Vallarta. Aventuras emocionantes, paisajes espectaculares y momentos inolvidables te esperan. Desde canopy en las alturas hasta relajantes senderos junto al río, Edenva es el lugar perfecto para conectar con la naturaleza y disfrutar al máximo.",
    "home.infoTitle": "Edenva Parque Ecológico de Aventura y Canopy",
    "home.infoText":
      "Somos un parque natural ecológico con grandes opciones de aventura como senderismo, canopy y también la posibilidad de disfrutar nuestras instalaciones o el día en el río. Estamos ubicados en la sierra, junto al río de Mismaloya, en el área donde se filmó la famosa película Depredador. Ven a vivir la experiencia de deslizarte entre las montañas en nuestro gran canopy.",
    "home.tourOptionsTitle": "Tus opciones de tour",
    "home.testimonialsTitle": "Testimonios",
    "home.cta2Title": "¡No Dejes Que La Aventura Espere Más!",
    "home.cta2Text":
      "Descubre la emoción y la belleza de Edenva. Reserva ahora y asegura tu lugar en una experiencia inolvidable. ¡La naturaleza y la adrenalina te están esperando!",
    "home.partnersTitle": "Nuestros socios comerciales",
    "home.exploreTitle": "Explora Edenva",

    "tours.pageTitle": "Elige Tu Próxima Aventura En Edenva",
    "tours.pageIntro":
      "Descubre la magia de la naturaleza con nuestras opciones de tours. Vive la emoción de volar en nuestras tirolesas o disfruta de un día relajante explorando nuestro parque natural. Encuentra la experiencia perfecta para ti y reserva con nosotros hoy mismo.",

    "blog.pageTitle": "Blog Edenva",
    "blog.pageIntro":
      "Historias, guías y todo lo que necesitas saber antes de visitarnos.",

    "faq.pageTitle": "Preguntas Frecuentes",
    "faq.pageIntro":
      "Encuentra toda la información que necesitas para planear tu visita a Edenva 🌿",

    "contact.pageTitle": "Contáctanos",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo",
    "contact.form.message": "Mensaje",
    "contact.locationTitle": "Cómo llegar",
    "contact.locationText":
      "Estamos en Mismaloya, Puerto Vallarta, Jalisco — búscanos en Google Maps como \"Edenva Parque Ecoturístico\".",

    "about.pageTitle": "Nosotros",

    "breadcrumb.home": "Inicio",

    "footer.emailLabel": "Correo electrónico",
    "footer.phoneLabel": "Teléfono",
    "footer.confidentialityTitle": "Cláusulas de Confidencialidad",
    "footer.confidentialityText":
      "Tomamos tu privacidad muy en serio y tomamos todas las medidas para proteger tu información personal.",
    "footer.copyright": "Todos los derechos reservados.",
    "footer.termsLink": "Lee nuestros términos y condiciones aquí.",
    "footer.followUs": "Síguenos en redes sociales",
    "footer.legalTitle": "Legal",

    "cookie.message":
      "Usamos cookies para mejorar tu experiencia y medir el desempeño del sitio. Puedes aceptarlas o rechazarlas.",
    "cookie.accept": "Aceptar",
    "cookie.reject": "Rechazar",

    "lang.switchTo": "English",
  },
  en: {
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.about": "About",

    "cta.bookNow": "Book now!",
    "cta.bookAdventure": "Book your adventure",
    "cta.bookShort": "Book",
    "cta.learnMore": "Learn more",
    "cta.call": "Call",
    "cta.whatsapp": "WhatsApp",
    "cta.viewAllTours": "See all tours",
    "cta.viewAllPosts": "See all blog posts",
    "cta.send": "Send",
    "cta.backHome": "Back to home",

    "trust.freeCancellation": "Free cancellation up to 24h before",
    "trust.waitlist": "Limited spots — join the waitlist",

    "price.title": "Price",
    "price.adult": "Adult",
    "price.child": "Kid",
    "price.duration": "Duration",
    "price.type": "Tour type",
    "price.hours": "hours",

    "tour.includes": "Includes",
    "tour.notIncluded": "Not included",
    "tour.schedule": "Schedule",
    "tour.departure": "Departure",
    "tour.return": "Return",
    "tour.days": "Days",
    "tour.important": "Important",
    "tour.gallery": "Gallery",
    "tour.contactUs": "Contact us!",

    "home.heroTitle": "Experience the Magic of Nature at Edenva",
    "home.heroText":
      "Discover a unique ecological paradise in Puerto Vallarta. Exciting adventures, breathtaking landscapes and unforgettable moments await. From thrilling canopy rides high above the trees to serene riverside trails, Edenva is the perfect place to connect with nature and make the most of your visit.",
    "home.infoTitle": "Edenva Ecological Adventure Park & Canopy",
    "home.infoText":
      "We're a natural ecological park with great outdoor adventure options like hiking and canopy tours, plus the chance to enjoy our facilities or spend the day by the river. We're located in the Sierra, next to the Mismaloya river, in the area where the famous movie Predator was filmed. Come fly between the mountains on our big canopy zipline.",
    "home.tourOptionsTitle": "Your tour options",
    "home.testimonialsTitle": "Testimonials",
    "home.cta2Title": "Don't Let the Adventure Wait Any Longer!",
    "home.cta2Text":
      "Discover the excitement and beauty of Edenva. Book now and secure your spot for an unforgettable experience. Nature and adrenaline are waiting for you!",
    "home.partnersTitle": "Our business partners",
    "home.exploreTitle": "Explore Edenva",

    "tours.pageTitle": "Choose Your Next Adventure At Edenva",
    "tours.pageIntro":
      "Discover the magic of nature with our tour options. Feel the thrill of flying on our ziplines or enjoy a relaxing day exploring our natural park. Find the perfect experience for you and book with us today.",

    "blog.pageTitle": "Edenva Blog",
    "blog.pageIntro":
      "Stories, guides and everything you need to know before visiting us.",

    "faq.pageTitle": "Frequently Asked Questions",
    "faq.pageIntro":
      "Find all the information you need to plan your visit to Edenva 🌿",

    "contact.pageTitle": "Contact Us",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.locationTitle": "How to get here",
    "contact.locationText":
      'We\'re in Mismaloya, Puerto Vallarta, Jalisco — find us on Google Maps as "Edenva Parque Ecoturístico".',

    "about.pageTitle": "About Us",

    "breadcrumb.home": "Home",

    "footer.emailLabel": "Email",
    "footer.phoneLabel": "Phone",
    "footer.confidentialityTitle": "Confidentiality",
    "footer.confidentialityText":
      "We take your privacy seriously and take every measure to protect your personal information.",
    "footer.copyright": "All rights reserved.",
    "footer.termsLink": "Read our terms and conditions here.",
    "footer.followUs": "Follow us on social media",
    "footer.legalTitle": "Legal",

    "cookie.message":
      "We use cookies to improve your experience and measure site performance. You can accept or reject them.",
    "cookie.accept": "Accept",
    "cookie.reject": "Reject",

    "lang.switchTo": "Español",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];
