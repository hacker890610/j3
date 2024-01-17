function countBuildingsWithSunsetView(buildings) {
    let count = 0;
  
    for (let i = 0; i < buildings.length; i++) {
      let hasView = true;
      for (let j = i + 1; j < buildings.length; j++) {
        if (buildings[j] >= buildings[i]) {
          hasView = false;
          break;
        }
      }
      if (hasView) count++;
    }
  
    return count;
  }
  
  console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // 3
  console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // 1