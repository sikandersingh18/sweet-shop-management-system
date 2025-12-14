import { useEffect, useState, useContext } from 'react';
import api from '../api/api';
import SweetCard from '../components/SweetCard';
import AdminForm from '../components/AdminForm';
import { AuthContext } from '../auth/authContext';

export default function Dashboard() {
  const { role } = useContext(AuthContext);
  const [sweets, setSweets] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const loadSweets = async () => {
    const res = await api.get('/sweets');
    setSweets(res.data);
  };

  const searchSweets = async () => {
    const res = await api.get('/sweets/search', {
      params: {
        name: name || undefined,
        category: category || undefined,
      },
    });
    setSweets(res.data);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="page-title">🍬 Sweet Shop</h1>

      <div className="filters">
        <input
          placeholder="Search by name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Filter by category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button onClick={searchSweets}>Search</button>
        <button className="secondary" onClick={loadSweets}>Reset</button>
      </div>

      {role === 'ADMIN' && (
        <div className="admin-section">
          <div className="admin-card">
            <AdminForm reload={loadSweets} />
          </div>
        </div>
      )}

      <div className="grid">
        {sweets.map(s => (
          <SweetCard key={s.id} sweet={s} reload={loadSweets} />
        ))}
      </div>
    </div>
  );
}
