document.addEventListener('DOMContentLoaded', () => {

    // --- Translations Object ---
    const translations = {
        en: {
            pageTitle: "New Horizons Wealth Management - Enhanced",
            navAbout: "About Us",
            navServices: "Services",
            navFeatures: "Features",
            navQuestions: "Questions?",
            navContact: "Contact Us",
            heroTitle: "Navigate Your Financial Future with Confidence",
            heroSubtitle: "Exclusive private wealth management, meticulously tailored to your aspirations. Partner with us to unlock new horizons.",
            heroCTA: "Schedule a Consultation",
            triggerQuestionsTitle: "Are You Asking Yourself These Questions?",
            q1: "You work hard for your money, but haven't found out how your money can work for you yet?",
            q2: "Do you feel like you don't have full control over your investments?",
            q3: "Are you concerned about whether your savings are growing at the rate they should be?", // Assuming this was missing, adding it
            q4: "Do you lack the time or expertise to navigate the complexities of the financial market?", // Assuming this was missing
            q5: "Are you looking for a trusted partner to guide you towards your long-term financial goals?", // Assuming this was missing
            featuresTitle: "Empowering Your Financial Journey",
            feature1Title: "Real-Time Portfolio Tracking",
            feature1Desc: "Gain online access to monitor the performance of your portfolio and investments anytime, anywhere, ensuring full transparency.",
            feature2Title: "Personalized Advisor Support",
            feature2Desc: "Your dedicated advisor will touch base with you as frequently as you want to monitor and make strategic changes.",
            feature3Title: "Strategic Investment Guidance",
            feature3Desc: "Benefit from expert advice and strategic changes tailored to your financial goals and market conditions for optimal growth and security.",
            aboutTitle: "About New Horizons Wealth Management",
            aboutP1: "At New Horizons Wealth Management, we understand that managing wealth can be a complex and time-consuming endeavor, especially for high-net-worth individuals with demanding schedules. Based in Montreal and Toronto, we are dedicated to providing personalized and professional wealth management services to help you achieve your financial aspirations. Our team of experienced advisors works closely with you to understand your unique needs and develop tailored strategies for investment and portfolio growth. We believe in transparency, control, and regular communication to ensure your financial journey is on the right track.",
            aboutP2: "We empower our clients with online access to track their investments in real time, giving you a clear picture of your financial performance. Furthermore, our advisors are committed to providing proactive support and will connect with you as often as you prefer to review your portfolio and make informed decisions together. Let New Horizons Wealth Management be your trusted partner in navigating the financial landscape and securing your financial future.",
            servicesTitle: "Our Comprehensive Services",
            service1: "Investment Management",
            service2: "Portfolio Growth Strategies",
            service3: "Real-Time Performance Tracking",
            service4: "Personalized Financial Planning",
            service5: "Retirement Planning",
            service6: "Estate Planning",
            service7: "Regular Advisor Check-ins",
            service8: "Strategic Financial Advice",
            contactTitle: "Contact Us",
            contactSubtitle: "Ready to explore new horizons for your wealth? Get in touch with our team today.",
            formName: "Name:",
            formEmail: "Email:",
            formPhone: "Phone:",
            formMessage: "Message:",
            formSubmit: "Send Message",
            footerRights: `© ${new Date().getFullYear()} New Horizons Wealth Management. All rights reserved.`,
            footerLocations: "Montreal | Toronto"
        },
        fr: {
            pageTitle: "Gestion de Patrimoine Nouveaux Horizons - Amélioré",
            navAbout: "À Propos de Nous",
            navServices: "Services",
            navFeatures: "Nos Atouts",
            navQuestions: "Vos Questions?",
            navContact: "Nous Joindre",
            heroTitle: "Naviguez Votre Avenir Financier avec Confiance",
            heroSubtitle: "Gestion de patrimoine privée exclusive, méticuleusement adaptée à vos aspirations. Devenez notre partenaire pour ouvrir de nouveaux horizons.",
            heroCTA: "Planifier une Consultation",
            triggerQuestionsTitle: "Vous Posez-Vous Ces Questions?",
            q1: "Vous travaillez fort pour votre argent, mais n'avez pas encore découvert comment votre argent peut travailler pour vous?",
            q2: "Sentez-vous que vous n'avez pas le plein contrôle de vos investissements?",
            q3: "Êtes-vous préoccupé(e) par le taux de croissance de votre épargne?",
            q4: "Manquez-vous de temps ou d'expertise pour naviguer les complexités du marché financier?",
            q5: "Recherchez-vous un partenaire de confiance pour vous guider vers vos objectifs financiers à long terme?",
            featuresTitle: "Optimiser Votre Parcours Financier",
            feature1Title: "Suivi de Portefeuille en Temps Réel",
            feature1Desc: "Accédez en ligne pour suivre la performance de votre portefeuille et de vos investissements à tout moment, où que vous soyez, assurant une transparence totale.",
            feature2Title: "Soutien Personnalisé d'un Conseiller",
            feature2Desc: "Votre conseiller dédié communiquera avec vous aussi fréquemment que vous le désirez pour effectuer le suivi et apporter des ajustements stratégiques.",
            feature3Title: "Conseils Stratégiques en Placements",
            feature3Desc: "Bénéficiez de conseils d'experts et d'ajustements stratégiques adaptés à vos objectifs financiers et aux conditions du marché pour une croissance et une sécurité optimales.",
            aboutTitle: "À Propos de Gestion de Patrimoine Nouveaux Horizons",
            aboutP1: "Chez Gestion de Patrimoine Nouveaux Horizons, nous comprenons que la gestion de patrimoine peut être une démarche complexe et exigeante en temps, surtout pour les particuliers fortunés ayant des emplois du temps chargés. Établis à Montréal et Toronto, nous nous consacrons à offrir des services de gestion de patrimoine personnalisés et professionnels pour vous aider à réaliser vos aspirations financières. Notre équipe de conseillers expérimentés collabore étroitement avec vous pour comprendre vos besoins uniques et élaborer des stratégies sur mesure pour la croissance de vos investissements et de votre portefeuille. Nous croyons en la transparence, le contrôle et une communication régulière pour assurer que votre parcours financier soit sur la bonne voie.",
            aboutP2: "Nous offrons à nos clients un accès en ligne pour suivre leurs investissements en temps réel, leur donnant ainsi une image claire de leur performance financière. De plus, nos conseillers s'engagent à fournir un soutien proactif et vous contacteront aussi souvent que vous le souhaitez pour réviser votre portefeuille et prendre ensemble des décisions éclairées. Laissez Gestion de Patrimoine Nouveaux Horizons être votre partenaire de confiance pour naviguer dans le paysage financier et assurer votre avenir financier.",
            servicesTitle: "Nos Services Complets",
            service1: "Gestion de Placements",
            service2: "Stratégies de Croissance de Portefeuille",
            service3: "Suivi de la Performance en Temps Réel",
            service4: "Planification Financière Personnalisée",
            service5: "Planification de la Retraite",
            service6: "Planification Successorale",
            service7: "Rencontres Régulières avec le Conseiller",
            service8: "Conseils Financiers Stratégiques",
            contactTitle: "Nous Joindre",
            contactSubtitle: "Prêt(e) à explorer de nouveaux horizons pour votre patrimoine? Contactez notre équipe dès aujourd'hui.",
            formName: "Nom :",
            formEmail: "Courriel :",
            formPhone: "Téléphone :",
            formMessage: "Message :",
            formSubmit: "Envoyer le Message",
            footerRights: `© ${new Date().getFullYear()} Gestion de Patrimoine Nouveaux Horizons. Tous droits réservés.`,
            footerLocations: "Montréal | Toronto"
        }
    };

    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');
    let currentLang = localStorage.getItem('language') || 'en'; // Default to English or stored language

    function applyTranslations(lang) {
        document.documentElement.lang = lang; // Set the lang attribute on HTML tag
        const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else if (element.hasAttribute('value') && (element.tagName === 'INPUT' || element.tagName === 'BUTTON')) {
                    element.value = translations[lang][key];
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                }
                else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        if (lang === 'en') {
            enBtn.classList.add('active');
            frBtn.classList.remove('active');
        } else {
            frBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    }

    if (enBtn && frBtn) { // Ensure buttons exist before adding listeners
        enBtn.addEventListener('click', () => {
            currentLang = 'en';
            localStorage.setItem('language', currentLang);
            applyTranslations(currentLang);
        });

        frBtn.addEventListener('click', () => {
            currentLang = 'fr';
            localStorage.setItem('language', currentLang);
            applyTranslations(currentLang);
        });
    }


    // --- Smooth Scrolling for Nav Links ---
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"], .cta-button[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.querySelector('.site-header') ? document.querySelector('.site-header').offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 15;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // --- Intersection Observer for Fade-in Effect on Question Items ---
    const questionItems = document.querySelectorAll('.question-item');
    if (questionItems.length > 0) {
        const observerOptions = { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 };
        const observerCallback = (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => { entry.target.classList.add('visible'); }, index * 250);
                    observer.unobserve(entry.target);
                }
            });
        };
        const questionObserver = new IntersectionObserver(observerCallback, observerOptions);
        questionItems.forEach(item => { questionObserver.observe(item); });
    }

    // --- Update Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) { // This span will be updated by the translation if 'footerRights' key is used
        // The translations object already includes the dynamic year in the 'footerRights' key.
        // This line ensures the number itself is current if not covered by translation replacement.
        // However, with the current setup, the translation for 'footerRights' will overwrite this.
        // To have a separate year number update, you'd need a different approach for the footer string.
        // For now, we assume the translation key 'footerRights' is comprehensive.
        // If the `<span>` itself had a data-translate-key, that would be translated.
        // If `footerRights` doesn't include the year dynamically in translation, this keeps number current:
        // yearSpan.textContent = new Date().getFullYear();
    }


    // --- Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('main section[id]');
    const mainNavLinksQuery = document.querySelectorAll('.main-nav a');
    const headerHeight = document.querySelector('.site-header') ? document.querySelector('.site-header').offsetHeight : 0;

    function changeNavOnScroll() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 20;
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        mainNavLinksQuery.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active-link');
            }
        });
    }
    if (sections.length > 0 && mainNavLinksQuery.length > 0) {
        window.addEventListener('scroll', changeNavOnScroll);
        changeNavOnScroll();
    }

    // --- Basic Contact Form Submission Handling ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Example translated alerts (you would add these keys to the translations object)
            const successKey = "formSubmitSuccess";
            const errorKey = "formFillFields";
            const defaultSuccess = `Thank you for your message, ${name}! (This is a demo - no data was sent)`;
            const defaultError = 'Please fill in all required fields.';

            if (name && email && message) {
                const alertMessage = (translations[currentLang] && translations[currentLang][successKey]) ?
                                     translations[currentLang][successKey].replace('{name}', name) : // Simple placeholder replacement
                                     defaultSuccess;
                alert(alertMessage);
                contactForm.reset();
            } else {
                 const alertMessage = (translations[currentLang] && translations[currentLang][errorKey]) ?
                                     translations[currentLang][errorKey] :
                                     defaultError;
                alert(alertMessage);
            }
        });
    }

    // --- Initial Load ---
    if (typeof applyTranslations === 'function') { // Ensure function is defined
      applyTranslations(currentLang); // Apply translations on page load
    }

});
