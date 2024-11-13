function Farmer(name, location, crop, acres) {
    this.name = name;
    this.farmLocation = location;
    this.crop = crop;
    this.numberOfAcres = acres;
    this.introduce = function() {
        return "I am", this.name," and I farm", this.crop, "in",
this.farmLocation;
    };
}
let farmer1 = new Farmer("Sarah", "Mbarara", "Bananas", 10);
let farmer2 = new Farmer("David", "Gulu", "Sunflowers", 20);

console.log(farmer1.introduce());
console.log(farmer2.introduce());

//task
function School(name,location,studentsCount,schoolType) {
    this.name = name;
    this.location = location;
    this.studentsCount = studentsCount;
    this.schoolType = schoolType;
    this.introduce = function(){
        return "The school Name is", this.name, ", location is", this.location, ", school Type is", this.schoolType, "and Students Count is", this.studentsCount;
    }

}

let school1 = new School("Trentson", "New Jersey", 2000, "Primary");
let school2 = new School("UncleLi","Washington",3500, "Secondary");


//print out the outcomes
console.log(school1.introduce());
console.log(school2.introduce());
