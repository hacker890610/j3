function existeSomme(liste, k) {
    // Utiliser un ensemble pour stocker les nombres déjà rencontrés
    let nombresVus = new Set();
  
    for (let nombre of liste) {
      // Vérifier si la différence entre k et le nombre actuel est dans l'ensemble
      if (nombresVus.has(k - nombre)) {
        return true; // Deux nombres ont été trouvés
      }
  
      // Ajouter le nombre actuel à l'ensemble
      nombresVus.add(nombre);
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