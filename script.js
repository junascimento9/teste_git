const botao = document.querySelector('button');

function somar () {
  const div = document.querySelector('div');
  const total = Number(div.innerText) + 1;
  if(total < 10){
    div.innerText = total;
  }
  else {
    console.log('impossivel realizar operacion')
  }
}

if (botao) {
  botao.addEventListener('click', somar);
} 

console.log(botao)