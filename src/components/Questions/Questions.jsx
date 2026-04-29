function Questions({ questions }) {
  return (
    <div>
      <h2>Вопросы React, JavaScript</h2>
      <hr />
      <ul>
        {questions?.map((question) => {
          return (
            <li>
              <h3>{question.title}</h3>
              <div>
                <span>Рейтинг: {question.rate}</span>
                <span>Сложность: {question.complexity}</span>
              </div>
              <img src={question.imageSrc} alt="Изображение ответа" />
              <p>{question.shortAnswer}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Questions;
