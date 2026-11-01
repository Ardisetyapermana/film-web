/** @format */

import { useState } from 'react';
import Header from './components/Header';
import RingkasanFilm from './components/RingkasanFilm';
import FormFilm from './components/FormFilm';
import DaftarFilm from './components/DaftarFilm';

export default function App() {
  const [daftarFilm, setDaftarFilm] = useState([
    {
      id: 1,
      judul: 'Pengabdi Setan 2',
      sutradara: 'Joko Anwar',
      tahun: 2022,
      genre: 'Horor',
      rating: 7.5,
    },
    {
      id: 2,
      judul: 'Green Book',
      sutradara: 'Peter Farrelly',
      tahun: 2018,
      genre: 'Tragedi/Komedi',
      rating: 8.2,
    },
    {
      id: 3,
      judul: 'Mystery of Love',
      sutradara: 'Luca Guadagnino',
      tahun: 2017,
      genre: 'Drama/Romantis',
      rating: 7.9,
    },
  ]);

  const tambahFilm = (filmBaru) => {
    setDaftarFilm([...daftarFilm, { id: Date.now(), ...filmBaru }]);
  };

  return (
    <div className='app'>
      <Header
        judul='Film urang'
        subjudul='Katalog film favorit urang'
      />
      <RingkasanFilm daftarFilm={daftarFilm} />
      <FormFilm onTambah={tambahFilm} />
      <DaftarFilm daftarFilm={daftarFilm} />
    </div>
  );
}
