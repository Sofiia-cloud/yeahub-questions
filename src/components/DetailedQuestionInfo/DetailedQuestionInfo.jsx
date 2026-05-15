import styles from "./DetailedQuestionInfo.module.css";

function DetailedQuestionInfo({ question }) {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoCard}>
       
        <div className={styles.levelRow}>
          <span className={styles.infoLabel}>Уровень:</span>
          <div className={styles.levelGroup}>
            <span className={styles.levelLabel}>Сложность:</span>
            <span className={styles.tag}>{question.complexity}</span>
          </div>
          <div className={styles.levelGroup}>
            <span className={styles.levelLabel}>Рейтинг:</span>
            <span className={styles.tag}>{question.rate}</span>
          </div>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Навыки:</span>
          <div className={styles.tagGroup}>
            {question.questionSkills?.map((skill, idx) => (
              <span key={idx} className={styles.skill}>
                {skill.title}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Ключевые слова:</span>
          <div className={styles.tagGroup}>
            {question.keywords?.map((keyword, idx) => (
              <span key={idx} className={styles.keyword}>
                #{keyword}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Автор:</span>
          <span className={styles.author}>
            {question.createdBy?.username || "Не указан"}
          </span>
        </div>
      </div>

      <div className={styles.expertCard}>
        <h4>Руслан Куянец</h4>
        <p>Python Guru</p>
        <p>Guru — это эксперты YeaHub, которые помогают развивать комьюнити.</p>
      </div>
    </div>
  );
}

export default DetailedQuestionInfo;
