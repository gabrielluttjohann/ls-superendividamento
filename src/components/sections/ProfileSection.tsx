import { Briefcase, Building, CheckCircle, Stethoscope, Tractor, User, Wrench } from 'lucide-react';

export default function ProfileSection() {
  const profiles = [
    {
      icon: <User className="w-12 h-12" />,
      title: 'Pessoas Físicas Assalariadas',
      description:
        'Estratégias específicas para trabalhadores com carteira assinada, considerando estabilidade de renda e proteção salarial.',
      features: [
        'Análise de comprometimento de renda',
        'Proteção do salário mínimo existencial',
        'Negociação com base na CLT',
        'Planejamento para desconto em folha',
      ],
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: 'Profissionais Liberais',
      description:
        'Abordagem especializada para médicos, advogados, engenheiros e outros profissionais com renda variável.',
      features: [
        'Análise de renda variável',
        'Proteção de instrumentos de trabalho',
        'Negociação considerando sazonalidade',
        'Estratégias para PJ e PF',
      ],
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Servidores Públicos',
      description:
        'Soluções específicas para funcionários públicos, considerando estabilidade e regras de desconto em folha.',
      features: [
        'Revisão de consignados abusivos',
        'Proteção da margem consignável',
        'Negociação com estabilidade garantida',
        'Análise de benefícios previdenciários',
      ],
    },
    {
      icon: <Tractor className="w-12 h-12" />,
      title: 'Produtores Rurais',
      description:
        'Expertise específica em crédito rural, sazonalidade agrícola e legislação do agronegócio.',
      features: [
        'Prorrogação de dívidas rurais',
        'Análise de safras e clima',
        'Renegociação de custeio e investimento',
        'Proteção de bens rurais essenciais',
      ],
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Empresários e MEI',
      description:
        'Estratégias para empresários e microempreendedores, separando pessoa física de pessoa jurídica.',
      features: [
        'Separação de patrimônios PF/PJ',
        'Análise de fluxo de caixa empresarial',
        'Recuperação judicial/extrajudicial',
        'Proteção contra desconsideração',
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Autônomos',
      description:
        'Abordagem personalizada para trabalhadores autônomos com renda irregular e necessidades específicas.',
      features: [
        'Análise de renda irregular',
        'Proteção de ferramentas de trabalho',
        'Negociação flexível de prazos',
        'Estratégias para informalidade',
      ],
    },
  ];

  return (
    <section id="clientes" className="py-20 bg-white scroll-my-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Nossos Clientes</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Desenvolvemos planos de ação personalizados com nossa equipe financeira para cada perfil
            profissional e tipo de endividamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-teal-600 mb-6 group-hover:text-emerald-600 transition-colors duration-300">
                {profile.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{profile.title}</h3>
              <p className="text-slate-600 mb-6">{profile.description}</p>
              <ul className="space-y-3">
                {profile.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
