import { useContext, useState } from 'react';
import api from '../api/api';
import { AuthContext } from '../auth/authContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/auth/login', { email, password });

      const payload = JSON.parse(atob(res.data.token.split('.')[1]));
      login(res.data.token, payload.role);

      alert('✅ Login successful!');
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('⚠️ Invalid email or password.');
      } else {
        alert('❌ Login failed. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        type="email"
        required
        onChange={e => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
