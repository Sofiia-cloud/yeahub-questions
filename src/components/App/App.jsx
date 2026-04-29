import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Questions from "../Questions/Questions";
import useSpecializations from "../../hooks/useSpecializations";
import useSkills from "../../hooks/useSkills";
import useSearchQuestions from "../../hooks/useSearchQuestions";
import useFilter from "../../hooks/useFilter";
import FilterPanel from "../FilterPanel/FilterPanel";

function App() {
  const [filterValues, filterActions] = useFilter();
  const questions = useSearchQuestions(filterValues);
  const specializations = useSpecializations();
  const skills = useSkills();

  return (
    <>
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
