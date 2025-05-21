import { useState, useEffect } from 'react';
import { getReportByID } from '../../services/report-service.js';
import { checkAuth } from '../../services/account-service.js';

const ResultPage = () => {
    const [responses, setResponses] = useState([]);
    const [prakriti, setPrakriti] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            const user = await checkAuth();

            if (!user?.userID) {
                console.error(`Unauthenticated User!!!`);
                return;
            }
            
            const report = await getReportByID(user.userID) || {};
            console.log("Fetched report:", report);
            if (report) {
                setResponses(report.responses || []);
                setPrakriti(report.prakriti || null);
            }
            console.log("Responses set to:", report.responses);

        }

        fetchReport();
    }, []);

    console.log("responses state in render:", responses);

    return (
        <div className="mt-40 px-6 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center text-[#2f3e46]">Your Quiz Report</h2>
            <div className="space-y-6">
            {
                responses.map((entry, index) => (
                    <div key={index} className="p-4 bg-white rounded-xl shadow">
                        <p className="font-semibold text-gray-800">{entry.question}</p>
                        <p className="mt-2 text-gray-600">
                            Selected Option: <span className="font-medium">{entry.selected}</span>
                        </p>
                    </div>
                ))
            }
            </div>
            <div className="mt-10 text-center text-2xl font-semibold text-green-700">
                Result : {prakriti}
            </div>
        </div>
    );
}

export default ResultPage;