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
            heroTitle: "Wealth Management, Tailored to You",
            heroSubtitle: "At New Horizons Wealth Management, we don’t believe in one-size-fits-all solutions. Your financial situation is unique, and your wealth plan should be too. Whether you're planning for retirement, growing your investments, or securing your legacy, we design personalized strategies that align with your values and aspirations. With decades of experience and a commitment to transparency, our team gives you the confidence to focus on what matters most—knowing your financial future is in capable hands.",
            heroCTA: "Schedule a Consultation",
            triggerQuestionsTitle: "Are You Asking Yourself These Questions?",
            q1: "You work hard for your money, but haven't found out how your money can work for you yet?",
            q2: "Do you feel like you don't have full control over your investments?",
            q3: "Are you concerned about whether your savings are growing at the rate they should be?",
            q4: "Do you lack the time or expertise to navigate the complexities of the financial market?",
            q5: "Are you looking for a trusted partner to guide you towards your long-term financial goals?",
            q6: "Is your financial advisor recommending products exclusively from their own firm, rather than considering a full range of available options in the market?",
            featuresTitle: "Empowering Your Financial Journey",
            feature1Title: "Holistic Financial Planning",
            feature1Desc: "Through close partnership and full transparency, we align every aspect of your wealth strategy to support your long-term goals. From investments to insurance, estate planning to tax strategies, everything works together seamlessly for a clearer, more confident financial future.",
            feature2Title: "Quarterly Touchpoints",
            feature2Desc: "Your dedicated advisor will touch base with you as frequently as you want to monitor and make strategic changes.",
            feature3Title: "Strategic Investment Guidance",
            feature3Desc: "Benefit from expert advice and strategic changes tailored to your financial goals and market conditions for optimal growth and security.",
            feature4Title: "Insurance Planning",
            feature4Desc: "As part of our holistic approach, we incorporate insurance planning to help protect your wealth and secure your financial future. From life and disability coverage to long-term care solutions, we ensure your risk management strategy supports your overall financial goals.",
            aboutTitle: "About New Horizons Wealth Management",
            aboutP1: "At New Horizons Wealth Management, we recognize that managing wealth is both complex and time-intensive—especially for high-net-worth individuals with demanding lifestyles. With offices in Quebec, Ontario and Alberta, our firm is committed to delivering personalized, professional wealth management solutions that align with your financial goals and long-term vision. Our team of seasoned professionals collaborates closely with you to understand your unique circumstances and craft tailored strategies focused on investment growth, portfolio optimization, and risk management. Transparency, control, and consistent communication are the cornerstones of our approach, ensuring your financial plan stays aligned with your evolving needs.",
            aboutP2: "We provide secure, real-time online access to your investment accounts, offering you a clear, up-to-date view of your portfolio’s performance. In addition, our team offers proactive, responsive support—connecting with you as frequently as you wish to review progress, discuss adjustments, and make informed decisions together. Let New Horizons Wealth Management be your trusted partner in navigating today’s financial complexities and building a confident, secure future.",
            imranName: "Imran Mastan",
            imranP1: "With over a decade of experience in the financial industry, Imran has built a reputation for delivering thoughtful, results-driven wealth management solutions tailored to each client's unique goals. His expertise spans asset growth, tax-efficient investment strategies, retirement and estate planning—ensuring that every aspect of a client’s financial life is handled with care and precision.",
            imranP2: "Imran takes a client-first approach rooted in trust, integrity, and transparency. He is deeply committed to his fiduciary responsibility, always acting in the best interest of those he serves. His clients value not only his technical knowledge but also his genuine dedication to helping them build, preserve, and transition their wealth with confidence.",
            imranP3: "Whether it's growing your portfolio, minimizing your tax liabilities, or ensuring your estate plan reflects your legacy, Imran works diligently to simplify complexity and provide peace of mind—so you can focus on what matters most.",
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
            footerLocations: "Montreal | Toronto"
        },
        fr: {
            pageTitle: "Gestion de Patrimoine Nouveaux Horizons - Amélioré",
            navAbout: "À Propos de Nous",
            navServices: "Services",
            navFeatures: "Nos Atouts",
            navQuestions: "Vos Questions?",
            navContact: "Nous Joindre",
            heroTitle: "Gestion de Patrimoine, Sur Mesure Pour Vous",
            heroSubtitle: "Chez Gestion de Patrimoine Nouveaux Horizons, nous ne croyons pas aux solutions universelles. Votre situation financière est unique, et votre plan patrimonial devrait l'être aussi. Que vous planifiez votre retraite, la croissance de vos investissements ou la protection de votre héritage, nous concevons des stratégies personnalisées qui s'alignent sur vos valeurs et aspirations. Forts de décennies d'expérience et d'un engagement envers la transparence, notre équipe vous donne la confiance nécessaire pour vous concentrer sur ce qui compte le plus, sachant que votre avenir financier est entre de bonnes mains.",
            heroCTA: "Planifier une Consultation",
            triggerQuestionsTitle: "Vous Posez-Vous Ces Questions?",
            q1: "Vous travaillez fort pour votre argent, mais n'avez pas encore découvert comment votre argent peut travailler pour vous?",
            q2: "Sentez-vous que vous n'avez pas le plein contrôle de vos investissements?",
            q3: "Êtes-vous préoccupé(e) par le taux de croissance de votre épargne?",
            q4: "Manquez-vous de temps ou d'expertise pour naviguer les complexités du marché financier?",
            q5: "Recherchez-vous un partenaire de confiance pour vous guider vers vos objectifs financiers à long terme?",
            q6: "Votre conseiller financier recommande-t-il exclusivement des produits de sa propre firme, plutôt que de considérer un éventail complet d'options disponibles sur le marché?",
            featuresTitle: "Optimiser Votre Parcours Financier",
            feature1Title: "Planification Financière Globale",
            feature1Desc: "Grâce à un partenariat étroit et une transparence totale, nous alignons chaque aspect de votre stratégie patrimoniale pour soutenir vos objectifs à long terme. Des investissements à l'assurance, de la planification successorale aux stratégies fiscales, tout fonctionne ensemble de manière transparente pour un avenir financier plus clair et plus confiant.",
            feature2Title: "Points de Contact Trimestriels",
            feature2Desc: "Votre conseiller dédié communiquera avec vous aussi fréquemment que vous le désirez pour effectuer le suivi et apporter des ajustements stratégiques.",
            feature3Title: "Conseils Stratégiques en Placements",
            feature3Desc: "Bénéficiez de conseils d'experts et d'ajustements stratégiques adaptés à vos objectifs financiers et aux conditions du marché pour une croissance et une sécurité optimales.",
            feature4Title: "Planification d'Assurance",
            feature4Desc: "Dans le cadre de notre approche globale, nous intégrons la planification d'assurance pour aider à protéger votre patrimoine et sécuriser votre avenir financier. De la couverture vie et invalidité aux solutions de soins de longue durée, nous veillons à ce que votre stratégie de gestion des risques soutienne vos objectifs financiers globaux.",
            aboutTitle: "À Propos de Gestion de Patrimoine Nouveaux Horizons",
            aboutP1: "Chez Gestion de Patrimoine Nouveaux Horizons, nous reconnaissons que la gestion de patrimoine est à la fois complexe et exigeante en temps, surtout pour les particuliers fortunés aux modes de vie prenants. Avec des bureaux au Québec, en Ontario et en Alberta, notre firme s'engage à fournir des solutions de gestion de patrimoine personnalisées et professionnelles qui s'alignent sur vos objectifs financiers et votre vision à long terme. Notre équipe de professionnels chevronnés collabore étroitement avec vous pour comprendre votre situation unique et élaborer des stratégies sur mesure axées sur la croissance des investissements, l'optimisation du portefeuille et la gestion des risques. La transparence, le contrôle et une communication constante sont les pierres angulaires de notre approche, garantissant que votre plan financier reste aligné sur vos besoins évolutifs.",
            aboutP2: "Nous fournissons un accès en ligne sécurisé et en temps réel à vos comptes d'investissement, vous offrant une vue claire et à jour de la performance de votre portefeuille. De plus, notre équipe offre un soutien proactif et réactif, en communiquant avec vous aussi fréquemment que vous le souhaitez pour examiner les progrès, discuter des ajustements et prendre ensemble des décisions éclairées. Laissez Gestion de Patrimoine Nouveaux Horizons être votre partenaire de confiance pour naviguer dans les complexités financières actuelles et bâtir un avenir confiant et sécurisé.",
            imranName: "Imran Mastan",
            imranP1: "Avec plus d'une décennie d'expérience dans le secteur financier, Imran s'est bâti une réputation pour la prestation de solutions de gestion de patrimoine réfléchies et axées sur les résultats, adaptées aux objectifs uniques de chaque client. Son expertise couvre la croissance des actifs, les stratégies d'investissement fiscalement avantageuses, la planification de la retraite et successorale, garantissant que chaque aspect de la vie financière d'un client est traité avec soin et précision.",
            imranP2: "Imran adopte une approche axée sur le client, ancrée dans la confiance, l'intégrité et la transparence. Il est profondément engagé envers sa responsabilité fiduciaire, agissant toujours dans le meilleur intérêt de ceux qu'il sert. Ses clients apprécient non seulement ses connaissances techniques, mais aussi son dévouement sincère à les aider à bâtir, préserver et transmettre leur patrimoine avec confiance.",
            imranP3: "Qu'il s'agisse de faire croître votre portefeuille, de minimiser vos obligations fiscales ou de veiller à ce que votre plan successoral reflète votre héritage, Imran travaille avec diligence pour simplifier la complexité et offrir la tranquillité d'esprit, afin que vous puissiez vous concentrer sur ce qui compte le plus.",
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
            footerLocations: "Montréal | Toronto"
        }
    };

    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');
    let currentLang = localStorage.getItem('language') || 'en';

    function applyTranslations(lang) {
        document.documentElement.lang = lang;
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

        if (enBtn && frBtn) {
            if (lang === 'en') {
                enBtn.classList.add('active');
                frBtn.classList.remove('active');
            } else {
                frBtn.classList.add('active');
                enBtn.classList.remove('active');
            }
        }
    }

    if (enBtn && frBtn) {
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

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      // The 'footerRights' translation key will populate the parent <p> tag, including the year.
      // The span with id="current-year" will display the number from the translated string.
      // If you need just the number to be dynamic and separate from translation, you might need to adjust.
      // For instance, `footerRights: "© {year} Company Name. All rights reserved."` and replace {year} in JS.
      // Current setup uses the year from `new Date().getFullYear()` directly in the translation string.
    }

    const sections = document.querySelectorAll('main section[id]');
    const mainNavLinksQuery = document.querySelectorAll('.main-nav a');
    const headerHeight = document.querySelector('.site-header') ? document.querySelector('.site-header').offsetHeight : 0;

    function changeNavOnScroll() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 20;
            if (window.pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        mainNavLinksQuery.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') && link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active-link');
            }
        });
    }
    if (sections.length > 0 && mainNavLinksQuery.length > 0) {
        window.addEventListener('scroll', changeNavOnScroll);
        changeNavOnScroll();
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Add these keys to your translations object for translated alerts
            const successAlertKey = "formAlertSuccess";
            const errorAlertKey = "formAlertError";
            const defaultSuccessAlert = `Thank you for your message, ${name}! (This is a demo - no data was sent)`;
            const defaultErrorAlert = 'Please fill in all required fields.';

            if (name && email && message) {
                let alertMessage = defaultSuccessAlert;
                if (translations[currentLang] && translations[currentLang][successAlertKey]) {
                    alertMessage = translations[currentLang][successAlertKey].replace('{name}', name);
                }
                alert(alertMessage);
                contactForm.reset();
            } else {
                let alertMessage = defaultErrorAlert;
                 if (translations[currentLang] && translations[currentLang][errorAlertKey]) {
                    alertMessage = translations[currentLang][errorAlertKey];
                }
                alert(alertMessage);
            }
        });
    }

    if (typeof applyTranslations === 'function') {
      applyTranslations(currentLang);
    }
});
