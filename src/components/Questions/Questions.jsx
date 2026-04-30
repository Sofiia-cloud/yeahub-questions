import { Pagination } from "../Pagination/Pagination";
import ReactMarkdown from "react-markdown";

import styles from "./Questions.module.css";
import { useState } from "react";
function Questions({ questions, pageNumber, setPageNumber }) {
  const totalPages = Math.ceil(questions?.total / questions?.limit);
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };
  return (
    <div className={styles.questionContainer}>
      <h2>Вопросы</h2>
      <hr />
      <ul>
        {questions?.data.map((question) => {
          const isOpen = openQuestionId === question.id;
          return (
            <li key={question.id}>
              <h3>{question.title}</h3>
              <button
                className={`${styles.arrowButton} ${isOpen ? styles.open : ""}`}
                onClick={() => toggleQuestion(question.id)}
                onClick={() => toggleQuestion(question.id)}
              >
                {isOpen ? "▲" : "▼"}
              </button>
              {isOpen && (
                <>
                  <div>
                    <span className={styles.tag_name}>
                      Рейтинг:{" "}
                      <span className={styles.tag}>{question.rate}</span>
                    </span>
                    <span className={styles.tag_name}>
                      Сложность:{" "}
                      <span className={styles.tag}>{question.complexity}</span>
                    </span>
                  </div>
                  {question.imageSrc && (
                    <img src={question.imageSrc} alt="Изображение ответа" />
                  )}
                  <p
                    dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
                  />
                </>
              )}
            </li>
          );
        })}
      </ul>
      <Pagination
        page={pageNumber}
        total={totalPages}
        onChange={setPageNumber}
      />
    </div>
  );
}

export default Questions;
