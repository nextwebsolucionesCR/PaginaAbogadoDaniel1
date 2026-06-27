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
        title_key: "serv_notarial_1_title",
        desc_key: "serv_notarial_1_desc",
        img: "resources/image/ServiciosNotariales-TraspasoDePropiedadesYVehiculos.webp"
    },
    notarial_2: {
        title_key: "serv_notarial_2_title",
        desc_key: "serv_notarial_2_desc",
        img: "resources/image/ServiciosNotariales-RedacciónDeEscrituras.webp"
    },
    notarial_3: {
        title_key: "serv_notarial_3_title",
        desc_key: "serv_notarial_3_desc",
        img: "resources/image/ServiciosNotariales-AutenticaciónDeFirmas.webp"
    },
    notarial_4: {
        title_key: "serv_notarial_4_title",
        desc_key: "serv_notarial_4_desc",
        img: "resources/image/ServiciosNotariales-Testamentos.webp"
    },
    notarial_5: {
        title_key: "serv_notarial_5_title",
        desc_key: "serv_notarial_5_desc",
        img: "resources/image/ServiciosNotariales-Matrimonios legales.webp"
    },
    notarial_6: {
        title_key: "serv_notarial_6_title",
        desc_key: "serv_notarial_6_desc",
        img: "resources/image/ServiciosNotariales-Certificaciones.webp"
    },
    civil_1: {
        title_key: "serv_civil_1_title",
        desc_key: "serv_civil_1_desc",
        img: "resources/image/DerechoCivilYContratos-ElaboraciónDeContratos.webp"
    },
    civil_2: {
        title_key: "serv_civil_2_title",
        desc_key: "serv_civil_2_desc",
        img: "resources/image/DerechoCivilYContratos-RevisiónYNegociaciónDeContratos.webp"
    },
    civil_3: {
        title_key: "serv_civil_3_title",
        desc_key: "serv_civil_3_desc",
        img: "resources/image/DerechoCivilYContratos-ResoluciónDeConflictosPatrimoniales.webp"
    },
    civil_4: {
        title_key: "serv_civil_4_title",
        desc_key: "serv_civil_4_desc",
        img: "resources/image/DerechoCivilYContratos-CobrosJudicialesYAsesoríaEnObligacionesCiviles.webp"
    },
    familia_1: {
        title_key: "serv_familia_1_title",
        desc_key: "serv_familia_1_desc",
        img: "resources/image/DerechoDeFamilia-Pensiones-Alimentarias.webp"
    },
    familia_2: {
        title_key: "serv_familia_2_title",
        desc_key: "serv_familia_2_desc",
        img: "resources/image/DerechoDeFamila-CustodiaYProcesosSucesorios.webp"
    },
    corporativa_1: {
        title_key: "serv_corp_1_title",
        desc_key: "serv_corp_1_desc",
        img: "resources/image/AsesoriaCorporativa-OrientaciónLegalPreventivaParaEmprendedores.webp"
    },
    corporativa_2: {
        title_key: "serv_corp_2_title",
        desc_key: "serv_corp_2_desc",
        img: "resources/image/AsesoriaCorporativa-ConstituciónDeSociedadesAnónimasYRevisiónDeNormativasLaboralesParaEmpresas.webp"
    }
};

window.openServiceModal = function(serviceId) {
    const modal = document.getElementById('service-modal');
    const body = document.getElementById('modal-body');
    const data = serviceData[serviceId];
    
    if (modal && body && data) {
        const lang = window.currentLang || 'es';
        const translatedTitle = window.getText(lang, data.title_key) || "";
        const translatedDesc = window.getText(lang, data.desc_key) || "";
        const waPrefix = window.getText(lang, 'wa_message_prefix') || "Hola, me interesa consultar sobre el servicio de ";
        const btnWa = window.getText(lang, 'btn_consult_wa') || "Consultar por WhatsApp";
        
        const waText = encodeURIComponent(`${waPrefix}${translatedTitle}`);
        const waLink = `https://wa.me/50671990701?text=${waText}`;
        
        body.innerHTML = `
            <img src="${data.img}" alt="${translatedTitle}" style="width:100%; border-radius:8px; margin-bottom:16px;">
            <h3>${translatedTitle}</h3>
            <p>${translatedDesc}</p>
            <a href="${waLink}" target="_blank" class="btn btn--primary btn--whatsapp w-100" style="margin-top:16px;">
                <span class="material-symbols-outlined">chat</span> ${btnWa}
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
