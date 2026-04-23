// ===== TRANSLATIONS =====
const translations = {
  fr: {
    // ---- Index ----
    'page-title': 'Reda Rouibah - Développeur',
    'nav-travaux': 'Travaux',
    'nav-parcours': 'Parcours',
    'nav-contact': 'Contact',
    'hero-tag-role': 'Développeur · BUT Informatique IAMSI',
    'hero-badge-text': 'Disponible · Saint-Julien-en-Genevois',
    'hero-desc': 'Web, intégration SI, data,<br/>je relie l\'interface, la logique applicative<br/>et les besoins terrain.',
    'hero-cta': 'Voir les projets ↓',
    'section-travaux': 'Travaux sélectionnés',
    'work-01-title': 'Module ERP Notes de Frais',
    'work-01-desc': 'Développement et intégration d\'un module notes de frais dans un ERP maison, specs, back-end, données et stabilisation.',
    'work-01-year': 'Alternance',
    'work-02-desc': 'SaaS de coaching sportif, programme sur mesure par IA, suivi des perfs, du poids et de la diète.',
    'work-02-year': 'Perso',
    'work-03-title': 'Tableaux de bord RH - Power BI',
    'work-03-desc': 'Modélisation des données RH, rapports interactifs et indicateurs DAX pour rendre la donnée lisible et actionnable.',
    'work-03-year': 'Stage',
    'work-04-title': 'Plateforme e-commerce Laravel',
    'work-04-desc': 'Catalogue, panier et commandes, solution complète orientée besoins fonctionnels, développée en full-stack.',
    'work-04-year': 'Projet univ.',
    'work-05-title': 'Déploiement ERP Odoo - Restauration',
    'work-05-desc': 'Configuration et adaptation d\'un ERP pour un restaurant, stock, commandes et besoins métier traduits en modules.',
    'work-05-year': 'Projet univ.',
    'section-parcours': 'Parcours',
    'parcours-01-title': 'Bac Technologique - STI2D',
    'parcours-01-desc': 'Lycée Louis Lachenal. Spécialité Systèmes d\'Information et Numérique. Sciences et technologies de l\'industrie et du développement durable.',
    'parcours-01-type': 'Formation',
    'parcours-02-title': 'BUT Informatique - IAMSI',
    'parcours-02-desc': 'IUT d\'Annecy. 3ème année, parcours D. Formation entre développement, intégration applicative et compréhension du SI, avec un ancrage concret dans les projets réalisés.',
    'parcours-02-type': 'Formation',
    'parcours-03-title': 'ilem Group - Stage · Data & BI',
    'parcours-03-desc': 'Modélisation de données, création de rapports interactifs et construction d\'indicateurs RH avec DAX sous Power BI.',
    'parcours-03-type': 'Stage',
    'parcours-04-title': 'ilem Group - Alternance · Développement SI',
    'parcours-04-desc': 'Développement et intégration d\'un module ERP Notes de Frais, specs, base de données, back-end et cycle de fiabilisation.',
    'parcours-04-type': 'Alternance',
    'contact-pre': 'Parlons-en.',
    'contact-big': 'Disponible<br/>pour un poste.',
    'footer-sub': 'BUT Informatique IAMSI · Saint-Julien-en-Genevois',
    'theme-light': 'Clair',
    'theme-dark': 'Sombre',

    // ---- Shared meta labels (project pages) ----
    'pm-role': 'Rôle',
    'pm-type': 'Type',
    'pm-statut': 'Statut',
    'pm-lien': 'Lien',
    'pm-duree': 'Durée',
    'pm-produit': 'Produit',
    'pm-contexte': 'Contexte',
    'pm-periode': 'Période',
    'pm-equipe': 'Équipe',

    // ---- Gainr ----
    'gainr-page-title': 'Gainr - Reda Rouibah',
    'gainr-kicker': 'Projet personnel · SaaS · En cours',
    'gainr-meta-role': 'Fondateur · Développeur solo',
    'gainr-meta-type': 'SaaS · Application web',
    'gainr-meta-statut': 'En ligne',
    'gainr-s1-h': 'Le projet',
    'gainr-s1-p1': 'Gainr est une application SaaS destinée aux pratiquants de musculation, débutants comme confirmés. L\'idée centrale : générer un programme d\'entraînement sur mesure via IA, adapté au profil, aux objectifs et au niveau de l\'utilisateur, sans passer par un coach ou des templates génériques.',
    'gainr-s1-p2': 'L\'application couvre aussi le suivi dans le temps : performances aux exercices, évolution du poids et gestion de la diète. Tout ce qu\'un pratiquant sérieux veut centraliser en un seul endroit.',
    'gainr-s2-h': 'Ce que l\'app fait',
    'gainr-s2-li1': 'Génération de programme d\'entraînement sur mesure par IA',
    'gainr-s2-li2': 'Adaptation au niveau, aux objectifs et aux équipements disponibles',
    'gainr-s2-li3': 'Suivi des performances par exercice et par séance',
    'gainr-s2-li4': 'Suivi de l\'évolution du poids dans le temps',
    'gainr-s2-li5': 'Gestion de la diète et des apports',
    'gainr-hl-label': 'Double défi',
    'gainr-s3-h': 'UX pensée pour la salle + intégration IA',
    'gainr-s3-p1': 'Le premier défi : concevoir une interface utilisable dans un contexte particulier, quelqu\'un entre deux séries, les mains chargées, qui a besoin d\'accéder à l\'info vite et de logger une perf en quelques secondes. Une UX normale ne suffit pas : chaque interaction doit être évidente, chaque écran doit répondre à une intention claire.',
    'gainr-s3-p2': 'Le deuxième défi : faire en sorte que la génération IA produise des programmes réellement adaptés et cohérents, pas juste une réponse générique habillée en programme. Ça demande un travail de prompt engineering et de structuration de la sortie pour que le résultat soit exploitable directement dans l\'app.',
    'gainr-s4-label': 'Ce qu\'on retient',
    'gainr-s4-h': 'Construire vite sans bâcler',
    'gainr-s4-p1': 'Ce projet avance parce que les décisions sont prises rapidement et le scope est tenu. Sur un projet solo, la tentation est soit de sur-concevoir avant de coder, soit de coder sans réfléchir à la structure. Trouver l\'équilibre, poser les bonnes fondations Next.js, avancer feature par feature, c\'est ce qui fait que le projet tient dans le temps.',
    'gainr-s4-p2': 'C\'est aussi le projet qui me permet d\'appliquer des choses que je ne touche pas forcément en cours ou en alternance : product thinking, UX design, intégration d\'IA dans un vrai contexte produit.',
    'gainr-nav-back': '← Module Notes de Frais',
    'gainr-pn-label': 'Projet suivant',
    'gainr-pn-title': 'Tableaux de bord RH →',

    // ---- Notes de Frais ----
    'notes-page-title': 'Module ERP Notes de Frais - Reda Rouibah',
    'notes-kicker': 'Alternance · Développement SI · ilem Group',
    'notes-meta-role': 'Développeur',
    'notes-meta-duree': '1 an',
    'notes-meta-produit': 'ERP maison',
    'notes-s1-h': 'Contexte',
    'notes-s1-p1': 'Alternance d\'un an chez ilem Group, une ESN qui développe et maintient son propre ERP en interne. La mission : concevoir et intégrer un module dédié à la gestion des notes de frais, directement dans une base de code existante, volumineuse, et déjà en production.',
    'notes-s1-p2': 'Le travail couvrait l\'ensemble du cycle : compréhension des specs, développement du module, intégration dans l\'existant, persistance des données et cycle de correction jusqu\'à la stabilisation.',
    'notes-s2-h': 'Ce qui a été développé',
    'notes-s2-li1': 'Lecture et compréhension des spécifications fonctionnelles',
    'notes-s2-li2': 'Développement des composants du module avec Vaadin et Spring Boot',
    'notes-s2-li3': 'Modélisation et intégration côté base de données',
    'notes-s2-li4': 'Connexion aux entités existantes de l\'ERP',
    'notes-s2-li5': 'Correction de bugs et stabilisation en continu',
    'notes-hl-label': 'Le vrai défi',
    'notes-s3-h': 'Entrer dans un projet existant sans se perdre',
    'notes-s3-p1': 'La difficulté principale n\'était pas technique au sens strict, c\'était de monter en compétence sur une techno nouvelle (Java, Spring Boot, Vaadin) tout en s\'intégrant dans un ERP maison développé sur plusieurs années, avec ses propres conventions, son architecture et ses dépendances implicites.',
    'notes-s3-p2': 'Au début, chaque action demandait de remonter des chaînes de code sans vraiment comprendre où ça menait. Le vrai tournant, c\'est le moment où j\'ai commencé à voir les relations entre les entités de l\'application : comment les modules se parlaient, où vivait la logique métier, pourquoi certaines choses étaient faites ainsi. À partir de là, naviguer dans le projet est devenu naturel, et contribuer, efficace.',
    'notes-s4-label': 'Ce qu\'on retient',
    'notes-s4-h': 'Lire un projet avant d\'écrire du code',
    'notes-s4-p1': 'Cette alternance m\'a donné un réflexe que je n\'avais pas avant : passer du temps à comprendre avant de commencer à produire. Sur un projet existant, écrire du code sans avoir compris l\'architecture crée plus de problèmes qu\'il n\'en résout.',
    'notes-s4-p2': 'Savoir lire un projet, ses relations, ses patterns, ses conventions, c\'est une compétence à part entière, aussi importante que savoir écrire du code propre. Et c\'est celle que j\'ai le plus développée cette année.',
    'notes-nav-back': '← Tous les travaux',
    'notes-pn-label': 'Projet suivant',
    'notes-pn-title': 'Gainr →',

    // ---- Power BI ----
    'powerbi-page-title': 'Tableaux de bord RH Power BI - Reda Rouibah',
    'powerbi-kicker': 'Stage · Data & BI · ilem Group',
    'powerbi-meta-role': 'Data analyst / BI junior',
    'powerbi-meta-periode': 'Avril - Juin 2025',
    'powerbi-meta-duree': '3 mois',
    'powerbi-s1-h': 'Contexte',
    'powerbi-s1-p1': 'Stage de trois mois chez ilem Group, une ESN. La mission : structurer et visualiser des données RH dispersées pour les rendre lisibles par la direction, absences, congés, heures supplémentaires et intercontrats regroupés dans des rapports interactifs sous Power BI.',
    'powerbi-s1-p2': 'L\'enjeu n\'était pas la complexité des données elles-mêmes, mais leur mise en forme : produire des vues claires, fiables et directement utilisables pour le pilotage.',
    'powerbi-s2-h': 'Ce qui a été produit',
    'powerbi-s2-li1': 'Recueil des besoins auprès de la direction RH',
    'powerbi-s2-li2': 'Modélisation des sources - absences, congés, heures sup, intercontrats',
    'powerbi-s2-li3': 'Nettoyage et transformation des données avec Power Query',
    'powerbi-s2-li4': 'Création de rapports interactifs avec filtres et slicers',
    'powerbi-s2-li5': 'Construction de mesures et KPIs en DAX',
    'powerbi-hl-label': 'Mesure DAX',
    'powerbi-s3-h': 'Le calcul des heures supplémentaires avec coefficient',
    'powerbi-s3-p1': 'La mesure la plus intéressante du projet. Certains collaborateurs avaient un coefficient appliqué sur leurs heures supplémentaires, ce qui signifiait que le calcul ne pouvait pas être uniforme : il fallait identifier dynamiquement si la personne concernée faisait partie du groupe soumis à coefficient, puis appliquer la bonne règle de calcul.',
    'powerbi-s3-p2': 'En DAX, ça s\'est traduit par une mesure conditionnelle combinant <code>CALCULATE</code>, <code>RELATED</code> et une logique de filtre sur la table des collaborateurs, pour que le résultat soit juste quel que soit le contexte de filtrage du rapport.',
    'powerbi-s4-label': 'Ce qu\'on retient',
    'powerbi-s4-h': 'Rendre une donnée exploitable',
    'powerbi-s4-p1': 'Ce stage m\'a montré que la valeur d\'un rapport BI tient rarement à la sophistication des calculs. Elle tient à la clarté de la lecture : est-ce que la personne qui ouvre le rapport comprend immédiatement ce qu\'elle voit et peut agir dessus ?',
    'powerbi-s4-p2': 'La mesure sur les heures sup avec coefficient était un bon cas concret : une règle métier précise, un résultat qui doit être juste dans tous les contextes, et une présentation qui ne doit pas demander d\'explication.',
    'powerbi-nav-back': '← Gainr',
    'powerbi-pn-label': 'Projet suivant',
    'powerbi-pn-title': 'Plateforme e-commerce →',

    // ---- E-commerce ----
    'ecom-page-title': 'Plateforme e-commerce Laravel - Reda Rouibah',
    'ecom-kicker': 'Projet universitaire · Web app',
    'ecom-meta-role': 'Développeur full-stack',
    'ecom-meta-equipe': '5 personnes',
    'ecom-meta-duree': '3 mois',
    'ecom-s1-h': 'Contexte',
    'ecom-s1-p1': 'Projet universitaire réalisé en équipe de cinq sur trois mois, l\'objectif était de concevoir une solution e-commerce complète couvrant les parcours principaux d\'un utilisateur : navigation dans le catalogue, gestion des favoris, panier et passage de commande.',
    'ecom-s1-p2': 'Le projet était organisé en sprints avec un backlog structuré, ce qui nous a permis de travailler de façon itérative et de livrer des fonctionnalités testables à chaque cycle.',
    'ecom-s2-h': 'Ce qu\'on a construit',
    'ecom-s2-li1': 'Structuration des besoins et découpage fonctionnel en sprints',
    'ecom-s2-li2': 'Développement du catalogue produit avec filtres et navigation',
    'ecom-s2-li3': 'Système de favoris persistants par utilisateur',
    'ecom-s2-li4': 'Logique de panier - ajout, modification de quantité, suppression',
    'ecom-s2-li5': 'Parcours commande de bout en bout',
    'ecom-s2-li6': 'Interface web côté utilisateur',
    'ecom-hl-label': 'Point technique',
    'ecom-s3-h': 'La gestion du panier et des favoris',
    'ecom-s3-p1': 'La partie la plus exigeante du projet. Le panier devait être cohérent entre les pages, persistant pour un utilisateur connecté, et réactif côté interface sans alourdir les échanges avec le serveur. Les favoris posaient une question similaire : synchroniser l\'état entre la vue catalogue et la vue dédiée sans introduire de bugs de cohérence.',
    'ecom-s3-p2': 'On a travaillé la session Laravel côté back et géré les interactions côté JS pour éviter les rechargements inutiles, un bon exercice d\'articulation entre les deux couches.',
    'ecom-s4-label': 'Ce qu\'on retient',
    'ecom-s4-h': 'Une approche projet structurée',
    'ecom-s4-p1': 'Ce projet m\'a appris autant sur le process que sur le code. Travailler à cinq sur un même codebase Laravel, avec des sprints définis et un backlog maintenu, a demandé une discipline de coordination qu\'on n\'apprend pas en faisant du code seul.',
    'ecom-s4-p2': 'L\'organisation en sprints a rendu le projet livrable : chaque itération avait un périmètre clair, ce qui évitait l\'effet tunnel et permettait d\'ajuster la priorité en cours de route.',
    'ecom-nav-back': '← Tableaux de bord RH',
    'ecom-pn-label': 'Projet suivant',
    'ecom-pn-title': 'Déploiement ERP Odoo →',

    // ---- Odoo ----
    'odoo-page-title': 'Déploiement ERP Odoo - Reda Rouibah',
    'odoo-kicker': 'Projet universitaire · Intégration SI',
    'odoo-meta-role': 'Intégration fonctionnelle & technique',
    'odoo-meta-equipe': '4 personnes',
    'odoo-meta-duree': '2 mois',
    'odoo-s1-h': 'Contexte',
    'odoo-s1-p1': 'Projet universitaire réalisé en équipe de quatre, avec un client fictif jouant le rôle d\'un restaurateur souhaitant digitaliser son activité. L\'objectif : déployer et adapter un ERP Odoo pour couvrir les besoins concrets du restaurant, gestion du stock, suivi des commandes et automatisation de certains processus métier.',
    'odoo-s1-p2': 'Le cadre simulait une vraie relation client, avec des échanges réguliers pour recueillir les besoins, présenter les avancées et ajuster le périmètre en fonction des retours.',
    'odoo-s2-h': 'Ce qu\'on a mis en place',
    'odoo-s2-li1': 'Recueil des besoins métier au fil des échanges avec le client fictif',
    'odoo-s2-li2': 'Configuration des modules Odoo - stock, commandes, point de vente',
    'odoo-s2-li3': 'Développements sur mesure pour coller au fonctionnement spécifique du restaurant',
    'odoo-s2-li4': 'Ajustements progressifs dans une logique agile, sprint par sprint',
    'odoo-s2-li5': 'Présentation des livrables et validation avec le client à chaque étape',
    'odoo-hl-label': 'Point technique',
    'odoo-s3-h': 'Le développement sur mesure',
    'odoo-s3-p1': 'La configuration standard d\'Odoo couvre beaucoup de cas, mais pas tous. Pour ce restaurant, certains flux ne correspondaient pas exactement aux modules natifs : il fallait développer des adaptations spécifiques, en Python et XML, pour faire coller l\'ERP au fonctionnement réel plutôt que d\'imposer le fonctionnement de l\'ERP au client.',
    'odoo-s3-p2': 'C\'est là que la complexité était réelle : comprendre l\'architecture interne d\'Odoo, identifier les bons points d\'extension, et ne pas casser les modules existants en personnalisant.',
    'odoo-s4-label': 'Ce qu\'on retient',
    'odoo-s4-h': 'La relation client comme levier technique',
    'odoo-s4-p1': 'Ce qui a rendu ce projet efficace, c\'est la qualité des échanges avec le client fictif. Des retours clairs à chaque sprint ont évité de construire dans le vide, on savait rapidement si une fonctionnalité était comprise, utilisable, ou à retravailler.',
    'odoo-s4-p2': 'Ça m\'a appris que bien intégrer un SI, c\'est autant une question de communication que de technique. Un besoin mal compris produit une solution inutile, même si le code est propre.',
    'odoo-nav-back': '← Plateforme e-commerce',
    'odoo-pn-label': 'Retour',
    'odoo-pn-title': 'Tous les travaux →',
  },

  en: {
    // ---- Index ----
    'page-title': 'Reda Rouibah - Developer',
    'nav-travaux': 'Works',
    'nav-parcours': 'Journey',
    'nav-contact': 'Contact',
    'hero-tag-role': 'Developer · BUT Informatique IAMSI',
    'hero-badge-text': 'Available · Saint-Julien-en-Genevois',
    'hero-desc': 'Web, system integration, data —<br/>bridging the interface, business logic<br/>and field needs.',
    'hero-cta': 'See projects ↓',
    'section-travaux': 'Selected works',
    'work-01-title': 'ERP Expense Report Module',
    'work-01-desc': 'Development and integration of an expense report module into an in-house ERP — specs, back-end, data and stabilization.',
    'work-01-year': 'Apprenticeship',
    'work-02-desc': 'Sports coaching SaaS — AI-powered custom programs, performance, weight and diet tracking.',
    'work-02-year': 'Personal',
    'work-03-title': 'HR Dashboards - Power BI',
    'work-03-desc': 'HR data modeling, interactive reports and DAX metrics to make data readable and actionable.',
    'work-03-year': 'Internship',
    'work-04-title': 'Laravel E-commerce Platform',
    'work-04-desc': 'Catalog, cart and orders — a full-stack solution built around functional requirements.',
    'work-04-year': 'Uni project',
    'work-05-title': 'Odoo ERP Deployment - Restaurant',
    'work-05-desc': 'Configuration and adaptation of an ERP for a restaurant — stock, orders and business needs translated into modules.',
    'work-05-year': 'Uni project',
    'section-parcours': 'Journey',
    'parcours-01-title': 'High School Diploma - STI2D',
    'parcours-01-desc': 'Louis Lachenal High School. Major in Information and Digital Systems. Science and technology in industry and sustainable development.',
    'parcours-01-type': 'Education',
    'parcours-02-title': 'BUT Computer Science - IAMSI',
    'parcours-02-desc': 'IUT Annecy. 3rd year, track D. Training across development, application integration and IS understanding, grounded in real-world projects.',
    'parcours-02-type': 'Education',
    'parcours-03-title': 'ilem Group - Internship · Data & BI',
    'parcours-03-desc': 'Data modeling, interactive report creation and HR KPI building with DAX on Power BI.',
    'parcours-03-type': 'Internship',
    'parcours-04-title': 'ilem Group - Apprenticeship · IS Development',
    'parcours-04-desc': 'Development and integration of an ERP Expense Report module — specs, database, back-end and reliability cycle.',
    'parcours-04-type': 'Apprenticeship',
    'contact-pre': "Let's talk.",
    'contact-big': 'Available<br/>for a role.',
    'footer-sub': 'BUT Informatique IAMSI · Saint-Julien-en-Genevois',
    'theme-light': 'Light',
    'theme-dark': 'Dark',

    // ---- Shared meta labels (project pages) ----
    'pm-role': 'Role',
    'pm-type': 'Type',
    'pm-statut': 'Status',
    'pm-lien': 'Link',
    'pm-duree': 'Duration',
    'pm-produit': 'Product',
    'pm-contexte': 'Context',
    'pm-periode': 'Period',
    'pm-equipe': 'Team',

    // ---- Gainr ----
    'gainr-page-title': 'Gainr - Reda Rouibah',
    'gainr-kicker': 'Personal project · SaaS · In progress',
    'gainr-meta-role': 'Founder · Solo developer',
    'gainr-meta-type': 'SaaS · Web application',
    'gainr-meta-statut': 'Live',
    'gainr-s1-h': 'The project',
    'gainr-s1-p1': 'Gainr is a SaaS app built for weightlifters, from beginners to experienced athletes. The core idea: generate a custom training program via AI, tailored to the user\'s profile, goals and level — without a coach or generic templates.',
    'gainr-s1-p2': 'The app also covers long-term tracking: exercise performance, weight progression and diet management. Everything a serious athlete wants in one place.',
    'gainr-s2-h': 'What the app does',
    'gainr-s2-li1': 'AI-powered custom training program generation',
    'gainr-s2-li2': 'Adapted to level, goals and available equipment',
    'gainr-s2-li3': 'Performance tracking by exercise and session',
    'gainr-s2-li4': 'Weight progression tracking over time',
    'gainr-s2-li5': 'Diet and intake management',
    'gainr-hl-label': 'Dual challenge',
    'gainr-s3-h': 'Gym-first UX + AI integration',
    'gainr-s3-p1': 'The first challenge: designing an interface for a specific context — someone between sets, hands full, needing to access information fast and log a performance in seconds. Standard UX isn\'t enough: every interaction must be obvious, every screen must answer a clear intent.',
    'gainr-s3-p2': 'The second challenge: making AI generation produce genuinely tailored, coherent programs — not just a generic response dressed up as one. That required prompt engineering work and output structuring so the result plugs directly into the app.',
    'gainr-s4-label': 'Key takeaway',
    'gainr-s4-h': 'Building fast without cutting corners',
    'gainr-s4-p1': 'This project keeps moving because decisions are made fast and scope is kept tight. On a solo project, the temptation is either to over-design before coding, or to code without thinking about structure. Finding the balance, laying the right Next.js foundations, and shipping feature by feature is what keeps the project alive.',
    'gainr-s4-p2': 'It\'s also the project where I apply things I don\'t necessarily work on in class or at work: product thinking, UX design, integrating AI in a real product context.',
    'gainr-nav-back': '← Expense Report Module',
    'gainr-pn-label': 'Next project',
    'gainr-pn-title': 'HR Dashboards →',

    // ---- Notes de Frais ----
    'notes-page-title': 'ERP Expense Report Module - Reda Rouibah',
    'notes-kicker': 'Apprenticeship · IS Development · ilem Group',
    'notes-meta-role': 'Developer',
    'notes-meta-duree': '1 year',
    'notes-meta-produit': 'In-house ERP',
    'notes-s1-h': 'Context',
    'notes-s1-p1': 'A year-long apprenticeship at ilem Group, an IT services company that develops and maintains its own in-house ERP. The mission: design and integrate a module for expense report management, directly into an existing, large-scale, production codebase.',
    'notes-s1-p2': 'The work covered the full cycle: reading specs, developing the module, integrating it into the existing codebase, handling data persistence and iterating until stabilization.',
    'notes-s2-h': 'What was built',
    'notes-s2-li1': 'Reading and understanding functional specifications',
    'notes-s2-li2': 'Developing module components with Vaadin and Spring Boot',
    'notes-s2-li3': 'Data modeling and database integration',
    'notes-s2-li4': 'Connecting to the ERP\'s existing entities',
    'notes-s2-li5': 'Ongoing bug fixes and stabilization',
    'notes-hl-label': 'The real challenge',
    'notes-s3-h': 'Getting into an existing project without getting lost',
    'notes-s3-p1': 'The main difficulty wasn\'t purely technical — it was ramping up on a new stack (Java, Spring Boot, Vaadin) while integrating into an in-house ERP built over several years, with its own conventions, architecture and implicit dependencies.',
    'notes-s3-p2': 'At first, every action meant tracing code chains without really understanding where they led. The turning point came when I started seeing the relationships between entities: how modules communicated, where business logic lived, why certain things were done a certain way. From there, navigating the project felt natural and contributing became effective.',
    'notes-s4-label': 'Key takeaway',
    'notes-s4-h': 'Reading a project before writing code',
    'notes-s4-p1': 'This apprenticeship gave me a reflex I didn\'t have before: taking time to understand before starting to produce. On an existing project, writing code without understanding the architecture creates more problems than it solves.',
    'notes-s4-p2': 'Knowing how to read a project — its relationships, patterns and conventions — is a skill in its own right, just as important as knowing how to write clean code. And it\'s the one I developed the most this year.',
    'notes-nav-back': '← All works',
    'notes-pn-label': 'Next project',
    'notes-pn-title': 'Gainr →',

    // ---- Power BI ----
    'powerbi-page-title': 'HR Dashboards Power BI - Reda Rouibah',
    'powerbi-kicker': 'Internship · Data & BI · ilem Group',
    'powerbi-meta-role': 'Data analyst / Junior BI',
    'powerbi-meta-periode': 'April - June 2025',
    'powerbi-meta-duree': '3 months',
    'powerbi-s1-h': 'Context',
    'powerbi-s1-p1': 'A three-month internship at ilem Group, an IT services company. The mission: structure and visualize scattered HR data to make it readable for management — absences, leave, overtime and bench periods consolidated into interactive Power BI reports.',
    'powerbi-s1-p2': 'The challenge wasn\'t the complexity of the data itself, but how to present it: producing clear, reliable views that could be acted on directly.',
    'powerbi-s2-h': 'What was produced',
    'powerbi-s2-li1': 'Gathering requirements from HR management',
    'powerbi-s2-li2': 'Modeling data sources — absences, leave, overtime, bench periods',
    'powerbi-s2-li3': 'Data cleaning and transformation with Power Query',
    'powerbi-s2-li4': 'Building interactive reports with filters and slicers',
    'powerbi-s2-li5': 'Building DAX measures and KPIs',
    'powerbi-hl-label': 'DAX measure',
    'powerbi-s3-h': 'Overtime calculation with coefficient',
    'powerbi-s3-p1': 'The most interesting measure in the project. Some employees had a coefficient applied to their overtime, meaning the calculation couldn\'t be uniform: it required dynamically identifying whether the person belonged to the coefficient group, then applying the right calculation rule.',
    'powerbi-s3-p2': 'In DAX, this translated into a conditional measure combining <code>CALCULATE</code>, <code>RELATED</code> and filter logic on the employee table, ensuring the result was correct regardless of the report\'s filtering context.',
    'powerbi-s4-label': 'Key takeaway',
    'powerbi-s4-h': 'Making data actionable',
    'powerbi-s4-p1': 'This internship showed me that the value of a BI report rarely lies in the sophistication of its calculations. It lies in clarity: does the person opening the report immediately understand what they see and know what to do with it?',
    'powerbi-s4-p2': 'The overtime measure with coefficient was a good concrete case: a precise business rule, a result that must be correct in all contexts, and a presentation that needs no explanation.',
    'powerbi-nav-back': '← Gainr',
    'powerbi-pn-label': 'Next project',
    'powerbi-pn-title': 'E-commerce Platform →',

    // ---- E-commerce ----
    'ecom-page-title': 'Laravel E-commerce Platform - Reda Rouibah',
    'ecom-kicker': 'University project · Web app',
    'ecom-meta-role': 'Full-stack developer',
    'ecom-meta-equipe': '5 people',
    'ecom-meta-duree': '3 months',
    'ecom-s1-h': 'Context',
    'ecom-s1-p1': 'A three-month university project built by a team of five. The goal: design a complete e-commerce solution covering the main user flows — catalog browsing, favorites management, cart and checkout.',
    'ecom-s1-p2': 'The project was organized into sprints with a structured backlog, which let us work iteratively and deliver testable features at each cycle.',
    'ecom-s2-h': 'What we built',
    'ecom-s2-li1': 'Structuring requirements and breaking them into sprints',
    'ecom-s2-li2': 'Building the product catalog with filters and navigation',
    'ecom-s2-li3': 'Persistent favorites system per user',
    'ecom-s2-li4': 'Cart logic — adding, quantity updates, removal',
    'ecom-s2-li5': 'End-to-end checkout flow',
    'ecom-s2-li6': 'User-facing web interface',
    'ecom-hl-label': 'Technical highlight',
    'ecom-s3-h': 'Cart and favorites management',
    'ecom-s3-p1': 'The most demanding part of the project. The cart had to be consistent across pages, persistent for logged-in users, and responsive on the front end without overloading server exchanges. Favorites raised a similar challenge: syncing state between the catalog view and the dedicated view without introducing consistency bugs.',
    'ecom-s3-p2': 'We handled it through Laravel sessions on the back end and JS interactions on the front to avoid unnecessary reloads — a good exercise in bridging the two layers.',
    'ecom-s4-label': 'Key takeaway',
    'ecom-s4-h': 'A structured project approach',
    'ecom-s4-p1': 'This project taught me as much about process as about code. Working as five on the same Laravel codebase, with defined sprints and a maintained backlog, required a coordination discipline you don\'t develop coding alone.',
    'ecom-s4-p2': 'The sprint structure made the project deliverable: each iteration had a clear scope, which prevented tunnel vision and allowed priorities to shift mid-course.',
    'ecom-nav-back': '← HR Dashboards',
    'ecom-pn-label': 'Next project',
    'ecom-pn-title': 'Odoo ERP Deployment →',

    // ---- Odoo ----
    'odoo-page-title': 'Odoo ERP Deployment - Reda Rouibah',
    'odoo-kicker': 'University project · IS Integration',
    'odoo-meta-role': 'Functional & technical integration',
    'odoo-meta-equipe': '4 people',
    'odoo-meta-duree': '2 months',
    'odoo-s1-h': 'Context',
    'odoo-s1-p1': 'A university project built by a team of four, with a fictional client playing the role of a restaurant owner looking to digitize their business. The goal: deploy and adapt an Odoo ERP to cover the restaurant\'s real needs — inventory management, order tracking and automation of certain business processes.',
    'odoo-s1-p2': 'The setup simulated a real client relationship, with regular exchanges to gather requirements, present progress and adjust scope based on feedback.',
    'odoo-s2-h': 'What we set up',
    'odoo-s2-li1': 'Gathering business requirements through exchanges with the fictional client',
    'odoo-s2-li2': 'Configuring Odoo modules — stock, orders, point of sale',
    'odoo-s2-li3': 'Custom development to match the restaurant\'s specific workflows',
    'odoo-s2-li4': 'Progressive adjustments in an agile logic, sprint by sprint',
    'odoo-s2-li5': 'Presenting deliverables and validating with the client at each step',
    'odoo-hl-label': 'Technical highlight',
    'odoo-s3-h': 'Custom development',
    'odoo-s3-p1': 'Odoo\'s standard configuration covers many cases, but not all. For this restaurant, certain flows didn\'t map exactly to native modules: we had to build specific adaptations in Python and XML, making the ERP fit real workflows rather than imposing the ERP\'s logic on the client.',
    'odoo-s3-p2': 'That\'s where the real complexity was: understanding Odoo\'s internal architecture, identifying the right extension points, and not breaking existing modules while customizing.',
    'odoo-s4-label': 'Key takeaway',
    'odoo-s4-h': 'Client relationship as a technical lever',
    'odoo-s4-p1': 'What made this project effective was the quality of exchanges with the fictional client. Clear feedback at each sprint prevented building in the dark — we quickly knew whether a feature was understood, usable, or needed rework.',
    'odoo-s4-p2': 'It taught me that successful SI integration is as much about communication as technique. A misunderstood requirement produces a useless solution, even if the code is clean.',
    'odoo-nav-back': '← E-commerce Platform',
    'odoo-pn-label': 'Back',
    'odoo-pn-title': 'All works →',
  }
};

// ===== THEME =====
const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// ===== LANGUAGE =====
const langBtn = document.getElementById('langBtn');
let currentLang = localStorage.getItem('lang') || 'fr';

const globeSVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  html.lang = lang;
  langBtn.innerHTML = `${globeSVG} ${lang.toUpperCase()}`;
  updateThemeBtn(html.getAttribute('data-theme'));
}

function updateThemeBtn(theme) {
  const t = translations[currentLang];
  themeBtn.innerHTML = theme === 'dark'
    ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> ${t['theme-light']}`
    : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> ${t['theme-dark']}`;
}

// Initialize
applyLang(currentLang);
updateThemeBtn(savedTheme);

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', currentLang);
  applyLang(currentLang);
});

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeBtn(next);
});

// Sticky header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Reveal on scroll
const io = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Floating project nav — visible once past the stack bar
const projNav = document.querySelector('.proj-nav');
const stackBar = document.querySelector('.proj-stack-bar');
if (projNav && stackBar) {
  const onScroll = () => {
    projNav.classList.toggle('visible', stackBar.getBoundingClientRect().bottom < 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
