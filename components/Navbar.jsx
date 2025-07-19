'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.webp';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-4">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="EbanRegister logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl font-bold text-blue-700">EbanRegister</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#downloads" className="text-gray-700 hover:text-blue-600">Downloads</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Message Us</a>

            <Link href="/login" className="rounded-full border border-blue-700 bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800">
              Login
            </Link>
            <Link href="/register" className="rounded-full bg-blue-900 px-5 py-2 text-white transition hover:bg-blue-950">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-3">
          <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
          <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#downloads" className="block text-gray-700 hover:text-blue-600">Downloads</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Message Us</a>
          <Link href="/login" className="block rounded-full border border-blue-700 bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800">
            Login
          </Link>
          <Link href="/register" className="block rounded-full bg-blue-900 px-4 py-2 text-white transition hover:bg-blue-950">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
