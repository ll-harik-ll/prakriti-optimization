import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchQuestion from '../../services/question-service';

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null); // Initialising Empty Object for Current Question
    const [questionIndex, setQuestionIndex] = useState(1); // Initialising question_id to be 1
    const [report, setReport] = useState([]); // Initialising report to empty array

    const navigate = useNavigate();

    const handleNextQuestion = () => {
        const selected = document.querySelector('input[name="quiz-option"]:checked');

        if(selected) {
            console.log('Saving response for Question ID:', currentQuestion.question_id);
            const updatedReport = [
                ...report,
                {
                    question_id: currentQuestion.question_id,
                    question: currentQuestion.question,
                    selected: selected.value
                }
            ];
            setReport(updatedReport);

            if(questionIndex < 34) {
                setQuestionIndex((prev) => (prev + 1));
            }
            else {
                navigate('/Confirm', { state: { report: updatedReport}})
            }

            selected.checked = false;
        }
        else {
            alert("This Question is Mandatory!");
        }
    }

    // Adding this comment to see if moving fetchQuestion definition to services/ and leaving its call
    // as is will work. If it doesn't work, have to change useEffect hook below to put fetchQ in a wrapper-loader
    useEffect(() => {
        fetchQuestion(questionIndex, setCurrentQuestion);
    }, [questionIndex]);

    return (
        <div className="min-h-screen mt-40 px-6 flex flex-col items-center justify-start">
            {
                currentQuestion
                ?
                <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6 space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                        {currentQuestion.question}
                    </h2>
                    {
                        currentQuestion.options?.map((option, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    id={`option-${index}`}
                                    name="quiz-option"
                                    value={option.value}
                                    className="accent-[#a8c66c] scale-110"
                                />
                                <label htmlFor={`option-${index}`} className="text-gray-700 cursor-pointer">
                                    {option.text}
                                </label>
                            </div>
                        ))
                    }
                </div>
                :
                <p className="text-gray-500 text-lg mt-12">Loading Question...</p>
            }
            <button
                onClick={handleNextQuestion}
                className="mt-8 bg-gradient-to-r from-[#a8c66c] to-[#e6b980] text-white font-semibold px-6 py-3 rounded-2xl shadow hover:scale-105 transform transition"
            >
                Next
            </button>
        </div>
    );
};

export default QuizPage;