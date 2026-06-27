export interface Exercicio {
  nome: string
  musculos: string[]
  series: string
  passos: string[]
  dica: string
}

export interface Equipamento {
  id: number
  slug: string
  nome: string
  categoria: string
  descricao: string
  quantidade: string
  fotos: string[]
  videoId: string      // ID do vídeo do YouTube
  exercicios: Exercicio[]
}

export const equipamentos: Equipamento[] = [
  {
    id: 1,
    slug: 'esteiras',
    nome: 'Esteiras Profissionais',
    categoria: 'Cardio',
    descricao: 'Esteiras de alto desempenho com inclinação automática de até 15%, monitor cardíaco e programas de treino personalizados.',
    quantidade: '12 unidades',
    fotos: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&fit=crop',
    ],
    videoId: 'fDgTSGC5hEI',
    exercicios: [
      {
        nome: 'Corrida em Ritmo Moderado',
        musculos: ['Quadríceps', 'Panturrilha', 'Glúteos', 'Cardiovascular'],
        series: '1 série de 20–40 min',
        passos: [
          'Ajuste a velocidade para 7–10 km/h e inclinação em 1%.',
          'Posicione os pés no centro da esteira, braços relaxados em 90°.',
          'Mantenha o tronco ereto, olhando para frente.',
          'Pise com o meio do pé, nunca com o calcanhar.',
          'Respire de forma ritmada: inspire a cada 2 passos, expire a cada 2.',
          'Aumente a velocidade gradualmente a cada 5 minutos.',
        ],
        dica: 'Não segure os corrimões — isso reduz o gasto calórico em até 30%.',
      },
      {
        nome: 'HIIT na Esteira',
        musculos: ['Quadríceps', 'Glúteos', 'Cardio'],
        series: '8 rounds: 30s rápido / 90s lento',
        passos: [
          'Aqueça por 3 minutos em velocidade leve (6 km/h).',
          'Suba para 14–16 km/h por 30 segundos.',
          'Reduza para 5 km/h por 90 segundos de recuperação.',
          'Repita o ciclo por 8 rounds.',
          'Finalize com 3 minutos de caminhada leve.',
        ],
        dica: 'O HIIT na esteira queima gordura até 24h após o treino.',
      },
    ],
  },
  {
    id: 2,
    slug: 'rack-de-halteres',
    nome: 'Rack de Halteres',
    categoria: 'Musculação',
    descricao: 'Rack completo com halteres de 2 kg a 50 kg, revestimento em borracha antiderrapante e acabamento premium.',
    quantidade: '2 racks completos',
    fotos: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=900&q=80&fit=crop',
    ],
    videoId: 'ykJmrZ5v0Oo',
    exercicios: [
      {
        nome: 'Rosca Direta com Halteres',
        musculos: ['Bíceps', 'Braquial', 'Antebraço'],
        series: '4 séries de 10–12 repetições',
        passos: [
          'Fique em pé, segure um halter em cada mão com pegada supinada (palmas para cima).',
          'Mantenha os cotovelos próximos ao tronco durante todo o movimento.',
          'Flexione os cotovelos, levando os halteres até os ombros.',
          'Contraia o bíceps no topo por 1 segundo.',
          'Desça de forma controlada em 3 segundos.',
        ],
        dica: 'Alterne os braços para melhor isolamento ou faça os dois juntos para intensidade.',
      },
      {
        nome: 'Desenvolvimento Militar com Halteres',
        musculos: ['Deltóide', 'Tríceps', 'Trapézio'],
        series: '4 séries de 8–10 repetições',
        passos: [
          'Sente-se ou fique em pé com os halteres na altura dos ombros, cotovelos a 90°.',
          'Pressione os halteres para cima até quase estender os braços.',
          'Não trave os cotovelos no topo — mantenha leve tensão.',
          'Desça controladamente até a posição inicial.',
        ],
        dica: 'Mantenha o core contraído para proteger a lombar durante o movimento.',
      },
    ],
  },
  {
    id: 3,
    slug: 'barras-e-anilhas',
    nome: 'Barras e Anilhas',
    categoria: 'Musculação',
    descricao: 'Barras olímpicas de 20 kg com anilhas borrachadas de 1,25 a 25 kg. Equipamento padrão competição.',
    quantidade: '8 barras · anilhas ilimitadas',
    fotos: [
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80&fit=crop',
    ],
    videoId: 'r4MzxtBKyNE',
    exercicios: [
      {
        nome: 'Levantamento Terra',
        musculos: ['Isquiotibiais', 'Glúteos', 'Lombar', 'Trapézio'],
        series: '5 séries de 5 repetições',
        passos: [
          'Posicione os pés na largura dos quadris, barra sobre o meio do pé.',
          'Agache e segure a barra com pegada dupla pronada, mãos fora dos joelhos.',
          'Peito para cima, coluna neutra, olhar levemente acima do horizonte.',
          'Empurre o chão com os pés — não "puxe" a barra.',
          'Barra sobe rente às pernas até extensão total do quadril.',
          'Desça com controle, quadril recua primeiro, depois os joelhos.',
        ],
        dica: 'Nunca arredonde a lombar. Se não conseguir manter a posição, reduza o peso.',
      },
      {
        nome: 'Agachamento com Barra',
        musculos: ['Quadríceps', 'Glúteos', 'Isquiotibiais', 'Core'],
        series: '5 séries de 5–8 repetições',
        passos: [
          'Posicione a barra sobre os trapézios (high bar) ou abaixo dos deltóides (low bar).',
          'Pés ligeiramente afastados além dos ombros, pontas dos pés levemente abertas.',
          'Desça controladamente até as coxas ficarem paralelas ao chão.',
          'Joelhos seguem a linha dos pés — não deixe cair para dentro.',
          'Empurre o chão e suba exalando.',
        ],
        dica: 'Filme de lado para verificar a profundidade e posição das costas.',
      },
    ],
  },
  {
    id: 4,
    slug: 'cadeira-extensora',
    nome: 'Cadeira Extensora',
    categoria: 'Aparelhos',
    descricao: 'Cadeira extensora com ajuste de amplitude e pino de carga, ideal para isolamento de quadríceps.',
    quantidade: '4 unidades',
    fotos: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&q=80&fit=crop',
    ],
    videoId: 'ljO4jkMOSWU',
    exercicios: [
      {
        nome: 'Extensão de Joelho',
        musculos: ['Quadríceps (reto femoral, vasto lateral, vasto medial)'],
        series: '4 séries de 12–15 repetições',
        passos: [
          'Ajuste o encosto para que os joelhos fiquem alinhados ao pivô da máquina.',
          'Posicione o rolo na parte inferior da canela, logo acima do tornozelo.',
          'Estenda as pernas até quase completar a extensão — não trave os joelhos.',
          'Contraia o quadríceps no topo por 1 segundo.',
          'Desça lentamente em 3 segundos, sem deixar o peso bater.',
        ],
        dica: 'Pés em posição neutra isolam o reto femoral. Pés virados para dentro enfatizam o vasto lateral.',
      },
    ],
  },
  {
    id: 5,
    slug: 'supino',
    nome: 'Supino e Gaiola',
    categoria: 'Musculação',
    descricao: 'Bancada de supino com gaiola de segurança, ajuste de altura e suporte para barra olímpica.',
    quantidade: '6 bancadas',
    fotos: [
      'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80&fit=crop',
    ],
    videoId: 'vcBig73ojpE',
    exercicios: [
      {
        nome: 'Supino Reto com Barra',
        musculos: ['Peitoral', 'Tríceps', 'Deltóide Anterior'],
        series: '4 séries de 6–10 repetições',
        passos: [
          'Deite na bancada, pés apoiados no chão, arco lombar natural.',
          'Pegue a barra com pegada levemente mais larga que os ombros.',
          'Retire a barra do suporte com os braços estendidos acima do peito.',
          'Desça a barra até tocar levemente o peito (na altura dos mamilos).',
          'Pressione a barra para cima em arco leve até a posição inicial.',
        ],
        dica: 'Afunde as escápulas na bancada e mantenha os cotovelos a 45°–75° do tronco para proteger os ombros.',
      },
    ],
  },
  {
    id: 6,
    slug: 'bicicletas',
    nome: 'Bicicletas Ergométricas',
    categoria: 'Cardio',
    descricao: 'Bicicletas com resistência magnética, monitor de frequência cardíaca e programas de HIIT integrados.',
    quantidade: '8 unidades',
    fotos: [
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&q=80&fit=crop',
    ],
    videoId: 'kZlMcotqXrg',
    exercicios: [
      {
        nome: 'Pedalada em Estado Estável',
        musculos: ['Quadríceps', 'Glúteos', 'Panturrilha', 'Cardiovascular'],
        series: '1 série de 30–45 min a 65% da FCM',
        passos: [
          'Ajuste o selim para que o joelho fique levemente dobrado no ponto mais baixo.',
          'Segure o guidão sem tensão nos ombros.',
          'Pedale em cadência de 80–90 RPM com resistência moderada.',
          'Mantenha frequência cardíaca entre 60–70% do máximo.',
          'Respire de forma constante durante todo o exercício.',
        ],
        dica: 'Excelente para recuperação ativa após treino de pernas pesado.',
      },
    ],
  },
  {
    id: 7,
    slug: 'crossover',
    nome: 'Cabo Crossover',
    categoria: 'Aparelhos',
    descricao: 'Crossover com polia dupla ajustável em toda a extensão, carga máxima de 100 kg por lado.',
    quantidade: '3 unidades',
    fotos: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=900&q=80&fit=crop',
    ],
    videoId: 'taI4XduLpTk',
    exercicios: [
      {
        nome: 'Crucifixo no Cabo',
        musculos: ['Peitoral', 'Deltóide Anterior'],
        series: '4 séries de 12–15 repetições',
        passos: [
          'Ajuste as polias na posição alta e acople os handles.',
          'Segure um handle em cada mão, avance um passo, ligeiramente inclinado para frente.',
          'Braços abertos em "T", leve flexão nos cotovelos.',
          'Una os punhos à frente do peito em arco descendente.',
          'Contraia o peitoral por 1 segundo e retorne controladamente.',
        ],
        dica: 'Varie a altura das polias para enfatizar diferentes porções do peitoral.',
      },
      {
        nome: 'Rosca no Cabo (baixo)',
        musculos: ['Bíceps', 'Braquial'],
        series: '3 séries de 12 repetições',
        passos: [
          'Ajuste a polia na posição mais baixa com barra reta ou corda.',
          'Fique de frente para a máquina, pegue a barra com pegada supinada.',
          'Cotovelos fixos ao lado do corpo.',
          'Flexione os cotovelos levando a barra até os ombros.',
          'Desça com controle de 3 segundos.',
        ],
        dica: 'O cabo mantém tensão constante no bíceps, diferente do halter.',
      },
    ],
  },
  {
    id: 8,
    slug: 'plataforma',
    nome: 'Plataforma de Levantamento',
    categoria: 'Musculação',
    descricao: 'Plataforma olímpica com piso de borracha vulcanizada, ideal para levantamento terra, agachamento e desenvolvimento.',
    quantidade: '4 plataformas',
    fotos: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&fit=crop',
    ],
    videoId: 'op9kVnSso6Q',
    exercicios: [
      {
        nome: 'Desenvolvimento com Barra (Militar)',
        musculos: ['Deltóide', 'Tríceps', 'Trapézio', 'Core'],
        series: '4 séries de 6–8 repetições',
        passos: [
          'Posicione a barra nos suportes na altura do peito.',
          'Pegada levemente mais larga que os ombros, pegada pronada.',
          'Retire a barra dos suportes e posicione na frente do pescoço, ao nível do queixo.',
          'Pressione a barra para cima até extensão quase completa.',
          'Desça controladamente até a posição inicial.',
        ],
        dica: 'Nunca faça por trás da nuca — sobrecarrega os ombros e a cervical.',
      },
    ],
  },
  {
    id: 9,
    slug: 'funcional',
    nome: 'Área Funcional',
    categoria: 'Funcional',
    descricao: 'Espaço completo com cordas battle rope, kettlebells, medicine balls, TRX e escadas de agilidade.',
    quantidade: 'Área de 120 m²',
    fotos: [
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=900&q=80&fit=crop',
    ],
    videoId: 'oAPCPjnU1wA',
    exercicios: [
      {
        nome: 'Battle Rope — Ondas Alternadas',
        musculos: ['Ombros', 'Bíceps', 'Core', 'Cardiovascular'],
        series: '6 rounds de 30s trabalho / 30s descanso',
        passos: [
          'Segure uma ponta da corda em cada mão, stance levemente agachado.',
          'Alterne os braços para cima e para baixo criando ondas na corda.',
          'Mantenha o core contraído e os joelhos levemente flexionados.',
          'Varie o movimento: ondas simultâneas, em círculos, com agachamento.',
        ],
        dica: 'Suba na intensidade progressivamente. Battle rope é excelente para condicionamento total.',
      },
      {
        nome: 'TRX — Remada',
        musculos: ['Dorsais', 'Bíceps', 'Rombóides', 'Core'],
        series: '4 séries de 12–15 repetições',
        passos: [
          'Segure as alças do TRX, incline o corpo para trás (corpo reto como prancha).',
          'Braços estendidos, quanto mais inclinado, mais difícil.',
          'Puxe o peito em direção às alças, cotovelos para trás.',
          'Retorne controladamente à posição inicial.',
        ],
        dica: 'Ajuste o ângulo do corpo para controlar a dificuldade sem mudar o exercício.',
      },
    ],
  },
]

export const categoryColors: Record<string, string> = {
  Musculação: '#7B2FBE',
  Cardio:     '#2563eb',
  Aparelhos:  '#0d9488',
  Funcional:  '#c2410c',
}
