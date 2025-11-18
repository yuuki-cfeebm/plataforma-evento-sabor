
let usuarios = JSON.parse(localStorage.getItem('usuarios'))
let usuariosLogados = []
// Validação simples de senha
document.getElementById('formLogin').addEventListener('submit', function(e) {
  e.preventDefault();

  // const emailDigitado = document.getElementById('Email').value;
  // const senhaDigitada = document.getElementById('senha').value;
  const emailDigitado = document.getElementById('Email').value;
  const senhaDigitada = document.getElementById('senha').value;

  const encontrarUsuario = usuarios.find(usuario => usuario.email == emailDigitado && usuario.senha == senhaDigitada)  

  if (emailDigitado === encontrarUsuario.email &&   senhaDigitada === encontrarUsuario.senha) {
    alert('Login realizado com sucesso!');
    window.location.href = "../index.html"; // Redireciona para a página principal
    usuariosLogados.push(encontrarUsuario)
    localStorage.setItem('usuariosLogados', JSON.stringify(encontrarUsuario))
  } else {
    alert('Usuário ou senha incorretos')
  }
});
