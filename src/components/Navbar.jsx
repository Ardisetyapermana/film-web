/** @format */

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menu = [
  { to: '/', label: 'Dashboard' },
  { to: '/film', label: 'Daftar Film' },
  { to: '/tambah', label: 'Tambah Film' },
];

export default function Navbar() {
  const [buka, setBuka] = useState(false);

  const kelas = ({ isActive }) =>
    `block rounded px-3 py-2 ${isActive ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`;

  return (
    <nav className='bg-gray-900'>
      <div className='mx-auto flex max-w-6xl items-center justify-between p-4'>
        <span className='text-xl font-bold text-red-500'>🎬 CineList</span>

        <button
          className='text-white md:hidden'
          onClick={() => setBuka(!buka)}
          aria-label='Toggle menu'>
          ☰
        </button>

        <ul className='hidden gap-2 md:flex'>
          {menu.map((m) => (
            <li key={m.to}>
              <NavLink
                to={m.to}
                className={kelas}>
                {m.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {buka && (
        <ul className='space-y-1 px-4 pb-4 md:hidden'>
          {menu.map((m) => (
            <li key={m.to}>
              <NavLink
                to={m.to}
                className={kelas}
                onClick={() => setBuka(false)}>
                {m.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
