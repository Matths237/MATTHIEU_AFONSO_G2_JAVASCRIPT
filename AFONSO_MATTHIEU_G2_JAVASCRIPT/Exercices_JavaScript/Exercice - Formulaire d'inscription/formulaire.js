// Récupérer le formulaire
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // On empêche la page de se recharger lors de la soumission du formulaire

    let pseudo = document.getElementById("pseudo");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");
    let errorList = document.getElementById("errorList");

    // Récupérer les réponses à la question de confidentialité
    let confidentialiteOui = document.getElementById("confidentialiteOui");
    let confidentialiteNon = document.getElementById("confidentialiteNon");

    // Vider les erreurs précédentes
    errorList.innerHTML = "";

    let errors = [];

    // Fonction pour ajouter ou retirer des classes d'erreur/succès
    function setClass(element, isValid) {
        if (isValid) {
            element.classList.remove("error");
            element.classList.add("valide");
        } else {
            element.classList.remove("valide");
            element.classList.add("error");
        }
    }

    // Vérification du pseudo 
    let pseudoValid = pseudo.value.length >= 6;
    if (!pseudoValid) errors.push("Le pseudo doit comporter au moins 6 caractères.");
    setClass(pseudo, pseudoValid);

    // Vérification de l'email 
    let emailValid = email.value.trim() !== "";
    if (!emailValid) errors.push("L'email est obligatoire.");
    setClass(email, emailValid);

    // Vérification du mot de passe avec ses règles
    let passwordValid = true;
    let passwordErrors = [];

    // On vérifie la présence d'une majuscule
    if (!/[A-Z]/.test(password.value)) {
        passwordErrors.push("Le mot de passe doit contenir au moins une majuscule.");
        passwordValid = false;
    }

    // Vérification d'un chiffre
    if (!/\d/.test(password.value)) {
        passwordErrors.push("Le mot de passe doit contenir au moins un chiffre.");
        passwordValid = false;
    }

    // Vérification d'un caractère spécial
    if (!/[@$!%*?&_]/.test(password.value)) {
        passwordErrors.push("Le mot de passe doit contenir au moins un caractère spécial.");
        passwordValid = false;
    }

    // Vérification de la longueur
    if (password.value.length < 8 || password.value.length > 16) {
        passwordErrors.push("Le mot de passe doit avoir entre 8 et 16 caractères.");
        passwordValid = false;
    }

    // Vérification de la correspondance des mots de passe
    let passwordsMatch = password.value === password2.value && password2.value !== "";
    
    if (!passwordsMatch) {
        errors.push("Les mots de passe ne correspondent pas.");
    }

    // On gère la couleur de "password2" en fonction de la validation
    if (password2.value === "") {
        setClass(password2, false); // Si vide, il reste rouge
    } else {
        setClass(password2, passwordsMatch && passwordValid); // Il devient vert si tout est bon
    }

     // Si des erreurs sont présentes sur le mot de passe, on les ajoute à la liste générale
     if (passwordErrors.length > 0) {
        errors.push(...passwordErrors);
    }

    setClass(password, passwordValid);

    // Vérification de la réponse à la question de confidentialité
    if (!confidentialiteOui.checked && !confidentialiteNon.checked) {
        errors.push("Veuillez répondre à la question de confidentialité en cochant une des options.");
    } else if (confidentialiteOui.checked) {
        errors.push("Menteur ! >:(");
    }

    // Gestion de l'affichage des erreurs ou du succès
    let errorContainer = document.getElementById("errorContainer");

    if (errors.length > 0) {
        // Affichage du conteneur d'erreur
        errorContainer.style.display = "block";
        // On vide les anciennes erreurs
        errorList.innerHTML = "";

        errors.forEach(error => {
            let liError = document.createElement("li");
            liError.innerText = error;
            errorList.appendChild(liError);
        });
    } else {
        // Si tout est ok, on affiche un message de succès dans le conteneur des erreurs
        errorContainer.style.display = "block";
        errorList.innerHTML = "<li id='successMessage'>Inscription réussie ! :D</li>";
    }
});
