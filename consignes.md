Maquette: https://www.figma.com/file/kfKHknHySoTibZfdolGAX6/Sophie-Bluel---Desktop?node-id=2%3A368&mode=dev
Accueil :
- Reproduire la maquette
- Afficher les catégories via l'API (le back-end est fourni)
- Afficher les projets via l'API
- Implémenter le filtre via les catégories (au clic, seulement les projets correspondants a la catégorie choisie s'affichent)

Login :
- Reproduire la maquette
- Récupérer le contenu du formulaire lors du submit et l'envoyer à l'API (voir documentation ReadMe du backend)
- Si l'API de connexion renvois un token, le stocker dans le localStorage et rediriger vers la page d'admin
- Si l'api renvois pas de token, afficher une erreur via une alert

Admin :
- Reprendre la page d'accueil et la modifier pour correspondre à la maquette
- Créer une modal qui affiche la liste des projets avec une icon poubelle pour les supprimer
- Faire en sorte de pouvoir afficher la modal en cliquant sur le lien modifier (lien à rajouter à coté du titre projet)
- Ajouter une croix en haut a droite de la modal et faire en sorte de pouvoir la fermer avec
- Lors du clic sur la poubelle, supprimer le projet associé et mettre à jour le tableau de projets (works)
- Sur la 2eme modal, faire en sorte que le formulaire envois toutes les données à l'API en FormData (non pas en json)
- Mettre à jour la liste des projets après l'ajout, reset le formulaire et fermer la modal