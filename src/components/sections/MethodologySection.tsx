export default function MethodologySection() {
  const methods = [
    {
      step: 1,
      title: 'Análise Jurídica',
      desc: 'Avaliação legal completa pelos advogados',
    },
    {
      step: 2,
      title: 'Análise Financeira',
      desc: 'Estudo técnico da viabilidade econômica',
    },
    {
      step: 3,
      title: 'Integração das Análises',
      desc: 'Construção conjunta da estratégia',
    },
    {
      step: 4,
      title: 'Plano Personalizado',
      desc: 'Estratégia única para seu perfil',
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 scroll-my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Nossa Metodologia Integrada</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cada plano de ação é desenvolvido por nossos advogados especialistas com o auxílio de
            profissionais da área financeira e econômica
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Trabalho Multidisciplinar</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Nossos <strong className="text-slate-900">advogados especialistas</strong> trabalham
                em conjunto com{' '}
                <strong className="text-slate-900">
                  profissionais da área financeira e econômica
                </strong>{' '}
                para criar estratégias jurídicas fundamentadas em análises técnicas precisas.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Esta integração garante que cada solução seja{' '}
                <strong className="text-slate-900">juridicamente sólida</strong> e{' '}
                <strong className="text-slate-900">financeiramente viável</strong>, considerando a
                realidade específica de cada cliente.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Como Desenvolvemos Seu Plano
              </h4>

              <div className="space-y-6">
                {methods.map((methods) => (
                  <div
                    key={methods.step}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                      {methods.step}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{methods.title}:</div>
                      <div className="text-slate-600">{methods.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold text-slate-900 mb-3">
              Resultado: Estratégia Técnica e Sustentável
            </p>
            <p className="text-slate-600 leading-relaxed">
              Esta metodologia garante que cada cliente receba uma solução{' '}
              <strong>tecnicamente fundamentada</strong>,<strong> legalmente respaldada</strong> e{' '}
              <strong>financeiramente realista</strong> para sua situação específica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
