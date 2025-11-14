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


// Ação do botão "Fazer pedido"
let controlarCardapio = false

function fazerPedido() {
  const modalCardapio = document.querySelector('#modal-cardapio')

  modalCardapio.classList.remove('esconder-cardapio')
  console.log("apertou botao")
  console.log(controlarCardapio)
  // alert('Seu pedido foi iniciado!')
}

document.querySelector('#fechar-cardapio').addEventListener('click', () => {
  const modalCardapio = document.querySelector('#modal-cardapio')
  modalCardapio.classList.add('esconder-cardapio')
  console.log('apertou x')
})

//btn da home
const btnPedidoHome = document.querySelector('#btn-fazer-pedido-1')
btnPedidoHome.addEventListener('click', () => {
  fazerPedido();
});

//btn do footer
const btnPedidoFooter = document.querySelector('#btn-fazer-pedido-2')
btnPedidoFooter.addEventListener('click', () => {
  fazerPedido();
});

// ======== BOTÃO VOLTAR AO TOPO ========
const btnVoltarTopo = document.querySelector('#topBtn')

btnVoltarTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("topo")
});
