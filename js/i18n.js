/* =========================================
   Internationalization (i18n) Logic
   ========================================= */

const translations = {
    es: {
        // Nav
        nav_home: "Inicio",
        nav_about: "Acerca de",
        nav_services: "Servicios",
        nav_experience: "Experiencia",
        nav_contact: "Contacto",
        
        // Hero
        hero_title: "Asesoría Legal y Servicios Notariales de Confianza",
        hero_subtitle: "Abogado Jose Daniel Martinez Espinoza.",
        btn_whatsapp: "Contactar por WhatsApp",
        btn_experience: "Mi Experiencia",
        btn_view_services: "Ver Servicios",
        badge_years: "15+ Años",
        badge_exp: "de Experiencia",
        
        // About
        about_title: "Compromiso, Ética y Profesionalismo",
        about_text_1: "Soy Jose Daniel Martinez Espinoza, Abogado y Notario Público. Mi objetivo principal es brindar acompañamiento legal preventivo y resolutivo, adaptándome a las necesidades específicas de cada cliente.",
        about_text_2: "Con un trato honesto y directo, me dedico a proteger sus intereses legales bajo los más altos estándares de ética profesional. Ya sea para un trámite notarial rápido o una asesoría legal compleja, estoy aquí para guiarle paso a paso.",
        about_stat_1: "Especialidad",
        about_stat_1_desc: "Derecho y Notariado",
        about_stat_2: "Confianza",
        about_stat_2_desc: "Ética Profesional",
        
        // Services
        services_title: "Áreas de Servicio",
        btn_more_services: "Ver más servicios",
        cat_notarial: "Servicios Notariales",
        cat_civil: "Derecho Civil y Contratos",
        cat_family: "Derecho de Familia",
        cat_corporate: "Asesoría Corporativa",
        
        // All Services
        serv_notarial_1_title: "Traspasos de propiedades y vehículos",
        serv_notarial_1_desc: "Asesoría y gestión integral para la transferencia legal de bienes inmuebles y vehículos, garantizando seguridad jurídica, cumplimiento normativo y trámites ágiles.",
        serv_notarial_2_title: "Redacción de escrituras",
        serv_notarial_2_desc: "Elaboración de escrituras públicas con precisión legal, adaptadas a las necesidades de cada cliente y cumpliendo con todos los requisitos establecidos por la ley.",
        serv_notarial_3_title: "Autenticación de firmas",
        serv_notarial_3_desc: "Certificación notarial de firmas para brindar validez y seguridad jurídica a documentos públicos y privados.",
        serv_notarial_4_title: "Testamentos",
        serv_notarial_4_desc: "Asesoría personalizada y formalización de testamentos para proteger el patrimonio y garantizar el cumplimiento de la voluntad del otorgante.",
        serv_notarial_5_title: "Matrimonios legales",
        serv_notarial_5_desc: "Celebración y formalización de matrimonios civiles con acompañamiento profesional durante todo el proceso.",
        serv_notarial_6_title: "Certificaciones",
        serv_notarial_6_desc: "Emisión de certificaciones notariales de documentos, copias y hechos jurídicos, otorgándoles respaldo y autenticidad legal.",
        
        serv_civil_1_title: "Elaboración de contratos",
        serv_civil_1_desc: "Redacción de contratos claros, sólidos y personalizados que protejan los intereses de las partes involucradas y prevengan futuros conflictos.",
        serv_civil_2_title: "Revisión y negociación de contratos",
        serv_civil_2_desc: "Análisis detallado de cláusulas contractuales y acompañamiento estratégico en procesos de negociación para asegurar condiciones justas y favorables.",
        serv_civil_3_title: "Resolución de conflictos patrimoniales",
        serv_civil_3_desc: "Asesoría y representación legal en disputas relacionadas con bienes, propiedades, obligaciones y derechos patrimoniales.",
        serv_civil_4_title: "Cobros judiciales y asesoría en obligaciones civiles",
        serv_civil_4_desc: "Gestión eficiente de procesos de cobro y orientación legal para el cumplimiento y defensa de derechos derivados de obligaciones civiles.",
        
        serv_familia_1_title: "Pensiones alimentarias",
        serv_familia_1_desc: "Asesoría y gestión legal para la fijación, modificación o ejecución de pensiones alimentarias en defensa de los derechos de los involucrados.",
        serv_familia_2_title: "Custodia y procesos sucesorios",
        serv_familia_2_desc: "Representación y acompañamiento en asuntos de guarda, custodia de menores y trámites sucesorios relacionados con herencias y distribución de bienes.",
        
        serv_corp_1_title: "Orientación legal preventiva para emprendedores",
        serv_corp_1_desc: "Asesoramiento estratégico para la creación y desarrollo de negocios, identificando riesgos legales y fortaleciendo la seguridad jurídica de los proyectos.",
        serv_corp_2_title: "Constitución de sociedades anónimas",
        serv_corp_2_desc: "Apoyo integral en la creación de sociedades mercantiles, así como en el cumplimiento de obligaciones laborales y regulatorias para empresas de todos los tamaños.",
        
        // Servicios.html page specific
        serv_page_hero_title: "Nuestros Servicios",
        serv_page_hero_subtitle: "Soluciones legales preventivas y resolutivas. Explore nuestro catálogo de servicios especializados.",
        btn_filter_all: "Todos",
        search_placeholder: "Buscar servicio...",
        no_results_text: "No se encontraron servicios que coincidan con su búsqueda.",
        btn_consult_wa: "Consultar por WhatsApp",
        wa_message_prefix: "Hola, me interesa consultar sobre el servicio de ",
        
        // Experience
        experience_title: "Daniel su abogado de confianza",
        exp_years: "Años de Trayectoria Legal",
        exp_clients: "Clientes Satisfechos y Asesorados",
        exp_cases: "Trámites Notariales Completados con Éxito",
        exp_profile: "Perfil Profesional",
        btn_download_cv: "Descargar Currículum",
        
        // Experience Bento
        exp_bento_title: "Hitos Relevantes",
        exp_bento_corp_title: "Asesoría Corporativa Transnacional",
        exp_bento_corp_desc: "Más de 5 años liderando aperturas de sedes operativas bajo el Régimen de Zona Franca y estructurando fusiones internacionales (M&A) para empresas Fortune 500.",
        exp_bento_real_title: "Desarrollo Inmobiliario Costero",
        exp_bento_real_desc: "Notario titular en la constitución de complejos turísticos y condominios de lujo en Guanacaste, garantizando estricta debida diligencia.",
        exp_bento_bank_title: "Fideicomisos",
        exp_bento_bank_desc: "Especialista externo para entidades financieras nacionales.",
        exp_bento_lit_title: "Litigios Civiles",
        exp_bento_lit_desc: "Resolución efectiva de disputas comerciales de alta complejidad.",
        
        // Testimonials
        testimonials_title: "Lo que dicen nuestros clientes",
        
        // Contact
        contact_title: "¿Necesita asesoría legal inmediata?",
        contact_desc: "No deje sus asuntos legales para mañana. Contácteme hoy mismo para evaluar su caso y encontrar la mejor solución jurídica. La tranquilidad de estar bien asesorado está a un mensaje de distancia.",
        contact_hours_title: "Horario de atención:",
        contact_hours_text: "Lunes - Viernes de 8 am a 5 pm",
        contact_phones_title: "Teléfonos:",
        contact_email_title: "Email:",
        btn_load_map: "Ver ubicación en el mapa",
        
        // Form
        form_name: "Nombre completo",
        form_name_ph: "Ej. Juan Pérez",
        form_phone: "Teléfono",
        form_phone_ph: "Ej. 8888-8888",
        form_email: "Correo electrónico",
        form_email_ph: "correo@ejemplo.com",
        form_message: "Descripción breve del caso",
        form_message_ph: "Escriba aquí los detalles...",
        btn_send: "Enviar Mensaje",
        form_note: "* Formulario demostrativo (EmailJS se implementará luego)",
        
        // Footer
        footer_nav_title: "Navegación",
        footer_serv_title: "Especialidades",
        footer_desc: "Asesoría legal y notarial de primer nivel. Ética, compromiso y resultados para proteger su patrimonio.",
        footer_rights: "Todos los derechos reservados.",
        
        // Política de Privacidad
        privacy_page_title: "Política de Privacidad | Abogado Jose Daniel Martinez Espinoza",
        privacy_title: "Política de Privacidad",
        privacy_intro: "El Licenciado Jose Daniel Martinez Espinoza está comprometido con la protección de su privacidad y el manejo ético de sus datos personales. Esta política explica cómo recopilamos, usamos y protegemos su información al interactuar con nuestro sitio web y utilizar nuestros servicios.",
        privacy_h1: "1. Información que Recopilamos",
        privacy_p1: "Recopilamos información personal que usted nos proporciona voluntariamente, como su nombre, número de teléfono, dirección de correo electrónico y detalles de su consulta legal al utilizar nuestro formulario de contacto o al comunicarse con nosotros a través de WhatsApp.",
        privacy_h2: "2. Uso de la Información",
        privacy_p2: "La información recopilada se utiliza exclusivamente para:",
        privacy_li1: "Proporcionarle el asesoramiento legal o notarial solicitado.",
        privacy_li2: "Responder a sus preguntas y solicitudes de contacto.",
        privacy_li3: "Programar citas y enviar recordatorios.",
        privacy_h3: "3. Secreto Profesional y Confidencialidad",
        privacy_p3: "Como profesionales del Derecho, estamos sujetos al más estricto secreto profesional. Toda la información, documentos y detalles de su caso están protegidos por este principio ético y legal. No compartimos, vendemos ni distribuimos su información a terceros sin su consentimiento expreso, a menos que sea requerido por una orden judicial.",
        privacy_h4: "4. Seguridad de los Datos",
        privacy_p4: "Implementamos medidas de seguridad administrativas y técnicas razonables para proteger su información personal contra pérdida, robo, acceso no autorizado, uso indebido o alteración. Sin embargo, ninguna transmisión por Internet es 100% segura, por lo que le recomendamos ser prudente al enviar información altamente sensible por medios electrónicos no encriptados.",
        privacy_h5: "5. Contacto",
        privacy_p5: "Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad o el manejo de sus datos, no dude en contactarnos a través de los medios oficiales proporcionados en este sitio web."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_experience: "Experience",
        nav_contact: "Contact",
        
        hero_title: "Trusted Legal Advice and Notary Services",
        hero_subtitle: "Attorney Jose Daniel Martinez Espinoza.",
        btn_whatsapp: "Contact via WhatsApp",
        btn_experience: "My Experience",
        btn_view_services: "View Services",
        badge_years: "15+ Years",
        badge_exp: "of Experience",
        
        about_title: "Commitment, Ethics and Professionalism",
        about_text_1: "I am Jose Daniel Martinez Espinoza, Attorney and Notary Public. My main goal is to provide preventive and resolute legal support, adapting to the specific needs of each client.",
        about_text_2: "With an honest and direct approach, I am dedicated to protecting your legal interests under the highest standards of professional ethics. Whether it's a quick notary procedure or complex legal advice, I am here to guide you step by step.",
        about_stat_1: "Specialty",
        about_stat_1_desc: "Law & Notary",
        about_stat_2: "Trust",
        about_stat_2_desc: "Professional Ethics",
        
        services_title: "Service Areas",
        btn_more_services: "View more services",
        cat_notarial: "Notary Services",
        cat_civil: "Civil Law and Contracts",
        cat_family: "Family Law",
        cat_corporate: "Corporate Advice",
        
        // All Services
        serv_notarial_1_title: "Property and vehicle transfers",
        serv_notarial_1_desc: "Comprehensive advice and management for the legal transfer of real estate and vehicles, ensuring legal certainty, regulatory compliance, and agile procedures.",
        serv_notarial_2_title: "Drafting of deeds",
        serv_notarial_2_desc: "Drafting of public deeds with legal precision, adapted to the needs of each client and complying with all requirements established by law.",
        serv_notarial_3_title: "Authentication of signatures",
        serv_notarial_3_desc: "Notarial certification of signatures to provide validity and legal certainty to public and private documents.",
        serv_notarial_4_title: "Wills",
        serv_notarial_4_desc: "Personalized advice and formalization of wills to protect assets and ensure compliance with the grantor's will.",
        serv_notarial_5_title: "Legal marriages",
        serv_notarial_5_desc: "Celebration and formalization of civil marriages with professional accompaniment throughout the process.",
        serv_notarial_6_title: "Certifications",
        serv_notarial_6_desc: "Issuance of notarial certifications of documents, copies, and legal facts, granting them support and legal authenticity.",
        
        serv_civil_1_title: "Drafting of contracts",
        serv_civil_1_desc: "Drafting of clear, solid, and personalized contracts that protect the interests of the parties involved and prevent future conflicts.",
        serv_civil_2_title: "Contract review and negotiation",
        serv_civil_2_desc: "Detailed analysis of contractual clauses and strategic accompaniment in negotiation processes to ensure fair and favorable conditions.",
        serv_civil_3_title: "Resolution of property disputes",
        serv_civil_3_desc: "Legal advice and representation in disputes related to assets, properties, obligations, and property rights.",
        serv_civil_4_title: "Judicial collections and advice on civil obligations",
        serv_civil_4_desc: "Efficient management of collection processes and legal guidance for the fulfillment and defense of rights derived from civil obligations.",
        
        serv_familia_1_title: "Alimony / Child Support",
        serv_familia_1_desc: "Legal advice and management for the establishment, modification, or execution of alimony in defense of the rights of those involved.",
        serv_familia_2_title: "Custody and succession processes",
        serv_familia_2_desc: "Representation and accompaniment in matters of guardianship, child custody, and succession procedures related to inheritances and asset distribution.",
        
        serv_corp_1_title: "Preventive legal guidance for entrepreneurs",
        serv_corp_1_desc: "Strategic advice for the creation and development of businesses, identifying legal risks and strengthening the legal security of projects.",
        serv_corp_2_title: "Incorporation of corporations",
        serv_corp_2_desc: "Comprehensive support in the creation of commercial companies, as well as in compliance with labor and regulatory obligations for companies of all sizes.",
        
        // Servicios.html page specific
        serv_page_hero_title: "Our Services",
        serv_page_hero_subtitle: "Preventive and resolute legal solutions. Explore our catalog of specialized services.",
        btn_filter_all: "All",
        search_placeholder: "Search for a service...",
        no_results_text: "No services found matching your search.",
        btn_consult_wa: "Consult via WhatsApp",
        wa_message_prefix: "Hello, I am interested in consulting about the service of ",
        
        experience_title: "Daniel, your trusted lawyer",
        exp_years: "Years of Legal Experience",
        exp_clients: "Satisfied and Advised Clients",
        exp_cases: "Successfully Completed Notary Procedures",
        exp_profile: "Professional Profile",
        btn_download_cv: "Download Curriculum",
        
        // Experience Bento
        exp_bento_title: "Relevant Milestones",
        exp_bento_corp_title: "Transnational Corporate Advisory",
        exp_bento_corp_desc: "Over 5 years leading the opening of operational headquarters under the Free Trade Zone Regime and structuring international mergers (M&A) for Fortune 500 companies.",
        exp_bento_real_title: "Coastal Real Estate Development",
        exp_bento_real_desc: "Lead Notary in the constitution of tourist complexes and luxury condominiums in Guanacaste, ensuring strict due diligence.",
        exp_bento_bank_title: "Trusts & Banking",
        exp_bento_bank_desc: "External specialist for national financial institutions.",
        exp_bento_lit_title: "Civil Litigation",
        exp_bento_lit_desc: "Effective resolution of highly complex commercial disputes.",
        
        testimonials_title: "What our clients say",
        
        contact_title: "Need immediate legal advice?",
        contact_desc: "Don't leave your legal matters for tomorrow. Contact me today to evaluate your case and find the best legal solution. The peace of mind of being well advised is just a message away.",
        contact_hours_title: "Opening hours:",
        contact_hours_text: "Monday - Friday 8 am to 5 pm",
        contact_phones_title: "Phones:",
        contact_email_title: "Email:",
        btn_load_map: "View location on map",
        
        form_name: "Full Name",
        form_name_ph: "E.g. John Doe",
        form_phone: "Phone",
        form_phone_ph: "E.g. 8888-8888",
        form_email: "Email",
        form_email_ph: "email@example.com",
        form_message: "Brief description of the case",
        form_message_ph: "Write the details here...",
        btn_send: "Send Message",
        form_note: "* Demo form (EmailJS to be implemented later)",
        // Footer
        footer_nav_title: "Navigation",
        footer_serv_title: "Specialties",
        footer_desc: "Top-level legal and notary advice. Ethics, commitment, and results to protect your assets.",
        footer_rights: "All rights reserved.",
        
        // Privacy Policy
        privacy_page_title: "Privacy Policy | Attorney Jose Daniel Martinez Espinoza",
        privacy_title: "Privacy Policy",
        privacy_intro: "Attorney Jose Daniel Martinez Espinoza is committed to protecting your privacy and the ethical handling of your personal data. This policy explains how we collect, use, and protect your information when interacting with our website and using our services.",
        privacy_h1: "1. Information We Collect",
        privacy_p1: "We collect personal information that you voluntarily provide to us, such as your name, phone number, email address, and details of your legal inquiry when using our contact form or communicating with us via WhatsApp.",
        privacy_h2: "2. Use of Information",
        privacy_p2: "The collected information is used exclusively to:",
        privacy_li1: "Provide you with the requested legal or notary advice.",
        privacy_li2: "Respond to your questions and contact requests.",
        privacy_li3: "Schedule appointments and send reminders.",
        privacy_h3: "3. Professional Secrecy and Confidentiality",
        privacy_p3: "As legal professionals, we are bound by the strictest professional secrecy. All information, documents, and details of your case are protected by this ethical and legal principle. We do not share, sell, or distribute your information to third parties without your express consent, unless required by a court order.",
        privacy_h4: "4. Data Security",
        privacy_p4: "We implement reasonable administrative and technical security measures to protect your personal information against loss, theft, unauthorized access, misuse, or alteration. However, no internet transmission is 100% secure, so we recommend being prudent when sending highly sensitive information through unencrypted electronic means.",
        privacy_h5: "5. Contact",
        privacy_p5: "If you have any questions or concerns about our privacy policy or the handling of your data, please do not hesitate to contact us through the official means provided on this website."
    },
    // Añadiendo los demás idiomas con traducciones aproximadas para estructurar
    fr: {
        nav_home: "Accueil", nav_about: "À propos", nav_services: "Services", nav_experience: "Expérience", nav_contact: "Contact",
        hero_title: "Conseils Juridiques et Services Notariaux de Confiance", hero_subtitle: "Avocat Jose Daniel Martinez Espinoza.",
        btn_whatsapp: "Contacter par WhatsApp", btn_experience: "Mon Expérience",
        about_title: "Engagement, Éthique et Professionnalisme",
        about_text_1: "Je suis Jose Daniel Martinez Espinoza, Avocat et Notaire Public. Mon objectif principal est de fournir un accompagnement juridique préventif et résolutif.",
        about_text_2: "Avec une approche honnête et directe, je m'engage à protéger vos intérêts juridiques selon les normes d'éthique professionnelle les plus élevées.",
        about_stat_1: "Spécialité", about_stat_1_desc: "Droit et Notariat", about_stat_2: "Confiance", about_stat_2_desc: "Éthique Professionnelle",
        services_title: "Domaines de Service", btn_more_services: "Voir plus de services",
        cat_notarial: "Services Notariaux", cat_civil: "Droit Civil et Contrats", cat_family: "Droit de la Famille", cat_corporate: "Conseil aux Entreprises",
        // Servicios.html page specific
        serv_page_hero_title: "Nos Services",
        serv_page_hero_subtitle: "Solutions juridiques préventives et résolutives. Explorez notre catalogue de services spécialisés.",
        btn_filter_all: "Tous",
        search_placeholder: "Rechercher un service...",
        no_results_text: "Aucun service trouvé correspondant à votre recherche.",
        btn_consult_wa: "Consulter via WhatsApp",
        wa_message_prefix: "Bonjour, je suis intéressé(e) pour consulter sur le service de ",

        // All Services
        serv_notarial_1_title: "Transferts de biens et de véhicules",
        serv_notarial_1_desc: "Conseil et gestion globale pour le transfert légal de biens immobiliers et de véhicules, garantissant la sécurité juridique, la conformité réglementaire et des procédures agiles.",
        serv_notarial_2_title: "Rédaction d'actes",
        serv_notarial_2_desc: "Rédaction d'actes authentiques avec précision juridique, adaptée aux besoins de chaque client et respectant toutes les exigences prévues par la loi.",
        serv_notarial_3_title: "Authentification de signatures",
        serv_notarial_3_desc: "Certification notariale de signatures pour donner validité et sécurité juridique aux documents publics et privés.",
        serv_notarial_4_title: "Testaments",
        serv_notarial_4_desc: "Conseil personnalisé et formalisation de testaments pour protéger le patrimoine et garantir le respect de la volonté du concédant.",
        serv_notarial_5_title: "Mariages légaux",
        serv_notarial_5_desc: "Célébration et formalisation de mariages civils avec un accompagnement professionnel tout au long du processus.",
        serv_notarial_6_title: "Certifications",
        serv_notarial_6_desc: "Délivrance de certifications notariales de documents, de copies et de faits juridiques, leur conférant soutien et authenticité légale.",
        
        serv_civil_1_title: "Rédaction de contrats",
        serv_civil_1_desc: "Rédaction de contrats clairs, solides et personnalisés qui protègent les intérêts des parties concernées et préviennent les conflits futurs.",
        serv_civil_2_title: "Examen et négociation de contrats",
        serv_civil_2_desc: "Analyse détaillée des clauses contractuelles et accompagnement stratégique dans les processus de négociation pour garantir des conditions justes et favorables.",
        serv_civil_3_title: "Résolution de litiges de propriété",
        serv_civil_3_desc: "Conseil juridique et représentation dans les litiges liés aux biens, aux propriétés, aux obligations et aux droits de propriété.",
        serv_civil_4_title: "Recouvrements judiciaires et conseil en obligations civiles",
        serv_civil_4_desc: "Gestion efficace des processus de recouvrement et accompagnement juridique pour l'accomplissement et la défense des droits découlant des obligations civiles.",
        
        serv_familia_1_title: "Pensions alimentaires",
        serv_familia_1_desc: "Conseil et gestion juridique pour l'établissement, la modification ou l'exécution de pensions alimentaires pour la défense des droits des personnes concernées.",
        serv_familia_2_title: "Garde et processus de succession",
        serv_familia_2_desc: "Représentation et accompagnement dans les questions de tutelle, de garde d'enfants et de procédures de succession liées aux héritages et à la distribution des biens.",
        
        serv_corp_1_title: "Orientation juridique pour les entrepreneurs",
        serv_corp_1_desc: "Conseil stratégique pour la création et le développement d'entreprises, l'identification des risques juridiques et le renforcement de la sécurité juridique des projets.",
        serv_corp_2_title: "Constitution de sociétés",
        serv_corp_2_desc: "Un accompagnement global dans la création d'entreprises commerciales, ainsi que dans le respect des obligations sociales et réglementaires pour les entreprises de toutes tailles.",
        experience_title: "Daniel votre avocat de confiance", exp_years: "Années d'expérience", exp_clients: "Clients satisfaits", exp_cases: "Procédures notariales terminées", exp_profile: "Profil Professionnel",
        testimonials_title: "Ce que disent nos clients",
        contact_title: "Besoin de conseils juridiques immédiats?", contact_desc: "Ne remettez pas à demain vos affaires juridiques. Contactez-moi dès aujourd'hui.", contact_hours_title: "Heures d'ouverture:", contact_hours_text: "Lundi - Vendredi de 8h à 17h", contact_phones_title: "Téléphones:", contact_email_title: "Email:", btn_load_map: "Voir l'emplacement sur la carte",
        form_name: "Nom complet", form_name_ph: "Ex. Jean Dupont", form_phone: "Téléphone", form_phone_ph: "Ex. 8888-8888", form_email: "Email", form_email_ph: "email@exemple.com", form_message: "Description du cas", form_message_ph: "Écrivez les détails ici...", btn_send: "Envoyer le message", form_note: "* Formulaire de démonstration", footer_rights: "Tous droits réservés."
    },
    pt: {
        nav_home: "Início", nav_about: "Sobre", nav_services: "Serviços", nav_experience: "Experiência", nav_contact: "Contato",
        hero_title: "Assessoria Jurídica e Serviços Notariais de Confiança", hero_subtitle: "Advogado Jose Daniel Martinez Espinoza.",
        btn_whatsapp: "Contatar pelo WhatsApp", btn_experience: "Minha Experiência",
        about_title: "Compromisso, Ética e Profissionalismo",
        about_text_1: "Sou Jose Daniel Martinez Espinoza, Advogado e Notário Público. Meu principal objetivo é oferecer suporte jurídico preventivo e resolutivo.",
        about_text_2: "Com uma abordagem honesta e direta, dedico-me a proteger seus interesses legais sob os mais altos padrões de ética profissional.",
        about_stat_1: "Especialidade", about_stat_1_desc: "Direito e Notariado", about_stat_2: "Confiança", about_stat_2_desc: "Ética Profissional",
        services_title: "Áreas de Atuação", btn_more_services: "Ver mais serviços",
        cat_notarial: "Serviços Notariais", cat_civil: "Direito Civil e Contratos", cat_family: "Direito de Família", cat_corporate: "Assessoria Corporativa",
        // Servicios.html page specific
        serv_page_hero_title: "Nossos Serviços",
        serv_page_hero_subtitle: "Soluções legais preventivas e resolutivas. Explore nosso catálogo de serviços especializados.",
        btn_filter_all: "Todos",
        search_placeholder: "Buscar serviço...",
        no_results_text: "Nenhum serviço encontrado correspondente à sua busca.",
        btn_consult_wa: "Consultar por WhatsApp",
        wa_message_prefix: "Olá, estou interessado em consultar sobre o serviço de ",

        // All Services
        serv_notarial_1_title: "Transferências de propriedades e veículos",
        serv_notarial_1_desc: "Assessoria e gestão integral para a transferência legal de bens imóveis e veículos, garantindo segurança jurídica, conformidade regulatória e procedimentos ágeis.",
        serv_notarial_2_title: "Redação de escrituras",
        serv_notarial_2_desc: "Elaboração de escrituras públicas com precisão legal, adaptadas às necessidades de cada cliente e cumprindo com todos os requisitos estabelecidos por lei.",
        serv_notarial_3_title: "Autenticação de assinaturas",
        serv_notarial_3_desc: "Certificação notarial de assinaturas para fornecer validade e segurança jurídica a documentos públicos e privados.",
        serv_notarial_4_title: "Testamentos",
        serv_notarial_4_desc: "Assessoria personalizada e formalização de testamentos para proteger o patrimônio e garantir o cumprimento da vontade do outorgante.",
        serv_notarial_5_title: "Casamentos legais",
        serv_notarial_5_desc: "Celebração e formalização de casamentos civis com acompanhamento profissional durante todo o processo.",
        serv_notarial_6_title: "Certificações",
        serv_notarial_6_desc: "Emissão de certificações notariais de documentos, cópias e fatos jurídicos, concedendo-lhes respaldo e autenticidade legal.",
        
        serv_civil_1_title: "Elaboração de contratos",
        serv_civil_1_desc: "Redação de contratos claros, sólidos e personalizados que protegem os interesses das partes envolvidas e previnem futuros conflitos.",
        serv_civil_2_title: "Revisão e negociação de contratos",
        serv_civil_2_desc: "Análise detalhada de cláusulas contratuais e acompanhamento estratégico em processos de negociação para garantir condições justas e favoráveis.",
        serv_civil_3_title: "Resolução de disputas de propriedade",
        serv_civil_3_desc: "Assessoria jurídica e representação em disputas relacionadas a bens, propriedades, obrigações e direitos de propriedade.",
        serv_civil_4_title: "Cobranças judiciais e assessoria em obrigações civis",
        serv_civil_4_desc: "Gestão eficiente de processos de cobrança e orientação legal para o cumprimento e defesa de direitos derivados de obrigações civis.",
        
        serv_familia_1_title: "Pensões alimentícias",
        serv_familia_1_desc: "Assessoria e gestão legal para o estabelecimento, modificação ou execução de pensão alimentícia em defesa dos direitos dos envolvidos.",
        serv_familia_2_title: "Guarda e processos sucessórios",
        serv_familia_2_desc: "Representação e acompanhamento em assuntos de tutela, guarda de filhos e procedimentos sucessórios relacionados a heranças e distribuição de bens.",
        
        serv_corp_1_title: "Orientação jurídica para empreendedores",
        serv_corp_1_desc: "Assessoria estratégica para a criação e desenvolvimento de negócios, identificando riscos legais e fortalecendo a segurança jurídica dos projetos.",
        serv_corp_2_title: "Constituição de sociedades",
        serv_corp_2_desc: "Apoio integral na criação de empresas comerciais, bem como no cumprimento das obrigações trabalhistas e regulatórias para empresas de todos os tamanhos.",
        experience_title: "Daniel, seu advogado de confiança", exp_years: "Anos de Experiência", exp_clients: "Clientes Satisfeitos", exp_cases: "Trâmites Notariais Concluídos", exp_profile: "Perfil Profissional",
        testimonials_title: "O que nossos clientes dizem",
        contact_title: "Precisa de assessoria jurídica imediata?", contact_desc: "Não deixe seus assuntos legais para amanhã. Contate-me hoje mesmo.", contact_hours_title: "Horário de atendimento:", contact_hours_text: "Segunda - Sexta das 8h às 17h", contact_phones_title: "Telefones:", contact_email_title: "Email:", btn_load_map: "Ver localização no mapa",
        form_name: "Nome completo", form_name_ph: "Ex. João Silva", form_phone: "Telefone", form_phone_ph: "Ex. 8888-8888", form_email: "Email", form_email_ph: "email@exemplo.com", form_message: "Descrição breve do caso", form_message_ph: "Escreva os detalhes aqui...", btn_send: "Enviar Mensagem", form_note: "* Formulário demonstrativo", footer_rights: "Todos os direitos reservados."
    },
    zh: {
        nav_home: "首页", nav_about: "关于", nav_services: "服务", nav_experience: "经验", nav_contact: "联系",
        hero_title: "值得信赖的法律咨询和公证服务", hero_subtitle: "律师 Jose Daniel Martinez Espinoza.",
        btn_whatsapp: "通过 WhatsApp 联系", btn_experience: "我的经验",
        about_title: "承诺，道德和专业主义",
        about_text_1: "我是 Jose Daniel Martinez Espinoza，律师兼公证人。我的主要目标是提供预防和解决的法律支持。",
        about_text_2: "通过诚实和直接的方式，我致力于在最高职业道德标准下保护您的合法权益。",
        about_stat_1: "专业", about_stat_1_desc: "法律与公证", about_stat_2: "信任", about_stat_2_desc: "职业道德",
        services_title: "服务领域", btn_more_services: "查看更多服务",
        cat_notarial: "公证服务", cat_civil: "民法与合同", cat_family: "家庭法", cat_corporate: "企业咨询",
        // Servicios.html page specific
        serv_page_hero_title: "我们的服务",
        serv_page_hero_subtitle: "预防性和决定性的法律解决方案。探索我们的专业服务目录。",
        btn_filter_all: "全部",
        search_placeholder: "搜索服务...",
        no_results_text: "没有找到符合您搜索的服务。",
        btn_consult_wa: "通过 WhatsApp 咨询",
        wa_message_prefix: "您好，我想咨询关于此服务的信息：",

        // All Services
        serv_notarial_1_title: "财产和车辆转让",
        serv_notarial_1_desc: "提供房地产和车辆合法转让的全面建议和管理，确保法律确定性，合规性和灵活的程序。",
        serv_notarial_2_title: "起草契约",
        serv_notarial_2_desc: "具有法律精确性的公共契约起草，适应每个客户的需求并符合法律规定的所有要求。",
        serv_notarial_3_title: "签名认证",
        serv_notarial_3_desc: "提供签名公证认证，为公共和私人文件提供有效性和法律确定性。",
        serv_notarial_4_title: "遗嘱",
        serv_notarial_4_desc: "个性化建议和遗嘱的正式化，以保护资产并确保遵守授权人的意愿。",
        serv_notarial_5_title: "合法婚姻",
        serv_notarial_5_desc: "通过整个过程的专业陪伴，庆祝和正式化民事婚姻。",
        serv_notarial_6_title: "公证认证",
        serv_notarial_6_desc: "签发文件，副本和法律事实的公证认证，赋予它们支持和法律真实性。",
        
        serv_civil_1_title: "起草合同",
        serv_civil_1_desc: "起草清晰，可靠和个性化的合同，保护相关方的利益并防止未来的冲突。",
        serv_civil_2_title: "合同审查和谈判",
        serv_civil_2_desc: "对合同条款进行详细分析，并在谈判过程中提供战略陪伴，以确保公平和有利的条件。",
        serv_civil_3_title: "解决财产纠纷",
        serv_civil_3_desc: "在与资产，财产，义务和财产权相关的纠纷中提供法律咨询和代理。",
        serv_civil_4_title: "司法催收和民事义务咨询",
        serv_civil_4_desc: "高效管理催收程序，并为履行和捍卫源于民事义务的权利提供法律指导。",
        
        serv_familia_1_title: "赡养费",
        serv_familia_1_desc: "为确定，修改或执行赡养费提供法律咨询和管理，以捍卫相关人员的权利。",
        serv_familia_2_title: "监护权和继承程序",
        serv_familia_2_desc: "在监护权，儿童监护权以及与继承和资产分配相关的继承程序中提供代理和陪伴。",
        
        serv_corp_1_title: "企业家的预防性法律指导",
        serv_corp_1_desc: "为企业创建和发展提供战略建议，识别法律风险并加强项目的法律安全。",
        serv_corp_2_title: "公司成立",
        serv_corp_2_desc: "在商业公司创建方面提供全面支持，以及为各种规模的公司遵守劳工和监管义务。",
        experience_title: "丹尼尔，您信任的律师", exp_years: "多年法律经验", exp_clients: "满意的客户", exp_cases: "成功完成的公证程序", exp_profile: "个人资料",
        testimonials_title: "我们的客户怎么说",
        contact_title: "需要立即的法律咨询吗？", contact_desc: "不要把法律事务留到明天。今天就联系我。", contact_hours_title: "营业时间:", contact_hours_text: "周一 - 周五 早上 8 点到下午 5 点", contact_phones_title: "电话:", contact_email_title: "电子邮件:", btn_load_map: "在地图上查看位置",
        form_name: "全名", form_name_ph: "例如：张三", form_phone: "电话", form_phone_ph: "例如：8888-8888", form_email: "电子邮件", form_email_ph: "email@example.com", form_message: "案件简述", form_message_ph: "在这里写下细节...", btn_send: "发信息", form_note: "* 演示表单", footer_rights: "版权所有。"
    }
};

/* Core i18n Logic */
const availableLangs = Object.keys(translations);
const DEFAULT_LANG = translations.es ? 'es' : (availableLangs[0] || 'es');
let currentLang = localStorage.getItem('language') || DEFAULT_LANG;
if (!translations[currentLang]) currentLang = DEFAULT_LANG;

// Export to global scope
window.currentLang = currentLang;
window.getText = getText;

function getText(lang, key) {
    if (translations[lang] && translations[lang][key] != null) return translations[lang][key];
    if (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key] != null) return translations[DEFAULT_LANG][key];
    return null;
}

function updateLanguage(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;
    window.currentLang = lang; // Update global
    
    // Text Content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getText(lang, key);
        if (value == null) return;

        let textNodeFound = false;
        element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
                node.textContent = value;
                textNodeFound = true;
            }
        });

        if (!textNodeFound && element.children.length === 0) {
            element.textContent = value;
        } else if (!textNodeFound && element.tagName === 'LI' && element.querySelector('i')) {
            element.innerHTML = element.querySelector('i').outerHTML + " " + value;
        }
    });

    // Input Placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const value = getText(lang, key);
        if (value == null) return;
        element.placeholder = value;
    });

    const langTextSpan = document.getElementById('lang-text-display');
    if (langTextSpan) {
        langTextSpan.textContent = lang.toUpperCase();
    }

    localStorage.setItem('language', lang);
    currentLang = lang;
    if (window.i18n) window.i18n.currentLang = lang;
}

// Attach to window to be accessible from main.js
window.i18n = {
    updateLanguage,
    currentLang,
    availableLangs,
    DEFAULT_LANG
};
