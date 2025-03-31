/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const fetchQuestion = async (id, setCurrentQuestion) => {
    try {
        const response = await fetch(`http://localhost:5000/api/questions/${id}`);
        const data = await response.json();
        setCurrentQuestion(data);
    } catch (error) {
        console.error(`Error Fetching Question: ${error}`);
    }
};

const sendReport = async (report) => {
    try {
        const response = await fetch(`http://localhost:5000/api/save-report`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report)
        });

        if(response.ok) {
            console.log("Report Saved Succesfully!");
        } else {
            console.error("Error Saving Report!");
        }
    } catch (error) {
        console.error(`Error Sending Report: ${error}`);
    }
};

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null); // Initialising Empty Object for Current Question
    const [questionIndex, setQuestionIndex] = useState(1); // Initialising question_id to be 1
    const [report, setReport] = useState([]); // Initialising report to empty array

    const handleNext = () => {
        const selected = document.querySelector('input[name="quiz-option"]:checked');

        if(selected) {
            setReport((prevReport) => [
                ...prevReport,
                {
                    question_id: currentQuestion.question_id,
                    question: currentQuestion.question,
                    selected: selected.value
                }
            ]);

            setQuestionIndex((prev) => (prev + 1));
        } else {
            alert("This Question is Mandatory!");
        }
    }

    useEffect(() => {
        fetchQuestion(questionIndex, setCurrentQuestion);
    }, [questionIndex]);

    useEffect(() => {
        if (report.length > 0 && report.length === 34) {
            sendReport();
        }
    }, [report]);

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