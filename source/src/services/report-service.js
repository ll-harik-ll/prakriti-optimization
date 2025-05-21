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

const getReportByID = async (id) => {
    try {
        const report = await fetch(`https://localhost:5000/api/get-report/${id}`, {
            method : 'GET',
            credentials : 'include'
        });

        const data = await report.json().catch(() => ({}));
        return data;
    } catch (error) {
        console.error(`Error Fetching Report: ${error}`);
    }
}

export { sendReport, getReportByID };