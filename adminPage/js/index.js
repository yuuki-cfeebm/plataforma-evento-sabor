// ----------------------------
// CARREGA PRODUTOS DO STORAGE
// ----------------------------
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// ----------------------------
// SALVAR NO STORAGE
// ----------------------------
function salvarProdutos() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// ----------------------------
// MENU
// ----------------------------
document.querySelectorAll(".menu").forEach(m => {
    m.onclick = () => {
        document.querySelectorAll(".menu").forEach(i => i.classList.remove("active"));
        m.classList.add("active");

        document.querySelectorAll(".section").forEach(s => s.classList.remove("visible"));
        document.getElementById(m.dataset.target).classList.add("visible");
    };
});

// ----------------------------
// PREVIEW DE IMAGEM
// ----------------------------
document.getElementById("p_imagem").addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    document.getElementById("previewProduto").src = URL.createObjectURL(file);
    document.getElementById("previewProduto").style.display = "block";
});

// ----------------------------
// ADICIONAR PRODUTO
// ----------------------------
function addProduto() {
    const nome = p_nome.value;
    const desc = p_descricao.value;
    const preco = p_preco.value;
    const categoria = p_categoria.value;
    const imgFile = p_imagem.files[0];

    if (!nome || !desc || !preco || !imgFile)
        return alert("Preencha todos os campos!");

    const reader = new FileReader();
    reader.onload = e => {
        produtos.push({
            nome,
            descricao: desc,
            preco,
            categoria,
            imagem: e.target.result
        });

        salvarProdutos();
        atualizarProdutos();

        p_nome.value = "";
        p_descricao.value = "";
        p_preco.value = "";
        p_imagem.value = "";
        previewProduto.style.display = "none";
    };

    reader.readAsDataURL(imgFile);
}

// ----------------------------
// ATUALIZAR LISTA DE PRODUTOS
// ----------------------------
function atualizarProdutos() {
    const tabela = document.getElementById("tabelaProdutos");

    tabela.innerHTML = `
        <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
        </tr>
    `;

    produtos.forEach((p, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${p.imagem}"></td>
            <td>${p.nome}</td>
            <td>${p.descricao}</td>
            <td>R$ ${p.preco}</td>
            <td>${p.categoria}</td>
            <td><button class="delete" onclick="delProduto(${i})">Excluir</button></td>
        `;
        tabela.appendChild(tr);
    });

    document.getElementById("total-produtos").textContent = produtos.length;
}

// ----------------------------
// EXCLUIR PRODUTO
// ----------------------------
function delProduto(i) {
    produtos.splice(i, 1);
    salvarProdutos();
    atualizarProdutos();
}

// ----------------------------
// INICIALIZAÇÃO
// ----------------------------
atualizarProdutos();