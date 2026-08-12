const todasNoticias = [
    {
        id: 1,
        categoria: "ia",
        titulo: "Nova IA promete revolucionar programação",
        resumo: "Ferramenta consegue gerar código completo a partir de descrições simples em texto.",
        textoCompleto: "A nova ferramenta de inteligência artificial vem sendo testada por desenvolvedores ao redor do mundo. Ela consegue interpretar descrições em linguagem natural e transformar em código funcional em diversas linguagens de programação. Especialistas apontam que isso pode acelerar bastante o desenvolvimento de software, mas também levanta discussões sobre o papel dos programadores no futuro.",
        imagem: "https://picsum.photos/seed/tech1/700/350",
        grafico: [
            { label: "2023", valor: 20 },
            { label: "2024", valor: 45 },
            { label: "2025", valor: 68 },
            { label: "2026", valor: 90 }
        ]
    },
    {
        id: 2,
        categoria: "gadgets",
        titulo: "Novo smartphone é lançado com bateria de longa duração",
        resumo: "Aparelho promete até três dias de uso sem precisar recarregar.",
        textoCompleto: "O novo aparelho chega ao mercado com uma bateria de capacidade bem maior que a média atual, além de um sistema de economia de energia mais inteligente. Nos testes iniciais, o smartphone conseguiu manter três dias de uso moderado com uma única carga, superando os concorrentes diretos.",
        imagem: "https://picsum.photos/seed/tech2/700/350",
        grafico: [
            { label: "Modelo A", valor: 18 },
            { label: "Modelo B", valor: 24 },
            { label: "Este modelo", valor: 72 }
        ]
    },
    {
        id: 3,
        categoria: "software",
        titulo: "Atualização de sistema traz novos recursos",
        resumo: "Nova versão foca em desempenho e segurança para os usuários.",
        textoCompleto: "A atualização mais recente do sistema operacional traz melhorias significativas de desempenho, além de correções importantes de segurança. Usuários relatam inicialização mais rápida e menor consumo de memória após a instalação.",
        imagem: "https://picsum.photos/seed/tech3/700/350",
        grafico: [
            { label: "Antes", valor: 40 },
            { label: "Depois", valor: 78 }
        ]
    },
    {
        id: 4,
        categoria: "ia",
        titulo: "Pesquisadores desenvolvem IA capaz de identificar doenças em imagens",
        resumo: "Modelo analisa exames com alta precisão e pode agilizar diagnósticos.",
        textoCompleto: "Um time de pesquisadores desenvolveu um modelo de inteligência artificial treinado especificamente para reconhecer padrões em exames de imagem. Em testes controlados, o modelo atingiu alta taxa de acerto, podendo servir como uma ferramenta de apoio para profissionais de saúde, agilizando triagens.",
        imagem: "https://picsum.photos/seed/tech4/700/350",
        grafico: [
            { label: "Precisão humana", valor: 82 },
            { label: "Precisão da IA", valor: 91 }
        ]
    },
    {
        id: 5,
        categoria: "gadgets",
        titulo: "Fones de ouvido com cancelamento de ruído ganham nova geração",
        resumo: "Novo modelo promete cancelamento de ruído até 40% mais eficiente.",
        textoCompleto: "A nova geração de fones aposta em um chip dedicado exclusivamente ao processamento de cancelamento de ruído, permitindo isolar sons externos com mais eficiência sem comprometer a qualidade do áudio.",
        imagem: "https://picsum.photos/seed/tech5/700/350",
        grafico: [
            { label: "Geração anterior", valor: 60 },
            { label: "Nova geração", valor: 85 }
        ]
    },
    {
        id: 6,
        categoria: "software",
        titulo: "Navegador leve ganha popularidade em computadores antigos",
        resumo: "Alternativa consome menos memória e roda bem em hardware limitado.",
        textoCompleto: "Com o aumento no número de computadores mais antigos ainda em uso, navegadores mais leves vêm ganhando espaço. Eles priorizam baixo consumo de memória e compatibilidade com sistemas mais antigos, sacrificando alguns recursos visuais mais pesados.",
        imagem: "https://picsum.photos/seed/tech6/700/350",
        grafico: [
            { label: "Navegador padrão", valor: 850 },
            { label: "Navegador leve", valor: 320 }
        ]
    },
    {
        id: 7,
        categoria: "ia",
        titulo: "Empresas adotam assistentes de IA no atendimento ao cliente",
        resumo: "Automação promete respostas mais rápidas em horários de pico.",
        textoCompleto: "Cada vez mais empresas estão adotando assistentes baseados em inteligência artificial para o primeiro nível de atendimento ao cliente, reduzindo o tempo de espera e liberando atendentes humanos para casos mais complexos.",
        imagem: "https://picsum.photos/seed/tech7/700/350",
        grafico: [
            { label: "Tempo antes (min)", valor: 12 },
            { label: "Tempo depois (min)", valor: 3 }
        ]
    },
    {
        id: 8,
        categoria: "gadgets",
        titulo: "Carregador universal se torna padrão obrigatório",
        resumo: "Nova regulamentação exige o mesmo tipo de conector em diversos aparelhos.",
        textoCompleto: "Uma nova regulamentação passou a exigir que a maioria dos aparelhos eletrônicos portáteis utilize o mesmo padrão de conector para carregamento, reduzindo o desperdício eletrônico e facilitando a vida dos consumidores.",
        imagem: "https://picsum.photos/seed/tech8/700/350",
        grafico: [
            { label: "Tipos de conector (antes)", valor: 5 },
            { label: "Tipos de conector (depois)", valor: 1 }
        ]
    },
    {
        id: 9,
        categoria: "gadgets",
        titulo: "Nova linha de smartphones chega com chip de 2 nanômetros",
        resumo: "Modelos de agosto de 2026 trazem processador mais avançado já lançado em celulares.",
        textoCompleto: "A nova geração de smartphones que chega às lojas em agosto de 2026 traz um processador fabricado em processo de 2 nanômetros, o mais avançado já usado em aparelhos móveis até agora. Os modelos eliminam a versão de entrada com pouco armazenamento, já começando com o dobro de espaço interno em relação à geração anterior. Outro destaque é um novo sistema de LEDs na parte traseira, criado especificamente para notificações visuais discretas, além de recursos mais profundos de assistente por inteligência artificial integrados diretamente ao sistema.",
        imagem: "https://picsum.photos/seed/tech9/700/350",
        grafico: [
            { label: "Chip anterior (3nm)", valor: 65 },
            { label: "Novo chip (2nm)", valor: 100 }
        ]
    },
    {
        id: 10,
        categoria: "ia",
        titulo: "Assistente de IA mais popular do mundo ultrapassa 1 bilhão de usuários",
        resumo: "Marco histórico consolida a inteligência artificial como ferramenta do dia a dia de bilhões de pessoas.",
        textoCompleto: "Um dos assistentes de inteligência artificial mais usados do mundo confirmou ter ultrapassado a marca de 1 bilhão de usuários, consolidando a IA conversacional como parte da rotina de uma parcela significativa da população mundial. A meta havia sido estabelecida para o final de 2025, mas só foi atingida nos primeiros meses de 2026. O crescimento reflete a popularização de assistentes de inteligência artificial em tarefas do cotidiano, do trabalho aos estudos.",
        imagem: "https://picsum.photos/seed/tech10/700/350",
        grafico: [
            { label: "2023 (milhões)", valor: 100 },
            { label: "2024 (milhões)", valor: 300 },
            { label: "2025 (milhões)", valor: 700 },
            { label: "2026 (milhões)", valor: 1000 }
        ]
    },
    {
        id: 11,
        categoria: "mercado",
        titulo: "Setor de tecnologia registra mais de 124 mil demissões em 2026",
        resumo: "Levantamento aponta forte reestruturação nas empresas de tecnologia ao longo do ano.",
        textoCompleto: "Um levantamento independente que acompanha cortes de pessoal no setor de tecnologia registrou mais de 124 mil demissões em empresas do ramo até o final de julho de 2026, em todo o mundo. A tendência é atribuída, em parte, à reorganização das empresas em torno de investimentos em inteligência artificial e automação de processos internos, que vem substituindo algumas funções tradicionais.",
        imagem: "https://picsum.photos/seed/tech11/700/350",
        grafico: [
            { label: "2024", valor: 95 },
            { label: "2025", valor: 110 },
            { label: "2026 (até jul.)", valor: 124 }
        ]
    },
    {
        id: 12,
        categoria: "software",
        titulo: "Segurança digital se torna preditiva com apoio de inteligência artificial",
        resumo: "Empresas migram de sistemas reativos para plataformas que antecipam ameaças.",
        textoCompleto: "Relatórios sobre tendências tecnológicas para 2026 apontam uma mudança importante na forma como empresas lidam com segurança digital. Ao invés de reagir a ataques já em andamento, plataformas de segurança agora incorporam inteligência artificial para identificar comportamentos suspeitos e agir de forma automática antes que um incidente aconteça. Essa transição também é impulsionada pelo aumento de conteúdo sintético e deepfakes, que exige formas mais confiáveis de comprovar a origem de arquivos e informações.",
        imagem: "https://picsum.photos/seed/tech12/700/350",
        grafico: [
            { label: "Segurança reativa", valor: 70 },
            { label: "Segurança preditiva", valor: 30 }
        ]
    },
    {
        id: 13,
        categoria: "ia",
        titulo: "Computação quântica entra em fase decisiva de desenvolvimento",
        resumo: "Primeiras aplicações práticas começam a aparecer em pesquisas de materiais.",
        textoCompleto: "A computação quântica, que por anos foi tratada principalmente como um campo experimental, começa a apresentar aplicações mais concretas em 2026. Pesquisas na área de novos materiais e modelos de previsão vêm sendo os primeiros terrenos onde o poder de processamento quântico mostra vantagens claras sobre os computadores tradicionais, ainda que a tecnologia continue restrita a poucos laboratórios e empresas de ponta.",
        imagem: "https://picsum.photos/seed/tech13/700/350",
        grafico: [
            { label: "Laboratórios ativos 2024", valor: 40 },
            { label: "Laboratórios ativos 2026", valor: 95 }
        ]
    },
    {
        id: 14,
        categoria: "gadgets",
        titulo: "Celulares dobráveis continuam em alta antes da nova leva de lançamentos",
        resumo: "Mês anterior foi dominado por dispositivos dobráveis, aquecendo o mercado para agosto.",
        textoCompleto: "Antes da nova safra de lançamentos de agosto, o mercado de smartphones foi dominado por dispositivos dobráveis, com fabricantes competindo para entregar dobras mais discretas e telas mais resistentes. A expectativa do setor é que esse formato continue ganhando espaço, especialmente entre consumidores que buscam mais tela sem abrir mão da portabilidade.",
        imagem: "https://picsum.photos/seed/tech14/700/350",
        grafico: [
            { label: "Vendas 2024", valor: 15 },
            { label: "Vendas 2025", valor: 28 },
            { label: "Vendas 2026 (proj.)", valor: 42 }
        ]
    }
];
