// App.js
import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/Desktop'; // Assuming you have a Desktop component

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        settings: {},
        openApps: [],
    });

    useEffect(() => {
        if (isLoggedIn) {
            // Load user data from localStorage when the user logs in
            const savedData = localStorage.getItem('userData');
            if (savedData) {
                setUserData(JSON.parse(savedData));
            }
        }
    }, [isLoggedIn]);

    const saveUserData = (newData) => {
        const updatedData = {
            ...userData,
            ...newData,
        };
        setUserData(updatedData);
        localStorage.setItem('userData', JSON.stringify(updatedData));
    };

    return (
        <div className="App">
            {isLoggedIn ? (
                <Desktop userData={userData} saveUserData={saveUserData} />
            ) : (
                <LoginScreen onLogin={setIsLoggedIn} />
            )}
        </div>
    );
}

export default App;
