/* code for a student to choose if they are qualified to do BSIT or Social Science 
basing on the points scored at the UACE level in the final examination*/
// Define the student's UACE points
const uace_results = 1;
// Check if the student's UACE points are greater than or equal to 7
if (uace_results >= 7) {
    // Print "Eligible for BSIT and Data Science"
    console.log("You're eligible for BSIT and Data Science");
} else {
    console.log("Sorry, choose Social Science"); // Print "Choose Social Science"
}