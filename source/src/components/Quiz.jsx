import { useState, useEffect } from "react";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null); // Initialising Empty Object for Current Question
    const [questionIndex, setQuestionIndex] = useState(1); // Initialising question_id to be 1

    const fetchQuestion = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/questions/${id}`);
            const data = await response.json();
            setCurrentQuestion(data);
        } catch (error) {
            console.error(`Error Fetching Question: ${error}`);
        }
    };

    useEffect(() => {
        fetchQuestion(questionIndex);
    }, [questionIndex]);

    const handleNext = () => {
        setQuestionIndex((prev) => (prev + 1));
    }

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

export default Quiz;