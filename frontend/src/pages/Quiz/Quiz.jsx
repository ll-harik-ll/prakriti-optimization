import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchQuestion = async (id, setCurrentQuestion) => {
    try {
        const response = await fetch(`http://localhost:5000/api/questions/${id}`);
        const data = await response.json();
        setCurrentQuestion(data);
    } catch (error) {
        console.error(`Error Fetching Question: ${error}`);
    }
};

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null); // Initialising Empty Object for Current Question
    const [questionIndex, setQuestionIndex] = useState(1); // Initialising question_id to be 1
    const [report, setReport] = useState([]); // Initialising report to empty array

    const navigate = useNavigate();

    const handleNext = () => {
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
                                        value={index}
                                    />
                                    <label htmlFor={`option-${index}`}>{option}</label>
                                </div>
                            ))
                        }
                    </div> 
                :
                    <p>Loading Question...</p>
            }
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default QuizPage;