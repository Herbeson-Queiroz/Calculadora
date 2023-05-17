class CalcController {
    constructor(){
        this._operation = [];
        this._displayCalcEl = document.querySelector("#display");
        this.initialize();
        this.initbuttonsEvents();
    }

    initialize(){  
        this.setLastNumberToDisplay();
    }


clearAll(){
    this._operation = [];
    this.lastNumber = '';
    this.lastOperator = '';
    this.setLastNumberToDisplay();
}

clearEntry(){
    this._operation.pop();
    this.setLastNumberToDisplay();
}

setError(){
    this.displayCalc = "error";
}

getLastOperation() { //dá o útimo botão teclado pelo usuário, as operações são adicionadas ao array pelo push.
    return this._operation[this._operation.length-1];
}

setLastOperation(value) {
    this._operation[this._operation.length-1] = value;
}

isOperator(value) {
   if(["+", "-", "*", "/", "%"].indexOf(value) >-1){
        return true
   } else {
        return false
   }
}

pushOperation(value){
    this._operation.push(value);
    if (this._operation.length>3){
        
        this.calc();

        console.log(this._operation);
    }
}

calc() {

    let last = "";
    if(this._operation.length>3){
        last = this._operation.pop();
    }

    let result = eval(this._operation.join(""));

    if(last == "%"){
        result = result/100;
        this._operation = [result];
    } else {
       
        this._operation = [result];
        if (last) this._operation.push(last);
    }
    
    this.setLastNumberToDisplay();
}

setLastNumberToDisplay(){
    let lastNumber;

    for (let i = this._operation.length-1; i >= 0; i--){
        if(!this.isOperator(this._operation[i])){
            lastNumber = this._operation[i];
            break;
        }
    }

    if(!lastNumber) lastNumber = 0;

    this.displayCalc = lastNumber;
}

addOperation(value) {

    if(isNaN(this.getLastOperation())){
        if(this.isOperator(value)){
            //trocar operador
            this.setLastOperation(value);
        } else if(isNaN(value)){
            console.log("outracoisa", value);
        } else {
           this.pushOperation(value);
           this.setLastNumberToDisplay();
        }
        
    } else{

        if(this.isOperator(value)){ //este if verifica se a tecla atual não é número e adiciona no array
            this.pushOperation(value);
        } else {
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(newValue);
            //atualizar display
            this.setLastNumberToDisplay();
        }
        
      
    }

}

addDot(){

        let lastOperation = this.getLastOperation();

        if (typeof lastOperation === "string" && lastOperation.split('').indexOf('.') > -1) return;

        if (this.isOperator(lastOperation) || !lastOperation){
            this.pushOperation("0.");
        } else {
            this.setLastOperation(lastOperation.toString() + '.')
        }

        this.setLastNumberToDisplay();

}

//método para gerenciar as operações:

execBtn(value){
    switch(value) {
        case "AC":
            this.clearAll();
            break;

        case "CE":
            this.clearEntry();
            break;

        case "%":
            this.addOperation("%");
            break;

        case "/":
            this.addOperation("/");
            break;

        case "x":
            this.addOperation("*");
            break;

        case "-":
            this.addOperation("-");
            break;

        case "+":
            this.addOperation("+");
            break;

        case "+/-":
            this._operation[this._operation.length-1] = (-1)*this._operation[this._operation.length-1];
            this.setLastNumberToDisplay();
            break;

        case ",":
            this.addDot();
            break;

        case "=":
            this.calc();
            break;

        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": 
            this.addOperation(parseInt(value));
            break;

        default:
            this.setError();
            break;
    }
}

    initbuttonsEvents() {
        let buttons = document.querySelectorAll(".botao"); //captura todos os botões
        buttons.forEach(btn => { 
            btn.addEventListener("click", e =>{
                this.execBtn(btn.innerText);
            });
        });
        
    }


    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }
}
