import './landingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    
    function handleLoginClick() {
        navigate('/login');
    }

    function handleRegisterClick() {
        navigate('/register');
    }

    return (
        <div className="landing-container">
            <p className="landing-tagline">tagline goes here</p>
            <h2 className="landing-title">Pod Tracking</h2>
            <div className="landing-btns">
                <button className="landing-btn" onClick={handleLoginClick}>Login</button>
                <button className="landing-btn" onClick={handleRegisterClick}>Register</button>
            </div>
        </div>
    );
};

export default LandingPage;
