# Mars Rover

## Concept
Le Mars Rover est un programme simulant le déplacement d'un rover sur la surface de Mars. Le rover peut être contrôlé à distance pour explorer différentes régions de la planète.

## Fonctionnement dans le code
Le code est écrit en TypeScript et se compose de deux parties principales :

- **Serveur de contrôle du rover :** Ce serveur écoute les commandes envoyées depuis le client de mission et contrôle le déplacement du rover en fonction de ces commandes.
- **Client de mission :** Ce client permet à l'utilisateur d'envoyer des commandes de déplacement au rover, telles que avancer, reculer, tourner à gauche, tourner à droite, etc.

## Règles de contrôle du rover
- Pour avancer, utilisez la lettre F.
- Pour reculer, utilisez la lettre B.
- Pour tourner à droite, utilisez la lettre R.
- Pour tourner à gauche, utilisez la lettre L.

## Installation
1. Accédez au répertoire du projet :
   ```
   cd AL-Mars-Rover
   ```
2. Installez les dépendances nécessaires en exécutant la commande suivante :
   ```
   npm install
   ```

## Utilisation
- Pour démarrer le serveur de contrôle du rover, accédez au répertoire src/reseau/ dans un terminal PowerShell et exécutez la commande suivante :
  ```
  npx ts-node roverServer.ts
  ```
- Pour démarrer le client de mission, accédez au répertoire src/control-mission/ dans un autre terminal PowerShell et exécutez la commande suivante :
  ```
  npx ts-node missionClient.ts
  ```

## Tests
- Pour exécuter les tests unitaires, utilisez la commande suivante :
  ```
  npx jest
  ```

  Assurez-vous d'avoir Jest installé localement dans votre projet en exécutant la commande suivante si ce n'est pas déjà fait :
  ```
  npm install --save-dev jest
  ```

## Auteurs
- SKALLI BOUAZIZA ILIES
- EL FRAYJI HIBA 
- JULIERON MARCEAU
