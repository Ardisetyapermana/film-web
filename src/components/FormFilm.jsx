/** @format */

import { useState } from 'react';

export default function FormFilm({ onTambah }) {
  const [judul, setJudul] = useState('');
  const [sutradara, setSutradara] = useState('');
  const [tahun, setTahun] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!judul || !sutradara || !tahun || !genre || !rating) return;
    onTambah({
      judul,
      sutradara,
      tahun: Number(tahun),
      genre,
      rating: Number(rating),
    });
    setJudul('');
    setSutradara('');
    setTahun('');
    setGenre('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        placeholder='Judul film'
      />
      <input
        value={sutradara}
        onChange={(e) => setSutradara(e.target.value)}
        placeholder='Sutradara'
      />
      <input
        type='number'
        value={tahun}
        onChange={(e) => setTahun(e.target.value)}
        placeholder='Tahun'
      />
      <input
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder='Genre'
      />
      <input
        type='number'
        step='0.1'
        min='0'
        max='10'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder='Rating (0-10)'
      />
      <button type='submit'>Tambah</button>
    </form>
  );
}
