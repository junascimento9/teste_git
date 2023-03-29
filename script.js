//manipulação de DOM
//const nav = document.querySelector('nav');
//const produtos = document.querySelector('.produtos a');
//console.log(nav)
//console.log(produtos)
//console.log(produtos.href)
//produtos.remove()
//nav.style.backgroundColor="black"
//nav.style.padding="1rem"

//contas simples
//let total = 0;
//const compras = 100;
//const imposto = 10;
//total = compras + imposto;
//const dobro = total * 2; //multiplicação
//console.log(dobro);
//const metade = total / 2; //divisão
//const desconto = total - 20;
//const strings = '20' + '20'; // 2020
//const numbers = 20 + 20; // 40

//const nome = 'O senhor dos Anéis';
//const ano = 1954;
//const autor = 'J. R R. Tolkien';

//const nome = 'O senhor dos Anéis'

const circulo = document.querySelector("#circulo");

function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.top = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);