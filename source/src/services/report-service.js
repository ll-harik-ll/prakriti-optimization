const sendReport = async (report) => {
    try {
        const response = await fetch(`https://localhost:5000/api/save-report`, {
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

export default sendReport;