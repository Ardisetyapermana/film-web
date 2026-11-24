/** @format */

export default function KartuFilm({ judul, sutradara, tahun, genre, rating }) {
  return (
    <div className='rounded-lg bg-white p-4 shadow'>
      <h3 className='text-lg font-bold'>
        {judul} <span className='font-normal text-gray-500'>({tahun})</span>
      </h3>
      <p className='text-sm text-gray-600'>Sutradara: {sutradara}</p>
      <div className='mt-2 flex items-center justify-between'>
        <span className='rounded bg-red-100 px-2 py-1 text-xs text-red-700'>
          {genre}
        </span>
        <span>⭐ {rating}</span>
      </div>
    </div>
  );
}
