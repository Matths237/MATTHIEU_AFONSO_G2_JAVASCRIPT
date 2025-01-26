// Sélection du bouton
const toggleButton = document.getElementById('toggle-lightmode');

// Vérifier l'état du mode dans le localStorage au chargement de la page
if (localStorage.getItem('light-mode') === 'enabled') {
    document.body.classList.add('light-mode');
    toggleButton.textContent = 'Activer le mode sombre';
}

// Ajout d'un gestionnaire d'événements pour basculer entre les modes
toggleButton.addEventListener('click', () => {
    // Basculer entre le mode sombre et clair
    document.body.classList.toggle('light-mode');

    // Mettre à jour le texte du bouton
    if (document.body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Activer le mode sombre';
        localStorage.setItem('light-mode', 'enabled'); // Sauvegarder l'état
    } else {
        toggleButton.textContent = 'Activer le mode clair';
        localStorage.removeItem('light-mode'); // Supprimer l'état
    }
});