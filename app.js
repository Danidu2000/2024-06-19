function calc() {
    let x = document.getElementById("Label").innerHTML;
    let y = eval(x);
    document.getElementById("Label").innerHTML = y;
}

function btn7() {
    document.getElementById("Label").innerHTML += "7";
}
function btn8() {
    document.getElementById("Label").innerHTML += "8";
}
function btn9() {
    document.getElementById("Label").innerHTML += "9";
}
function btn4() {
    document.getElementById("Label").innerHTML += "4";
}
function btn5() {
    document.getElementById("Label").innerHTML += "5";
}
function btn6() {
    document.getElementById("Label").innerHTML += "6";
}
function btn1() {
    document.getElementById("Label").innerHTML += "1";
}
function btn2() {
    document.getElementById("Label").innerHTML += "2";
}
function btn3() {  
    document.getElementById("Label").innerHTML += "3";
}
function btn0() {
    document.getElementById("Label").innerHTML += "0"; 
}
function btnC() {
    document.getElementById("Label").innerHTML = "";
}
function btn_dot() {
    document.getElementById("Label").innerHTML += ".";
}
function btn_sub() {
    document.getElementById("Label").innerHTML += "-";
}
function btn_add() {
    document.getElementById("Label").innerHTML += "+";
}
function btn_mul() {
    document.getElementById("Label").innerHTML += "*";
}
function btn_de() {
    document.getElementById("Label").innerHTML += "/";
}
function btn_del() {
    document.getElementById("Label").innerHTML = "";
}
function btn_clr() {
    document.getElementById("Label").innerHTML = "";
}