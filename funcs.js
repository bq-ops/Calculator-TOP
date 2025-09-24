let result = 0;
let operation;
let final = 0;
let currunt;
let newNum;
let numberArr = [0, '', 0];
let operator; 
let justCalculated = false;

let lbl = document.getElementById("display")

function operate(result, newNum, operator){
 if (operator == "+"){
    return add(result, newNum)
 }else if (operator == "-"){
    return subtract(result, newNum)
 }else if (operator == "*"){
    return multiply(result, newNum)
 }else if (operator == "/"){
    return devide(result, newNum);
 }
}

function add (result, newNum){
    return result + newNum
}
function subtract (result, newNum){
    return result - newNum
}
function multiply (result, newNum){
    return result * newNum
}
function devide (result, newNum){
    return result / newNum
}

let buttons = document.getElementById("buttons");

let zero = document.getElementById("zero");
let one = document.getElementById("1");
let tow = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");

let multi = document.getElementById("*")
let sub = document.getElementById("-")
let ad = document.getElementById("+")
let div = document.getElementById("/")

let clear = document.getElementById("clear")
let eq = document.getElementById("=")

zero.addEventListener('click', function(){
    currunt = lbl.textContent;
    if(justCalculated){
        lbl.textContent = '0';
        justCalculated = false;
    } else {
        lbl.textContent += '0';
    }
});

one.addEventListener('click', function(){
    currunt = lbl.textContent;
    if(justCalculated){
        lbl.textContent = '1';
        justCalculated = false;
    } else {
        lbl.textContent += '1';
    }

});
tow.addEventListener('click', function(){
    currunt = lbl.textContent;
    if(justCalculated){
        lbl.textContent = '2';
        justCalculated = false;
    } else {
        lbl.textContent += '2';
    }
});
three.addEventListener('click', function(){
currunt = lbl.textContent;
if(justCalculated){
        lbl.textContent = '3';
        justCalculated = false;
    } else {
        lbl.textContent += '3';
    }
});
four.addEventListener('click', function(){
    currunt = lbl.textContent;
    if(justCalculated){
        lbl.textContent = '4';
        justCalculated = false;
    } else {
        lbl.textContent += '4';
    }
});
five.addEventListener('click', function(){
   currunt = lbl.textContent;
   if(justCalculated){
        lbl.textContent = '5';
        justCalculated = false;
    } else {
        lbl.textContent += '5';
    }
});
six.addEventListener('click', function(){
    currunt = lbl.textContent;
    if(justCalculated){
        lbl.textContent = '6';
        justCalculated = false;
    } else {
        lbl.textContent += '6';
    }
});
seven.addEventListener('click', function(){
    currunt = lbl.textContent;
    if(justCalculated){
        lbl.textContent = '7';
        justCalculated = false;
    } else {
        lbl.textContent += '7';
    }
    
});
eight.addEventListener('click', function(){
    currunt = lbl.textContent;
    if(justCalculated){
        lbl.textContent = '8';
        justCalculated = false;
    } else {
        lbl.textContent += '8';
    }
});
nine.addEventListener('click', function(){
    currunt = lbl.textContent;
    if(justCalculated){
        lbl.textContent = '9';
        justCalculated = false;
    } else {
        lbl.textContent += '9';
    }
});




clear.addEventListener('click', function(){
    currunt = 0;
    lbl.textContent = '';
});

div.addEventListener('click', function(){
    currunt = lbl.textContent;
    numberArr = currunt.split(" ").filter(item => item !== "").reverse();
    
    if(numberArr.length == 3){
        result = Number(numberArr[0]);
        operator = numberArr[1];
        newNum = Number(numberArr[2]);
    
        if (newNum == 0){
            alert("Hell Naw we are not doing this. try something else")
            currunt = 0;
            lbl.textContent = '';
            return;
        }
        final = operate(result, newNum, operator);
        lbl.textContent = final + " / ";
    }else{
        lbl.textContent = currunt + " " + '/' + " ";
    }
});

multi.addEventListener('click', function(){


    currunt = lbl.textContent;
    numberArr = currunt.split(" ").filter(item => item !== "").reverse();


    if (numberArr.length == 3){
        result = Number(numberArr[0]);
        operator = numberArr[1];
        newNum = Number(numberArr[2]);
        final = operate(result, newNum, operator);
        lbl.textContent = final + " * ";
    }else{
        lbl.textContent = currunt + " " + '*' + " ";
    }
    
});
ad.addEventListener('click', function(){


    currunt = lbl.textContent;
    numberArr = currunt.split(" ").filter(item => item !== "").reverse();


    if (numberArr.length == 3){
        result = Number(numberArr[0]);
        operator = numberArr[1];
        newNum = Number(numberArr[2]);
        final = operate(result, newNum, operator);
        lbl.textContent = final + " + ";
    }else{
        lbl.textContent = currunt + " " + '+' + " ";
    }
});
sub.addEventListener('click', function(){

    currunt = lbl.textContent;
    numberArr = currunt.split(" ").filter(item => item !== "").reverse();
    alert(numberArr)

    if (numberArr.length == 3){
        newNum = Number(numberArr[0]);
        operator = numberArr[1];
        result = Number(numberArr[2]);
        final = operate(result, newNum, operator);
        lbl.textContent = final + " - ";
    }else{
        lbl.textContent = currunt + " " + '-' + " ";
    }
});

eq.addEventListener('click', function(){


    currunt = lbl.textContent;
    numberArr = currunt.split(" ").filter(item => item !== "").reverse();


    result = Number(numberArr[0]);
    operator = numberArr[1];
    newNum = Number(numberArr[2]);


    final = operate(result, newNum, operator);
    lbl.textContent = Math.round(final  * 100)/100;


    justCalculated = true;

});

