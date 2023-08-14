import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

const mybtn = document.querySelectorAll(".numpad");
const myInput = document.querySelector("#input");
const btnAdition = document.querySelector("#plus");
let restultat = "";




  function addNumber0(){
    restultat += "7";
    viewResultat();
  };
  function addNumber1(){
    restultat += "8";
    viewResultat();
  };
  function addNumber2(){
    restultat += "9";
    viewResultat();
  };
  function addNumber3(){
    restultat += "4";
    viewResultat();
  };
  function addNumber4(){
    restultat += "5";
    viewResultat();
  };
  function addNumber5(){
    restultat += "6";
    viewResultat();
  };
  function addNumber6(){
    restultat += "1";
    viewResultat();
  };
  function addNumber7(){
    restultat += "2";
    viewResultat();
  };
  function addNumber8(){
    restultat += "3";
    viewResultat();
  };
  function addNumber9(){
    restultat += ".";
    viewResultat();
  };
  function addNumber10(){
    restultat += "0";
    viewResultat();
  };

  function clickBtbn(btn){
    if(btn === mybtn[0]){
        btn.addEventListener('click', addNumber0);
    }else if(btn === mybtn[1]){
        btn.addEventListener('click', addNumber1);
    }else if(btn === mybtn[2]){
        btn.addEventListener('click', addNumber2);
    }else if(btn === mybtn[3]){
        btn.addEventListener('click', addNumber3);
    }else if(btn === mybtn[4]){
        btn.addEventListener('click', addNumber4);
    }else if(btn === mybtn[5]){
        btn.addEventListener('click', addNumber5);
    }else if(btn === mybtn[6]){
        btn.addEventListener('click', addNumber6);
    }else if(btn === mybtn[7]){
        btn.addEventListener('click', addNumber7);
    }else if(btn === mybtn[8]){
        btn.addEventListener('click', addNumber8);
    }else if(btn === mybtn[9]){
        btn.addEventListener('click', addNumber9);
    }else if(btn === mybtn[10]){
        btn.addEventListener('click', addNumber10);
    }else{
        console.log("Eror");
    }
   
  };

  function viewResultat(){
    const conversionTonumber = eval(restultat);
    myInput.value = conversionTonumber;
  };

  function calcul(operation){
    const lastCaractere = restultat[restultat.length - 1];
  
  if (lastCaractere === '+' || lastCaractere === '-' || lastCaractere === '*' || lastCaractere === '/') {
    restultat = restultat.slice(0, -1);
  }
  
  restultat += operation;
  operAdition();
  viewResultat();
  };

  function operAdition(e){
    restultat += "+";
    myInput.value='';
    e.preventDefault();
  };
  btnAdition.addEventListener('click', operAdition, calcul);

  mybtn.forEach(clickBtbn);


  

  

  
 

  
   
 























