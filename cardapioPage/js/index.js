// Função para deslizar os carrosséis
document.querySelectorAll('.carrossel').forEach(carrossel => {
  const container = carrossel.querySelector('.container-cards');
  const btnEsquerda = carrossel.querySelector('.esquerda');
  const btnDireita = carrossel.querySelector('.direita');
 
  btnEsquerda.addEventListener('click', () => {
    container.scrollBy({ left: -250, behavior: 'smooth' });
  });
 
  btnDireita.addEventListener('click', () => {
    container.scrollBy({ left: 250, behavior: 'smooth' });
  });
});
 
// Ação do botão "Fazer pedido"
document.getElementById('fazerPedido').addEventListener('click', () => {
  alert('Seu pedido foi iniciado!');
});
 
// ======== BOTÃO VOLTAR AO TOPO ========
document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
 