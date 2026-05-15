// src/Main.jsx
import Questions from "../components/Questions/Questions";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import useSpecializations from "../hooks/useSpecializations";
import useSkills from "../hooks/useSkills";
import useFilter from "../hooks/useFilter"; // Обновлённый хук

function Main() {
  // Теперь useFilter возвращает объект!
  const { filterValues, filterActions, loading } = useFilter();

  const specializations = useSpecializations();
  const skills = useSkills();

  // Данные для передачи в компоненты
  const questions = filterValues.questions;
  const pageNumber = filterValues.pageNumber;

  return (
    <>
      <Questions
        questions={questions}
        loading={loading}
        pageNumber={pageNumber}
        setPageNumber={filterActions.setPageNumber}
      />
      <FilterPanel
        values={filterValues}
        actions={filterActions}
        data={{ specializations, skills }}
      />
    </>
  );
}

export default Main;
