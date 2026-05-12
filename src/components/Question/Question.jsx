import styles from "./Question.module.css";
function Question({ question, isOpen, toggleQuestion }) {
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
              Рейтинг: <span className={styles.tag}>{question.rate}</span>
            </span>
            <span className={styles.tag_name}>
              Сложность:{" "}
              <span className={styles.tag}>{question.complexity}</span>
            </span>
          </div>
          {question.imageSrc && (
            <img src={question.imageSrc} alt="Изображение ответа" />
          )}
          <p dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
        </>
      )}
    </li>
  );
}

export default Question;
