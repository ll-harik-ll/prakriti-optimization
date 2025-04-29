import { useLocation } from 'react-router-dom';

const ConfirmPage = () => {
    const location = useLocation();
    const report = location.state?.report || [];

    const sendReport = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/save-report`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ responses: report })
            });
    
            if(response.ok) {
                console.log("Report Saved Succesfully!");
            } else {
                console.error("Error Saving Report!");
            }
        } catch (error) {
            console.error(`Error Sending Report: ${error}`);
        }
    };

    return (
        <div>
            <h2>Reay to Submit ?</h2>
            <button onClick={sendReport}>Save & Submit</button>
        </div>
    );
}

export default ConfirmPage;