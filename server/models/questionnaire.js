import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    question_id: { type: String, required: true, unique: true },
    question: { type: String, required: true },
    options: [{ type: String, required: true }]
});

const Questionnaire = mongoose.model('questionnaire', QuestionSchema, 'questionnaire');
export default Questionnaire;