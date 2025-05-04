const fetchQuestion = async (id, setCurrentQuestion) => {
    try {
        const response = await fetch(`https://localhost:5000/api/questions/${id}`);
        const data = await response.json();
        setCurrentQuestion(data);
    } catch (error) {
        console.error(`Error Fetching Question: ${error}`);
    }
};

export default fetchQuestion;