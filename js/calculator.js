function addScreen(n){
    document.getElementById("screen").value += n;
}

function clearScreen(){
    document.getElementById("screen").value = "";
}

function calculate(){
    let operation = document.getElementById("screen").value;   

    let res = "Error";

    let posicionOperador = buscarOperador(operation);

    if(posicionOperador != - 1){
        let operando1 = operation.substring(0, posicionOperador);
        let operador = operation[posicionOperador];
        let operando2 = operation.substring(posicionOperador + 1, operation.length);

        console.log(operando1);
        console.log(operando2);
        console.log(operador);

        if(comprobarOperando(operando1) == true && comprobarOperando(operando2) == true){
            res = operar(operador, operando1,operando2);
        }
        
    }

    document.getElementById("screen").value = res;
}


function comprobarOperando(operador){
    let correcto = true;

    if(operador[0] == "*" || operador[0] == "/"){
        correcto = false;
    } else{
        for (let i = 0; i < operador.length ;i++){
            if(isNaN(operador[i]) == true){
                correcto = false;
            }
        }

    }
    return correcto;
}

function operar(operador, operando1, operando2){
    let res = "E";

    switch(operador){
        case "-":
            res = parseInt(operando1) - parseInt(operando2);
            break;
            case "+":
            res = parseInt(operando1) + parseInt(operando2);
            break;
            case "*":
            res = parseInt(operando1) * parseInt(operando2);
            break;
            case "/":
            res = parseInt(operando1) / parseInt(operando2);
            break;

    }
    return res;
}

function buscarOperador(operation){
    let pos = - 1;

    for (let i = 0; i < operation.length && pos == - 1 ;i++){
        if(operation[i + 1] != undefined && isNaN(operation[i]) == false && isNaN(operation[i + 1]) == true){
            
            pos = i + 1;
        }
    }
    return pos;
}


/*
Operaciones correctas
1+2
1*63
-1*-1
+1--1
174/-2
*/

//EL OPERADOR: +   -   *    /  
//SIEMPRE
//va a ser pimer el símbolo no numérico seguido de un simbolo numérico
//isNaN()

//+1--1
//operador: -  
//1º operando: +1
//2º operando: -1

/*
    Operaciones incorrectas: E

    3+6+5
    /9*3
    *3*3
    4-/6
    7* / *6
    -*5
    
*/
