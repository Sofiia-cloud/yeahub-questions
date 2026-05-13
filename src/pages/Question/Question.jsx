import { useNavigate, useParams } from "react-router-dom";
import useQuestionDetails from "../../hooks/useQuestionDetails";
import styles from "./Question.module.css";

function Question() {
  const { questionId } = useParams();
  const question = useQuestionDetails(questionId);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>{question.title}</h1>
        <p>{question.description}</p>
      </div>
      <div>
        <span>Предыдущий</span>
        <span>Следующий</span>
      </div>
      <div>
        <h2>Краткий ответ</h2>
        <p dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
      </div>
      <div>
        <h2>Развернутый ответ</h2>
        <p dangerouslySetInnerHTML={{ __html: question.longAnswer }} />
      </div>

      <div>
        <p>Уровень: </p>

        <div>
          <span className={styles.tag_name}>
            <span className={styles.tag_name}>
              Сложность:{" "}
              <span className={styles.tag}>{question.complexity}</span>
            </span>
            Рейтинг: <span className={styles.tag}>{question.rate}</span>
          </span>
        </div>
        <p>
          Навыки:{" "}
          {question.questionSkills?.map((skill) => (
            <span>{skill.title} </span>
          ))}
        </p>
        <p>
          Ключевые слова:{" "}
          {question.keywords?.map((keyword) => (
            <span>#{keyword} </span>
          ))}
        </p>
        <p>Автор: {question.createdBy?.username}</p>
      </div>

      <div>
        <p>Руслан Куянец</p>
        <p>Python Guru</p>
        <p>Guru - это эксперты YeaHub, которые помогают развивать комьюнити.</p>
      </div>

      <button onClick={() => navigate("/")}>Back to all questions</button>
    </>
  );
}

export default Question;
