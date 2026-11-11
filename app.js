window.addEventListener('load', () => {
    const selector = document.getElementById('selector-planeta');

    if (selector) {
        selector.addEventListener('change', function() {
            const idPlaneta = this.value;
            // Busca el elemento justo en el momento del clic
            const tarjetaDestino = document.getElementById(idPlaneta);

            if (tarjetaDestino) {
                tarjetaDestino.scrollIntoView({ behavior: 'smooth' });
                console.log("¡Éxito! Viajando a: " + idPlaneta);
            } else {
                console.error("Aún no encuentro el ID: " + idPlaneta + ". ¿Seguro que existe en el HTML?");
                // Esto ayuda a depurar: muestra todos los IDs que existen en la página
                const todosLosArticulos = document.querySelectorAll('article');
                console.log("Artículos encontrados en la página:", todosLosArticulos);
            }
        });
    } else {
        console.error("No se encontró el selector #selector-planeta");
    }
}); 