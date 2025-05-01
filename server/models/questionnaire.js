import mongoose from 'mongoose';

const OptionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    value: { type: String, required: true},
},{ _id: false });

const QuestionSchema = new mongoose.Schema({
    question_id: { type: Number, required: true, unique: true },
    question: { type: String, required: true },
    options: [{ type: OptionSchema, required: true }]
});

const Questionnaire = mongoose.model('questionnaire', QuestionSchema, 'questionnaire');
export default Questionnaire;