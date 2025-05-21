import {useState} from 'react';
import{useNavigate} from 'react-router-dom';

const buttonClass = "px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"

const Report = () => {
    const [report, setReport] = useState([]);
    const navigate = useNavigate();

    const fetchReport = async () => {
        try {
            const response = await fetch(`https://localhost:5000/api/reports`, {
                method: 'GET',
                credentials: 'include',
            });
            const data = await response.json();
            console.log("Fetched report data:", data);
            setReport(data);
        } catch (error) {
            console.error(`Error Fetching Reports: ${error}`);
        }
    };

    return (
        <div className='mt-44'>
            <h1>RESPONSE STORED SUCCESSFULLY</h1>
            <button onClick={fetchReport} className={buttonClass}>GET YOUR REPORTS</button>

            <div>
                {report.length === 0 ? (
                    <p>No reports found.</p>
                ) : (
                    report.map((rep, index) => (
                        <div key={index}>
                            <p>NAME: {rep.name}</p>
                            <button onClick={() => navigate('/ReportImage', { state: { report: rep } })} className={buttonClass}>
                                SEE YOUR PRAKRUTI
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Report;