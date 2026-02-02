# CONCEPTION DE L'API 

### Model / Ressources
#### Vehicule
- Marque : string
- Model : string
- immatriculation : string
- annee : number
- prixLocation : number


### EndPoints / Points d'extremités
### CRUD

1. Creer un vehicule
HTTP POST
URL : /vehicule
Request body: entité / informatiosn du vehicule

Response : 201:  Vehicule crée
           500: Erreur d'application

2. Mise à jour
HTTP PUT
URL: /vehicule/:id
Request body: entité / informations du vehicule

Response: 200: Vehicule mis à jour
          404: Vehicule non trouvé
          500: Erreur d'application

3. Suppression
HTTP DELETE
URL : /vehicule/:id

Response: 200: OK
         500: Erreur d'application

4. Lire les informations d'un vehicule à l'aide de son identifiant
HTTP GET
URL: /vehicule/:id

Response: 200: Vehicule ok
          404: Vehicule non trouvé
          500: Erreur d'application


5. Afficher les vehicules
HTTP GET
URL: /vehicules

Response: 200: Liste de vehicule
          404: Vehicule non trouvé
          500: Erreur d'application

6. Lire un vehicule à l'aide son de son numéro d'immatriculation
HTTP GET
URL: /vehicule/search/:immatriculation

Response: 200: Vehicule ok
          404: Vehicule non trouvé
          500: Erreur d'application

7. Recuperer les vehicules par prixx (filter les vehicules par le prix max)
HTTP GET
URL: /vehicule/price/:prixMax

Response: 200: Liste de vehicule
          404: Vehicules non trouvé
          500: Erreur d'application