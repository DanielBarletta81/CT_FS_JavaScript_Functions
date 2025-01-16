

//Task 1: Create a function to handle deposits into a bank account.
//Essentially, adding money to your bank account.

function deposit(depositAmount){
    let accountBalance = 500;
    let newBalance = accountBalance + depositAmount;

  return "Balance after deposit" + newBalance
}

console.log(deposit(1500))
/* Task 2: Implement a function to handle withdrawals from a bank account. 
Essentially, taking money out of your bank account. */


function withdraw(withdrawalAmount){
    let accountBalance = 500;
    let newBalance = accountBalance - withdrawalAmount;

  return "Balance after withdrawal" + newBalance
}

console.log(withdraw(150))

//Task 3: Develop a function to check the current balance of the account. 
//Lastly, show much much money you have left.



function calculateBalance(transactionAmount){
    let currentBalance = 1000;

    if (transactionAmount) {
    currentBalance + transactionAmount;

    return currentBalance;

    } else {
        console.log("Please enter a valid amount.")
    }



}
const getBalance = calculateBalance(transactionAmount);
console.log(`Current Balance: ${getBalance}`)