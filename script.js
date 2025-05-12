document.addEventListener('DOMContentLoaded', () => {

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
                const offsetPosition = elementPosition - headerOffset - 15; // 15px extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Intersection Observer for Fade-in Effect on Question Items ---
    const questionItems = document.querySelectorAll('.question-item');

    if (questionItems.length > 0) {
        const observerOptions = {
            root: null, // relative to document viewport 
            rootMargin: '0px 0px -50px 0px', // Trigger a bit before it's fully in view from bottom
            threshold: 0.1  // Min 10% of item visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add a delay based on the item's index in the NodeList
                    // This makes them appear one after another more distinctly
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 250); // 250ms delay between items

                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        };

        const questionObserver = new IntersectionObserver(observerCallback, observerOptions);
        questionItems.forEach(item => {
            questionObserver.observe(item);
        });
    }

    // --- Update Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Language Switcher (Basic Example - No actual translation) ---
    // This assumes your language switching mechanism is more complex or handled elsewhere
    // For now, this just handles the 'active' class on buttons
    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');

    if (enBtn && frBtn) {
        enBtn.addEventListener('click', () => {
            enBtn.classList.add('active');
            frBtn.classList.remove('active');
            // Add your language switching logic here (e.g., reload page with lang param, or dynamically change content)
            console.log("Language switched to EN");
        });

        frBtn.addEventListener('click', () => {
            frBtn.classList.add('active');
            enBtn.classList.remove('active');
            // Add your language switching logic here
            console.log("Language switched to FR");
        });
    }

    // --- Active Nav Link Highlighting on Scroll (Optional but good UX) ---
    const sections = document.querySelectorAll('main section[id]');
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    const headerHeight = document.querySelector('.site-header') ? document.querySelector('.site-header').offsetHeight : 0;

    function changeNavOnScroll() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 20; // Adjusted for header and some buffer
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        mainNavLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active-link');
            }
        });
    }
    // Initial call to set active link on page load (if linking to a section)
    if(sections.length > 0 && mainNavLinks.length > 0){
        window.addEventListener('scroll', changeNavOnScroll);
        changeNavOnScroll(); // Call once on load
    }


    // --- Basic Contact Form Submission Handling (Example) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission for this example

            // You would typically gather form data and send it via AJAX here
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message, ' + name + '! (This is a demo - no data was sent)');
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

});
