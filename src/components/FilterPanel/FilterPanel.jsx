import FilterButtons from "../filterButtons/FilterButtons";

function FilterPanel({ values, actions, data }) {
  const {
    keywords,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
    selectedStatus,
  } = values;
  const {
    setKeywords,
    setSelectedSpec,
    setSelectedSkill,
    setSelectedLevels,
    setSelectedRating,
    setSelectedStatus,
  } = actions;
  const { specializations, skills } = data;

  const levelsConfig = [
    { id: 1, title: "1-3" },
    { id: 4, title: "4-6" },
    { id: 7, title: "7-8" },
    { id: 9, title: "9-10" },
  ];

  const ratingConfig = [
    { title: 1 },
    { title: 2 },
    { title: 3 },
    { title: 4 },
    { title: 5 },
  ];

  const statusConfig = [
    { title: "Изученные" },
    { title: "Не изученные" },
    { title: "Все" },
  ];

  return (
    <div>
      <input
        placeholder="Введите запрос…"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <FilterButtons
        name={"Специализация"}
        title={"spec"}
        buttons={specializations}
        selected={selectedSpec}
        setSelected={setSelectedSpec}
      />
      <FilterButtons
        name={"Навыки"}
        title={"skills"}
        buttons={skills}
        selected={selectedSkill}
        setSelected={setSelectedSkill}
      />
      <FilterButtons
        name={"Уровень сложности"}
        title={"levels"}
        buttons={levelsConfig}
        selected={selectedLevels}
        setSelected={setSelectedLevels}
      />
      <FilterButtons
        name={"Рейтинг"}
        title={"rating"}
        buttons={ratingConfig}
        selected={selectedRating}
        setSelected={setSelectedRating}
      />
      <FilterButtons
        name={"Статус"}
        title={"status"}
        buttons={statusConfig}
        selected={selectedStatus}
        setSelected={setSelectedStatus}
      />
    </div>
  );
}

export default FilterPanel;
