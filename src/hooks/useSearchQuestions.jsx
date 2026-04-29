import { useEffect, useState } from "react";
function useSearchQuestions({ filters }) {
  const [questions, setQuestions] = useState(null);
  const {
    keywords,
    pageNumber,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
  } = filters;
  useEffect(() => {
    async function fetchQuestions() {
      let url = `https://api.yeatwork.ru/questions/public-questions?page=${pageNumber}&limit=10`;

      if (keywords?.trim() !== "") {
        const searchParam = encodeURIComponent(keywords);
        url += `&keywords=${searchParam}`;
      }

      if (selectedSpec) {
        url += `&specializationSlug=${selectedSpec}`;
      }

      if (selectedSkill) {
        url += `&skillFilterMode[]=${selectedSkill}`;
      }

      if (selectedLevels) {
        url += `&complexity[]=${selectedLevels}`;
      }

      if (selectedRating) {
        url += `&rate[]=${selectedRating}`;
      }

      fetch(url)
        .then((response) => response.json())
        .then((data) => setQuestions(data))
        .catch((error) => console.error("Error: ", error));
    }
    fetchQuestions();
  }, [
    keywords,
    pageNumber,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
  ]);
  return questions;
}

export default useSearchQuestions;
