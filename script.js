document.addEventListener("DOMContentLoaded", setup);

function setup(){
    const operationInput = document.getElementById("operationInput");
    const addition = document.getElementById("addition");
    const substraction = document.getElementById("substraction");
    const multiplication = document.getElementById("multiplication");
    const division = document.getElementById("division");
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const n3 = document.getElementById("n3");
    const n4 = document.getElementById("n4");
    const n5 = document.getElementById("n5");
    const n6 = document.getElementById("n6");
    const n7 = document.getElementById("n7");
    const n8 = document.getElementById("n8");
    const n9 = document.getElementById("n9");
    const n0 = document.getElementById("n0");
    const dot = document.getElementById("dot");
    const ac = document.getElementById("ac");
    const equals = document.getElementById("equals");

    n1.onclick = gettingNumber;
    n2.onclick = gettingNumber;
    n3.onclick = gettingNumber;
    n4.onclick = gettingNumber;
    n5.onclick = gettingNumber;
    n6.onclick = gettingNumber;
    n7.onclick = gettingNumber;
    n8.onclick = gettingNumber;
    n9.onclick = gettingNumber;
    n0.onclick = gettingNumber;
    dot.onclick = gettingNumber;
    ac.onclick = gettingNumber;

    addition.onclick = gettingOperation;
    substraction.onclick = gettingOperation;
    multiplication.onclick = gettingOperation;
    division.onclick = gettingOperation;

    equals.onclick = calculatingResult;

    operationInput.value = "0";
    let number1 = "";
    let number2 = "";
    let operation = "";
    let result = 0;
    let pendingOperation = false;

    function gettingNumber(event){
        if(operationInput.value === "ERROR"){
            initValues();
        }
        if(event.target.id.length > 0){
            let id = event.target.id;
            if(operationInput.value === "0" || result > 0){
                operationInput.value = "";
                result = 0;
            }
            switch(id){
                case "n1":
                    operationInput.value = operationInput.value + "1";
                    break;
                case "n2":
                    operationInput.value = operationInput.value + "2";
                    break;
                case "n3":
                    operationInput.value = operationInput.value + "3";
                    break;
                case "n4":
                    operationInput.value = operationInput.value + "4";
                    break;
                case "n5":
                    operationInput.value = operationInput.value + "5";
                    break;
                case "n6":
                    operationInput.value = operationInput.value + "6";
                    break;
                case "n7":
                    operationInput.value = operationInput.value + "7";
                    break;
                case "n8":
                    operationInput.value = operationInput.value + "8";
                    break;
                case "n9":
                    operationInput.value = operationInput.value + "9";
                    break;
                case "n0":
                    if(operationInput.value !== ""){
                        operationInput.value = operationInput.value + "0";
                    } else {
                        operationInput.value = "0";
                    }
                    break;
                case "dot":
                    if(operationInput.value !== ""){
                        operationInput.value = operationInput.value + ".";
                    } else {
                        operationInput.value = "0.";
                    }
                    break;
                case "ac":
                    initValues();
                    break;
                default:
                    console.log("Fail");
            }
        }
    }

    function gettingOperation(event){
        if(operationInput.value === "ERROR" || operationInput.value === "0."){
            initValues();
        } else if(event.target.id.length > 0){
            /*if(operationInput.value !== "-" && operationInput.value !== "+" && operationInput.value !== "*" && operationInput.value !== ""){

            }*/
            let id = event.target.id;
            if(!pendingOperation){
                number1 = operationInput.value;
                operationInput.value = "";
                pendingOperation = true;
            }
            if(result > 0){
                result = 0;
            }
            switch(id){
                case "addition":
                    operation = "+";
                    break;
                case "substraction":
                    operation = "-";
                    break;
                case "multiplication":
                    operation = "*";
                    break;
                case "division":
                    operation = "/";
                    break;
                default:
                    console.log("Fail");
            }
            console.log(operation);            
        }
        
    }

    function calculatingResult(){
        if(operationInput.value === "ERROR"){
            initValues();
        } else {
            number2 = operationInput.value;
            console.log(operation);
            if(operationInput.value === "0."){
                initValues();
            }
            if(number1.length > 0 && number2.length > 0 && operation.length > 0){
                switch(operation){
                    case "+":
                        result = Number(number1) + Number(number2);
                        break;
                    case "-":
                        result= Number(number1) - Number(number2);
                        break;
                    case "*":
                        result = Number(number1) * Number(number2);
                        break;
                    case "/":
                        if(number2 === "0"){
                            console.log("Fail");
                            operationInput.value = "ERROR";
                        } else {
                            result = Number(number1) / Number(number2);
                        }
                        operation = "/";
                        break;
                    default:
                        console.log("Fail");
                }
                if(operationInput.value !== "ERROR"){
                    operationInput.value = result;
                    pendingOperation = false;
                    number1 = "";
                    number2 = "";
                    operation = "";
                }                
            }
        }
    }

    function initValues(){
        operationInput.value = "0";
        number1 = "";
        number2 = "";
        operation = "";
        result = 0;
    }

}