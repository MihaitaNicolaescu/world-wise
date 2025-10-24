import { useState } from 'react';
import PageNav from '../components/PageNav';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!email) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email';

    if (!password) e.password = 'Password is required';
    else if (password.length < 6) e.password = 'Password must be at least 6 characters';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    // Replace this with real authentication call
    console.log('Logging in with', { email, password });
    alert('Login submitted — check console (no backend configured)');
  };

  return (
    <>
    <PageNav />
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <form onSubmit={handleSubmit} style={{
        width: 360,
        maxWidth: '90%',
        padding: 24,
        borderRadius: 8,
        boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        background: 'white'
      }}>
        <h2 style={{ marginTop: 0, marginBottom: 12 }}>Log in</h2>

        <label style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={{ width: '100%', padding: '8px 10px', marginBottom: 6, borderRadius: 4, border: '1px solid #ccc' }}
        />
        {errors.email && <div style={{ color: 'crimson', fontSize: 13, marginBottom: 8 }}>{errors.email}</div>}

        <label style={{ display: 'block', marginBottom: 6, marginTop: 8, fontSize: 14 }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={{ width: '100%', padding: '8px 10px', marginBottom: 6, borderRadius: 4, border: '1px solid #ccc' }}
        />
        {errors.password && <div style={{ color: 'crimson', fontSize: 13, marginBottom: 8 }}>{errors.password}</div>}

        <button type="submit" style={{
          width: '100%', padding: '10px 14px', marginTop: 8, borderRadius: 6,
          border: 'none', background: '#007bff', color: 'white', fontWeight: 600, cursor: 'pointer'
        }}>Sign in</button>
      </form>
    </div>
    </>
  );
}

export default Login;