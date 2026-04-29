import { useEffect, useState } from "react";
function useSearchQuestions(filters) {
  const [questions, setQuestions] = useState(null);
  const {
    keywords,
    pageNumber,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
    selectedStatus,
  } = filters;
  useEffect(() => {
    const page = pageNumber ?? 1;
    let url = `https://api.yeatwork.ru/questions/public-questions?page=${page}&limit=10`;

    if (keywords && keywords?.trim() !== "") {
      const searchParam = encodeURIComponent(keywords ?? "");
      url += `&keywords=${searchParam}`;
    }

    if (selectedSpec) {
      url += `&specializationSlug=${selectedSpec}`;
    }

    if (selectedSkill) {
      url += `&skills=${selectedSkill}`;
    }

    if (selectedLevels) {
      url += `&complexity[]=${selectedLevels}`;
    }

    if (selectedRating) {
      url += `&rate[]=${selectedRating}`;
    }

    if (selectedStatus) {
      url += `&status[]=${selectedStatus}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error: ", error));
  }, [
    keywords,
    pageNumber,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
    selectedStatus,
  ]);
  return questions;
}

export default useSearchQuestions;
