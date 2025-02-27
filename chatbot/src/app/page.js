import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './globals.css';
import Chatbot from "@/components/Chatbot";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <main className="content">
          <Chatbot/>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;