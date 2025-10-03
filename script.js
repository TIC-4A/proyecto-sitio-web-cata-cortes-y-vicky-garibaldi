document.addEventListener('DOMContentLoaded', () => {
    const memberButtons = document.querySelectorAll('.member-button');
    const backButtons = document.querySelectorAll('.back-button');
    const bioSections = document.querySelectorAll('.bio-section');
    const mainSection = document.querySelector('.main-section');

    memberButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const member = event.target.getAttribute('data-member');

            // Ocultar todas las secciones de biografía
            bioSections.forEach(section => {
                section.classList.add('hidden');
            });

            // Ocultar la sección principal
            mainSection.classList.add('hidden');

            // Mostrar la sección de biografía correspondiente
            const selectedBioSection = document.getElementById(`${member}-bio`);
            if (selectedBioSection) {
                selectedBioSection.classList.remove('hidden');
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Oculta la sección de biografía visible
            const visibleBioSection = document.querySelector('.bio-section:not(.hidden)');
            if (visibleBioSection) {
                visibleBioSection.classList.add('hidden');
            }

            // Muestra la sección principal
            mainSection.classList.remove('hidden');
        });
    });
});
