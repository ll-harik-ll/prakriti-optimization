import {useState} from 'react';
import{useNavigate} from 'react-router-dom';

const buttonClass = "px-6 py-2 bg-orange-600 text-white rounded-lg w-fit hover:bg-orange-700 transition"

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
        <div className='-mt-20 flex flex-col justify-center items-center text-center space-y-8 min-h-screen'>
            {/* <h1>RESPONSE STORED SUCCESSFULLY</h1> */}
            <button onClick={fetchReport} className={buttonClass}>GET YOUR REPORTS</button>

            <div className='flex justify-center space-x-8'>
                {report.length === 0 ? (
                    <p>No reports found.</p>
                ) : (
                    report.map((rep, index) => (
                        <div key={index} >
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