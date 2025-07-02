'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import logo from '../../../public/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileLinks = [
    { label: 'Início', href: '/' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Superendividamento', href: '#lei' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed p-2 w-full z-50 bg-gray-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="#inicio"
          className="text-lg font-bold text-black"
        >
          <img
            src={logo.src}
            alt="Luttjohann & Soares Advocacia Logo"
            className="w-60"
          />
        </Link>

        {/* Menu Desktop reduzido */}
        <nav className="hidden md:flex items-center space-x-6 text-black">
          <a
            href="#inicio"
            className="hover:text-teal-400 transition"
          >
            Início
          </a>
          <a
            href="#expertise"
            className="hover:text-teal-400 transition"
          >
            Expertise
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#contato"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-xl font-medium transition"
          >
            Falar com Especialista
          </Link>
        </div>

        {/* Botão mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-700 px-4 py-4 space-y-3">
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-teal-400 transition"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contato"
            className="block text-center w-full px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:from-teal-600 hover:to-emerald-600"
          >
            Falar com Especialista
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
