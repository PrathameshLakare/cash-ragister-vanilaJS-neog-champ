const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const massage = document.querySelector("#error-massage")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){

    massage.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);
        }else{
            showMassage("You dont have enough cash.")
        }

    }else{
       showMassage("Invalid Bill Amount.") 
    }
});

function calculateChange(amountToBeReturn){
    for(let i = 0; i< availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);

        amountToBeReturn %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMassage(msg){
    massage.style.display = "block";
    massage.innerText = msg;
}
