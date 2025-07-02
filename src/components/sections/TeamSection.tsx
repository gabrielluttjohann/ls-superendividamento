export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Nossa Equipe</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advogadas especializadas com experiência bancária e economista integrado à equipe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              initials: 'GL',
              name: 'Geile Aline Luttjohann',
              title: 'OAB/RS 102.625',
              description:
                'Advogada com 15+ anos como Gerente Executiva de Crédito no Banrisul. Pós-graduada em Direito Bancário. Certificações: FGV, Insper, ABECIP CA-300, CPA-20, FBB100.',
            },
            {
              initials: 'AS',
              name: 'Adriana Soares',
              title: 'OAB/RS 136.447',
              description:
                'Especialista em Direito Bancário com ampla experiência em ações revisionais, execuções e superendividamento. Certificação específica em Superendividamento.',
            },
            {
              initials: 'EC',
              name: 'Economista Integrado',
              title: 'Análise Técnica Financeira',
              description:
                'Profissional economista integrado à nossa equipe para elaboração de análises de viabilidade financeira e fundamentação técnica dos casos.',
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-slate-900 to-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <div className="text-teal-600 font-semibold mb-4">{member.title}</div>
              <p className="text-slate-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
