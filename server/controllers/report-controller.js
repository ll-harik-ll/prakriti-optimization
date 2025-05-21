import Reports from '../models/patient-reports.js';
import EvaluateReport from '../services/report-evaluation.js';
// below is temporary
import mongoose from 'mongoose';

const SaveReport = async (req, res) => {
    try {
        if (!req.session?.userID || !req.session?.username) {
            return res.status(401).json({ message: "Unauthorized. Please login again." });
        }
        
        const newReport = new Reports({
            userID: req.session.userID,
            username: req.session.username,
            responses: req.body.responses,
            prakriti: EvaluateReport(req.body.responses)
        });
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

const GetReportByID = async (req, res) => {
    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.userID)) {
            return res.status(400).json({ message: "Invalid userID format" });
        }
        const report = await Reports.findOne({ userID : req.params.userID });
        if(!report) {
            return res.status(404).json({ message: `Report Not Found` });
        }
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch report: ${error}` });
    }
};

export { SaveReport, GetAllReports, GetReportByID };