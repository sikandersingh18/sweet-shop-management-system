import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../auth/authContext';

export default function Navbar() {
  const { token, role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>🍬 Sweet Shop</h3>

      <div style={styles.links}>
        {!token && (
          <>
            <Link style={styles.link} to="/">Login</Link>
            <Link style={styles.link} to="/register">Register</Link>
          </>
        )}

        {token && (
          <>
            <Link style={styles.link} to="/dashboard">Dashboard</Link>

            {/* Role badge – small unique touch */}
            <span style={styles.role}>
              {role}
            </span>

            <button style={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: '#6c63ff',
    color: 'white',
  },
  logo: {
    margin: 0,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  role: {
    backgroundColor: '#fff',
    color: '#6c63ff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  logoutBtn: {
    background: 'white',
    color: '#6c63ff',
    border: 'none',
    padding: '6px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
};
