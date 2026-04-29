import { useState } from "react";

function useFilter() {
  const [keywords, setKeywords] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLevels, setSelectedLevels] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const values = {
    keywords,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
    selectedStatus,
    pageNumber,
  };

  const actions = {
    setKeywords,
    setSelectedSpec,
    setSelectedSkill,
    setSelectedLevels,
    setSelectedRating,
    setSelectedStatus,
    setPageNumber,
  };

  return [values, actions];
}

export default useFilter;
