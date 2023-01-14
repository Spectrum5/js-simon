const listNumber = [];
const trueNumber = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function generatorNumber(array, slotArray){ 
    while(array.length< slotArray){
       let number = getRandomInt(1,101);
        if(array.includes(number) === false){
            array.push(number);
        }
    }
}

function clear(){
    document.getElementById(`container`).innerHTML =`quali sono i numeri?`;
}

function response(){

    console.log(listNumber)
    for( let i = 0; i < listNumber.length; i++){
        const response = Number(window.prompt(`numero da inserire`, ``));

      if( listNumber.includes(response)){

              trueNumber.push(response);       
       }
      }
      document.getElementById(`container`).innerHTML =`i numeri che hai inserito nel modo corretto sono: ${trueNumber}, quindi hai indovinato ${trueNumber.length} numeri`
}

let btn = document.getElementById(`my-btn`);
btn.addEventListener(`click`, function(){
    generatorNumber(listNumber, 5);
    document.getElementById(`container`).innerHTML =`questi sono i numeri da ricordare: ${listNumber}`;

    
    setTimeout(clear, 30000);
    setTimeout(response, 30500);
})