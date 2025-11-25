const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const tel = document.querySelector('#telefone')
const senha = document.querySelector('#senha')
const confirmar = document.querySelector('#confirmar-senha')

const infoAdmin = {
  email: "admin@gmail.com",
  senha: "admin123"
}

let adminCadastrado = []
adminCadastrado = infoAdmin

localStorage.setItem("adminCadastrado", JSON.stringify(adminCadastrado))

let usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados') || "[]")

usuariosCadastrados.push(infoAdmin)
console.log(usuariosCadastrados)

document.getElementById('formCadastro').addEventListener('submit', (event) => {
  event.preventDefault();

  if(senha.value !== confirmar.value) {
    alert('As senhas não coincidem')
    return
  }

  const novoUsuario = {
    id: Date.now(),
    nome: nome.value,
    email: email.value,
    telefone: tel.value,
    senha: senha.value
  }

  usuariosCadastrados.push(novoUsuario)
  localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados))

  alert('Cadastro realizado com sucesso')
  window.location.href = '../loginPage/index.html'
});

