import { useState } from "react";
function FilterButtons({ name, title, buttons, selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const allFilters = buttons || [];
  const showFilters = isOpen ? allFilters : allFilters.slice(0, 6);
  return (
    <div>
      <p>{name}</p>
      <ul>
        {showFilters.map((filter) => {
          const isChosen = filter[title] === selected;
          return (
            <li key={filter.id}>
              <button
                className={isChosen ? "" : ""}
                onClick={() => setSelected(filter[title])}
              >
                {filter[title]}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "Скрыть" : "Посмотреть все"}
      </button>
    </div>
  );
}

export default FilterButtons;
