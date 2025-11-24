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
  console.log(controlarCardapio)
}

document.querySelector('#fechar-cardapio').addEventListener('click', () => {
  const modalCardapio = document.querySelector('#modal-cardapio')
  modalCardapio.classList.add('esconder-cardapio')
})

//pega os btn pedido e adiciona event
const buttonsPedido = document.querySelectorAll('.btn-pedido')
buttonsPedido.forEach(button => {
  button.addEventListener('click', () => {
    fazerPedido()
  })
})

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

//botão personalido para Admin
if(usuarioLogado.email == "email@gmail.com" || usuarioLogado.senha == "admin123") {
  const buttonsNav = document.querySelector('.buttons-nav')
  const btnAdmin = document.createElement('button')
  btnAdmin.id = "btn-admin"
  btnAdmin.innerHTML = `
    botao admin
  `
  buttonsNav.appendChild(btnAdmin)

  btnAdmin.addEventListener('click', () => {
    
  })

}

// ======== BOTÃO VOLTAR AO TOPO ========
const btnVoltarTopo = document.querySelector('#topBtn')

btnVoltarTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("topo")
});