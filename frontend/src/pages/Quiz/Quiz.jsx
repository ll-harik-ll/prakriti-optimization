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
                navigate('/Layout/Confirm', { state: { report: updatedReport}})
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
        <div>
            {currentQuestion 
                ?
                    <div>
                        <h2>{currentQuestion.question}</h2>
                        {
                            currentQuestion.options?.map((option, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        id={`option-${index}`}
                                        name="quiz-option"
                                        value={option.value}
                                    />
                                    <label htmlFor={`option-${index}`}>{option.text}</label>
                                </div>
                            ))
                        }
                    </div> 
                :
                    <p>Loading Question...</p>
            }
            <button onClick={handleNextQuestion}>Next</button>
        </div>
    );
};

export default QuizPage;