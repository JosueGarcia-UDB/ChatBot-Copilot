import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import './globals.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <h1 className="welcome-title">Bienvenido al Chatbot UDB</h1>
          <p className="welcome-text">Seleccione un tema en el menú lateral</p>
          
          {/* aquí iría el componente de chat en teoría tipo de mandarlo a exportar*/}
          <div className="chat-placeholder">
            <div className="chat-bubble bot">
              <p>hola soy el asistente negreira de la UDB. ¿En qué te ayudo?</p>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Escribe tu mensaje aquí..." />
              <button>Enviar</button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;