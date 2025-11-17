const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const tel = document.querySelector('#telefone')
const senha = document.querySelector('#senha')
const confirmar = document.querySelector('#confirmar-senha')

let usuarios = JSON.parse(localStorage.getItem('usuarios') || "[]")

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

  usuarios.push(novoUsuario)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))

  alert('Cadastro realizado com sucesso')
});

