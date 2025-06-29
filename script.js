    /* Script Animasi Star */ 
        const particles = document.querySelector('.particles');
        const totalParticles = 100;
        for (let i = 0; i < totalParticles; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 5 + 5}s`;
            particles.appendChild(star);
        }