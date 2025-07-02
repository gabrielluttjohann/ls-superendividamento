export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Luttjohann & Soares Advocacia</h3>
          <p className="mb-4">Defesa Especializada de Consumidores Endividados</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Luttjohann & Soares Advocacia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
