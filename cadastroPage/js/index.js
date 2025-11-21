const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const tel = document.querySelector('#telefone')
const senha = document.querySelector('#senha')
const confirmar = document.querySelector('#confirmar-senha')

let usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados') || "[]")

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

