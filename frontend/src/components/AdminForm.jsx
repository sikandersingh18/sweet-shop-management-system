import { useState } from 'react';
import api from '../api/api';
import { toast } from 'react-toastify';

export default function AdminForm({ reload }) {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post('/sweets', form);
    toast.success('Sweet added!');
    setForm({ name: '', category: '', price: '', quantity: '' });
    reload();
  };

  return (
    <form className="admin-form" onSubmit={submit}>
      <h3> Add New Sweet</h3>

      <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Quantity" value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} />

      <button>Add Sweet</button>
    </form>
  );
}
