/** @format */

import KartuFilm from '../components/KartuFilm';

export default function Dashboard({ daftarFilm }) {
  const total = daftarFilm.length;
  const rata =
    total ?
      (daftarFilm.reduce((s, f) => s + f.rating, 0) / total).toFixed(1)
    : 0;
  const terbaik = [...daftarFilm].sort((a, b) => b.rating - a.rating)[0];

  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Dashboard</h1>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        <div className='rounded-lg bg-white p-4 shadow'>
          <p className='text-sm text-gray-500'>Total Film</p>
          <p className='text-3xl font-bold'>{total}</p>
        </div>
        <div className='rounded-lg bg-white p-4 shadow'>
          <p className='text-sm text-gray-500'>Rata-rata Rating</p>
          <p className='text-3xl font-bold'>{rata}</p>
        </div>
        <div className='rounded-lg bg-white p-4 shadow'>
          <p className='text-sm text-gray-500'>Rating Tertinggi</p>
          <p className='text-xl font-bold'>{terbaik ? terbaik.judul : '-'}</p>
        </div>
      </div>

      <h2 className='mb-3 mt-8 text-xl font-semibold'>Film Terbaru</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {daftarFilm.map((f) => (
          <KartuFilm
            key={f.id}
            {...f}
          />
        ))}
      </div>
    </div>
  );
}
