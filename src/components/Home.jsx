import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page margin-xl padding-xl radius-l display-column align-center justify-center wide-50">
            <h1 className="typo-h1">Welcome to the Chat App</h1>
            <div className="display-row long align-end">
                <Link to="/inscription" className="button radius">Inscription</Link>
                <Link to="/chat" className="button outline radius">Go Chatting!</Link>
            </div>
        </div>
    );
};
export default Home;