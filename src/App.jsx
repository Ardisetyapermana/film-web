/** @format */

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import DaftarFilm from './pages/DaftarFilm';
import TambahFilm from './pages/TambahFilm';

export default function App() {
  const [daftarFilm, setDaftarFilm] = useState([
    {
      id: 1,
      judul: 'Inception',
      sutradara: 'Christopher Nolan',
      tahun: 2010,
      genre: 'Sci-Fi',
      rating: 8.8,
    },
    {
      id: 2,
      judul: 'Parasite',
      sutradara: 'Bong Joon-ho',
      tahun: 2019,
      genre: 'Thriller',
      rating: 8.5,
    },
    {
      id: 3,
      judul: 'Laskar Pelangi',
      sutradara: 'Riri Riza',
      tahun: 2008,
      genre: 'Drama',
      rating: 7.8,
    },
  ]);

  const tambahFilm = (filmBaru) =>
    setDaftarFilm([...daftarFilm, { id: Date.now(), ...filmBaru }]);

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <main className='mx-auto max-w-6xl p-4'>
        <Routes>
          <Route
            path='/'
            element={<Dashboard daftarFilm={daftarFilm} />}
          />
          <Route
            path='/film'
            element={<DaftarFilm daftarFilm={daftarFilm} />}
          />
          <Route
            path='/tambah'
            element={<TambahFilm onTambah={tambahFilm} />}
          />
        </Routes>
      </main>
    </div>
  );
}
