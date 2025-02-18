import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; // Add your logo here

function App() {
    return (
        <div className="coming-soon-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Coming Soon!</h1>
            <p>We’re working hard to launch our platform. Stay tuned.</p>
            <button className="notify-btn">Notify Me</button>
        </div>
    );
}

export default App;
