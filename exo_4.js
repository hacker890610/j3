function countBuildingsWithSunsetView(buildings) {
    let max_height = 0;
    let count = 0;

    for (let i = buildings.length - 1; i >= 0; i--) {
        if (buildings[i] > max_height) {
            max_height = buildings[i];
            count++;
        }
    }

    return count;
}

console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // 1