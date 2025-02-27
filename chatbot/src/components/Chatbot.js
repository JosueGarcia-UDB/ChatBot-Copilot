"use client";
import React, { useState } from "react";
import Fuse from "fuse.js";
import apoyo_estudiantil from "@/app/data/apoyo_estudiantil";
import desarrollo_profesional from "@/app/data/desarrollo_profesional";
import info_academica from "@/app/data/info_academica";
import servicios_campus from "@/app/data/servicios_campus";
import vida_estudiantil from "@/app/data/vida_estudiantil";
import styles from "@/app/page.module.css";

//Aqui va a depender el Route que quiera el usuario
//Si quisiera respuestas de informacion academica, seria
// const fuse = new Fuse(info_academica),
const fuse = new Fuse(servicios_campus, {
    keys: ['key','question', 'synonyms'],
    threshold: 0.4
});

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [chat, setChat] = useState([]);

    const handleUserMessage = () => {
        if (!userInput.trim()) return;

        const result = fuse.search(userInput);
        let botResponse = "Lo siento, no encontré información sobre eso. ¿Puedes reformular la pregunta?";

        if (result.length > 0) {
            botResponse = result[0].item.answer;
        }

        setChat(prev => [
            ...prev,
            { role: 'user', message: userInput },
            { role: 'bot', message: botResponse }
        ]);

        setUserInput('');
    };

    return (
        <div>
            <h1 className="welcome-title">Bienvenido al Chatbot UDB</h1>
            <p className="welcome-text">Seleccione un tema en el menú lateral</p>
            <div className="chat-placeholder">
                <div className="chat-bubble bot">
                    <strong>Chatbot: </strong>¡Hola! Soy el asistente virtual de la UDB. ¿En qué puedo ayudarte?
                </div>
                    {chat.length > 0 ? (
                        chat.map((msg, index) => (
                            <div key={index} className={msg.role === 'user' ? 'chat-bubble user' : 'chat-bubble bot'}>
                                <strong>{msg.role === 'user' ? 'Tú: ' : 'Chatbot: '}</strong>{msg.message}
                            </div>
                        ))
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
                    <button onClick={handleUserMessage}>Enviar</button>
                </div>
        </div>
    );
}

export default Chatbot;