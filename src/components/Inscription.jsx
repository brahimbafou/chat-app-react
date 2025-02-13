import './Inscription.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

const Inscription = () => {
    const [username, setUsername] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('😀'); // Default emoji
    const [showPicker, setShowPicker] = useState(false); // Show/hide emoji picker
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            localStorage.setItem('username', username);
            localStorage.setItem('avatar', selectedAvatar);
            navigate('/chat');
        }
    };

    return (
        <div className="page margin-xl padding-xl padding-y-l radius-l display-column wide-50">
            <div className="display-row">
                <button className="button ghost icon xsmall radius-s display-row gap-s"
                        onClick={() => navigate("/")}>
                    <AiFillHome size={16} color="white"/>
                    Home
                </button>
            </div>
            <div className="divider-h divider-700"/>
            <div className="display-column gap-xl long justify-space-between">
                <h1 className="typo-h1">Inscription</h1>
                <form onSubmit={handleSubmit} className="display-column gap-s">
                    <div className="display-row wide">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-field radius wide"
                            required
                        />

                    </div>
                    <button type="submit" className="button radius">Join Chat</button>
                </form>
            </div>
        </div>
    );
};

export default Inscription;
