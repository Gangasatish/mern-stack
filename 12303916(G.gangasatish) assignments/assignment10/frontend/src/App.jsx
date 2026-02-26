
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [message, setMessage] = useState('');
    const [view, setView] = useState('register'); // 'register' or 'login'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            setMessage(response.data.message);
            setFormData({ username: '', email: '', password: '', role: 'user' });
            setView('login');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error registering user');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', loginData);
            setToken(response.data.token);
            setUser(response.data.user);
            setMessage(`Logged in as ${response.data.user.role}`);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
        }
    };

    const testRoute = async (route) => {
        try {
            const response = await axios.get(`http://localhost:5000/${route}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Access Denied');
        }
    };

    if (user) {
        return (
            <div className="container">
                <h2>Welcome, {user.username}!</h2>
                <p>Role: <strong>{user.role}</strong></p>
                <div className="button-group">
                    <button onClick={() => testRoute('user-profile')}>Test Profile</button>
                    <button onClick={() => testRoute('mod-only')}>Test Mod Only</button>
                    <button onClick={() => testRoute('admin-only')}>Test Admin Only</button>
                </div>
                <button onClick={() => { setUser(null); setToken(null); setMessage(''); }}>Logout</button>
                {message && <p className="message">{message}</p>}
            </div>
        );
    }

    return (
        <div className="container">
            <div className="toggle-buttons">
                <button onClick={() => setView('register')}>Register</button>
                <button onClick={() => setView('login')}>Login</button>
            </div>

            {view === 'register' ? (
                <>
                    <h2>Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Role:</label>
                            <select name="role" value={formData.role} onChange={handleChange}>
                                <option value="user">User</option>
                                <option value="moderator">Moderator</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </>
            ) : (
                <>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} required />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} required />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </>
            )}
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default App;
