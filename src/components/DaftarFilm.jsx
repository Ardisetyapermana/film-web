/** @format */

import KartuFilm from './KartuFilm';

export default function DaftarFilm({ daftarFilm }) {
  if (daftarFilm.length === 0) {
    return <p>Belum ada data film</p>;
  }

  return (
    <div className='daftar'>
      {daftarFilm.map((film) => (
        <KartuFilm
          key={film.id}
          judul={film.judul}
          sutradara={film.sutradara}
          tahun={film.tahun}
          genre={film.genre}
          rating={film.rating}
        />
      ))}
    </div>
  );
}
