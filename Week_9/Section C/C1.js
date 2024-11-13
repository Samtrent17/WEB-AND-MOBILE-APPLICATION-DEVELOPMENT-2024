/* javascript code to store prices for three products and calculate their total*/

// Define the prices of meat, matooke and rice
const Meat = 21000;
const Matooke = 25000;
const Rice = 70000;

// Calculate the total price of the products
const total_price = Meat + Matooke + Rice;
if (total_price > 100000) { // Check if the total price exceeds 100,000 UGX
  // Calculate the discount amount
  const discount_amount = total_price * 0.14; // 14% discount

  // Calculate the final price after discount
  const finalPrice = total_price - discount_amount;

  console.log("The total price is", total_price, "UGX");
  console.log("The discount is", discount_amount ,"UGX");
  console.log("The final price is", finalPrice,"UGX");
} else {
  console.log("The total price is", total_price ,"UGX");
  console.log("Discount is not applicable");
} 