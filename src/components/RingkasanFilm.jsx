/** @format */

export default function RingkasanFilm({ daftarFilm }) {
  const total = daftarFilm.length;
  const rata =
    total === 0 ? 0 : (
      (daftarFilm.reduce((sum, f) => sum + f.rating, 0) / total).toFixed(1)
    );

  return (
    <div className='ringkasan'>
      <span>Total film: {total}</span>
      <span>Rata-rata rating: {rata}</span>
    </div>
  );
}
