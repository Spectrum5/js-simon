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
    document.getElementById(`container`).innerHTML =`Quali sono i numeri?`;
   let cleanBox= document.querySelectorAll(`.bg-blue`);
    for( let i = 0; i < cleanBox.length; i++){
        cleanBox[i].classList.add(`d-none`);
    }
}

function response(){

    console.log(listNumber)
    for( let i = 0; i < listNumber.length; i++){
        const response = Number(window.prompt(`numero da inserire`, ``));

      if( listNumber.includes(response)){
              trueNumber.push(response);       
       }
      }
      document.getElementById(`responce`).innerHTML =`i numeri che hai inserito nel modo corretto sono: ( ${trueNumber}) quindi hai indovinato (${trueNumber.length}) numeri`
}

let btn = document.getElementById(`my-btn`);
btn.addEventListener(`click`, function(){
    box.innerHTML = "";
    generatorNumber(listNumber, 5);
    
    for( let i = 0; i < listNumber.length; i++){
      let box =  document.createElement(`div`);
        box.classList.add(`bg-blue`)
        box.innerHTML = listNumber[i];
       let boxContainer =  document.getElementById(`box`);
       boxContainer.append(box);
    }
    document.getElementById(`container`).innerHTML =`Questi sono i numeri da ricordare:`;

    
    setTimeout(clear, 3000);
    setTimeout(response, 3100);
})