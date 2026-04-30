         // Scroll offset for fixed navbar
        document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80; // navbar height + padding
                    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
                // Close mobile menu after click
                document.getElementById('nav-toggle').checked = false;
            });
        });

        // Back to top visibility
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
