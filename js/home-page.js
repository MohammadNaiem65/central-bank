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
});