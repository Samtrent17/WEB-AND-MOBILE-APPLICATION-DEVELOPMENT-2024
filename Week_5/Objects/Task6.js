let ugandanFarmer = {
    name: "James",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5,

    introduceFarmer: function() {
        return "Hello, my name is", this.name, "and I farm ",this.crop,
"in", this.farmLocation ;
    }
};
    console.log(ugandanFarmer.introduceFarmer());


//task
//task
let school = {
    name: "Trentson",
    location: "New Jersey",
    studentsCount: 2000,
    establishedYear:2014,

    schoolIntroduction: function(){
        return "The school's name is", this.name,"located in",this.location,"with students",this.studentsCount;
    }
};

console.log(school.schoolIntroduction());

