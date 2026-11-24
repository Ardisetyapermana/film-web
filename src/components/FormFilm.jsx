/** @format */

import { useState } from 'react';

const input =
  'w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-500';

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
    <form
      onSubmit={handleSubmit}
      className='grid gap-4 rounded-lg bg-white p-4 shadow md:grid-cols-2'>
      <input
        className={input}
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        placeholder='Judul film'
      />
      <input
        className={input}
        value={sutradara}
        onChange={(e) => setSutradara(e.target.value)}
        placeholder='Sutradara'
      />
      <input
        className={input}
        type='number'
        value={tahun}
        onChange={(e) => setTahun(e.target.value)}
        placeholder='Tahun'
      />
      <input
        className={input}
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder='Genre'
      />
      <input
        className={input}
        type='number'
        step='0.1'
        min='0'
        max='10'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder='Rating (0-10)'
      />
      <button
        type='submit'
        className='rounded bg-red-600 p-2 font-semibold text-white hover:bg-red-700 md:col-span-2'>
        Tambah
      </button>
    </form>
  );
}
