import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center -m-20 min-h-screen px-4">
            <h2 className="text-3xl font-semibold text-gray-800">Ready to Start ?</h2>
            <button
                onClick={() => {navigate('/Quiz')}}
                className="bg-gradient-to-r from-[#a8c66c] to-[#e6b980] text-white font-medium m-6 px-6 py-3 rounded-2xl shadow hover:scale-105 transform transition"
            >
                Start
            </button>
        </div>
    )
}

export default StartPage;