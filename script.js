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
const btnSing = document.querySelectorAll(".secondary");
let restultat = "";

  function addNumber0(){
    if(restultat.length < 8){
      restultat += "7";
      viewResultat();
    }
  };
  function addNumber1(){
    if(myInput.value.length < 8){
      restultat += "8";
      viewResultat();
    }
  };
  function addNumber2(){
    if(myInput.value.length < 8){
    restultat += "9";
    viewResultat();
    }
  };
  function addNumber3(){
    if(myInput.value.length < 8){
    restultat += "4";
    viewResultat();
    }
  };
  function addNumber4(){
    if(myInput.value.length < 8){
    restultat += "5";
    viewResultat();
    }
  };
  function addNumber5(){
    if(myInput.value.length < 8){
    restultat += "6";
    viewResultat();
    }
  };
  function addNumber6(){
    if(myInput.value.length < 8){
    restultat += "1";
    viewResultat();
    }
  };
  function addNumber7(){
    if(myInput.value.length < 8){
    restultat += "2";
    viewResultat();
    }
  };
  function addNumber8(){
    if(myInput.value.length < 8){
    restultat += "3";
    viewResultat();
    }
  };
  function addNumber9(){
    if(myInput.value !== "00" && myInput.value !== "000" && myInput.value !== "0000" && myInput.value !== "00000" && myInput.value !== "00000" &&
    myInput.value !== "0.0" && myInput.value !== "0.0.0.0.0.0" && myInput.value !== "0.00" && myInput.value !== "000.000" && myInput.value !== ""){
    restultat += ".";
    viewResultat();
    }
    
  };
  function addNumber10(){
    if(myInput.value !== "0"){
      restultat += "0";
       viewResultat();
    }
  };
  function addPlusorSoustraction(){
    restultat += "-";
    vieuwCacul.innerHTML = "-";
    myInput.value='';
    const conversionTonumber = restultat;
    vieuwCacul.innerHTML = conversionTonumber;
    changerDirection();
    viewResultat();
  };
  function pourcentage(e){
    restultat += "/100";
    viewResultat();
    e.preventDefault();
    equalis()
  }

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

  function btnClick1(btn1){
    if(btn1 === btnSing[0]){
      btn1.addEventListener('click' , clearing);
    }else if(btn1 === btnSing){
      btn1.addEventListener('click', addPlusorSoustraction);
    }else if(btn1 === btnSing[1]){
      btn1.addEventListener('click', addPlusorSoustraction);
    }else if(btn1 === btnSing[2]){
      btn1.addEventListener('click', pourcentage);
    }
  }

  function viewResultat(){
    const conversionTonumber = restultat;
    myInput.value = conversionTonumber;
  };

  function changerDirection() {
    if (myInput.dir === "ltr") {
      myInput.dir = "rtl";
    } else {
      myInput.dir = "rtl"; 
    }
  }
  function changerDirection1() {
    if (myInput.dir === "rtl") {
      myInput.dir = "ltr";
    } else {
      myInput.dir = "ltr"; 
    }
  }
  function operAdition(e){
    restultat += "+";
    vieuwCacul.innerHTML = "+";
    myInput.value='';
    const conversionTonumber = restultat;
    vieuwCacul.innerHTML = conversionTonumber;
    e.preventDefault();
    changerDirection1();
  };

    function operSoustraction(e){
      restultat += "-";
      vieuwCacul.innerHTML = "-";
      myInput.value='';
      const conversionTonumber = restultat;
      vieuwCacul.innerHTML = conversionTonumber;
      e.preventDefault();
      changerDirection1();
    };
  
  function equalis(e){
    const valueInput = eval(restultat);
    myInput.value = valueInput;
    vieuwCacul.innerHTML = restultat + "=";
    e.preventDefault();
    changerDirection1();
  };

  function operationMulti(e){
    restultat += "*";
      vieuwCacul.innerHTML = "x";
      myInput.value='';
      const conversionTonumber = restultat;
      vieuwCacul.innerHTML = conversionTonumber;
      e.preventDefault();
      changerDirection1();
  };
  function operationDivision(e){
    restultat += "/";
    vieuwCacul.innerHTML = "/";
    myInput.value='';
    const conversionTonumber = restultat;
    vieuwCacul.innerHTML = conversionTonumber;
    e.preventDefault();
    changerDirection1();
  };
  function clearing(){
    restultat = " ";
    vieuwCacul.innerHTML = "";
  };

  myInput.readOnly = true;
   
  btnAdition.addEventListener('click', operAdition);
  elgality.addEventListener('click' , equalis);
  soustraction.addEventListener('click', operSoustraction);
  multiplication.addEventListener('click', operationMulti);
  divisition.addEventListener('click', operationDivision);
  btnReset.addEventListener('click', clearing);
  myInput.addEventListener('keydown', function(e){
    e.preventDefault()
  });

  mybtn.forEach(clickBtbn);
  btnSing.forEach(btnClick1);

  


  

  

  
 

  
   
 























