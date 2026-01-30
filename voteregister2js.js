document.addEventListener('mousemove', (e) => {
    const amount = 25;
    const x = (e.clientX / window.innerWidth - 0.5) * amount;
    const y = (e.clientY / window.innerHeight - 0.5) * amount;

    document.getElementById('ball1').style.marginLeft = `${x}px`;
    document.getElementById('ball1').style.marginTop = `${y}px`;
    
    document.getElementById('ball2').style.marginRight = `${x}px`;
    document.getElementById('ball2').style.marginBottom = `${y}px`;
});