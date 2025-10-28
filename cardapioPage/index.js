const header = document.querySelector('header')
const main = document.querySelector('main')

const componenteNav = document.createElement('nav')
const divNav = document.createElement('div')
const divNavSpan = document.createElement('span')
const ulNav = document.createElement('ul')

const divSecaoProdutos = document.createElement('div')

const btnPratos = document.querySelector('#btn-pratos')

/*"estados"*/
function setTituloNav(tituloNav) {
  divNavSpan.textContent = tituloNav
}

function setSection(categoria) {

}
/*---------*/

ulNav.innerHTML = `
  <li>
    <button>
      <img src="" alt="icon-carrinho">
    </button>
  </li>
  <li>
    <button>
      <img src="" alt="icon-user">
      <div class="user-name">
        <span>username</span>
        <span>nome-real</span>
      </div>
    </button>
  </li>
`
header.appendChild(componenteNav) //nav dentro do header
componenteNav.appendChild(divNav) //div do titulo dentro da nav
divNavSpan.textContent = "Todos"
divNav.appendChild(divNavSpan) //span dentro da div da nav
componenteNav.appendChild(ulNav) //ul dentro de nav

divSecaoProdutos.classList.add('secao-produtos')
main.appendChild(divSecaoProdutos)

function card() {
  
}


btnPratos.addEventListener('click', () => {
  setTituloNav("Pratos Principais")

})