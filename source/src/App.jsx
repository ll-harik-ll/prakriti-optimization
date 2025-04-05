import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';
import ConfirmPage from './components/ConfirmPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/Quiz' element={<QuizPage />} />
                <Route path='/Confirm' element={<ConfirmPage />} />
            </Routes>
        </Router>
    );
}

export default App;