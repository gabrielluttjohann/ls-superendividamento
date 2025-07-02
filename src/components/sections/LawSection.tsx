import { CheckCircle } from 'lucide-react';

export default function LawSection() {
  return (
    <section
      id="lei"
      className="py-20 bg-white scroll-my-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Lei do Superendividamento (Lei 14.181/2021)
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Entenda os requisitos legais e como essa legislação pode ser aplicada ao seu caso
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-8">
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Requisitos para Aplicação</h4>
              <ul className="space-y-4">
                {[
                  'Consumidor de boa-fé',
                  'Impossibilidade de pagar sem comprometer mínimo existencial',
                  'Dívidas de consumo (não empresariais)',
                  'Múltiplos credores',
                  'Não utilização da lei nos últimos 5 anos',
                ].map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Benefícios da Lei</h4>
              <ul className="space-y-4">
                {[
                  'Renegociação em bloco com todos os credores',
                  'Proteção do mínimo existencial (R$ 600)',
                  'Parcelamento em até 5 anos',
                  'Suspensão de juros durante negociação',
                  'Acordo com força de sentença judicial',
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <h4 className="text-xl font-bold text-amber-900 mb-4">
              Importante: Dívidas NÃO Cobertas pela Lei
            </h4>
            <p className="text-amber-800 mb-4">
              Financiamento imobiliário, crédito rural, dívidas tributárias, pensão alimentícia,
              dívidas empresariais e bens de luxo não se enquadram na Lei do Superendividamento.
            </p>
            <p className="text-emerald-700 font-semibold">
              Para esses casos, aplicamos outras estratégias jurídicas especializadas igualmente
              eficazes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
