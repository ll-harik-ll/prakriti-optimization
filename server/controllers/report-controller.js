import Reports from "../models/patient-reports.js";

const SaveReport = async (req, res) => {
    try {
        const responses = req.body;
        const newReport = new Reports(responses);
        await newReport.save();
        res.status(201).json({ message: `Report Saved Successfully` });
    } catch (error) {
        res.status(500).json({ message: `Failed to Save Report: ${error}` });
    }
};

const GetAllReports = async (req, res) => {
    try {
        const reports = await Reports.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: `Failed to Retrieve All Reports: ${error}` });
    }
};
/*
const GetReportByID = async (req, res) => {
    try {
        const report = await Reports.findById(req.params.id);
        if(!report) {
            return res.status(404).json({ message: `Report Not Found` });
        }
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch report: ${error}` });
    }
};
*/
export { SaveReport, GetAllReports };