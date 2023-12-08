const previousOperationText = document.querySelector('#operacao'); 
const currentOperationText =  document.querySelector('#atual-operacao');
const buttons = document.querySelectorAll('#botoes button'); 

class Calculator {
	constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
	}

    addDigit(digitos){

        if(digitos === "." && this.currentOperationText.innerText.includes(".")) {
			return;
		} 

        this.currentOperation = digitos;
        this.updateScreen();
    }

    processOperation(operation) {
		if(this.currentOperationText.innerText === "") {
			if(this.previousOperationText.innerText !== "") {
				this.changeOperation(operation);
			}
			return;
		}

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

		case "DEL":
			this.processDelOperator();
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
				operationValue = current;
			}

			this.previousOperationText.innerText = `${operationValue} ${operation}`;
			this.currentOperationText.innerText = "";
		}
    }

	changeOperation(operation){
		const mathOperations = ["*", "/", "-", "+"];

		if(!mathOperations.includes(operation)) {
			return;
		}
		this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
	}
	//deletar os digitos
	processDelOperator(){
		this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
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