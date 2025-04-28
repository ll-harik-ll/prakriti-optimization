import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
    question_id: { type: Number, required: true, unique: true },
    question: { type: String, required: true },
    selected: { type: Number, required: true } // 0 1 2 for V P K
});

const ReportSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    username: { type: String, required: true },
    // patient_id: { type: Number}, // Must add required: true when integrating with login & registration
    responses: { type: [ResponseSchema], required: true }
});

const Reports = mongoose.model('patient_reports', ReportSchema, 'patient_reports');
export default Reports;
