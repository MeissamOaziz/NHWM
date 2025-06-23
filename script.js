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
            navLogin: "Client Login",
            logoSrc: "New Horizons - Logo - RGB.png",
            heroTitle: "Your Goals. Your Future.<br>Our Expertise.",
            heroTagline: "Navigate your financial journey with confidence.",
            heroCTA: "Schedule a Consultation",
            aboutTitle: "Your Trusted Montreal Wealth Management Firm",
            aboutIntro: "At New Horizons Wealth Management, we move beyond standard solutions to offer wealth management in Montreal that's precisely tailored to your individual aspirations. Whether you're envisioning a comfortable retirement, strategic investment growth, or a secure financial legacy, our approach as dedicated financial advisors is rooted in creating personalized strategies that resonate with your values and long-term objectives in Quebec and Ontario.",
            aboutP2: "With a foundation built on extensive experience and a steadfast commitment to transparency, our dedicated team empowers you to navigate your financial future with confidence and clarity. We believe in fostering strong, collaborative relationships, providing clear advice supported by real-time access to your investment portfolio. Let New Horizons Wealth Management be your trusted partner in simplifying the complexities of today’s financial markets.",
            teamSectionTitle: "Our Team",
            imranName: "Imran Mastan",
            imranP1: "With over a decade of experience in the financial industry, Imran has built a reputation for delivering thoughtful, results-driven wealth management solutions tailored to each client's unique goals. His expertise spans asset growth, tax-efficient investment strategies, retirement and estate planning—ensuring that every aspect of a client’s financial life is handled with care and precision.",
            imranP2: "Imran takes a client-first approach rooted in trust, integrity, and transparency. He is deeply committed to his responsibility, always acting in the best interest of those he serves. His clients value not only his technical knowledge but also his genuine dedication to helping them build, preserve, and transition their wealth with confidence.",
            numbersTitle: "Our Numbers Speak Volumes",
            numbersExperience: "Years of Experience",
            numbersSatisfaction: "Client Retention Rate",
            numbersClients: "Satisfied Clients",
            featuresTitle: "Empowering Your Financial Journey",
            feature1Title: "Holistic Financial Planning",
            feature1Desc: "Through close partnership and full transparency, we align every aspect of your wealth strategy to support your long-term goals. From investments to insurance, estate planning to tax strategies, everything works together seamlessly.",
            feature2Title: "Quarterly Touchpoints",
            feature2Desc: "Your dedicated advisor will touch base with you as frequently as you want to monitor and make strategic changes.",
            feature3Title: "Strategic Investment Guidance",
            feature3Desc: "Benefit from expert advice and strategic changes tailored to your financial goals and market conditions for optimal growth and security.",
            feature4Title: "Insurance Planning",
            feature4Desc: "As part of our holistic approach, we incorporate insurance planning to help protect your wealth and secure your financial future.",
            testimonialsTitle: "What Our Clients Say",
            testimonial1Quote: `"Working with New Horizons has been a game-changer for my financial future. Their personalized approach and expert guidance have given me peace of mind."`,
            testimonial1Author: "- Sarah M.",
            testimonial2Quote: `"I appreciate the transparency and regular communication from their team. They truly understand my goals and have helped me achieve significant financial growth."`,
            testimonial2Author: "- John B.",
            testimonial3Quote: `"New Horizons provided tailored advice that perfectly suited my retirement planning needs. I feel much more secure about my future thanks to their expertise."`,
            testimonial3Author: "- Emily K.",
            testimonial4Quote: `"The level of detail in their financial planning is unmatched. I finally have a clear roadmap for my family's wealth."`,
            testimonial4Author: "- David L.",
            testimonial5Quote: `"Navigating tax season used to be a nightmare. Their strategic advice has saved me a significant amount and simplified the entire process."`,
            testimonial5Author: "- Jennifer A.",
            testimonial6Quote: `"Their team is not only knowledgeable but also genuinely caring. It feels like a true partnership working towards my best interests."`,
            testimonial6Author: "- Michael T.",
            testimonial7Quote: `"As a business owner, my finances are complex. New Horizons has seamlessly integrated my personal and business wealth plans."`,
            testimonial7Author: "- Olivia C.",
            testimonial8Quote: `"The peace of mind that comes from their comprehensive insurance planning is invaluable. I know my family is protected."`,
            testimonial8Author: "- Robert P.",
            testimonial9Quote: `"Their quarterly touchpoints keep me informed and confident in our strategy, without overwhelming me with unnecessary details."`,
            testimonial9Author: "- Jessica W.",
            testimonial10Quote: `"I've recommended New Horizons to several colleagues. Their expertise and commitment to clients are second to none."`,
            testimonial10Author: "- Mark S.",
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
            contactTitle: "Contact Your Financial Advisor",
            contactSubtitle: "Ready to speak with a financial advisor in Montreal? Get in touch with our team today.",
            revealPhone: "Click to Reveal Phone Number",
            formName: "Name:",
            formEmail: "Email:",
            formPhone: "Phone:",
            formMessage: "Message:",
            formSubmit: "Send Message",
            formSuccess: "Your message has been sent. Our advisor will reach out to you within the next 24 hours.",
            formError: "Oops! There was a problem sending your message.",
            advisorReportBtn: "Know Your Advisor - Investment Advisor Report",
            legalLink: "Legal",
            privacyLink: "Privacy Policy",
            ciroLink: "Know Your Advisor",
            disclaimersLink: "Disclaimers",
            footerPartnership: "In partnership with",
            footerRights: `© ${new Date().getFullYear()} New Horizons Wealth Management. All rights reserved.`,
            footerLocations: "Ontario, Québec",
            siteCredit: "This website was made by Toujours Ouvert"
        },
        fr: {
            // (All French translations, including new `siteCredit` key, would be here)
        }
    };

    // --- Core Functions ---
    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');
    let currentLang = localStorage.getItem('language') || 'en';
    const logoImg = document.getElementById('logo-img');
    const questionsContainer = document.getElementById('questions-container');
    const testimonialSlider = document.getElementById('testimonial-slider');

    function applyStaticTranslations(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                if (key === 'heroTitle') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        if (logoImg && translations[lang] && translations[lang].logoSrc) {
            logoImg.src = translations[lang].logoSrc;
        }
    }
    
    function populateDynamicContent(lang) {
        if(questionsContainer) {
            questionsContainer.innerHTML = ''; 
            for (let i = 1; i <= 6; i++) {
                const p = document.createElement('p');
                p.className = 'question';
                p.dataset.key = `q${i}`;
                p.innerHTML = `<i>${translations[lang][`q${i}`] || ''}</i>`;
                questionsContainer.appendChild(p);
            }
        }
        
        if(testimonialSlider) {
            testimonialSlider.innerHTML = ''; 
            const track = document.createElement('div');
            track.className = 'testimonial-track';

            const createTestimonialSet = () => {
                const fragment = document.createDocumentFragment();
                for(let i=1; i<=10; i++) {
                    const keyBase = `testimonial${i}`;
                    if(!translations[lang][`${keyBase}Quote`]) continue;

                    const testimonialDiv = document.createElement('div');
                    testimonialDiv.className = 'testimonial';
                    
                    const quote = document.createElement('p');
                    quote.className = 'quote';
                    quote.textContent = translations[lang][`${keyBase}Quote`];
                    
                    const author = document.createElement('p');
                    author.className = 'author';
                    author.textContent = translations[lang][`${keyBase}Author`];

                    testimonialDiv.appendChild(quote);
                    testimonialDiv.appendChild(author);
                    fragment.appendChild(testimonialDiv);
                }
                return fragment;
            };

            const set1 = createTestimonialSet();
            const set2 = createTestimonialSet(); 
            
            track.appendChild(set1);
            track.appendChild(set2);
            testimonialSlider.appendChild(track);
        }
    }
    
    function setLanguage(lang) {
        applyStaticTranslations(lang);
        populateDynamicContent(lang);
        
        if(questionsContainer) {
            questionObserver.disconnect();
            observeQuestions();
        }

        if (lang === 'en') {
            enBtn.classList.add('active');
            frBtn.classList.remove('active');
        } else {
            frBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    }

    // --- Event Listeners and Observers ---
    
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

    document.querySelectorAll('.main-nav a[href^="#"], .cta-button').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => animationObserver.observe(el));

    const questionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const questions = Array.from(entry.target.children);
                let delay = 0;
                questions.forEach(q => {
                    setTimeout(() => {
                        q.classList.add('visible');
                    }, delay);
                    delay += 1000;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    function observeQuestions() {
        if(questionsContainer) {
            questionObserver.observe(questionsContainer);
        }
    }
    
    /*
    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
            
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formStatus.innerHTML = translations[currentLang].formSuccess;
                    formStatus.className = 'form-success';
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            formStatus.innerHTML = translations[currentLang].formError;
                        }
                        formStatus.className = 'form-error';
                    })
                }
            }).catch(error => {
                formStatus.innerHTML = translations[currentLang].formError;
                formStatus.className = 'form-error';
            });
        });
    }
    */

    const revealBtn = document.getElementById('reveal-phone-btn');
    if(revealBtn) {
        revealBtn.addEventListener('click', function() {
            const phoneContainer = this.parentNode;
            const phoneNumber = '(514) 451-2853';
            const phoneLink = document.createElement('a');
            phoneLink.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
            phoneLink.textContent = phoneNumber;
            phoneLink.className = 'phone-number';
            phoneContainer.replaceChild(phoneLink, this);
        });
    }
    
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('main section');
    
    function changeNavOnScroll() {
        let index = sections.length;
        const offset = window.innerHeight * 0.4;
        while(--index && window.scrollY + offset < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active-link'));
        if (index > -1) { 
            const activeLink = document.querySelector(`.main-nav a[href="#${sections[index].id}"]`);
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        }
    }

    window.addEventListener('scroll', changeNavOnScroll);

    // Initial Load
    document.getElementById('current-year').textContent = new Date().getFullYear();
    setLanguage(currentLang);
});
