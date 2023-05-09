
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let maxBalance = -Infinity;
  let clientsWithMaxBalance = [];
  
  for (let i = 0; i < array.length; i++) {
    const client = array[i];
    
    if (client.balance > maxBalance) {
      maxBalance = client.balance;
      clientsWithMaxBalance = [client];
    } else if (client.balance === maxBalance) {
      clientsWithMaxBalance.push(client);
    }
  }
  
  return clientsWithMaxBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
