const listaNoticias = document.getElementById('lista-noticias');

const todasNoticias = [
    {
        id: 1,
        categoria: "ia",
        titulo: "Nova IA promete revolucionar programação",
        resumo: "Ferramenta consegue gerar código completo a partir de descrições simples em texto."
    },
    {
        id: 2,
        categoria: "gadgets",
        titulo: "Novo smartphone é lançado com bateria de longa duração",
        resumo: "Aparelho promete até três dias de uso sem precisar recarregar."
    },
    {
        id: 3,
        categoria: "software",
        titulo: "Atualização de sistema traz novos recursos",
        resumo: "Nova versão foca em desempenho e segurança para os usuários."
    },
    {
        id: 4,
        categoria: "ia",
        titulo: "Pesquisadores desenvolvem IA capaz de identificar doenças em imagens",
        resumo: "Modelo analisa exames com alta precisão e pode agilizar diagnósticos."
    }
];

// Cria o HTML de cada notícia e insere na página
function mostrarNoticias(noticias) {
    listaNoticias.innerHTML = '';

    noticias.forEach(noticia => {
        const artigo = document.createElement('article');
        artigo.dataset.categoria = noticia.categoria;

        artigo.innerHTML = `
    <h2>${noticia.titulo}</h2>
    <p>${noticia.resumo}</p>
    <button class="btn-salvar" aria-label="Salvar notícia: ${noticia.titulo}">☆ Salvar</button>

        `;

        listaNoticias.appendChild(artigo);
    });

    ativarBotoesSalvar();
}

// Filtro por categoria
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(evento) {
        evento.preventDefault();

        links.forEach(l => l.classList.remove('ativo'));
        this.classList.add('ativo');

        const categoria = this.dataset.categoria;

        if (categoria === 'todos') {
            mostrarNoticias(todasNoticias);
        } else {
            const filtradas = todasNoticias.filter(n => n.categoria === categoria);
            mostrarNoticias(filtradas);
        }
    });
});

// Botão de salvar (precisa ser reativado toda vez que os cards são recriados)
function ativarBotoesSalvar() {
    const botoesSalvar = document.querySelectorAll('.btn-salvar');

    botoesSalvar.forEach(botao => {
        botao.addEventListener('click', function() {
            const salvo = this.classList.toggle('salvo');
            this.textContent = salvo ? '★ Salvo' : '☆ Salvar';
        });
    });
}

// Mostra todas as notícias assim que a página carrega
mostrarNoticias(todasNoticias);

// Busca por texto
const campoBusca = document.getElementById('busca');

campoBusca.addEventListener('input', function() {
    const termo = this.value.toLowerCase().trim();

    const filtradas = todasNoticias.filter(noticia =>
        noticia.titulo.toLowerCase().includes(termo) ||
        noticia.resumo.toLowerCase().includes(termo)
    );

    mostrarNoticias(filtradas);

