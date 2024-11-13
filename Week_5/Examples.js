//before usage of functions
var num = 25;

var num_two = 4;
var sum = num + num_two;
console.log("The Sum of Num and Num Two is",sum);


var num_three = 40;

var num_four = 5;
var sum_two = num_three + num_four;
console.log("Sum of Num Three and Four is", sum_two);

// usage of functions without parameters
function sumation(){

    var num_five = 30;

    var num_six = 7;

    var sum_three = num_five + num_six;

    console.log("The Sum of Num Five and Num Six",sum_three);

}


sumation();

function sumation_two(){

    var num_five = 25;

    var num_six = 9;

    var sum_three = num_five + num_six;

    return sum_three;
}

//use it by printing the value directly on the terminal
console.log("Sum Four", sumation_two())

//assigning the value to a variable
var sum_four = sumation_two();


var sum_five = sumation();


console.log(sum_five)


//Functions withb parameters
function sumation_three(num_five, num_six){

    var sum_six = num_five + num_six;

    console.log("This is Sumation three adding   ",num_five,"+",num_six,"=",sum_six);

}

sumation_three(30,12);

sumation_three(40,11);

sumation_three(30,19);


// Returning Function with parameters

function sumation_four(num_five, num_six){

    return num_five + num_six;

}

console.log("This is Sumation Four adding   ",sumation_four(30,12));

//Assigning values to variable
var sum_five = sumation(234,76);

console.log(sum_five);



