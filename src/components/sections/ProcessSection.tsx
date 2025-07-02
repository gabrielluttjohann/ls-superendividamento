export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Como Trabalhamos</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Processo técnico estruturado para análise e resolução do seu caso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: 1,
              title: 'Análise Técnica',
              description:
                'Avaliação jurídica completa da sua situação e análise de viabilidade com apoio de economista integrado à equipe.',
            },
            {
              number: 2,
              title: 'Estratégia Personalizada',
              description:
                'Definição da melhor abordagem jurídica baseada em 15 anos de experiência bancária.',
            },
            {
              number: 3,
              title: 'Execução',
              description:
                'Implementação da estratégia através de negociação ou ação judicial, conforme o caso.',
            },
            {
              number: 4,
              title: 'Acompanhamento',
              description: 'Monitoramento técnico até a resolução definitiva do caso.',
            },
          ].map((step, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
