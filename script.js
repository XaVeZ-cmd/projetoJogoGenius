let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('blue');
const red = document.querySelector('red');
const green = document.querySelector('green');
const yellow = document.querySelector('yellow');


//cria ordem aleatória de cores

let shuffleOrder = () =>{
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}
//acende a p´roxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeOut(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeOut(() => {
    element.classList.remove('selected');
  });
}
//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for(let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      lose();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

//Função para o click do usuário

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeOut(() => {
  createColorElement(color).classList.remove('selected');
  });

  checkOrder();
}

//