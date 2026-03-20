function press(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    let expr = document.getElementById("display").value;

    if(expr == ""){
        alert("Please enter a value");
        return;
    }

    try{
        let result = eval(expr);

        if(!isFinite(result)){
            alert("Invalid calculation");
            return;
        }

        document.getElementById("display").value = result;
    }
    catch{
        alert("Invalid input");
    }
}

function square(){
    let value = document.getElementById("display").value;

    if(value == ""){
        alert("Enter a number first");
        return;
    }

    let result = value * value;
    document.getElementById("display").value = result;
}
function backspace(){
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}
function usePrompt(){
    let num1 = prompt("Enter first number");

    if(num1 == null || num1 == "" || isNaN(num1)){
        alert("Invalid first number");
        return;
    }

    let op = prompt("Enter operator (+, -, *, /, sq)");

    if(op == "sq"){
        alert("Square is " + (num1 * num1));
        document.getElementById("display").value = num1 * num1;
        return;
    }

    let num2 = prompt("Enter second number");

    if(num2 == null || num2 == "" || isNaN(num2)){
        alert("Invalid second number");
        return;
    }

    let result;

    if(op == "+") result = Number(num1) + Number(num2);
    else if(op == "-") result = num1 - num2;
    else if(op == "*") result = num1 * num2;
    else if(op == "/") result = num1 / num2;
    else{
        alert("Invalid operator");
        return;
    }

    alert("Result is " + result);
}