export default function ExpertiseSection() {
  const expertises = [
    { number: '15+', label: 'Anos de Experiência Bancária' },
    { number: '100%', label: 'Foco em Direito Bancário' },
    { number: '500+', label: 'Casos Atendidos' },
    { number: '95%', label: 'Taxa de Sucesso' },
  ];
  return (
    <section id="expertise" className="py-20 bg-white scroll-my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Nossa Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conhecimento técnico construído em 15 anos dentro de bancos, hoje aplicado na defesa de
            consumidores endividados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((expertise, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl text-center border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-teal-600 bg-clip-text text-transparent mb-4">
                {expertise.number}
              </div>
              <div className="text-slate-600 font-medium">{expertise.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
