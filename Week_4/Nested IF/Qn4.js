let expired = false;
let quality = 7;
// Nested if statement

if (expired === true) {
  console.log("Do Not Use.");
  if (quality > 8) {
    console.log("Good Quality.");
  } else if(quality >= 5 && quality <=8);{
    console.log("Average Quality.");
  }
} else {
  console.log("Check Quality.");
}