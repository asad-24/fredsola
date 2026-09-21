import type { Locale } from "@/lib/i18n";
import { generatedTranslations } from "./generated-translations";

type TranslationMap = Record<string, string>;

const es: TranslationMap = {
  Home: "Inicio",
  About: "Acerca de",
  Solutions: "Soluciones",
  Resources: "Recursos",
  Careers: "Carreras",
  Contact: "Contacto",
  Legal: "Legal",
  "Schedule a Conversation": "Programar una conversación",
  "Explore Our Solutions": "Explorar nuestras soluciones",
  "View All Our Solutions": "Ver todas nuestras soluciones",
  "Read More": "Leer más",
  "Learn More": "Saber más",
  "Browse resources": "Explorar recursos",
  "FKSola Financial": "FKSola Financial",
  "Financial Education Shouldn’t Be a Privilege":
    "La educación financiera no debería ser un privilegio",
  "Helping individuals and families make informed financial decisions, protect what matters most, and prepare for tomorrow.":
    "Ayudamos a personas y familias a tomar decisiones financieras informadas, proteger lo que más importa y prepararse para el mañana.",
  "Education-first": "Educación primero",
  "Family protection": "Protección familiar",
  Retirement: "Jubilación",
  Introduction: "Introducción",
  "A calmer way to approach important financial decisions.":
    "Una forma más tranquila de abordar decisiones financieras importantes.",
  "FKSola Financial helps individuals and families explore protection, planning, retirement, education, and legacy questions with clarity. The work begins with listening, continues through education, and moves forward only when the next step makes sense.":
    "FKSola Financial ayuda a personas y familias a explorar con claridad temas de protección, planificación, jubilación, educación y legado. El trabajo comienza escuchando, continúa con educación y avanza solo cuando el siguiente paso tiene sentido.",
  "Why FKSola": "Por qué FKSola",
  "Guidance built around clarity, not pressure.":
    "Orientación basada en claridad, no en presión.",
  "The firm’s philosophy is simple: help people understand the choices in front of them and prepare with confidence.":
    "La filosofía de la firma es simple: ayudar a las personas a entender sus opciones y prepararse con confianza.",
  Protect: "Proteger",
  Plan: "Planificar",
  Educate: "Educar",
  Prepare: "Preparar",
  "Help protect the people, income, and assets that matter most.":
    "Ayudar a proteger a las personas, los ingresos y los activos que más importan.",
  "Develop thoughtful strategies around individual goals and priorities.":
    "Desarrollar estrategias cuidadosas en torno a metas y prioridades individuales.",
  "Explain financial concepts and choices in language people understand.":
    "Explicar conceptos y opciones financieras en un lenguaje fácil de entender.",
  "Help clients think beyond today and prepare for tomorrow.":
    "Ayudar a los clientes a pensar más allá de hoy y prepararse para mañana.",
  "Secured Solutions": "Soluciones de protección",
  "Featured financial solutions.": "Soluciones financieras destacadas.",
  "A focused starting point for protection, living benefits, retirement income, and final expense planning.":
    "Un punto de partida enfocado para protección, beneficios en vida, ingresos de jubilación y planificación de gastos finales.",
  "Our Approach": "Nuestro enfoque",
  "Understand first. Move forward when ready.":
    "Entender primero. Avanzar cuando esté listo.",
  Understand: "Entender",
  Strategize: "Crear estrategia",
  "Move Forward": "Avanzar",
  "Learn about the client’s goals, priorities, responsibilities, and concerns.":
    "Conocer las metas, prioridades, responsabilidades e inquietudes del cliente.",
  "Explain available options clearly so decisions feel informed, not rushed.":
    "Explicar las opciones disponibles con claridad para que las decisiones sean informadas, no apresuradas.",
  "Help evaluate appropriate strategies based on the client’s life stage and needs.":
    "Ayudar a evaluar estrategias apropiadas según la etapa de vida y las necesidades del cliente.",
  "Help the client take the next step when they are ready and comfortable.":
    "Ayudar al cliente a dar el siguiente paso cuando esté listo y cómodo.",
  "Education that supports better questions.":
    "Educación que ayuda a hacer mejores preguntas.",
  "A clean resource area helps visitors learn before they decide.":
    "Un área de recursos clara ayuda a los visitantes a aprender antes de decidir.",
  "Frequently Asked Questions": "Preguntas frecuentes",
  "Your Contract. Your Protection. Your Decision.":
    "Su contrato. Su protección. Su decisión.",
  "Insurance Carriers and Product Availability":
    "Compañías de seguros y disponibilidad de productos",
  "Simple, authentic reflections.": "Reflexiones simples y auténticas.",
  "Placeholder testimonials keep the layout ready for approved client quotes.":
    "Los testimonios de muestra mantienen el diseño listo para citas aprobadas de clientes.",
  Testimonials: "Testimonios",
  "Our Partners": "Nuestros socios",
  "Professional relationships, thoughtfully presented.":
    "Relaciones profesionales presentadas con cuidado.",
  "Conversation First": "Primero la conversación",
  "Start with a thoughtful conversation.":
    "Comience con una conversación cuidadosa.",
  "Bring your questions, priorities, and concerns. FKSola Financial will help you organize the next step with clarity.":
    "Traiga sus preguntas, prioridades e inquietudes. FKSola Financial le ayudará a organizar el siguiente paso con claridad.",
  "Term Life Insurance with Living Benefits":
    "Seguro de vida temporal con beneficios en vida",
  "IUL with Living Benefits": "IUL con beneficios en vida",
  "Indexed Universal Life with Living Benefits":
    "Vida universal indexada con beneficios en vida",
  "Return of Premium": "Devolución de prima",
  "Mortgage Protection": "Protección hipotecaria",
  "Income Protection": "Protección de ingresos",
  "Retirement Planning": "Planificación de jubilación",
  "Fixed Indexed Annuities": "Anualidades indexadas fijas",
  "College Planning": "Planificación universitaria",
  "Tax-Efficient Planning": "Planificación fiscalmente eficiente",
  "Legacy Planning": "Planificación de legado",
  "Estate & Probate": "Patrimonio y sucesión",
  "Estate & Probate Planning": "Planificación patrimonial y sucesoria",
  "Financial Gap Analysis": "Análisis de brechas financieras",
  "Final Expense": "Gastos finales",
  "Life insurance protection for a specified period, with certain policies offering living-benefit features.":
    "Protección de seguro de vida por un período determinado, con ciertas pólizas que ofrecen beneficios en vida.",
  "Permanent life insurance with death-benefit protection, cash-value potential, and certain living-benefit features depending on the policy.":
    "Seguro de vida permanente con protección por fallecimiento, potencial de valor en efectivo y ciertos beneficios en vida según la póliza.",
  "Insurance contracts that may combine index-linked interest-crediting potential with contractual guarantees.":
    "Contratos de seguro que pueden combinar potencial de interés vinculado a un índice con garantías contractuales.",
  "Life insurance planning focused on helping loved ones address final financial responsibilities.":
    "Planificación de seguro de vida enfocada en ayudar a los seres queridos a cubrir responsabilidades financieras finales.",
  "Explore financial areas with an education-first guide.":
    "Explore áreas financieras con una guía que prioriza la educación.",
  "FKSola Financial helps clients review protection, planning, retirement, education, and legacy questions without pressure.":
    "FKSola Financial ayuda a los clientes a revisar temas de protección, planificación, jubilación, educación y legado sin presión.",
  Opportunity: "Oportunidad",
  "Career / Business Opportunity": "Carrera / Oportunidad de negocio",
  "Build a Business. Make an Impact.": "Construya un negocio. Genere impacto.",
  "This is not a job. It's a business.": "Esto no es un empleo. Es un negocio.",
  "Watch the 3-minute video": "Ver el video de 3 minutos",
  "Tell us about yourself": "Cuéntenos sobre usted",
  "Choose a time": "Elija una hora",
  "First name": "Nombre",
  "Last name": "Apellido",
  "Email address": "Correo electrónico",
  "Phone number": "Número de teléfono",
  "City of residence": "Ciudad de residencia",
  State: "Estado",
  "Conversation topic": "Tema de conversación",
  Message: "Mensaje",
  Sending: "Enviando",
  "Sending...": "Enviando...",
  "Your message will be sent securely to FKSola Financial by email.":
    "Su mensaje se enviará de forma segura a FKSola Financial por correo electrónico.",
  "Clear financial education for better conversations.":
    "Educación financiera clara para mejores conversaciones.",
  "Privacy, terms, disclosures, and educational notices.":
    "Privacidad, términos, divulgaciones y avisos educativos.",
  "National Website Privacy Policy": "Política nacional de privacidad del sitio web",
  "Website Terms of Use": "Términos de uso del sitio web",
  "Licensing & Disclosures": "Licencias y divulgaciones",
  "Educational Content Disclaimer": "Aviso de contenido educativo",
  Navigation: "Navegación",
  "Social profiles coming soon": "Perfiles sociales próximamente",
  "All rights reserved.": "Todos los derechos reservados.",
};

const fr: TranslationMap = {
  Home: "Accueil",
  About: "À propos",
  Solutions: "Solutions",
  Resources: "Ressources",
  Careers: "Carrières",
  Contact: "Contact",
  Legal: "Mentions légales",
  "Schedule a Conversation": "Planifier une conversation",
  "Explore Our Solutions": "Explorer nos solutions",
  "View All Our Solutions": "Voir toutes nos solutions",
  "Read More": "Lire la suite",
  "Learn More": "En savoir plus",
  "Browse resources": "Parcourir les ressources",
  "FKSola Financial": "FKSola Financial",
  "Financial Education Shouldn’t Be a Privilege":
    "L’éducation financière ne devrait pas être un privilège",
  "Helping individuals and families make informed financial decisions, protect what matters most, and prepare for tomorrow.":
    "Aider les particuliers et les familles à prendre des décisions financières éclairées, à protéger ce qui compte le plus et à préparer demain.",
  "Education-first": "L’éducation d’abord",
  "Family protection": "Protection familiale",
  Retirement: "Retraite",
  Introduction: "Introduction",
  "A calmer way to approach important financial decisions.":
    "Une façon plus sereine d’aborder les décisions financières importantes.",
  "FKSola Financial helps individuals and families explore protection, planning, retirement, education, and legacy questions with clarity. The work begins with listening, continues through education, and moves forward only when the next step makes sense.":
    "FKSola Financial aide les particuliers et les familles à explorer avec clarté les questions de protection, de planification, de retraite, d’éducation et de transmission. Le travail commence par l’écoute, se poursuit par l’éducation et avance seulement lorsque l’étape suivante a du sens.",
  "Why FKSola": "Pourquoi FKSola",
  "Guidance built around clarity, not pressure.":
    "Un accompagnement fondé sur la clarté, pas sur la pression.",
  "The firm’s philosophy is simple: help people understand the choices in front of them and prepare with confidence.":
    "La philosophie de la firme est simple : aider les personnes à comprendre leurs options et à se préparer avec confiance.",
  Protect: "Protéger",
  Plan: "Planifier",
  Educate: "Éduquer",
  Prepare: "Préparer",
  "Help protect the people, income, and assets that matter most.":
    "Aider à protéger les personnes, les revenus et les actifs qui comptent le plus.",
  "Develop thoughtful strategies around individual goals and priorities.":
    "Développer des stratégies réfléchies autour des objectifs et priorités individuels.",
  "Explain financial concepts and choices in language people understand.":
    "Expliquer les concepts et choix financiers dans un langage compréhensible.",
  "Help clients think beyond today and prepare for tomorrow.":
    "Aider les clients à penser au-delà d’aujourd’hui et à préparer demain.",
  "Secured Solutions": "Solutions de protection",
  "Featured financial solutions.": "Solutions financières mises en avant.",
  "A focused starting point for protection, living benefits, retirement income, and final expense planning.":
    "Un point de départ ciblé pour la protection, les prestations du vivant, le revenu de retraite et la planification des frais finaux.",
  "Our Approach": "Notre approche",
  "Understand first. Move forward when ready.":
    "Comprendre d’abord. Avancer quand vous êtes prêt.",
  Understand: "Comprendre",
  Strategize: "Élaborer une stratégie",
  "Move Forward": "Avancer",
  "Learn about the client’s goals, priorities, responsibilities, and concerns.":
    "Comprendre les objectifs, priorités, responsabilités et préoccupations du client.",
  "Explain available options clearly so decisions feel informed, not rushed.":
    "Expliquer clairement les options disponibles afin que les décisions soient éclairées, non précipitées.",
  "Help evaluate appropriate strategies based on the client’s life stage and needs.":
    "Aider à évaluer les stratégies appropriées selon l’étape de vie et les besoins du client.",
  "Help the client take the next step when they are ready and comfortable.":
    "Aider le client à franchir l’étape suivante lorsqu’il est prêt et à l’aise.",
  "Education that supports better questions.":
    "Une éducation qui aide à poser de meilleures questions.",
  "A clean resource area helps visitors learn before they decide.":
    "Un espace de ressources clair aide les visiteurs à apprendre avant de décider.",
  "Frequently Asked Questions": "Questions fréquentes",
  "Your Contract. Your Protection. Your Decision.":
    "Votre contrat. Votre protection. Votre décision.",
  "Insurance Carriers and Product Availability":
    "Compagnies d’assurance et disponibilité des produits",
  "Simple, authentic reflections.": "Des réflexions simples et authentiques.",
  "Placeholder testimonials keep the layout ready for approved client quotes.":
    "Des témoignages provisoires gardent la mise en page prête pour des citations approuvées.",
  Testimonials: "Témoignages",
  "Our Partners": "Nos partenaires",
  "Professional relationships, thoughtfully presented.":
    "Des relations professionnelles présentées avec soin.",
  "Conversation First": "La conversation d’abord",
  "Start with a thoughtful conversation.":
    "Commencez par une conversation réfléchie.",
  "Bring your questions, priorities, and concerns. FKSola Financial will help you organize the next step with clarity.":
    "Apportez vos questions, priorités et préoccupations. FKSola Financial vous aidera à organiser la prochaine étape avec clarté.",
  "Term Life Insurance with Living Benefits":
    "Assurance vie temporaire avec prestations du vivant",
  "IUL with Living Benefits": "IUL avec prestations du vivant",
  "Indexed Universal Life with Living Benefits":
    "Assurance vie universelle indexée avec prestations du vivant",
  "Return of Premium": "Remboursement des primes",
  "Mortgage Protection": "Protection hypothécaire",
  "Income Protection": "Protection du revenu",
  "Retirement Planning": "Planification de la retraite",
  "Fixed Indexed Annuities": "Rentes indexées fixes",
  "College Planning": "Planification des études",
  "Tax-Efficient Planning": "Planification fiscalement efficace",
  "Legacy Planning": "Planification successorale",
  "Estate & Probate": "Patrimoine et homologation",
  "Estate & Probate Planning": "Planification patrimoniale et successorale",
  "Financial Gap Analysis": "Analyse des écarts financiers",
  "Final Expense": "Frais finaux",
  "Life insurance protection for a specified period, with certain policies offering living-benefit features.":
    "Protection d’assurance vie pour une période déterminée, certaines polices offrant des prestations du vivant.",
  "Permanent life insurance with death-benefit protection, cash-value potential, and certain living-benefit features depending on the policy.":
    "Assurance vie permanente avec protection en cas de décès, potentiel de valeur de rachat et certaines prestations du vivant selon la police.",
  "Insurance contracts that may combine index-linked interest-crediting potential with contractual guarantees.":
    "Contrats d’assurance pouvant combiner un potentiel d’intérêt lié à un indice avec des garanties contractuelles.",
  "Life insurance planning focused on helping loved ones address final financial responsibilities.":
    "Planification d’assurance vie visant à aider les proches à faire face aux responsabilités financières finales.",
  "Explore financial areas with an education-first guide.":
    "Explorez les domaines financiers avec un guide axé sur l’éducation.",
  "FKSola Financial helps clients review protection, planning, retirement, education, and legacy questions without pressure.":
    "FKSola Financial aide les clients à examiner sans pression les questions de protection, de planification, de retraite, d’éducation et de transmission.",
  Opportunity: "Opportunité",
  "Career / Business Opportunity": "Carrière / Opportunité d’affaires",
  "Build a Business. Make an Impact.": "Construisez une entreprise. Créez un impact.",
  "This is not a job. It's a business.": "Ce n’est pas un emploi. C’est une entreprise.",
  "Watch the 3-minute video": "Regarder la vidéo de 3 minutes",
  "Tell us about yourself": "Parlez-nous de vous",
  "Choose a time": "Choisissez une heure",
  "First name": "Prénom",
  "Last name": "Nom",
  "Email address": "Adresse courriel",
  "Phone number": "Numéro de téléphone",
  "City of residence": "Ville de résidence",
  State: "État",
  "Conversation topic": "Sujet de conversation",
  Message: "Message",
  Sending: "Envoi",
  "Sending...": "Envoi...",
  "Your message will be sent securely to FKSola Financial by email.":
    "Votre message sera envoyé en toute sécurité à FKSola Financial par courriel.",
  "Clear financial education for better conversations.":
    "Une éducation financière claire pour de meilleures conversations.",
  "Privacy, terms, disclosures, and educational notices.":
    "Confidentialité, conditions, divulgations et avis éducatifs.",
  "About FKSola": "À propos de FKSola",
  "Financial guidance shaped by education, care, and clarity.":
    "Une orientation financière façonnée par l’éducation, l’attention et la clarté.",
  "FKSola Financial helps individuals and families approach important financial choices with calm, organized conversations.":
    "FKSola Financial aide les particuliers et les familles à aborder les décisions financières importantes au moyen de conversations calmes et organisées.",
  Philosophy: "Philosophie",
  "A professional firm with a human way of explaining things.":
    "Une firme professionnelle avec une façon humaine d’expliquer les choses.",
  "FKSola Financial exists for people who want to understand their options before making financial decisions. The firm’s role is to listen, educate, and help families think clearly about protection, preparation, and long-term priorities.":
    "FKSola Financial existe pour les personnes qui veulent comprendre leurs options avant de prendre des décisions financières. Le rôle de la firme est d’écouter, d’éduquer et d’aider les familles à réfléchir clairement à la protection, à la préparation et aux priorités à long terme.",
  "Every conversation begins with the client’s goals and concerns. From there, the work is to explain financial concepts in plain language and help evaluate strategies that may fit the situation.":
    "Chaque conversation commence par les objectifs et les préoccupations du client. À partir de là, le travail consiste à expliquer les concepts financiers dans un langage simple et à aider à évaluer les stratégies qui peuvent convenir à la situation.",
  "Founder & CEO, FKSola Financial": "Fondateur et PDG, FKSola Financial",
  "Accessible education": "Éducation accessible",
  "Better questions": "De meilleures questions",
  "Family conversations": "Conversations familiales",
  "Why FKSola Financial Exists": "Pourquoi FKSola Financial existe",
  "Financial education should be accessible to everyone.":
    "L’éducation financière devrait être accessible à tous.",
  "“FKSola Financial was created to make financial education and understanding accessible to everyone.”":
    "« FKSola Financial a été créée pour rendre l’éducation et la compréhension financières accessibles à tous. »",
  "For generations, financial education has been taught at the kitchen table—but too often, that table belonged to the wealthy.":
    "Depuis des générations, l’éducation financière se transmet autour de la table familiale, mais trop souvent, cette table appartenait aux plus fortunés.",
  "It's where conversations about money, protection, wealth, and the future were shared and passed from one generation to the next.":
    "C’est là que les conversations sur l’argent, la protection, le patrimoine et l’avenir se partageaient et se transmettaient d’une génération à l’autre.",
  "FKSola Financial was created to change that—to make financial education and understanding accessible to everyone.":
    "FKSola Financial a été créée pour changer cela, afin de rendre l’éducation et la compréhension financières accessibles à tous.",
  "We believe education is more than simply having information. It's about understanding your options, asking better questions, and gaining the confidence to make informed decisions.":
    "Nous croyons que l’éducation va au-delà de la simple information. Il s’agit de comprendre ses options, de poser de meilleures questions et de gagner la confiance nécessaire pour prendre des décisions éclairées.",
  "We're building a team of financial professionals who believe in the power of education and understanding and are committed to bringing these important conversations to more families and communities.":
    "Nous bâtissons une équipe de professionnels financiers qui croient au pouvoir de l’éducation et de la compréhension, et qui s’engagent à apporter ces conversations importantes à davantage de familles et de communautés.",
  "Because financial education shouldn't be a privilege. It should be accessible to everyone.":
    "Parce que l’éducation financière ne devrait pas être un privilège. Elle devrait être accessible à tous.",
  "How We Work": "Notre façon de travailler",
  "A steady process for decisions that deserve attention.":
    "Un processus posé pour des décisions qui méritent de l’attention.",
  "The process is intentionally simple so the conversation stays focused on understanding, education, and next steps.":
    "Le processus est volontairement simple afin que la conversation reste centrée sur la compréhension, l’éducation et les prochaines étapes.",
  "At FKSola Financial, we believe financial education should be accessible to everyone. We're building a network of financial professionals who can bring that education to more families and communities.":
    "Chez FKSola Financial, nous croyons que l’éducation financière devrait être accessible à tous. Nous bâtissons un réseau de professionnels financiers capables d’apporter cette éducation à davantage de familles et de communautés.",
  "Develop as a financial professional while building independently.":
    "Développez-vous comme professionnel financier tout en construisant de façon indépendante.",
  "FKSola Financial develops financial professionals who educate individuals and families while building an independent business in the financial-services industry.":
    "FKSola Financial développe des professionnels financiers qui éduquent les particuliers et les familles tout en bâtissant une entreprise indépendante dans le secteur des services financiers.",
  "You can start part-time or full-time, allowing you to build around your existing career, family, or other responsibilities.":
    "Vous pouvez commencer à temps partiel ou à temps plein, ce qui vous permet de bâtir autour de votre carrière actuelle, de votre famille ou d’autres responsabilités.",
  "Who Is It For?": "À qui cela s’adresse-t-il ?",
  "Adults 18 and older who are willing to learn and build.":
    "Aux adultes de 18 ans et plus qui sont prêts à apprendre et à bâtir.",
  "This is an independent business opportunity, not employment.":
    "Il s’agit d’une opportunité d’affaires indépendante, pas d’un emploi.",
  "What You Should Understand": "Ce que vous devez comprendre",
  "Getting Started": "Pour commencer",
  "A regulated business requires the right steps.":
    "Une activité réglementée exige les bonnes étapes.",
  "Why Build This Business?": "Pourquoi bâtir cette entreprise ?",
  "Learn. Grow. Build.": "Apprendre. Grandir. Bâtir.",
  "Ready to Learn More?": "Prêt à en savoir plus ?",
  "Watch the business-opportunity video.": "Regardez la vidéo sur l’opportunité d’affaires.",
  "Start the Conversation": "Commencer la conversation",
  "Tell us a little about yourself.": "Parlez-nous un peu de vous.",
  "Use the form to share your information and choose a time to discuss the financial professional opportunity.":
    "Utilisez le formulaire pour partager vos informations et choisir un moment pour discuter de l’opportunité de professionnel financier.",
  "National Website Privacy Policy": "Politique nationale de confidentialité du site",
  "Website Terms of Use": "Conditions d’utilisation du site",
  "Licensing & Disclosures": "Licences et divulgations",
  "Educational Content Disclaimer": "Avis sur le contenu éducatif",
  Navigation: "Navigation",
  "Social profiles coming soon": "Profils sociaux bientôt disponibles",
  "All rights reserved.": "Tous droits réservés.",
};

export const translations: Record<Exclude<Locale, "en">, TranslationMap> = {
  es: {
    ...generatedTranslations.es,
    ...es,
  },
  fr: {
    ...generatedTranslations.fr,
    ...fr,
  },
};
