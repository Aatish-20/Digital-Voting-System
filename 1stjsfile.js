window.addEventListener('scroll', () => {
    // Calculate how far the user has scrolled (0 to 1)
    const scrollPercent = window.scrollY / (document.body.offsetHeight - window.innerHeight);
    
    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');

    // Circle 1: Grows bigger and drifts right
    const size1 = 350 + (scrollPercent * 500); 
    circle1.style.width = size1 + 'px';
    circle1.style.height = size1 + 'px';
    circle1.style.transform = `translate(${scrollPercent * 150}px, ${scrollPercent * 50}px)`;

    // Circle 2: Grows bigger and drifts left
    const size2 = 450 + (scrollPercent * 400);
    circle2.style.width = size2 + 'px';
    circle2.style.height = size2 + 'px';
    circle2.style.transform = `translate(${-scrollPercent * 200}px, ${-scrollPercent * 100}px)`;
});

// Subtle "Appearing" console log to verify connection
console.log("Aao Vote Karo: Scripts Connected Successfully.");