// LoginScreen.js
import React, { useState, useEffect } from 'react';
import './LoginScreen.css';

const LoginScreen = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [savedUsername, setSavedUsername] = useState(null);
    const [savedPassword, setSavedPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Check if username and password are stored in localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (storedUsername && storedPassword) {
            setSavedUsername(storedUsername);
            setSavedPassword(storedPassword);
        }
    }, []);

    const handleLogin = () => {
        if (savedUsername && savedPassword) {
            // login found - prompt user to login
            if (username === savedUsername && password === savedPassword) {
                onLogin(true);
            } else {
                setErrorMessage('Invalid username or password.');
            }
        } else {
            // no login in storage - create new account
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            onLogin(true);
        }
    };

    return (
        <div className="login-screen">
            <h1>{savedUsername ? 'Login' : 'Set Up New User'}</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>{savedUsername ? 'Login' : 'Set Password'}</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default LoginScreen;
