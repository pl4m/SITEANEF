document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la carte
    var maCarte = L.map('maCarte').setView([46.52863469527167, 2.43896484375], 6); // Coordonnées centrées sur la France

    // Ajout d'une couche de tuiles à la carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(maCarte);

    // Ajout d'un marqueur sur la carte
    var marqueur = L.marker([46.52863469527167, 2.43896484375]).addTo(maCarte); // Exemple de coordonnées, à ajuster

    // Configuration du popup (info-bulle)
    marqueur.bindPopup("<b>CHRS de Vichy</b><br>11 place Jean EPINAT 03200 Vichy");

    // Affichage du popup au survol du marqueur
    marqueur.on('mouseover', function(e) {
        this.openPopup();
    });

    // Fermeture du popup quand la souris quitte le marqueur
    marqueur.on('mouseout', function(e) {
        this.closePopup();
    });

    // Redirection au clic sur le marqueur
    marqueur.on('click', function(e) {
        window.location.href = 'https://exemple.com/page_structure'; // Remplacer par l'URL de destination
    });
});
