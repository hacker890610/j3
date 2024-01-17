function existeSomme(liste, k) {
    // Utiliser deux pointeurs pour parcourir la liste
    let gauche = 0;
    let droite = liste.length - 1;
  
    while (gauche < droite) {
      const somme = liste[gauche] + liste[droite];
  
      if (somme === k) {
        return true; // La paire a été trouvée
      } else if (somme < k) {
        // Si la somme est inférieure à k, déplacez le pointeur gauche vers la droite
        gauche++;
      } else {
        // Si la somme est supérieure à k, déplacez le pointeur droit vers la gauche
        droite--;
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
  