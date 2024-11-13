//function that returns profits for a business selling products 
function calculateProfit(selling_price,cost_price,number_of_units_sold){
    var selling_price =2000;
    var cost_price = 500;
    var number_of_units_sold = 20
    var profit = (selling_price - cost_price)*number_of_units_sold;
    console.log("the profit is",profit)
}
calculateProfit();
