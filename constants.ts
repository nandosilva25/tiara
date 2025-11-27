import { Pillar, Step, FAQItem, Testimonial } from './types';

export const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5561982745274&text&type=phone_number&app_absent=0";

export const PILLARS: Pillar[] = [
  {
    title: "Maior precisão no controle das margens tumorais",
    description: "Cada fragmento é examinado durante o ato cirúrgico, o que reduz a chance de recidiva local.",
    icon: 'Target'
  },
  {
    title: "Preservação do tecido saudável",
    description: "A técnica busca retirar apenas o necessário, respeitando a estrutura da área tratada.",
    icon: 'Shield'
  },
  {
    title: "Segurança e previsibilidade",
    description: "O procedimento é realizado em ambiente controlado e com acompanhamento especializado.",
    icon: 'Microscope'
  },
  {
    title: "Recuperação gradual e monitorada",
    description: "Na maior parte dos casos, a cirurgia é feita em um único dia, com retorno progressivo às atividades.",
    icon: 'Activity'
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Chegada e Preparação",
    description: "O paciente é recebido e preparado para o procedimento com anestesia local, garantindo conforto durante todo o processo."
  },
  {
    number: 2,
    title: "Remoção do Tumor",
    description: "O cirurgião remove a parte visível do tumor com uma margem de segurança muito estreita."
  },
  {
    number: 3,
    title: "Análise Microscópica",
    description: "O tecido é preparado e analisado imediatamente no microscópio para verificar se há raízes do câncer nas margens."
  },
  {
    number: 4,
    title: "A Certeza da Remoção",
    description: "Se houver células cancerígenas restantes, o cirurgião retorna exatamente à área afetada para removê-las. O processo se repete até que não haja mais tumor."
  },
  {
    number: 5,
    title: "Reconstrução",
    description: "Uma vez confirmada a remoção total, a ferida é fechada ou reconstruída, buscando a melhor cicatrização possível."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "O que é a Cirurgia de Mohs?",
    answer: "A Cirurgia Micrográfica de Mohs é uma técnica especializada para o tratamento do câncer de pele que oferece as maiores taxas de cura e a máxima preservação de tecido saudável."
  },
  {
    question: "Quanto tempo dura o procedimento?",
    answer: "A duração varia conforme a extensão do tumor, pois a análise é feita em tempo real. Geralmente, o paciente deve reservar o dia todo, embora muitos casos sejam resolvidos em poucas horas."
  },
  {
    question: "Vou sentir dor?",
    answer: "O procedimento é realizado sob anestesia local, sendo muito bem tolerado. O desconforto pós-operatório costuma ser leve e gerenciável com analgésicos comuns."
  },
  {
    question: "Aceita convênios?",
    answer: "Para informações específicas sobre convênios e formas de reembolso, por favor, entre em contato diretamente com nossa equipe pelo formulário ou WhatsApp."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria S.",
    text: "A Dra. Thiara foi extremamente atenciosa. O resultado estético foi impressionante, mal dá para ver a cicatriz."
  },
  {
    name: "João P.",
    text: "Senti muita segurança em todo o processo. A equipe é excelente e o cuidado pós-operatório fez toda a diferença."
  },
  {
    name: "Ana C.",
    text: "Profissionalismo impecável. Recomendo de olhos fechados para quem precisa de tratamento sério e humano."
  }
];