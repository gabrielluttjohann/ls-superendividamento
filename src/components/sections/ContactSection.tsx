'use client';
import { Mail, MapPin, Monitor, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipo: '',
    detalhes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `Solicitação de Consulta - Endividamento
    
    Nome: ${formData.nome}
    Telefone: ${formData.telefone}
    E-mail: ${formData.email}
    Tipo: ${formData.tipo}
    Detalhes: ${formData.detalhes}
    
    Gostaria de uma consulta técnica sobre minha situação.`;

    const numeroWhatsApp = '5551999999999';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Consulte Nossa Equipe</h2>
          <p className="text-xl text-slate-300">
            Análise técnica da sua situação com atendimento direto de advogado especialista
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-semibold text-slate-200 mb-2"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="block text-sm font-semibold text-slate-200 mb-2"
              >
                Telefone/WhatsApp
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-200 mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
              placeholder="seu@email.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="tipo"
              className="block text-sm font-semibold text-slate-200 mb-2"
            >
              Tipo de Endividamento
            </label>
            <select
              id="tipo"
              name="tipo"
              value={formData.tipo}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            >
              <option
                value=""
                className="text-slate-900"
              >
                Selecione...
              </option>
              <option
                value="superendividamento"
                className="text-slate-900"
              >
                Superendividamento (múltiplas dívidas)
              </option>
              <option
                value="cartao"
                className="text-slate-900"
              >
                Cartão de Crédito
              </option>
              <option
                value="emprestimo"
                className="text-slate-900"
              >
                Empréstimos Bancários
              </option>
              <option
                value="financiamento"
                className="text-slate-900"
              >
                Financiamento Imobiliário
              </option>
              <option
                value="rural"
                className="text-slate-900"
              >
                Crédito Rural
              </option>
              <option
                value="execucao"
                className="text-slate-900"
              >
                Ação de Execução/Cobrança
              </option>
              <option
                value="outros"
                className="text-slate-900"
              >
                Outros
              </option>
            </select>
          </div>

          <div className="mb-8">
            <label
              htmlFor="detalhes"
              className="block text-sm font-semibold text-slate-200 mb-2"
            >
              Descrição da Situação
            </label>
            <textarea
              id="detalhes"
              name="detalhes"
              value={formData.detalhes}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Descreva brevemente sua situação para uma análise mais precisa"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Enviar Solicitação
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto">
          {[
            {
              icon: <Phone className="w-8 h-8" />,
              title: 'WhatsApp',
              info: '(51) 99999-9999',
            },
            {
              icon: <Mail className="w-8 h-8" />,
              title: 'E-mail',
              info: 'contato@luttjohannsoares.com.br',
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: 'Escritório',
              info: 'Porto Alegre - RS',
            },
            {
              icon: <Monitor className="w-8 h-8" />,
              title: 'Atendimento',
              info: 'Presencial e Online',
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-teal-400 mb-4 flex justify-center">{contact.icon}</div>
              <h3 className="font-semibold text-slate-200 mb-2">{contact.title}</h3>
              <p className="text-slate-400 break-words">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
