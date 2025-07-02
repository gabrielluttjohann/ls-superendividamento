export default function ServicesSection() {
  return (
    <section id="atuacao" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 scroll-my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Áreas de Atuação</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cobertura técnica especializada para todos os tipos de endividamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Lei do Superendividamento',
              description:
                'Aplicação técnica da Lei 14.181/2021 para consumidores de boa-fé em situação de impossibilidade de pagamento.',
              services: [
                'Análise de enquadramento legal',
                'Renegociação judicial com credores',
                'Proteção do mínimo existencial',
                'Plano de pagamento sustentável',
              ],
            },
            {
              title: 'Ações Revisionais',
              description:
                'Análise técnica de contratos bancários para identificação e correção de cobranças abusivas.',
              services: [
                'Revisão de contratos bancários',
                'Identificação de juros abusivos',
                'Ações de repetição de indébito',
                'Adequação de encargos contratuais',
              ],
            },
            {
              title: 'Defesa em Execuções',
              description:
                'Atuação técnica em ações de cobrança para proteção patrimonial e contestação de abusos.',
              services: [
                'Defesa em ações de execução',
                'Proteção de bens essenciais',
                'Embargos e impugnações',
                'Negociação processual',
              ],
            },
            {
              title: 'Negociação Extrajudicial',
              description:
                'Representação técnica em negociações diretas com instituições financeiras.',
              services: [
                'Negociação com bancos',
                'Reestruturação de dívidas',
                'Acordos sustentáveis',
                'Análise de viabilidade de pagamento',
              ],
            },
            {
              title: 'Crédito Rural',
              description:
                'Especialização em dívidas rurais e aplicação de legislação específica do setor agropecuário.',
              services: [
                'Prorrogação de dívidas rurais',
                'Renegociação de crédito rural',
                'Análise de contratos rurais',
                'Defesa contra execuções rurais',
              ],
            },
            {
              title: 'Contratos Bancários',
              description:
                'Análise especializada de contratos de crédito, financiamentos e operações bancárias em geral.',
              services: [
                'Revisão de financiamentos',
                'Análise de legalidade de encargos',
                'Contestação de cláusulas abusivas',
                'Renegociação de condições contratuais',
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.services.map((item, sIndex) => (
                  <li
                    key={sIndex}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm text-slate-600">{item}</span>
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
