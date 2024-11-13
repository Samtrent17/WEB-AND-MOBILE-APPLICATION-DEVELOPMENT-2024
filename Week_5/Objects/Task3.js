//example1
let ugandanFarmer = {
    name : 'Ukrain',
    farmLocation : 'Mbale',
    crop:'Coffee',
    numberOfAcres: 5,
    cropPrice:3000,
    calculateRevenue: function(harvestedBags){
        return harvestedBags * this.cropPrice;
    }

};

let revenue = ugandanFarmer.calculateRevenue(200);
console.log("Total Revenue:",revenue)

ugandanFarmer.cropsHarvested = 1000; // Adding a new property
ugandanFarmer.crop = "Maize"; // Modifying an existing property

console.log("Farmer's name:",ugandanFarmer.name);

console.log("Farmer's crope:",ugandanFarmer.crop);

console.log("Number of acres:",ugandanFarmer.numberOfAcres);

console.log("Farm Location:",ugandanFarmer.farmLocation);

console.log(ugandanFarmer.cropsHarvested);

console.log("Updated Farm Crop:",ugandanFarmer.crop)



//task
//object school with properties of name, location and studentsCount.
let school = {
    name: "Trentson",
    location: "New Jersey",
    studentsCount: 2000,
    establishedYear: 2014,
    calculateSchoolAge: function(schoolAge){
        return schoolAge - this.establishedYear; 
    }
};

let newAge  = school.calculateSchoolAge(2024);
console.log("The New Age:", newAge)

school.schooltype = "Primary";
school.studentsCount = 3500;


console.log("School's Name:", school.name)

console.log("School's Location:",school.location)

console.log("School's Type:", school.schooltype)

console.log("Student's Count:", school.studentsCount)

