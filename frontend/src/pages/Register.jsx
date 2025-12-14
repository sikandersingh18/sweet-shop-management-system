import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/auth/register', form);

      alert('✅ Registration successful!');
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('⚠️ User already exists. Please login.');
      } else {
        alert('❌ Registration failed. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        required
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        type="email"
        required
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Password"
        type="password"
        required
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <select
        required
        onChange={e => setForm({ ...form, role: e.target.value })}
      >
        <option value="">Select Role</option>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}
