const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const depositFieldString = depositField.value;
    const depositFieldTotal = parseFloat(depositFieldString);
    const depositAmount = document.getElementById("deposit-amount");
    const depositAmountString = depositAmount.innerText;
    const depositAmountTotal = parseFloat(depositAmountString);
    const totalDepositAmount = depositFieldTotal + depositAmountTotal;
    depositAmount.innerText = totalDepositAmount;
    const currentBalance = document.getElementById("current-balance");
    const currentBalanceString = currentBalance.innerText;
    const currentBalanceFinal = parseFloat(currentBalanceString);
    const totalCurrentBalance = currentBalanceFinal + depositFieldTotal;
    currentBalance.innerText = totalCurrentBalance;
    depositField.value = "";
});
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
    const withdrawField = document.getElementById("Withdraw-field").value;
    withdrawFieldFinal = parseFloat(withdrawField);
    document.getElementById("Withdraw-field").value = "";
    let currentBalance = document.getElementById("current-balance").innerText;
    let currentBalanceFinal = parseFloat(currentBalance);
    if (withdrawFieldFinal <= 0) {
        alert("Please enter a valid amount!")
    }
    else if (withdrawFieldFinal > currentBalanceFinal) {
        alert("Bap er bank a oto taka nai!!!")
        return
    }
    let withdrawAmount = document.getElementById("withdraw-amount").innerText;
    let withdrawAmountFinal = parseFloat(withdrawAmount);
    withdrawAmountFinal = withdrawAmountFinal + withdrawFieldFinal;
    document.getElementById("withdraw-amount").innerText = withdrawAmountFinal;
    currentBalanceFinal = currentBalanceFinal - withdrawAmountFinal;
    document.getElementById("current-balance").innerText = currentBalanceFinal;
});