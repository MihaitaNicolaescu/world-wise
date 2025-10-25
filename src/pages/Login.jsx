import { useState } from 'react';
import PageNav from '../components/PageNav';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    //ToDo:: Implement redirect auth logic

  };

  return (
    <div  className={styles.login}>
      <PageNav />
        <form className={`${styles.form} mx-auto mt-30`} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Welcome back</h2>

          <div className={styles.formRow}>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>

          <div className={styles.formRow}>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}
          
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>
    </div>
  );
}

export default Login;