function existeSomme(liste, k) {
    for (let i = 0; i < liste.length; i++) {
      for (let j = i + 1; j < liste.length; j++) {
        if (liste[i] + liste[j] === k) {
          return true; // Deux nombres ont été trouvés
        }
      }
    }
  
    // Aucune paire trouvée
    return false;
  }
  
  // Exemples d'utilisation
  const liste1 = [10, 15, 3, 7];
  const k1 = 17;
  console.log(existeSomme(liste1, k1)); // Devrait afficher true
  
  const liste2 = [1, 8, 10, 21];
  const k2 = 19;
  console.log(existeSomme(liste2, k2)); // Devrait afficher false