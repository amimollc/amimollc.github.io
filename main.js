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
document.addEventListener('DOMContentLoaded', function() {

    const overlay = document.getElementById('consentOverlay');
    const acceptBtn = document.getElementById('acceptAllBtn');
    const learnBtn = document.getElementById('learnMoreBtn');

    // 1. Check if user already gave consent
    const consentGiven = localStorage.getItem('consentAccepted');

    if (!consentGiven) {
        // Show the popup with a small delay for smooth rendering
        setTimeout(() => {
            overlay.classList.add('show');
        }, 300);
    }

    // 2. Handle "Accept All" button
    acceptBtn.addEventListener('click', function() {
        // Save consent to localStorage (so it doesn't show again)
        localStorage.setItem('consentAccepted', 'true');
        
        // Optional: Also set a cookie for server-side recognition (Google Ads)
        document.cookie = "consent_accepted=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
        
        // Hide the popup
        overlay.classList.remove('show');

        // (Optional) Trigger Google Consent Mode update here if needed
        console.log('✅ User accepted all cookies & privacy terms.');
    });

    // 3. Handle "Learn More" button (opens the Terms/Privacy page in a new tab)
    learnBtn.addEventListener('click', function() {
        // Open the combined legal page (opens in new tab)
        window.open('terms-privacy.html', '_blank');
        
        // Optionally, close the popup temporarily? No, keep it open so they can accept after reading.
        // But we can leave it as is, they will come back to accept.
    });

    // 4. (Nice to have) Close popup if user clicks outside the modal?
    overlay.addEventListener('click', function(e) {
        // If the click is directly on the overlay background (not the modal),
        // we could ignore it to force them to click a button, 
        // or we could close it. Usually, it's better to force action for compliance.
        // We'll just prevent accidental background clicks from closing it.
        // If you want to allow click-outside to close, uncomment the next line:
        // if (e.target === overlay) overlay.classList.remove('show');
    });

});
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
