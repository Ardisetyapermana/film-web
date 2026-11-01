/** @format */

export default function KartuFilm({ judul, sutradara, tahun, genre, rating }) {
  return (
    <div className='kartu'>
      <h3>
        {judul} ({tahun})
      </h3>
      <p>Sutradara: {sutradara}</p>
      <p>Genre: {genre}</p>
      <p>Rating: ⭐ {rating}</p>
    </div>
  );
}
