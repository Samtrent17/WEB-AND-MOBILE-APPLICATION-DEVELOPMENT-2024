/* code to help print out the call rate based on the user's input for a network
code on the different mobile network providers in Africa
(MTN, Airtel and Africell)*/
function calculateCallRate(network) {
  let callRate;

  let provider;

  switch (network) {
    case 1:
      provider = 'MTN';
      callRate = 0.20; // 20 cents per minute
      break;
    case 2:
      provider = 'Airtel';
      callRate = 0.25; // 25 cents per minute
      break;
    case 3:
      provider = 'Africell';
      callRate = 0.10; // 10 cents per minute
      break;
    default:
      console.log('Invalid provider. Please choose MTN, Airtel, or Africell.');
      return;
  }

  console.log("The call rate for", provider ,"is", callRate, "cents per minute.");
}



calculateCallRate(1);
calculateCallRate(2);
calculateCallRate(3);
// Test with invalid provider
calculateCallRate(40);