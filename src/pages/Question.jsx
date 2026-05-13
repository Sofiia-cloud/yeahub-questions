import { useNavigate, useParams } from "react-router-dom";
import useQuestionDetails from "../hooks/useQuestionDetails";

function Question() {
  const { questionId } = useParams();
  const question = useQuestionDetails(questionId);
  const navigate = useNavigate();

  return (
    <>
      <h1>{question.title}</h1>
      {/* <div>
        <h1>Что такое Virtual DOM, и как он работает?</h1>{" "}
        <p>Вопрос проверяет знание React под капотом</p>
      </div>
      <div>
        <span>Предыдущий</span>
        <span>Следующий</span>
      </div>
      <div>
        <h2>Краткий ответ</h2>{" "}
        <p>Virtual DOM (виртуальный DOM) — это программная концепция...</p>
      </div>
      <div>
        <h2>Развернутый ответ</h2>{" "}
        <p>Virtual DOM (виртуальный DOM) — это программная концепция...</p>
      </div> */}
      <button onClick={() => navigate(-1)}>Back to all questions</button>
    </>
  );
}

export default Question;
