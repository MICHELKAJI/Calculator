import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

const mybtn = document.querySelectorAll(".numpad");
const myInput = document.querySelector("#input");
const btnAdition = document.querySelector("#plus");
const vieuwCacul = document.querySelector("#calcul");
const elgality = document.querySelector("#equals");
const soustraction = document.querySelector("#minus");
const multiplication = document.querySelector("#times");
const divisition = document.querySelector("#divideby");
const btnReset = document.querySelector("#reset");
const btnSing = document.querySelector(".secondary");
let restultat = "";



  function addNumber0(e){
    restultat += "7";
    viewResultat();
    e.preventDefault();
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
    const conversionTonumber = restultat;
    myInput.value = conversionTonumber;
  };

  // function calcul(operation){
  //   const lastCaractere = restultat[restultat.length - 1];
  
  // if (lastCaractere === '+' || lastCaractere === '-' || lastCaractere === '*' || lastCaractere === '/') {
  //   restultat = restultat.slice(0, -1);
  // }
  
  // restultat += operation;
  // viewResultat();
  // };

  function operAdition(e){
    restultat += "+";
    vieuwCacul.innerHTML = "+";
    myInput.value='';
    const conversionTonumber = restultat;
    vieuwCacul.innerHTML = conversionTonumber;
    e.preventDefault();
  };

    function operSoustraction(e){
      restultat += "-";
      vieuwCacul.innerHTML = "-";
      myInput.value='';
      const conversionTonumber = restultat;
      vieuwCacul.innerHTML = conversionTonumber;
      e.preventDefault();
    };
  
  function equalis(e){
    const valueInput = eval(restultat);
    myInput.value = valueInput;
    vieuwCacul.innerHTML = restultat + "=";
    e.preventDefault();
  };

  function operationMulti(e){
    restultat += "*";
      vieuwCacul.innerHTML = "x";
      myInput.value='';
      const conversionTonumber = restultat;
      vieuwCacul.innerHTML = conversionTonumber;
      e.preventDefault();
  };
  function operationDivision(e){
    restultat += "/";
    vieuwCacul.innerHTML = "/";
    myInput.value='';
    const conversionTonumber = restultat;
    vieuwCacul.innerHTML = conversionTonumber;
    e.preventDefault();
  };
  function plusOrsoustaction(e){
    restultat += "-";
    vieuwCacul.innerHTML = "-";
    myInput.value='';
    const conversionTonumber = restultat;
    vieuwCacul.innerHTML = conversionTonumber;
    e.preventDefault();
  }
  function clearing(e){
    location.reload();
  };
  
  btnAdition.addEventListener('click', operAdition);
  elgality.addEventListener('click' , equalis);
  soustraction.addEventListener('click', operSoustraction);
  multiplication.addEventListener('click', operationMulti);
  divisition.addEventListener('click', operationDivision);
  btnReset.addEventListener('click', clearing);
  btnSing.addEventListener('click' , plusOrsoustaction);

  mybtn.forEach(clickBtbn);

  console.log(eval("2*4/2"));


  

  

  
 

  
   
 























