import Reports from '../models/patient-reports.js';
import EvaluateReport from '../services/report-evaluation.js';

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
        const userID = req.session.userID;
        if (!userID) {
            return res.status(401).json({ message: "Unauthorized: No session found" });
        }

        const report = await Reports.find({ userID : userID });

        if(!report || report.length === 0) {
            return res.status(404).json({ message: `No reports found for this user` });
        }
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch report: ${error}` });
    }
};

const GetDosha = async(req,res)=>{
    try{
        const userID = req.session.userID;
        if (!userID) {
            return res.status(401).json({ message: "Unauthorized: No session found" });
        }
        const doshaname= req.params.prakriti;
        
        const dosha= await Doshadescription.find({type:doshaname});
        res.status(200).json(dosha);
        
    }
    catch (error) {
        res.status(500).json({ error: `Failed to fetch report: ${error}` });
    }
};

export { SaveReport, GetAllReports, GetReportByID, GetDosha };