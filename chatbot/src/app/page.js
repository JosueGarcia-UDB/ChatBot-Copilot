import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import './globals.css';
import Chatbot from "@/components/Chatbot";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <Chatbot/>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;