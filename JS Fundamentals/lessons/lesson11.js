// let familySize = 2;

// function recommendedCar(familySize) {

// }
// console.log(recommendedCar(familySize, plannedDistanceToDrive));


function recommendedCar(familySize, plannedDistanceToDriveIn) {
            if (familySize <= 4 && plannedDistanceToDriveIn < 200) {
            return "Tesla";
        }   else if (familySize <= 4 && plannedDistanceToDriveIn >= 200) {
            return "Toyota Camri";
        }   else {
            return "Minivan";
        }
    }
    
    console.log(recommendedCar(4, 199));
