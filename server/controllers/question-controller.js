import Questionnaire from "../models/questionnaire.js";

const GetAllQuestions = async (req, res) => {
    try {
        const questions = await Questionnaire.find().sort({ question_id: 1 });
         res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Error Retrieving Questions: ", error });
    }
}

const GetOneQuestion = async (req, res) => {
    try {
        const question = await Questionnaire.findOne({ question_id: req.params.id });
        if(!question) {
            return res.status(404).json({ message: "Question Not Found" });
        }
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: "Error Retrieving Questions: ", error });        
    }
}

export { GetAllQuestions, GetOneQuestion };