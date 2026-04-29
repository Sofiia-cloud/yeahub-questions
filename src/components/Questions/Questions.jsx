import { Pagination } from "../Pagination/Pagination";
import ReactMarkdown from "react-markdown";

import styles from "./Questions.module.css";
function Questions({ questions, pageNumber, setPageNumber }) {
  return (
    <div className={styles.questionContainer}>
      <h2>Вопросы React, JavaScript</h2>
      <hr />
      <ul>
        {questions?.data.map((question) => {
          return (
            <li key={question.id}>
              <h3>{question.title}</h3>
              <div>
                <span>Рейтинг: {question.rate}</span>
                <span>Сложность: {question.complexity}</span>
              </div>
              {question.imageSrc && (
                <img src={question.imageSrc} alt="Изображение ответа" />
              )}
              <p dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
            </li>
          );
        })}
      </ul>
      <Pagination page={pageNumber} total={24} onChange={setPageNumber} />
    </div>
  );
}

export default Questions;
