/** @format */

import { useNavigate } from 'react-router-dom';
import FormFilm from '../components/FormFilm';

export default function TambahFilm({ onTambah }) {
  const navigate = useNavigate();

  const handleTambah = (film) => {
    onTambah(film);
    navigate('/film');
  };

  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Tambah Film</h1>
      <FormFilm onTambah={handleTambah} />
    </div>
  );
}
