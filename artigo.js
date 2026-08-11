const parametros = new URLSearchParams(window.location.search);
const idArtigo = parseInt(parametros.get('id'));
const noticia = todasNoticias.find(n => n.id === idArtigo);

const conteudo = document.getElementById('conteudo-artigo');

if (noticia) {
    conteudo.innerHTML = `
        <a href="index.html" class="voltar">← Voltar para as notícias</a>
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="artigo-imagem">
        <h1 class="artigo-titulo">${noticia.titulo}</h1>
        <p class="artigo-texto">${noticia.textoCompleto}</p>

        <div class="grafico-container">
            <h3>Dados relacionados</h3>
            <canvas id="grafico" width="600" height="250"></canvas>
        </div>

        <div class="comentarios">
            <h3>Comentários</h3>
            <ul class="lista-comentarios" id="lista-comentarios"></ul>

            <form class="form-comentario" id="form-comentario">
                <input type="text" id="nome-comentario" placeholder="Seu nome" required>
                <textarea id="texto-comentario" placeholder="Escreva um comentário..." required></textarea>
                <button type="submit">Enviar comentário</button>
            </form>
        </div>
    `;

    desenharGrafico(noticia.grafico);
    carregarComentarios();

    document.getElementById('form-comentario').addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome = document.getElementById('nome-comentario').value.trim();
        const texto = document.getElementById('texto-comentario').value.trim();

        if (!nome || !texto) return;

        const chave = `comentarios-${idArtigo}`;
        const comentarios = JSON.parse(localStorage.getItem(chave)) || [];
        comentarios.push({ nome, texto });
        localStorage.setItem(chave, JSON.stringify(comentarios));

        document.getElementById('nome-comentario').value = '';
        document.getElementById('texto-comentario').value = '';

        carregarComentarios();
    });

} else {
    conteudo.innerHTML = `
        <a href="index.html" class="voltar">← Voltar para as notícias</a>
        <p>Notícia não encontrada.</p>
    `;
}

function carregarComentarios() {
    const chave = `comentarios-${idArtigo}`;
    const comentarios = JSON.parse(localStorage.getItem(chave)) || [];
    const lista = document.getElementById('lista-comentarios');

    if (comentarios.length === 0) {
        lista.innerHTML = '<li class="sem-comentarios">Nenhum comentário ainda. Seja o primeiro!</li>';
        return;
    }

    lista.innerHTML = comentarios.map(c => `
        <li>
            <div class="comentario-nome">${c.nome}</div>
            <div class="comentario-texto">${c.texto}</div>
        </li>
    `).join('');
}

function desenharGrafico(dados) {
    const canvas = document.getElementById('grafico');
    const ctx = canvas.getContext('2d');
    const estiloClaro = document.body.classList.contains('claro');

    const corBarra = '#4f9cff';
    const corTexto = estiloClaro ? '#1a1d29' : '#e4e6eb';

    const largura = canvas.width;
    const altura = canvas.height;
    const maxValor = Math.max(...dados.map(d => d.valor));
    const larguraBarra = largura / dados.length - 30;
    const alturaMaxima = altura - 50;

    ctx.clearRect(0, 0, largura, altura);
    ctx.font = '13px Arial';
    ctx.textAlign = 'center';

    dados.forEach((item, i) => {
        const alturaBarra = (item.valor / maxValor) * alturaMaxima;
        const x = i * (larguraBarra + 30) + 20;
        const y = altura - alturaBarra - 25;

        ctx.fillStyle = corBarra;
        ctx.fillRect(x, y, larguraBarra, alturaBarra);

        ctx.fillStyle = corTexto;
        ctx.fillText(item.valor, x + larguraBarra / 2, y - 8);
        ctx.fillText(item.label, x + larguraBarra / 2, altura - 8);
    });
}

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

    if (noticia) desenharGrafico(noticia.grafico);
});
