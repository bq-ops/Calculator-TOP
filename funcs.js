let result = 0;
let operation;
let final = 0;
let currunt = 0;
let newNum = 0;
let numberArr = [];
let operator; 

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
    lbl.textContent = currunt + '0';
});

one.addEventListener('click', function(){
    currunt = lbl.textContent;
    lbl.textContent = currunt + '1';
});
tow.addEventListener('click', function(){
    currunt = lbl.textContent;
    lbl.textContent = currunt + '2';
});
three.addEventListener('click', function(){
currunt = lbl.textContent;
    lbl.textContent = currunt + '3';
});
four.addEventListener('click', function(){
    currunt = lbl.textContent;
    lbl.textContent = currunt + '4';
});
five.addEventListener('click', function(){
   currunt = lbl.textContent;
    lbl.textContent = currunt + '5';
});
six.addEventListener('click', function(){
    currunt = lbl.textContent;
    lbl.textContent = currunt + '6';
});
seven.addEventListener('click', function(){
    currunt = lbl.textContent;
    lbl.textContent = currunt + '7';
});
eight.addEventListener('click', function(){
    currunt = lbl.textContent;
    lbl.textContent = currunt + '8';
});
nine.addEventListener('click', function(){
    currunt = lbl.textContent;
    lbl.textContent = currunt + '9';
});




clear.addEventListener('click', function(){
    currunt = 0;
    lbl.textContent = '';
});

div.addEventListener('click', function(){
    currunt = lbl.textContent;
    numberArr = currunt.split(" ").filter(item => item !== "")

    if(numberArr.length === 3){
        result = Number(numberArr[0]);
        operator = numberArr[1];
        newNum = Number(numberArr[2]);
    

        if (operator === '/' && newNum === 0){
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
    numberArr = currunt.split(" ").filter(item => item !== "")
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
    numberArr = currunt.split(" ").filter(item => item !== "")
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
    numberArr = currunt.split(" ").filter(item => item !== "")
    if (numberArr.length == 3){
        result = Number(numberArr[0]);
        operator = numberArr[1];
        newNum = Number(numberArr[2]);
        final = operate(result, newNum, operator);
        lbl.textContent = final + " - ";
    }else{
        lbl.textContent = currunt + " " + '-' + " ";
    }
});

eq.addEventListener('click', function(){
    currunt = lbl.textContent;
    numberArr = currunt.split(" ").filter(item => item !== "")
    result = Number(numberArr[0]);
    operator = numberArr[1];
    newNum = Number(numberArr[2]);
    final = operate(result, newNum, operator);
    lbl.textContent = Math.round(final  * 100)/100;

    if (final !== ''){

    buttons.addEventListener('click', function(event){
        if (event.target.tagName === 'BUTTON') {
            currunt = '';
            result = 0;
            newNum = 0;
            operator = '';
            lbl.textContent = '';
        }

    });
    }

});

