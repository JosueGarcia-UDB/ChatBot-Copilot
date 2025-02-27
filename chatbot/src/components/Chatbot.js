"use client";
import React, { useState, useRef , useEffect} from "react";
import Fuse from "fuse.js";
import Data from "@/app/data/data";
import { IoSend } from "react-icons/io5";

const fuse = new Fuse(Data, {
    keys: ['key', 'pregunta', 'synonyms'],
    threshold: 0.4
});

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [chat, setChat] = useState([]);

    const chatRef = useRef();

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chat]);

    const handleUserMessage = () => {
        if (!userInput.trim()) return;

        const result = fuse.search(userInput);
        console.log("Search result:", result); // Debugging line

        let botResponse = "Lo siento, no encontré información sobre eso. ¿Puedes reformular la pregunta?";

        if (result.length > 0) {
            botResponse = result[0].item.respuesta; // Ensure 'respuesta' key matches the data
        }

        setChat(prev => [
            ...prev,
            { role: 'user', message: userInput },
            { role: 'bot', message: botResponse }
        ]);

        setUserInput('');
    };

    const renderMessage = (msg) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = msg.message.split(urlRegex).map((part, index) => {
            if (urlRegex.test(part)) {
                return <a key={index} href={part} target="_blank" rel="noopener noreferrer">Más información...</a>;
            }
            return part;
        });

        return (
            <div key={msg.index} className={msg.role === 'user' ? 'chat-bubble user' : 'chat-bubble bot'}>
                <strong>{msg.role === 'user' ? 'Tú: ' : 'Chatbot: '}</strong>{parts}
            </div>
        );
    };

    return (
        <div>
            <h1 className="welcome-title">Bienvenido al Chatbot UDB</h1>
            <div className="chat-placeholder"  ref={chatRef}>
                <div className="chat-bubble bot">
                    <strong>Chatbot: </strong>¡Hola! Soy el asistente virtual de la UDB. ¿En qué puedo ayudarte?
                </div>
                {chat.length > 0 ? (
                    chat.map((msg, index) => renderMessage({ ...msg, index }))
                ) : (
                    <p></p>
                )}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Escribe tu pregunta..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button onClick={handleUserMessage}><IoSend /></button>
            </div>
        </div>
    );
}

export default Chatbot;