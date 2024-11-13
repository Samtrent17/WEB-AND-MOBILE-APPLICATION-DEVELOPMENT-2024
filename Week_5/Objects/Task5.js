//example1
let ugandanFarmer = {
    name: "James",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5
    };
for (let key in ugandanFarmer) {
        console.log("The Key", ugandanFarmer[key]);
}

//task
let school = {
    name: "Trentson",
    location: "New Jersey",
    studentsCount: 2000,
    establishedYear:2014,
};

for (let key in school){
    console.log("The Key:", school[key]);
}