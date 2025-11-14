const header = document.querySelector('#header');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if(window.scrollY > lastScrollY) {
    header.classList.add('hide');
    console.log("tela desaparece");
  } else {
    header.classList.remove('hide');
    console.log("tela aparece");
  }
  lastScrollY = window.scrollY;
})

/*section-produtos*/
// Função para deslizar os carrosséis
document.querySelectorAll('.container-carousel').forEach(carrossel => {
  const container = carrossel.querySelector('.carousel');
  const btnEsquerda = carrossel.querySelector('.esquerda');
  const btnDireita = carrossel.querySelector('.direita');

  btnEsquerda.addEventListener('click', () => {
    container.scrollBy({ left: -724, behavior: 'smooth' });
  });
 
  btnDireita.addEventListener('click', () => {
    container.scrollBy({ left: 724, behavior: 'smooth' });
  });
});

/*----FOOOTTTERRR-----*/

// Ação do botão "Fazer pedido"
function fazerPedido() {
  alert('Seu pedido foi iniciado!')
}

document.querySelector('#btn-fazer-pedido-1').addEventListener('click', () => {
  fazerPedido();
});

document.querySelector('#btn-fazer-pedido-2').addEventListener('click', () => {
  fazerPedido();
});
 
// ======== BOTÃO VOLTAR AO TOPO ========
const btnVoltarTopo = document.querySelector('#topBtn')

btnVoltarTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("topo")
});

// Ação do botão "Fazer pedido"
document.getElementById('fazerPedido').addEventListener('click', () => {
  alert('Seu pedido foi iniciado!');
});
