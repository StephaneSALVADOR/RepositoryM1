// Sélectionnez tous les liens de la barre de navigation
var navLinks = document.querySelectorAll('nav a');

// Parcourez chaque lien et ajoutez un écouteur d'événement pour le survol
navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.color = '#ff0000'; // Change la couleur du texte en rouge au survol
    });

    link.addEventListener('mouseout', function() {
        this.style.color = '#fff'; // Revertit la couleur du texte à blanc lorsque la souris quitte
    });
});
