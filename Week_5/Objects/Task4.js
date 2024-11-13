//example1
let kampalaCity = {
    name: "Kampala",
    population: 1500000,
    districts: {
        central: "Kampala Central",
        east: "Nakawa",
        north: "Kawempe",
        south: "Makindye",
        west: "Rubaga"
        }
};
console.log("District in the north of Kampala:",kampalaCity.districts.north);

//Task
let university = {
    // Defining departments and their heads
    departments: {
        Engineering: {
            name: "Information Technology",
            headOfDepartment: "Dr.Angelino",
        },
        computerScience: {
            name: "Computer Science",
            headOfDepartment: "Trentson",
        },
        data: {
            name: "Data Science",
            headOfDepartment: "Prof.James",
        }
    }
};

// printing the head of the Computer Science department
console.log(university.departments.computerScience.headOfDepartment);