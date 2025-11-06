const header = document.querySelector('header')
const main = document.querySelector('main')

const componenteNav = document.createElement('nav')
const divNav = document.createElement('div')
const divNavSpan = document.createElement('span')
const ulNav = document.createElement('ul')

const divSecaoProdutos = document.createElement('div')


//li das categorias btns
const liPratos = document.querySelector('#li-pratos')
const liSalgados = document.querySelector('#li-salgados')
const liDoces = document.querySelector('#li-doces')

//categorias buttons
const categoriaPratos = document.querySelector('#btn-pratos')
const categoriaSalgados = document.querySelector('#btn-salgados')
const categoriaDoces = document.querySelector('#btn-doces')
const categoriaTodos = document.querySelector('#btn-todos')

const produtos = [
  
    {
      categoria: 'pratos',
      setImgCard: 'img/torradav2.png',
      nomeProduto: 'pratao',
      descricaoProduto: 'Deliciosa torrada com queijo',
      preco: '12,00'
    },
    {
      categoria: 'doces',
      setImgCard: 'img/torradav2.png',
      nomeProduto: 'Doce bacana',
      descricaoProduto: 'Doce bem bacana',
      preco: "20,00"
    },
    {
      categoria: 'salgados',
      setImgCard: 'img/torradav2.png',
      nomeProduto: 'salgado bacana 2',
      descricaoProduto: 'Deliciosa torrada com queijo',
      preco: '12,00'
    },
    {
      categoria: 'doces',
      setImgCard: 'img/torradav2.png',
      nomeProduto: 'Dossao legaal',
      descricaoProduto: 'Delicioso doce legal',
      preco: '60,00'
    },
    {
      categoria: 'salgados',
      setImgCard: 'img/torradav2.png',
      nomeProduto: 'salgado 5 item',
      descricaoProduto: 'Delicioso doce legal',
      preco: '60,00'
    }
  
]

function setTituloNav(tituloNav) {
  divNavSpan.textContent = tituloNav
}

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
divNavSpan.classList.add('titulo-header')
divNav.appendChild(divNavSpan) //span dentro da div da nav
componenteNav.appendChild(ulNav) //ul dentro de nav

divSecaoProdutos.classList.add('secao-produtos')
main.appendChild(divSecaoProdutos)

//'componente' Card
function card(categoria, setImgCard, nomeProduto, descricaoProduto, preco) {

  //preciso de borderColor, imgCard, nomeProduto, descricaoProduto, preco, addIcon, bgAddBtn
  const containerCard = document.createElement('div')
  const containerImg = document.createElement('div')
  const cardBody = document.createElement('div')
  const cardInfo = document.createElement('div')
  const cardTexto = document.createElement('div')
  const cardPreco = document.createElement('div')
  const cardFooter = document.createElement('div')
  const bgCinza = document.createElement('div')
  const bgBranco = document.createElement('div')
  const containerCarrinho = document.createElement('div')

  let cont = 0
  let controlarItemAdd = false

  containerCard.classList.add('container-card')
  containerImg.classList.add('container-img')
  cardBody.classList.add('card-body')
  cardInfo.classList.add('card-info')
  cardTexto.classList.add('card-texto')
  cardPreco.classList.add('card-preco')
  cardFooter.classList.add('card-footer')
  bgCinza.classList.add('bg-cinza')
  bgBranco.classList.add('bg-branco')

  const iconCarrinho = document.createElement('img')
  iconCarrinho.src = `icon/icon-carrinho.svg`
  iconCarrinho.classList.add('centralizar-btn')

  /*container-card -> card-preco*/
  //modificar as coresssssssss
  if(categoria == 'pratos') {
    containerCard.style.border = '3px solid #FFC279'
  } else if(categoria == 'salgados') {
    containerCard.style.border = '3px solid #DDE05A'
  } else if(categoria == 'doces') {
    containerCard.style.border = '3px solid #FF7DCF'
  }

  const imgCard = document.createElement('img')
  imgCard.src = `${setImgCard}`
  containerImg.appendChild(imgCard)
  containerCard.appendChild(containerImg) //add no container-card

  const spanCardTexto = document.createElement('span')
  const pCardTexto = document.createElement('p')
  spanCardTexto.textContent = `${nomeProduto}`
  pCardTexto.textContent = `${descricaoProduto}`

  const spanCardPreco = document.createElement('span')
  const pCardPreco = document.createElement('p')
  spanCardPreco.textContent = "Preço:"
  pCardPreco.textContent = `R$ ${preco}`

  cardTexto.appendChild(spanCardTexto)
  cardTexto.appendChild(pCardTexto)
  cardPreco.appendChild(spanCardPreco)
  cardPreco.appendChild(pCardPreco)
  cardInfo.appendChild(cardTexto)
  cardInfo.appendChild(cardPreco)
  cardBody.appendChild(cardInfo)
  containerCard.appendChild(cardBody) //add no container-card

  /*card-footer*/ 
  const btnDiminuir = document.createElement('button')
  const btnDiminuirIcon = document.createElement('img')
  btnDiminuirIcon.src = 'icon/icon-menos.svg'
  btnDiminuir.classList.add('centralizar-btn')
  
  const divContador = document.createElement('div')
  divContador.textContent = cont

  const btnAumentar = document.createElement('button')
  const btnAumentarIcon = document.createElement('img')
  btnAumentarIcon.src = 'icon/icon-mais.svg'
  btnAumentar.classList.add('centralizar-btn')

  btnDiminuir.appendChild(btnDiminuirIcon)
  btnAumentar.appendChild(btnAumentarIcon)
  bgBranco.appendChild(btnDiminuir)
  bgBranco.appendChild(divContador)
  bgBranco.appendChild(btnAumentar)
  bgCinza.appendChild(bgBranco)
  cardFooter.appendChild(bgCinza)
  containerCard.appendChild(cardFooter) //add no container-card

  /*container-carrinho*/
  const btnAddCarrinho = document.createElement('button')
  btnAddCarrinho.classList.add('container-carrinho')
  const btnAddCarrinhoIcon = document.createElement('img')
  btnAddCarrinhoIcon.src = 'icon/icon-carrinho.svg'
  btnAddCarrinho.appendChild(btnAddCarrinhoIcon)
  containerCarrinho.appendChild(btnAddCarrinho)
  cardFooter.appendChild(containerCarrinho)
  containerCard.appendChild(cardFooter) //add no container-card

  divSecaoProdutos.appendChild(containerCard)

  //adicionar mais de 1 item
  btnAumentar.addEventListener('click', () => {
    divContador.textContent = cont+=1
  })

  btnDiminuir.addEventListener('click', () => {
    if(divContador.textContent == 0) {
      return
    }
    divContador.textContent = cont-=1
  })

  btnAddCarrinho.addEventListener('click', () => {
    controlarItemAdd = !controlarItemAdd
    console.log(controlarItemAdd)
    if(controlarItemAdd == true) {
      btnAddCarrinho.style.background = "#4FAD00"
      btnAddCarrinhoIcon.src = "icon/carrinho-check.svg"
    } else {
      btnAddCarrinho.style.background = "#ED9224"
      btnAddCarrinhoIcon.src = "icon/icon-carrinho.svg"

    }
  })
  return containerCard
}

function setBgBtn(num) {
  const categoriasProdutos = [
    {
      id: 1,
      li: '#li-pratos',
      img: '#img-btn-pratos',
      span: '#span-btn-pratos',
      iconDefault: 'icon/icon-pratos.svg',
      iconClicked: 'icon/icon-pratos-clicked.svg',
      bgDefault: 'none',
      bg: '#FEEDD8',
      color: '#FFC279'
    },
    {
      id: 2,
      li: '#li-salgados',
      img: '#img-btn-salgados',
      span: '#span-btn-salgados',
      iconDefault: 'icon/icon-salgados.svg',
      iconClicked: 'icon/icon-salgados-clicked.svg',
      bgDefault: 'none',
      bg: '#FDD6D6',
      color: '#AF3E3E'
    },
    {
      id: 3,
      li: '#li-doces',
      img: '#img-btn-doces',
      span: '#span-btn-doces',
      iconDefault: 'icon/icon-doces.svg',
      iconClicked: 'icon/icon-doces-clicked.svg',
      bgDefault: 'none',
      bg: '#FFE1F4',
      color: '#FF7DCF'
    },
    {
      id: 4,
      li: '.li-button-todos',
      img: '#img-btn-todos',
      span: '#span-btn-todos',
      iconDefault: 'icon/icon-todos.svg',
      iconClicked: 'icon/icon-todos-clicked.svg',
      bgDefault: 'none',
      bg: '#EBEBEB',
      color: '#919191'
    }
  ]

  categoriasProdutos.forEach(categoria => {
    const li = document.querySelector(categoria.li)
    const img = document.querySelector(categoria.img)
    const span = document.querySelector(categoria.span)

    li.style.background = categoria.bgDefault
    li.style.transition = '0.2s ease-in-out'
    img.src = categoria.iconDefault
    span.style.color = '#919191'
    
  })

  const ativo = categoriasProdutos.find(categoria => categoria.id == num) //encontra a categoria que veio do parametro num
  if(ativo) {
    const li = document.querySelector(ativo.li)
    const img = document.querySelector(ativo.img)
    const span = document.querySelector(ativo.span)

    li.style.background = ativo.bg
    img.src = ativo.iconClicked
    span.style.color = ativo.color
  }
}

function renderizarCategorias(categoria) {
  divSecaoProdutos.innerHTML = "" //tava chamando os produtos de cima pq estao criados no escopo global

  categoria == 'pratos' ? setTituloNav('Pratos Principais') : ""
  categoria == 'salgados' ? setTituloNav('Salgados e Petiscos') : ""
  categoria == 'doces' ? setTituloNav('Doces e Sobremesas') : ""

  const categoriaSelecionada = produtos.filter(produto => produto.categoria == categoria)

  categoriaSelecionada.map(produto => card(
    produto.categoria, 
    produto.setImgCard, 
    produto.nomeProduto, 
    produto.descricaoProduto, 
    produto.preco,
  ))
}

function renderizarTodos() {
  divSecaoProdutos.innerHTML = ""
  setTituloNav("Todos")
  
  produtos.map(produto => card(
    produto.categoria,
    produto.setImgCard,
    produto.nomeProduto,
    produto.descricaoProduto,
    produto.preco
  ))
}

categoriaPratos.addEventListener('click', () => {
  renderizarCategorias("pratos")
  setBgBtn(1)
})
categoriaSalgados.addEventListener('click', () => {
  renderizarCategorias("salgados")
  setBgBtn(2)
})
categoriaDoces.addEventListener('click', () => {
  renderizarCategorias("doces")
  setBgBtn(3)
})
categoriaTodos.addEventListener('click', () => {
  renderizarTodos()
  setBgBtn(4)
})
