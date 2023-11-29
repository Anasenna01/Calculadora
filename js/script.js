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

        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
			return;
		} 

        this.currentOperation = digitos;
        this.updateScreen();
    }

    processOperation(operation) {

		//pegar valores importantes (valor atual e valor anterior)
		let operationValue;
		let previous = +this.previousOperationText.innerText;
		let current = +this.currentOperationText.innerText;
		//verificar a operação baseado no que é enviado
		switch(operation) {
			case "+";
				break;
			default;
				return;
		}
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
		calc.processOperation(value);
	}
	}) 
	
})