// Shrinking header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;

    // Only shrink when scrolling past 100px
    if (scrollY > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Trigger image animation when scrolled into view
const image = document.querySelector('.card-image');
const observerImage = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image.classList.add('animate-image');
            observerImage.unobserve(image);  // Stop observing once animation is triggered
        }
    });
}, {
    threshold: 0.75  // Start animation when 75% of the image is visible
});

observerImage.observe(image);

// Trigger section animations when scrolled into view
const aboutSection = document.querySelector('.about-us');
const observerAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Make it visible
            entry.target.style.transform = 'translateY(0)'; // Move to original position
            observerAbout.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, {
    threshold: 0.75  // Start animation when 75% of the section is visible
});

observerAbout.observe(aboutSection);

// Existing code remains unchanged ...

// Trigger Tokenomics section animation when scrolled into view
const tokenomicsSection = document.querySelector('.tokenomics');
const observerTokenomics = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Make it visible
            entry.target.style.transform = 'translateY(0)'; // Move to original position
            observerTokenomics.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, {
    threshold: 0.75  // Start animation when 75% of the section is visible
});

observerTokenomics.observe(tokenomicsSection);

// Trigger visibility for each card in Tokenomics
const tokenomicsCards = document.querySelectorAll('.tokenomics-card');
const observerCards = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Make card visible
            entry.target.style.transform = 'translateY(0)'; // Move to original position
            observerCards.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, {
    threshold: 0.75  // Start animation when 75% of the card is visible
});

tokenomicsCards.forEach(card => {
    observerCards.observe(card);
});

// Existing code remains unchanged ...

// Trigger Socials section animation when scrolled into view
const socialsSection = document.querySelector('.socials');
const observerSocials = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Make it visible
            entry.target.style.transform = 'translateY(0)'; // Move to original position
            observerSocials.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, {
    threshold: 0.75  // Start animation when 75% of the section is visible
});

observerSocials.observe(socialsSection);
