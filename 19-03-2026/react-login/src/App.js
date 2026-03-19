import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({ ok: false, message: 'Network error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ maxWidth: 420, margin: '60px auto', padding: 20 }}>
      <h1>React Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </label>

        <label>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </label>

        <button type="submit" disabled={loading} style={{ padding: 10 }}>
          {loading ? 'Logging in…' : 'Login'}
        </button>
      </form>

      {result && (
        <pre
          style={{
            background: '#f6f8fa',
            padding: 12,
            borderRadius: 6,
            marginTop: 16,
            whiteSpace: 'pre-wrap',
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
