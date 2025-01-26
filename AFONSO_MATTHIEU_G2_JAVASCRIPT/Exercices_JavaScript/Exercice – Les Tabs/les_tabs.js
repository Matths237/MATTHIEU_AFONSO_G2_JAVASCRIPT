// Je récupère tous les éléments ayant la classe .tab
let listTab = document.querySelectorAll('.tab');

// Pour chaque élément de la liste, j'ajoute un événement click
listTab.forEach((tab) => {
    tab.addEventListener('click', function() {

        // Retirer la classe 'tab-active' de tous les éléments <li>
        listTab.forEach((item) => {
            item.classList.remove('tab-active');
        });

        // Ajouter la classe 'tab-active' à l'élément cliqué
        this.classList.add('tab-active');

        // Récupérer toutes les divs de contenu
        let listContent = document.querySelectorAll('.content');

        // Retirer la classe 'active' de toutes les divs
        listContent.forEach((content) => {
            content.classList.remove('active');
        });

        // Vérifier quelle tab a été cliquée et afficher le contenu correspondant
        if (this.classList.contains('tab-content1')) {
            document.querySelector('.content1').classList.add('active');
        } else if (this.classList.contains('tab-content2')) {
            document.querySelector('.content2').classList.add('active');
        } else if (this.classList.contains('tab-content3')) {
            document.querySelector('.content3').classList.add('active');
        }
    });
});