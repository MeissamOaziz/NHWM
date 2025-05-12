document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for logo URL - Replace with actual URL from the attached document
    const logoUrl = 'path/to/your/logo.png';
    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        logoImg.src = logoUrl;
    }

    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');

    if (enBtn && frBtn) {
        enBtn.addEventListener('click', function() {
            setLanguage('en');
            enBtn.classList.add('active');
            frBtn.classList.remove('active');
        });

        frBtn.addEventListener('click', function() {
            setLanguage('fr');
            frBtn.classList.add('active');
            enBtn.classList.remove('active');
        });

        // Initial language setting (you might want to detect browser language or use a default)
        const defaultLang = 'en';
        setLanguage(defaultLang);
        if (defaultLang === 'en') {
            enBtn.classList.add('active');
        } else if (defaultLang === 'fr') {
            frBtn.classList.add('active');
        }
    }

    function setLanguage(lang) {
        const elements = {
            'title': {
                'en': 'New Horizons Wealth Management',
                'fr': 'Gestion de Patrimoine Nouveaux Horizons'
            },
            'header nav ul li:nth-child(1) a': {
                'en': 'About Us',
                'fr': 'À Propos'
            },
            'header nav ul li:nth-child(2) a': {
                'en': 'Services',
                'fr': 'Services'
            },
            'header nav ul li:nth-child(3) a': {
                'en': 'Contact Us',
                'fr': 'Contactez-Nous'
            },
            '#hero.call-to-action h2': {
                'en': 'Ready to Take Control of Your Financial Future?',
                'fr': 'Prêt à Prendre le Contrôle de Votre Avenir Financier?'
            },
            '#hero.call-to-action p': {
                'en': 'Sign up today for a personalized consultation.',
                'fr': 'Inscrivez-vous dès aujourd\'hui pour une consultation personnalisée.'
            },
            '#hero.call-to-action.signup-btn': {
                'en': 'Sign Up Now',
                'fr': 'Inscrivez-Vous Maintenant'
            },
            '#trigger-questions h2': {
                'en': 'Are You Asking Yourself These Questions?',
                'fr': 'Vous Posez-Vous Ces Questions?'
            },
            '#trigger-questions ul li:nth-child(1) p': {
                'en': 'You work hard for your money, but haven\'t found out how your money can work for you yet?',
                'fr': 'Vous travaillez dur pour votre argent, mais n\'avez pas encore trouvé comment votre argent peut travailler pour vous?'
            },
            '#trigger-questions ul li:nth-child(2) p': {
                'en': 'Do you feel like you don\'t have full control over your investments?',
                'fr': 'Avez-vous l\'impression de ne pas avoir le contrôle total sur vos investissements?'
            },
            '#trigger-questions ul li:nth-child(3) p': {
                'en': 'Are you concerned about whether your savings are growing at the rate they should be?',
                'fr': 'Êtes-vous préoccupé de savoir si votre épargne croît au rythme où elle devrait le faire?'
            },
            '#trigger-questions ul li:nth-child(4) p': {
                'en': 'Do you lack the time or expertise to navigate the complexities of the financial market?',
                'fr': 'Manquez-vous de temps ou d\'expertise pour naviguer dans les complexités du marché financier?'
            },
            '#trigger-questions ul li:nth-child(5) p': {
                'en': 'Are you looking for a trusted partner to guide you towards your long-term financial goals?',
                'fr': 'Recherchez-vous un partenaire de confiance pour vous guider vers vos objectifs financiers à long terme?'
            },
            '#features h2': {
                'en': 'Empowering Your Financial Journey',
                'fr': 'Donner de la Puissance à Votre Parcours Financier'
            },
            '#features.feature-list.feature-item:nth-child(1) h3': {
                'en': 'Real-Time Portfolio Tracking',
                'fr': 'Suivi de Portefeuille en Temps Réel'
            },
            '#features.feature-list.feature-item:nth-child(1) p': {
                'en': 'Gain online access to monitor the performance of your portfolio and investments anytime, anywhere.',
                'fr': 'Bénéficiez d\'un accès en ligne pour suivre la performance de votre portefeuille et de vos investissements à tout moment, où que vous soyez.'
            },
            '#features.feature-list.feature-item:nth-child(2) h3': {
                'en': 'Personalized Advisor Support',
                'fr': 'Soutien Personnalisé d\'un Conseiller'
            },
            '#features.feature-list.feature-item:nth-child(2) p': {
                'en': 'Your dedicated advisor will touch base with you as frequently as you want to monitor and make strategic changes.',
                'fr': 'Votre conseiller dédié vous contactera aussi souvent que vous le souhaitez pour surveiller et apporter des changements stratégiques.'
            },
            '#features.feature-list.feature-item:nth-child(3) h3': {
                'en': 'Strategic Investment Guidance',
                'fr': 'Conseils Stratégiques en Investissement'
            },
            '#features.feature-list.feature-item:nth-child(3) p': {
                'en': 'Benefit from expert advice and strategic changes tailored to your financial goals and market conditions.',
                'fr': 'Bénéficiez de conseils d\'experts et de changements stratégiques adaptés à vos objectifs financiers et aux conditions du marché.'
            },
            '#about h2': {
                'en': 'About New Horizons Wealth Management',
                'fr': 'À Propos de Gestion de Patrimoine Nouveaux Horizons'
            },
            '#about p:nth-child(2)': {
                'en': 'At New Horizons Wealth Management, we understand that managing wealth can be a complex and time-consuming endeavor, especially for high-net-worth individuals with demanding schedules. Based in Montreal and Toronto, we are dedicated to providing personalized and professional wealth management services to help you achieve your financial aspirations. Our team of experienced advisors works closely with you to understand your unique needs and develop tailored strategies for investment and portfolio growth. We believe in transparency, control, and regular communication to ensure your financial journey is on the right track.',
                'fr': 'Chez Gestion de Patrimoine Nouveaux Horizons, nous comprenons que la gestion de patrimoine peut être une entreprise complexe et chronophage, en particulier pour les particuliers fortunés ayant des horaires exigeants. Basés à Montréal et à Toronto, nous nous engageons à fournir des services de gestion de patrimoine personnalisés et professionnels pour vous aider à atteindre vos aspirations financières. Notre équipe de conseillers expérimentés travaille en étroite collaboration avec vous pour comprendre vos besoins uniques et élaborer des stratégies sur mesure pour la croissance de vos investissements et de votre portefeuille. Nous croyons en la transparence, au contrôle et à une communication régulière pour garantir que votre parcours financier est sur la bonne voie.'
            },
            '#about p:nth-child(3)': {
                'en': 'We empower our clients with online access to track their investments in real time, giving you a clear picture of your financial performance. Furthermore, our advisors are committed to providing proactive support and will connect with you as often as you prefer to review your portfolio and make informed decisions together. Let New Horizons Wealth Management be your trusted partner in navigating the financial landscape and securing your financial future.',
                'fr': 'Nous donnons à nos clients les moyens de suivre leurs investissements en temps réel grâce à un accès en ligne, vous offrant une vision claire de votre performance financière. De plus, nos conseillers s\'engagent à fournir un soutien proactif et vous contacteront aussi souvent que vous le préférez pour examiner votre portefeuille et prendre des décisions éclairées ensemble. Laissez Gestion de Patrimoine Nouveaux Horizons être votre partenaire de confiance pour naviguer dans le paysage financier et sécuriser votre avenir financier.'
            },
            '#services h2': {
                'en': 'Our Comprehensive Services',
                'fr': 'Nos Services Complets'
            },
            '#services ul li:nth-child(1)': {
                'en': 'Investment Management',
                'fr': 'Gestion d\'Investissement'
            },
            '#services ul li:nth-child(2)': {
                'en': 'Portfolio Growth Strategies',
                'fr': 'Stratégies de Croissance de Portefeuille'
            },
            '#services ul li:nth-child(3)': {
                'en': 'Real-Time Performance Tracking',
                'fr': 'Suivi de Performance en Temps Réel'
            },
            '#services ul li:nth-child(4)': {
                'en': 'Personalized Financial Planning',
                'fr': 'Planification Financière Personnalisée'
            },
            '#services ul li:nth-child(5)': {
                'en': 'Retirement Planning',
                'fr': 'Planification de la Retraite'
            },
            '#services ul li:nth-child(6)': {
                'en': 'Estate Planning',
                'fr': 'Planification Successorale'
            },
            '#services ul li:nth-child(7)': {
                'en': 'Regular Advisor Check-ins',
                'fr': 'Points de Contact Réguliers avec un Conseiller'
            },
            '#services ul li:nth-child(8)': {
                'en': 'Strategic Financial Advice',
                'fr': 'Conseils Financiers Stratégiques'
            },
            '#contact h2': {
                'en': 'Contact Us',
                'fr': 'Contactez-Nous'
            },
            '#contact p': {
                'en': 'Ready to explore new horizons for your wealth? Get in touch with our team today.',
                'fr': 'Prêt à explorer de nouveaux horizons pour votre patrimoine? Contactez notre équipe dès aujourd\'hui.'
            },
            '#contact-form.form-group label[for="name"]': {
                'en': 'Name:',
                'fr': 'Nom :'
            },
            '#contact-form.form-group label[for="email"]': {
                'en': 'Email:',
                'fr': 'Courriel :'
            },
            '#contact-form.form-group label[for="phone"]': {
                'en': 'Phone:',
                'fr': 'Téléphone :'
            },
            '#contact-form.form-group label[for="message"]': {
                'en': 'Message:',
                'fr': 'Message :'
            },
            '#contact-form.submit-btn': {
                'en': 'Send Message',
                'fr': 'Envoyer le Message'
            },
            'footer p:nth-child(1)': {
                'en': '&copy; 2023 New Horizons Wealth Management. All rights reserved.',
                'fr': '&copy; 2023 Gestion de Patrimoine Nouveaux Horizons. Tous droits réservés.'
            },
            'footer p:nth-child(2)': {
                'en': 'Montreal | Toronto',
                'fr': 'Montréal | Toronto'
            }
        };

        for (const selector in elements) {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = elements[selector][lang];
            }
        }

        document.title = elements['title'][lang];
    }
});
