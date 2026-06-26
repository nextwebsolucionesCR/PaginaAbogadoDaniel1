document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       Mobile Menu Toggle
       ========================================= */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('is-open');
        });

        // Close menu on link click
        mainNav.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-open');
            });
        });
    }

    /* =========================================
       Language Toggle Logic
       ========================================= */
    if (window.i18n) {
        window.i18n.updateLanguage(window.i18n.currentLang);
        
        const langToggleBtn = document.getElementById('lang-toggle');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', () => {
                const idx = window.i18n.availableLangs.indexOf(window.i18n.currentLang);
                const nextLang = window.i18n.availableLangs[(idx + 1) % window.i18n.availableLangs.length] || window.i18n.DEFAULT_LANG;
                window.i18n.updateLanguage(nextLang);
            });
        }
    }

    /* =========================================
       Dark Mode Toggle Logic
       ========================================= */
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme = 'light';
    if (savedTheme === 'dark' || savedTheme === 'light') {
        initialTheme = savedTheme;
    } else {
        initialTheme = systemPrefersDark ? 'dark' : 'light';
    }
    
    document.body.classList.toggle('dark-mode', initialTheme === 'dark');
    
    function updateThemeUI(isDark) {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (themeIcon) {
            themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode'; // En modo oscuro, muestra icono de sol (light_mode)
        }
        if (themeBtn) {
            themeBtn.setAttribute('aria-pressed', String(isDark));
            themeBtn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
        }
    }
    
    updateThemeUI(initialTheme === 'dark');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark-mode');
            document.body.classList.toggle('dark-mode', isDark);
            updateThemeUI(isDark);
        });
    }
    
    if (!savedTheme && window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (e) => {
            const isDark = e.matches;
            document.body.classList.toggle('dark-mode', isDark);
            updateThemeUI(isDark);
        };
        if (mq.addEventListener) mq.addEventListener('change', onChange);
        else if (mq.addListener) mq.addListener(onChange);
    }

    /* =========================================
       Counters Animation (Intersection Observer)
       ========================================= */
    const counters = document.querySelectorAll('.count');
    const countersSection = document.getElementById('counters-section');
    let hasAnimated = false;

    if (counters.length > 0 && countersSection) {
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; 
                const increment = target / (duration / 16); 
                
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounters();
                    hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });

        observer.observe(countersSection);
    }

    /* =========================================
       Testimonials Infinite Loop
       ========================================= */
    const testimonials = [
        { text: "Excelente servicio, me ayudaron con el traspaso de mi vehículo rapidísimo.", author: "Carlos M." },
        { text: "El abogado Daniel es muy profesional y ético. Lo recomiendo totalmente.", author: "Ana Rojas" },
        { text: "Me guio en todo el proceso de pensión alimentaria con mucha empatía.", author: "Laura S." },
        { text: "Trámites notariales impecables y a tiempo.", author: "Esteban V." },
        { text: "Una asesoría corporativa que salvó a mi empresa de muchos problemas legales.", author: "Empresa XYZ" },
        { text: "Redactó los contratos para mi negocio de manera muy clara.", author: "Pedro G." },
        { text: "Muy accesible y dispuesto a explicar cada detalle legal.", author: "María F." },
        { text: "Profesionalismo puro. Su bufete me generó mucha confianza.", author: "Diego A." },
        { text: "Resolvió un conflicto patrimonial familiar de forma muy justa.", author: "Familia Gómez" },
        { text: "Mi testamento quedó redactado tal y como lo deseaba. Excelente.", author: "Don Roberto" }
    ];

    const track = document.getElementById('testimonial-track');
    if (track) {
        // Build cards
        const buildCard = (t) => `
            <div class="testimonial-card-3d">
                <div class="testimonial-card-3d__quote-mark">"</div>
                <p class="testimonial-card-3d__text">"${t.text}"</p>
                <div class="testimonial-card-3d__footer">
                    <p class="testimonial-card-3d__author">${t.author}</p>
                    <div class="testimonial-card-3d__stars">
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add original 10
        let html = testimonials.map(buildCard).join('');
        // Add clones for infinite loop
        html += testimonials.map(buildCard).join('');
        track.innerHTML = html;

        // Animate
        let position = 0;
        let animationId;
        const speed = 0.5; // pixels per frame

        const scrollLoop = () => {
            position -= speed;
            // Since we doubled the items, when we scroll half the total width, reset to 0
            if (Math.abs(position) >= track.scrollWidth / 2) {
                position = 0;
            }
            // Trasladamos en X puramente. La rotación 3D ahora vive en el wrapper padre para evitar distorsión de la cámara.
            track.style.transform = `translateX(${position}px)`;
            animationId = requestAnimationFrame(scrollLoop);
        };
        
        // Start animation
        animationId = requestAnimationFrame(scrollLoop);

        // Pause on hover
        track.addEventListener('mouseenter', () => cancelAnimationFrame(animationId));
        track.addEventListener('mouseleave', () => {
            animationId = requestAnimationFrame(scrollLoop);
        });
    }

    /* =========================================
       Google Maps Facade Pattern
       ========================================= */
    const loadMapBtn = document.getElementById('load-map-btn');
    const mapContainer = document.getElementById('map-container');

    if (loadMapBtn && mapContainer) {
        loadMapBtn.addEventListener('click', () => {
            if (navigator.onLine === false) {
                alert("No hay conexión a internet para cargar el mapa.");
                return;
            }
            
            loadMapBtn.style.display = 'none';
            // Cordenadas solicitadas: 10.63130984031444, -85.43572345086473 -> Bufete Martinez y Asociados
            // Se usa un embed generico usando las coordenadas.
            const iframe = document.createElement('iframe');
            iframe.src = `https://maps.google.com/maps?q=10.63130984031444,-85.43572345086473&z=15&output=embed`;
            iframe.width = "100%";
            iframe.height = "100%";
            iframe.style.border = "0";
            iframe.allowFullscreen = "";
            iframe.loading = "lazy";
            
            mapContainer.appendChild(iframe);
        });
    }
});

/* =========================================
   Modal Logic
   ========================================= */
const serviceData = {
    notarial_1: {
        title: "Traspasos de propiedades y vehículos",
        desc: "Asesoría y gestión integral para la transferencia legal de bienes inmuebles y vehículos, garantizando seguridad jurídica, cumplimiento normativo y trámites ágiles.",
        img: "resources/image/ServiciosNotariales-TraspasoDePropiedadesYVehiculos.webp"
    },
    notarial_2: {
        title: "Redacción de escrituras",
        desc: "Elaboración de escrituras públicas con precisión legal, adaptadas a las necesidades de cada cliente y cumpliendo con todos los requisitos establecidos por la ley.",
        img: "resources/image/ServiciosNotariales-RedacciónDeEscrituras.webp"
    },
    notarial_3: {
        title: "Autenticación de firmas",
        desc: "Certificación notarial de firmas para brindar validez y seguridad jurídica a documentos públicos y privados.",
        img: "resources/image/ServiciosNotariales-AutenticaciónDeFirmas.webp"
    },
    notarial_4: {
        title: "Testamentos",
        desc: "Asesoría personalizada y formalización de testamentos para proteger el patrimonio y garantizar el cumplimiento de la voluntad del otorgante.",
        img: "resources/image/ServiciosNotariales-Testamentos.webp"
    },
    notarial_5: {
        title: "Matrimonios legales",
        desc: "Celebración y formalización de matrimonios civiles con acompañamiento profesional durante todo el proceso.",
        img: "resources/image/ServiciosNotariales-Matrimonios legales.webp" // Consider space in filename, better to encode or rename but keeping it as requested
    },
    notarial_6: {
        title: "Certificaciones",
        desc: "Emisión de certificaciones notariales de documentos, copias y hechos jurídicos, otorgándoles respaldo y autenticidad legal.",
        img: "resources/image/ServiciosNotariales-Certificaciones.webp"
    },
    civil_1: {
        title: "Elaboración de contratos",
        desc: "Redacción de contratos claros, sólidos y personalizados que protejan los intereses de las partes involucradas y prevengan futuros conflictos.",
        img: "resources/image/DerechoCivilYContratos-ElaboraciónDeContratos.webp"
    },
    civil_2: {
        title: "Revisión y negociación de contratos",
        desc: "Análisis detallado de cláusulas contractuales y acompañamiento estratégico en procesos de negociación para asegurar condiciones justas y favorables.",
        img: "resources/image/DerechoCivilYContratos-RevisiónYNegociaciónDeContratos.webp"
    },
    civil_3: {
        title: "Resolución de conflictos patrimoniales",
        desc: "Asesoría y representación legal en disputas relacionadas con bienes, propiedades, obligaciones y derechos patrimoniales.",
        img: "resources/image/DerechoCivilYContratos-ResoluciónDeConflictosPatrimoniales.webp"
    },
    civil_4: {
        title: "Cobros judiciales y asesoría en obligaciones civiles",
        desc: "Gestión eficiente de procesos de cobro y orientación legal para el cumplimiento y defensa de derechos derivados de obligaciones civiles.",
        img: "resources/image/DerechoCivilYContratos-CobrosJudicialesYAsesoríaEnObligacionesCiviles.webp"
    },
    familia_1: {
        title: "Pensiones alimentarias",
        desc: "Asesoría y gestión legal para la fijación, modificación o ejecución de pensiones alimentarias en defensa de los derechos de los involucrados.",
        img: "resources/image/DerechoDeFamilia-Pensiones-Alimentarias.webp"
    },
    familia_2: {
        title: "Custodia y procesos sucesorios",
        desc: "Representación y acompañamiento en asuntos de guarda, custodia de menores y trámites sucesorios relacionados con herencias y distribución de bienes.",
        img: "resources/image/DerechoDeFamila-CustodiaYProcesosSucesorios.webp"
    },
    corporativa_1: {
        title: "Orientación legal preventiva para emprendedores",
        desc: "Asesoramiento estratégico para la creación y desarrollo de negocios, identificando riesgos legales y fortaleciendo la seguridad jurídica de los proyectos.",
        img: "resources/image/AsesoriaCorporativa-OrientaciónLegalPreventivaParaEmprendedores.webp"
    },
    corporativa_2: {
        title: "Constitución de sociedades anónimas",
        desc: "Apoyo integral en la creación de sociedades mercantiles, así como en el cumplimiento de obligaciones laborales y regulatorias para empresas de todos los tamaños.",
        img: "resources/image/AsesoriaCorporativa-ConstituciónDeSociedadesAnónimasYRevisiónDeNormativasLaboralesParaEmpresas.webp"
    }
};

window.openServiceModal = function(serviceId) {
    const modal = document.getElementById('service-modal');
    const body = document.getElementById('modal-body');
    const data = serviceData[serviceId];
    
    if (modal && body && data) {
        const waText = encodeURIComponent(`Hola, me interesa consultar sobre el servicio de ${data.title}`);
        const waLink = `https://wa.me/50671990701?text=${waText}`;
        
        body.innerHTML = `
            <img src="${data.img}" alt="${data.title}" style="width:100%; border-radius:8px; margin-bottom:16px;">
            <h3>${data.title}</h3>
            <p>${data.desc}</p>
            <a href="${waLink}" target="_blank" class="btn btn--primary btn--whatsapp w-100" style="margin-top:16px;">
                <span class="material-symbols-outlined">chat</span> Consultar por WhatsApp
            </a>
        `;
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Evita scroll de fondo
    }
};

window.closeServiceModal = function() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
    }
};

/* ==========================================================================
   Animaciones de Revelación (Scroll)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Revelar cuando el elemento entra 100px en la pantalla
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});

/* ==========================================================================
   Ocultar Navbar al hacer Scroll Hacia Abajo
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Añadir fondo de cristal y colores adaptativos al bajar
        if (scrollTop > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }

        // Si hacemos scroll hacia abajo y pasamos los 100px (ocultar)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('header--hidden');
        } else {
            // Si hacemos scroll hacia arriba (mostrar)
            header.classList.remove('header--hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
    }, false);
});

/* ==========================================================================
   Fondo Dinámico al hacer Scroll (Servicios)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const serviceRows = document.querySelectorAll('.service-row');
    const bgImages = document.querySelectorAll('.services-bg');
    
    // Configuramos el observador para que se active cuando la fila entre al 50% central de la pantalla
    const observerOptions = {
        root: null,
        rootMargin: '-25% 0px -25% 0px', // Ampliado para que el efecto se dispare antes
        threshold: 0
    };

    const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Obtener el ID de la imagen destino
                const targetId = entry.target.getAttribute('data-bg-target');
                
                // Ocultar todas las imágenes
                bgImages.forEach(img => img.classList.remove('active'));
                
                // Mostrar solo la imagen destino
                const targetImg = document.getElementById(targetId);
                if (targetImg) {
                    targetImg.classList.add('active');
                }
                
                // Resaltar la fila activa
                serviceRows.forEach(row => row.style.opacity = '0.5');
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    serviceRows.forEach(row => {
        row.style.transition = 'opacity 0.4s ease'; // Añadimos transición para el highlight
        bgObserver.observe(row);
    });
});
