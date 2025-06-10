document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            pageTitle: "New Horizons Wealth Management",
            navAbout: "About Us",
            navServices: "Services",
            navFeatures: "Features",
            navTestimonials: "Testimonials",
            navNumbers: "Our Numbers",
            navContact: "Contact Us",
            heroTitle: "Wealth Management, Tailored to You",
            heroTagline: "Your Financial Journey, Elevated.",
            heroCTA: "Schedule a Consultation",
            aboutTitle: "About New Horizons Wealth Management",
            aboutIntro: "At New Horizons Wealth Management, we move beyond standard solutions to offer wealth management that's precisely tailored to your individual aspirations. Whether you're envisioning a comfortable retirement, strategic investment growth, or a secure financial legacy, our approach is rooted in creating personalized strategies that resonate with your values and long-term objectives.",
            aboutP2: "With a foundation built on extensive experience and a steadfast commitment to transparency, our dedicated team empowers you to navigate your financial future with confidence and clarity. We believe in fostering strong, collaborative relationships, providing clear advice supported by real-time access to your investment portfolio. Let New Horizons Wealth Management be your trusted partner in simplifying the complexities of today’s financial markets.",
            teamSectionTitle: "Our Team",
            imranName: "Imran Mastan",
            imranP1: "With over a decade of experience in the financial industry, Imran has built a reputation for delivering thoughtful, results-driven wealth management solutions tailored to each client's unique goals. His expertise spans asset growth, tax-efficient investment strategies, retirement and estate planning—ensuring that every aspect of a client’s financial life is handled with care and precision.",
            imranP2: "Imran takes a client-first approach rooted in trust, integrity, and transparency. He is deeply committed to his fiduciary responsibility, always acting in the best interest of those he serves. His clients value not only his technical knowledge but also his genuine dedication to helping them build, preserve, and transition their wealth with confidence.",
            imranP3: "Whether it's growing your portfolio, minimizing your tax liabilities, or ensuring your estate plan reflects your legacy, Imran works diligently to simplify complexity and provide peace of mind—so you can focus on what matters most.",
            numbersTitle: "Our Numbers Speak Volumes",
            numbersExperience: "Years of Experience",
            numbersRevenue: "Increase in Client Revenue (Average)",
            numbersSatisfaction: "Client Satisfaction Rate",
            numbersClients: "Happy Clients",
            featuresTitle: "Empowering Your Financial Journey",
            feature1Title: "Holistic Financial Planning",
            feature1Desc: "Through close partnership and full transparency, we align every aspect of your wealth strategy to support your long-term goals. From investments to insurance, estate planning to tax strategies, everything works together seamlessly.",
            feature2Title: "Quarterly Touchpoints",
            feature2Desc: "Your dedicated advisor will touch base with you as frequently as you want to monitor and make strategic changes.",
            feature3Title: "Strategic Investment Guidance",
            feature3Desc: "Benefit from expert advice and strategic changes tailored to your financial goals and market conditions for optimal growth and security.",
            feature4Title: "Insurance Planning",
            feature4Desc: "As part of our holistic approach, we incorporate insurance planning to help protect your wealth and secure your financial future.",
            testimonialsTitle: "What People Say",
            testimonial1Quote: `"Working with New Horizons has been a game-changer for my financial future. Their personalized approach and expert guidance have given me peace of mind."`,
            testimonial1Author: "- Sarah M.",
            testimonial2Quote: `"I appreciate the transparency and regular communication from their team. They truly understand my goals and have helped me achieve significant financial growth."`,
            testimonial2Author: "- John B.",
            testimonial3Quote: `"New Horizons provided tailored advice that perfectly suited my retirement planning needs. I feel much more secure about my future thanks to their expertise."`,
            testimonial3Author: "- Emily K.",
            triggerQuestionsTitle: "Are You Asking Yourself These Questions?",
            q1: "You work hard for your money, but haven't found out how your money can work for you yet?",
            q2: "Do you feel like you don't have full control over your investments?",
            q3: "Are you concerned about whether your savings are growing at the rate they should be?",
            q4: "Do you lack the time or expertise to navigate the complexities of the financial market?",
            q5: "Are you looking for a trusted partner to guide you towards your long-term financial goals?",
            q6: "Is your financial advisor recommending products exclusively from their own firm, rather than considering a full range of available options in the market?",
            servicesTitle: "Our Comprehensive Services",
            service1: "Investment Management",
            service2: "Insurance Planning",
            service4: "Personalized Financial Planning",
            service5: "Retirement Planning",
            service6: "Estate Planning",
            service7: "Regular Advisor Check-ins",
            contactTitle: "Contact Us",
            contactSubtitle: "Ready to explore new horizons for your wealth? Get in touch with our team today.",
            formName: "Name:",
            formEmail: "Email:",
            formPhone: "Phone:",
            formMessage: "Message:",
            formSubmit: "Send Message",
            footerPartnership: "In partnership with",
            footerRights: `© ${new Date().getFullYear()} New Horizons Wealth Management. All rights reserved.`,
            footerLocations: "Ontario, Québec, Alberta" 
        },
        fr: {
            pageTitle: "Gestion de Patrimoine Nouveaux Horizons",
            navAbout: "À Propos",
            navServices: "Services",
            navFeatures: "Nos Atouts",
            navTestimonials: "Témoignages",
            navNumbers: "Nos Chiffres",
            navContact: "Nous Joindre",
            heroTitle: "Gestion de Patrimoine, Sur Mesure Pour Vous",
            heroTagline: "Votre Parcours Financier, Rehaussé.",
            heroCTA: "Planifier une Consultation",
            aboutTitle: "À Propos de Gestion de Patrimoine Nouveaux Horizons",
            aboutIntro: "Chez Gestion de Patrimoine Nouveaux Horizons, nous allons au-delà des solutions standards pour offrir une gestion de patrimoine précisément adaptée à vos aspirations individuelles. Que vous envisagiez une retraite confortable, une croissance stratégique de vos investissements ou un héritage financier sécurisé, notre approche est ancrée dans la création de stratégies personnalisées qui résonnent avec vos valeurs et vos objectifs à long terme.",
            aboutP2: "Fondée sur une vaste expérience et un engagement inébranlable envers la transparence, notre équipe dévouée vous donne les moyens de naviguer votre avenir financier avec confiance et clarté. Nous croyons en la promotion de relations solides et collaboratives, en fournissant des conseils clairs soutenus par un accès en temps réel à votre portefeuille d'investissement. Laissez Gestion de Patrimoine Nouveaux Horizons être votre partenaire de confiance pour simplifier les complexités des marchés financiers d'aujourd'hui.",
            teamSectionTitle: "Notre Équipe",
            imranName: "Imran Mastan",
            imranP1: "Avec plus d'une décennie d'expérience dans le secteur financier, Imran s'est bâti une réputation pour la prestation de solutions de gestion de patrimoine réfléchies et axées sur les résultats, adaptées aux objectifs uniques de chaque client. Son expertise couvre la croissance des actifs, les stratégies d'investissement fiscalement avantageuses, la planification de la retraite et successorale, garantissant que chaque aspect de la vie financière d'un client est traité avec soin et précision.",
            imranP2: "Imran adopte une approche axée sur le client, ancrée dans la confiance, l'intégrité et la transparence. Il est profondément engagé envers sa responsabilité fiduciaire, agissant toujours dans le meilleur intérêt de ceux qu'il sert. Ses clients apprécient non seulement ses connaissances techniques, mais aussi son dévouement sincère à les aider à bâtir, préserver et transmettre leur patrimoine avec confiance.",
            imranP3: "Qu'il s'agisse de faire croître votre portefeuille, de minimiser vos obligations fiscales ou de veiller à ce que votre plan successoral reflète votre héritage, Imran travaille avec diligence pour simplifier la complexité et offrir la tranquillité d'esprit, afin que vous puissiez vous concentrer sur ce qui compte le plus.",
            numbersTitle: "Nos Chiffres Parlent d'Eux-Mêmes",
            numbersExperience: "Années d'Expérience",
            numbersRevenue: "Augmentation des Revenus Clients (Moyenne)",
            numbersSatisfaction: "Taux de Satisfaction Client",
            numbersClients: "Clients Satisfaits",
            featuresTitle: "Optimiser Votre Parcours Financier",
            feature1Title: "Planification Financière Globale",
            feature1Desc: "Grâce à un partenariat étroit et une transparence totale, nous alignons chaque aspect de votre stratégie patrimoniale pour soutenir vos objectifs à long terme. Des investissements à l'assurance, de la planification successorale aux stratégies fiscales, tout fonctionne ensemble de manière transparente.",
            feature2Title: "Points de Contact Trimestriels",
            feature2Desc: "Votre conseiller dédié communiquera avec vous aussi fréquemment que vous le désirez pour effectuer le suivi et apporter des ajustements stratégiques.",
            feature3Title: "Conseils Stratégiques en Placements",
            feature3Desc: "Bénéficiez de conseils d'experts et d'ajustements stratégiques adaptés à vos objectifs financiers et aux conditions du marché pour une croissance et une sécurité optimales.",
            feature4Title: "Planification d'Assurance",
            feature4Desc: "Dans le cadre de notre approche globale, nous intégrons la planification d'assurance pour aider à protéger votre patrimoine et sécuriser votre avenir financier.",
            testimonialsTitle: "Ce Que Les Gens Disent",
            testimonial1Quote: `"Travailler avec Nouveaux Horizons a changé la donne pour mon avenir financier. Leur approche personnalisée et leurs conseils d'experts m'ont apporté une tranquillité d'esprit."`,
            testimonial1Author: "- Sarah M.",
            testimonial2Quote: `"J'apprécie la transparence et la communication régulière de leur équipe. Ils comprennent vraiment mes objectifs et m'ont aidé à réaliser une croissance financière significative."`,
            testimonial2Author: "- John B.",
            testimonial3Quote: `"Nouveaux Horizons a fourni des conseils sur mesure qui correspondaient parfaitement à mes besoins en matière de planification de la retraite. Je me sens beaucoup plus en sécurité pour mon avenir grâce à leur expertise."`,
            testimonial3Author: "- Emily K.",
            triggerQuestionsTitle: "Vous Posez-Vous Ces Questions?",
            q1: "Vous travaillez dur pour votre argent, mais n'avez pas encore découvert comment votre argent peut travailler pour vous?",
            q2: "Sentez-vous que vous n'avez pas le plein contrôle de vos investissements?",
            q3: "Êtes-vous préoccupé(e) par le taux de croissance de votre épargne?",
            q4: "Manquez-vous de temps ou d'expertise pour naviguer les complexités du marché financier?",
            q5: "Recherchez-vous un partenaire de confiance pour vous guider vers vos objectifs financiers à long terme?",
            q6: "Votre conseiller financier recommande-t-il exclusivement des produits de sa propre firme, plutôt que de considérer un éventail complet d'options disponibles sur le marché?",
            servicesTitle: "Nos Services Complets",
            service1: "Gestion de Placements",
            service2: "Planification d'Assurances",
            service4: "Planification Financière Personnalisée",
            service5: "Planification de la Retraite",
            service6: "Planification Successorale",
            service7: "Rencontres Régulières avec le Conseiller",
            contactTitle: "Nous Joindre",
            contactSubtitle: "Prêt(e) à explorer de nouveaux horizons pour votre patrimoine? Contactez notre équipe dès aujourd'hui.",
            formName: "Nom :",
            formEmail: "Courriel :",
            formPhone: "Téléphone :",
            formMessage: "Message :",
            formSubmit: "Envoyer le Message",
            footerPartnership: "En partenariat avec",
            footerRights: `© ${new Date().getFullYear()} Gestion de Patrimoine Nouveaux Horizons. Tous droits réservés.`,
            footerLocations: "Ontario, Québec, Alberta"
        }
    };

    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');
    let currentLang = localStorage.getItem('language') || 'en';
    const questionsContainer = document.getElementById('questions-container');

    // --- Animation Observers ---
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const questionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const questions = Array.from(entry.target.children);
                let delay = 0;
                questions.forEach(q => {
                    setTimeout(() => { q.classList.add('visible'); }, delay);
                    delay += 1000; // Stagger each question's appearance
                });
                observer.unobserve(entry.target); // Unobserve after it has run
            }
        });
    }, { threshold: 0.2 });

    // --- Core Functions ---
    function applyStaticTranslations(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    function populateAndObserveQuestions(lang) {
        if (!questionsContainer) return;
        questionsContainer.innerHTML = ''; 
        for (let i = 1; i <= 6; i++) {
            const p = document.createElement('p');
            p.className = 'question'; // CSS will keep it invisible initially
            p.dataset.key = `q${i}`;
            p.innerHTML = `<i>${translations[lang][`q${i}`] || ''}</i>`;
            questionsContainer.appendChild(p);
        }
        // Disconnect the old observer and re-observe the container
        // This ensures the animation can run again for the new elements
        questionObserver.disconnect();
        questionObserver.observe(questionsContainer);
    }
    
    function setLanguage(lang) {
        applyStaticTranslations(lang);
        populateAndObserveQuestions(lang); // This now handles the questions section

        // Update button active states
        if (lang === 'en') {
            enBtn.classList.add('active');
            frBtn.classList.remove('active');
        } else {
            frBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    }

    // --- Event Listeners and Initializers ---
    
    // Language Switcher
    if (enBtn && frBtn) {
        enBtn.addEventListener('click', () => {
            currentLang = 'en';
            localStorage.setItem('language', currentLang);
            setLanguage(currentLang);
        });

        frBtn.addEventListener('click', () => {
            currentLang = 'fr';
            localStorage.setItem('language', currentLang);
            setLanguage(currentLang);
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('.main-nav a[href^="#"], .cta-button').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerOffset = document.querySelector('.site-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });
    
    // Set up General Scroll Animations
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        animationObserver.observe(el);
    });
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! (This is a demo)');
            contactForm.reset();
        });
    }

    // Initial Load
    document.getElementById('current-year').textContent = new Date().getFullYear();
    setLanguage(currentLang); // Initial call to set language and populate questions
});
