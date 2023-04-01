//const botao = document.querySelector('button');

//function somar () {
  //const div = document.querySelector('div');
  //const total = Number(div.innerText) + 1;
  //if(total < 10){
    //div.innerText = total;
  //}
  //else {
    //console.log('impossivel realizar operacion')
  //}
//}

//if (botao) {
  //botao.addEventListener('click', somar);
//} 

//console.log(botao)


//const links = document.querySelectorAll('nav a');


//function ativarLink(link){
    //const href = link.href;
    //const url = document.location.href;

    //if(href === url){
        //link.style.backgroundColor = 'black';
        //link.style.color = 'white';
    //}
    //console.log(url) 
    //console.log(href)
//}

//links.forEach(ativarLink)


//SOLUÇÃO DE PROBLEMAS//

const imagens = document.querySelectorAll('#galeria li img');

function galeriaTrocar(event) {
  const principal = document.querySelector('#imagem-principal')
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;
  //opção 2//
  //principal.setAttribute('alt', clicada.getAttribute('alt'))
  console.log(clicada.src);
}

function galeriaClique(imagem) {
  imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);