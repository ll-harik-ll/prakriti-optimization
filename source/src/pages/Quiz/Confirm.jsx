import { useLocation, useNavigate } from 'react-router-dom';
import { sendReport } from '../../services/report-service';

const ConfirmPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const report = location.state?.report || [];

    const handleSubmit = async () => {
        try {
            await sendReport(report);
            navigate('/Last-Result', { state: { report } });
        } catch (error) {
            alert('Failed to submit!');
        }
    };
    // Moved sendReport function to services/ and simply called it in button onClick
    // with report passed as argument. If it doesn't work, maybe add a wrapper function to
    // call sendReport within and then call wrapper in button onClick
    
    return (
        <div className="mt-40 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Reay to Submit ?</h2>
            <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-[#a8c66c] to-[#e6b980] hover:brightness-110 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
            >
                Save & Submit
            </button>
        </div>
    );
}

export default ConfirmPage;