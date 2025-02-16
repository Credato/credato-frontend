import logo from "./assets/logo.png"; // Make sure you place your logo in 'src/assets/' folder
import "./App.css"; // Import CSS for styling

function App() {
    return (
        <div className="coming-soon-container">
            <img src={logo} alt="Credato Logo" className="logo" />
            <h1>Credato is Coming Soon!</h1>
            <p>We’re working hard to bring you a seamless digital car financing experience.</p>
            <p>Stay tuned for updates!</p>
            <button className="notify-btn">Notify Me</button>
        </div>
    );
}

export default App;
