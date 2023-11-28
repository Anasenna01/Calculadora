const previousOperationText = document.querySelector('#operacao'); 
const currentOperationText =  document.querySelector('#atual-operacao');
const buttons = document.querySelectorAll('#botoes button'); 

class Calculator {
	constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperations = "";
	}

    addDigit(digitos){
        this.currentOperation = digitos;
        this.updateScreen();
    }

    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
	btn.addEventListnner("click",(e) =>{ 
	const value = e.target.innerText;
	
	if(+value >=0 || value === "."){ 
		calc.addDigit(value);
	}else {
		console.log("Op: " + value);
	}
	}) 
	
})