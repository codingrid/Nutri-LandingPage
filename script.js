 // Form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado! Entraremos em contato em breve para agendar sua consulta.');
            this.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Simple testimonial slider functionality
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // This is simplified - in a real implementation, you'd handle multiple slides
                document.querySelector('.dot.active').classList.remove('active');
                dot.classList.add('active');
                
                // Here you would also change the active testimonial
                // This is just a placeholder for the functionality
                alert(`Depoimento ${index + 1} seria exibido aqui`);
            });
        });