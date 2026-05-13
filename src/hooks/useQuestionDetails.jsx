import { useState, useEffect } from "react";
function useQuestionDetails(questionId) {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    fetch(`https://api.yeatwork.ru/questions/public-questions/${questionId}`)
      .then((response) => response.json())
      .then((data) => setQuestion(data))
      .catch((error) => console.error(error.message));
  }, [questionId]);
  return question;
}

export default useQuestionDetails;
