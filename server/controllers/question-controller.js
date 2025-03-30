import Questionnaire from "../models/questionnaire.js";

const GetAllQuestions = async (req, res) => {
    try {
        const questions = await Questionnaire.find().sort({ question_id: 1 });
         res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Error Retrieving Questions: ", error });
    }
}
export default GetAllQuestions;