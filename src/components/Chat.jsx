import './Chat.css'

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidSend } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

const peerConnections = {};
const localPeer = new RTCPeerConnection();

const Chat = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState(() => {
        const storedMessages = localStorage.getItem('messages');
        return storedMessages ? JSON.parse(storedMessages) : [];
    });
    const [newMessage, setNewMessage] = useState('');
    const chatContainerRef = useRef(null);
    const username = localStorage.getItem('username');

    useEffect(() => {
        if (!username) {
            navigate('/inscription');
        }
    }, [username, navigate]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            const message = {
                id: Date.now(), // Unique ID
                text: newMessage,
                username: username,
                timestamp: new Date().toLocaleTimeString(),
            };
            const updatedMessages = [...messages, message];
            setMessages(updatedMessages);
            setNewMessage('');
            localStorage.setItem('messages', JSON.stringify(updatedMessages));
        }
    };

    useEffect(() => {
        const syncMessages = (event) => {
            if (event.key === 'messages') {
                setMessages(JSON.parse(event.newValue || '[]'));
            }
        };
        window.addEventListener('storage', syncMessages);
        return () => window.removeEventListener('storage', syncMessages);
    }, []);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleGoHome = () => navigate("/");

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
            <div className="display-column gap-xl long">
                <div className=" padding-x padding-y-s">
                    <h1 className="typo-h1">Chat Room</h1>
                </div>
                <div ref={chatContainerRef} className="chat-box display-column padding grow auto-y-overflow">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`display-column gap-xs
                                ${message.username === username ? 'align-end' : 'align-start'}
                            `}
                        >
                            <div
                                className={`message 
                                    ${message.username === username ? 'my-message' : 'other-message'}
                                `}
                            >
                                <div className={`align-end display-row 
                                    ${message.username === username ? 'justify-end' : 'justify-start'}
                                `}
                                >
                                    {message.username !== username && <span className="typo-b-m text-primary typo-lh-1">{message.username}</span>}
                                    <span className="typo-b-xs text-300 typo-lh-1">{message.timestamp}</span>
                                </div>
                                <div className="message-content typo-b-m text-500">{message.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className="text-field-container padding-s display-row gap-s radius-l">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="transparent text-field wide"
                    />
                    <button id="submit-button" type="submit" className="button display-row">
                        Send
                        <BiSolidSend />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
