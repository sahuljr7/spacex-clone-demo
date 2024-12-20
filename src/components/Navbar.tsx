import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-center h-[100px]">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-2xl font-bold tracking-wider">
              SPACEX
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:opacity-80">FALCON 9</a>
            <a href="#" className="text-white hover:opacity-80">FALCON HEAVY</a>
            <a href="#" className="text-white hover:opacity-80">DRAGON</a>
            <a href="#" className="text-white hover:opacity-80">STARSHIP</a>
            <a href="#" className="text-white hover:opacity-80">HUMAN SPACEFLIGHT</a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 fixed inset-0 top-[100px]">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-white text-lg py-2 hover:opacity-80">FALCON 9</a>
            <a href="#" className="text-white text-lg py-2 hover:opacity-80">FALCON HEAVY</a>
            <a href="#" className="text-white text-lg py-2 hover:opacity-80">DRAGON</a>
            <a href="#" className="text-white text-lg py-2 hover:opacity-80">STARSHIP</a>
            <a href="#" className="text-white text-lg py-2 hover:opacity-80">HUMAN SPACEFLIGHT</a>
          </div>
        </div>
      )}
    </nav>
  );
}