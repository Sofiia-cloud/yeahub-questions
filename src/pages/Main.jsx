import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";
import Questions from "../components/Questions/Questions";
import useSpecializations from "../components/../hooks/useSpecializations";
import useSkills from "../components/../hooks/useSkills";
import useSearchQuestions from "../components/../hooks/useSearchQuestions";
import useFilter from "../components/../hooks/useFilter";
import FilterPanel from "../components/FilterPanel/FilterPanel";

function Main() {
  const [filterValues, filterActions] = useFilter();
  const questions = useSearchQuestions(filterValues);
  const specializations = useSpecializations();
  const skills = useSkills();

  return (
    <>
      <Questions
        questions={questions}
        pageNumber={filterValues.pageNumber}
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
