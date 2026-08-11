const listaNoticias = document.getElementById('lista-noticias');

function mostrarNoticias(noticias) {
    listaNoticias.innerHTML = '';

    noticias.forEach(noticia => {
        const artigo = document.createElement('article');
        artigo.dataset.categoria = noticia.categoria;
        artigo.style.cursor = 'pointer';

        artigo.innerHTML = `
            <h2>${noticia.titulo}</h2>
            <p>${noticia.resumo}</p>
            <button class="btn-salvar">☆ Salvar</button>
        `;

        artigo.addEventListener('click', function(evento) {
            if (evento.target.classList.contains('btn-salvar')) return;
            window.location.href = `artigo.html?id=${noticia.id}`;
        });

        listaNoticias.appendChild(artigo);
    });

    ativarBotoesSalvar();
}

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

function ativarBotoesSalvar() {
    const botoesSalvar = document.querySelectorAll('.btn-salvar');

    botoesSalvar.forEach(botao => {
        botao.addEventListener('click', function() {
            const salvo = this.classList.toggle('salvo');
            this.textContent = salvo ? '★ Salvo' : '☆ Salvar';
        });
    });
}

const campoBusca = document.getElementById('busca');

campoBusca.addEventListener('input', function() {
    const termo = this.value.toLowerCase().trim();

    const filtradas = todasNoticias.filter(noticia =>
        noticia.titulo.toLowerCase().includes(termo) ||
        noticia.resumo.toLowerCase().includes(termo)
    );

    mostrarNoticias(filtradas);
});

mostrarNoticias(todasNoticias);

const botaoTema = document.getElementById('toggle-tema');
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'claro') {
    document.body.classList.add('claro');
    botaoTema.textContent = '☀️';
}

botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('claro');
    const estaClaro = document.body.classList.contains('claro');
    botaoTema.textContent = estaClaro ? '☀️' : '🌙';
    localStorage.setItem('tema', estaClaro ? 'claro' : 'escuro');
});
