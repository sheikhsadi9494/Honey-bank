// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // update depostit blance 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    const currentDepositAmount = document.getElementById('deposit-total');
    const prevoisDepositAmountText = currentDepositAmount.innerText;
    const prevoisDepositAmount = parseFloat(prevoisDepositAmountText);
    
    const newDeopsitTotoal = newDepositAmount + prevoisDepositAmount;

    currentDepositAmount.innerText = newDeopsitTotoal;
    
    // update balace
    const currentBalaceAmount = document.getElementById('balance-total');
    const PrevoisBalaceAmountText = currentBalaceAmount.innerText;
    const PrevoisBalaceAmount = parseFloat(PrevoisBalaceAmountText);

    const newBalaceTotal = PrevoisBalaceAmount + newDepositAmount;

    currentBalaceAmount.innerText = newBalaceTotal;

    // clear input 
    depositInput.value = '';
});

// handle withdrow button 
document.getElementById('withdraw-button').addEventListener('click', function(){
    // update withdraw balance 
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    const withdrawBalance = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawBalance.innerText;
    const previousWithAmount = parseFloat(previousWithdrawText);
    
    const totalWithdrawBalance = previousWithAmount + newWithdrawAmount;
    withdrawBalance.innerText = totalWithdrawBalance;

    // update balance
    const totalBalance = document.getElementById('balance-total');
    const previousBalance = parseFloat(totalBalance.innerText);

    const newBalace = previousBalance - newWithdrawAmount;
    totalBalance.innerText = newBalace;

    // clear balance 
    withdrawInput.value = '';
})