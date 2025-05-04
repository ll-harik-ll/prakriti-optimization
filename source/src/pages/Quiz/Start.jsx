import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Ready to Start ?</h2>
            <button onClick={() => {navigate('/Layout/Quiz')}}>Start</button>
        </div>
    )
}

export default StartPage;