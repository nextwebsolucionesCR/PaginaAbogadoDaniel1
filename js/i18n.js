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
        
        serv_notarial_1_title: "Traspasos de propiedades y vehículos",
        serv_notarial_2_title: "Redacción de escrituras",
        serv_civil_1_title: "Elaboración de contratos",
        serv_civil_2_title: "Revisión y negociación de contratos",
        serv_familia_1_title: "Pensiones alimentarias",
        serv_corp_1_title: "Orientación legal para emprendedores",
        
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
        footer_rights: "Todos los derechos reservados."
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
        
        serv_notarial_1_title: "Property and vehicle transfers",
        serv_notarial_2_title: "Drafting of deeds",
        serv_civil_1_title: "Drafting of contracts",
        serv_civil_2_title: "Contract review and negotiation",
        serv_familia_1_title: "Alimony / Child Support",
        serv_corp_1_title: "Preventive legal guidance for entrepreneurs",
        
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
        footer_rights: "All rights reserved."
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
        serv_notarial_1_title: "Transferts de propriétés et de véhicules", serv_notarial_2_title: "Rédaction d'actes", serv_civil_1_title: "Rédaction de contrats", serv_civil_2_title: "Révision et négociation de contrats", serv_familia_1_title: "Pensions alimentaires", serv_corp_1_title: "Orientation juridique pour entrepreneurs",
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
        serv_notarial_1_title: "Transferências de propriedades e veículos", serv_notarial_2_title: "Redação de escrituras", serv_civil_1_title: "Elaboração de contratos", serv_civil_2_title: "Revisão e negociação de contratos", serv_familia_1_title: "Pensões alimentícias", serv_corp_1_title: "Orientação jurídica para empreendedores",
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
        serv_notarial_1_title: "财产和车辆转让", serv_notarial_2_title: "起草契约", serv_civil_1_title: "起草合同", serv_civil_2_title: "合同审查和谈判", serv_familia_1_title: "赡养费", serv_corp_1_title: "企业家的预防性法律指导",
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

function getText(lang, key) {
    if (translations[lang] && translations[lang][key] != null) return translations[lang][key];
    if (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key] != null) return translations[DEFAULT_LANG][key];
    return null;
}

function updateLanguage(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;

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
