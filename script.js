import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

const test = document.querySelector("#calcul");
const mybtn1 = document.querySelector("#numpad1");
const btnClear = document.querySelector("#reset");
const mybtn2 = document.querySelector("#numpad2");
const mybtn3 = document.querySelector("#numpad3");
const mybtn4 = document.querySelector("#numpad4");
const mybtn5 = document.querySelector("#numpad5");
const mybtn6 = document.querySelector("#numpad6");
const mybtn7 = document.querySelector("#numpad7");
const mybtn8 = document.querySelector("#numpad8");
const mybtn9 = document.querySelector("#numpad9");
const mybtn0 = document.querySelector("#numpad0");
const mybtnPoint = document.querySelector("#numpadPoint");





const inputview = document.querySelector("#input");

function clear(){
    test.innerHTML = " ";
}
 mybtn1.addEventListener('click', function(){
    inputview.value += "1";
});
mybtn2.addEventListener('click', function(){
    inputview.value += "2";
})
mybtn3.addEventListener('click', function(){
    inputview.value += "3";
});
mybtn4.addEventListener('click', function(){
    inputview.value += "4";
})
mybtn5.addEventListener('click', function(){
    inputview.value += "5";
});
mybtn6.addEventListener('click', function(){
    inputview.value += "6";
})
mybtn7.addEventListener('click', function(){
    inputview.value += "7";
});
mybtn8.addEventListener('click', function(){
    inputview.value += "8";
})
mybtn9.addEventListener('click', function(){
    inputview.value += "9";
});
mybtn0.addEventListener('click', function(){
    inputview.value += "0";
});
mybtnPoint.addEventListener('click', function(){
    inputview.value += ".";
});

btnClear.addEventListener('click', clear );










