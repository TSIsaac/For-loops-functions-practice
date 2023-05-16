
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    let sumOfDeposits = 0;
    if (account.deposits) {
      for (let j = 0; j < account.deposits.length; j++) {
        sumOfDeposits += account.deposits[j];
      }
    }
    if (sumOfDeposits < 2000 || sumOfDeposits === 0) {
      result.push(account);
    }
  }
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
