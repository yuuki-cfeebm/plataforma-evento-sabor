let admin = JSON.parse(localStorage.getItem("adminCadastrado"))

let usuarios = JSON.parse(localStorage.getItem('usuariosCadastrados'))

let usuarioLogado = []
// Validação simples de senha
document.getElementById('formLogin').addEventListener('submit', function(e) {
  e.preventDefault();

  // const emailDigitado = document.getElementById('Email').value;
  // const senhaDigitada = document.getElementById('senha').value;
  const emailDigitado = document.getElementById('Email').value;
  const senhaDigitada = document.getElementById('senha').value;

  const encontrarUsuario = usuarios.find(usuario => usuario.email == emailDigitado && usuario.senha == senhaDigitada)  

  if (emailDigitado === encontrarUsuario.email && senhaDigitada === encontrarUsuario.senha) {
    alert('Login realizado com sucesso!');
    window.location.href = "../index.html"; // Redireciona para a página principal
    usuarioLogado = encontrarUsuario
  } else if(encontrarUsuario.email === "admin@gmail.com"  && encontrarUsuario.senha === "admin123") {
    usuarioLogado = admin
    window.location.href = "../index.html";
  } else {
    alert('Usuário ou senha incorretos')
  }

  localStorage.setItem('usuarioLogado', JSON.stringify(encontrarUsuario))
});
