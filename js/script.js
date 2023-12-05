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

        if(digitos === "." && this.currentOperationText.innerText.includes(".")) {
			return;
		} 

        this.currentOperation = digitos;
        this.updateScreen();
    }

    processOperation(operation) {

		//pegar valores importantes (valor atual e valor anterior)
		let operationValue;
		const previous = +this.previousOperationText.innerText.split(" ")[0];
		const current = +this.currentOperationText.innerText;
		//verificar a operação baseado no que é enviado

		switch(operation) {
			case "+":
				operationValue = previous + current;
				this.updateScreen(operationValue, operation, current, previous);
				break;

				case "-":
				operationValue = previous - current;
				this.updateScreen(operationValue, operation, current, previous);
				break;

				case "/":
				operationValue = previous / current;
				this.updateScreen(operationValue, operation, current, previous);
				break;

				case "*":
				operationValue = previous * current;
				this.updateScreen(operationValue, operation, current, previous);
				break;
			default:
				return;
		}
    }
    updateScreen(
		operationValue = null,
		operation = null,
		previous = null,
		current = null
		){

		if(operationValue === null) {
			this.currentOperationText.innerText += this.currentOperation;
		} else{
			if(previous === 0) {
				operationValue = current
			}

			this.previousOperationText.innerText = `${operationValue} ${operation}`;
			this.currentOperationText.innerText = "";
		}
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
	btn.addEventListener("click",(e) =>{ 
	const value = e.target.innerText;
	
	if(+value >=0 || value === "."){ 
		calc.addDigit(value);
	}else {
		calc.processOperation(value);
	}
	}); 
	
});