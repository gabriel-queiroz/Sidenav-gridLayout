let $container  = document.querySelector(".container");

let $botao = document.querySelector(".botao");


$botao.addEventListener('click', () => {

    $container.classList.toggle('flipper');
    $container.classList.toggle('sidenav-active');
   
});