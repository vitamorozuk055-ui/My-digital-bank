let balance = 300;

const balanceDisplay = document.getElementById('balance');
const inputField = document.getElementById('amountInput');
const messageDisplay = document.getElementById('statusMessage');



function updateInterface(message, isError = false){
    balanceDisplay.innerText = balance;

    balanceDisplay.parentElement.classList.remove('pulse');
    void balanceDisplay.offsetWidth;
    balanceDisplay.parentElement.classList.add('pulse');

    messageDisplay.innerText = message;
    messageDisplay.className = 'message ' + (isError ? 'msg-error' : 'msg-succes');

    inputField.value = '';
}

function handleDeposit(){
    const amount = Number(inputField.value);

    if( amount <= 0 || isNaN(amount)){
        updateInterface('Введіть коректну суму для поповнення', true);        
    } else {
        balance += amount;
        updateInterface(`Рахунок успішно поповнено на $${amount}`);
    }
}

function handleWithdraw(){
    const amount = Number(inputField.value);

    if(amount <= 0 || isNaN(amount)){
        updateInterface('для проведення операціі введіть суму більше нуля.', true);
    } else if (amount > balance ){
        updateInterface('недостатньо коштів на рахунку.', true);
    } else {
        balance -= amount;
        updateInterface('Операція зняття коштів проведена.');
    }
}