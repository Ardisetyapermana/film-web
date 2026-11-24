/** @format */

export default function DaftarFilm({ daftarFilm }) {
  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Daftar Film</h1>

      {daftarFilm.length === 0 ?
        <p>Belum ada data film</p>
      : <div className='overflow-x-auto rounded-lg bg-white shadow'>
          <table className='w-full text-left text-sm'>
            <thead className='bg-gray-900 text-white'>
              <tr>
                <th className='p-3'>No</th>
                <th className='p-3'>Judul</th>
                <th className='p-3'>Sutradara</th>
                <th className='p-3'>Tahun</th>
                <th className='p-3'>Genre</th>
                <th className='p-3'>Rating</th>
              </tr>
            </thead>
            <tbody>
              {daftarFilm.map((f, i) => (
                <tr
                  key={f.id}
                  className='border-t'>
                  <td className='p-3'>{i + 1}</td>
                  <td className='p-3 font-medium'>{f.judul}</td>
                  <td className='p-3'>{f.sutradara}</td>
                  <td className='p-3'>{f.tahun}</td>
                  <td className='p-3'>{f.genre}</td>
                  <td className='p-3'>⭐ {f.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}
