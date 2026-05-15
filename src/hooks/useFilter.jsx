// src/hooks/useFilter.js
import useSearchQuestions from './useSearchQuestions';

function useFilter() {
  // Получаем всё из нашего нового главного хука
  const { filters, questions, updateFilters, loading } = useSearchQuestions();

  // Создаём удобные методы для обновления каждого фильтра по отдельности
  const filterActions = {
    setKeywords: (keywords) => updateFilters({ keywords }),
    setPageNumber: (pageNumber) => updateFilters({ pageNumber }),
    setSelectedSpec: (spec) => updateFilters({ selectedSpec: spec }),
    setSelectedSkill: (skill) => updateFilters({ selectedSkill: skill }),
    setSelectedLevels: (level) => updateFilters({ selectedLevels: level }),
    setSelectedRating: (rating) => updateFilters({ selectedRating: rating }),
    setSelectedStatus: (status) => updateFilters({ selectedStatus: status }),
    clearFilters: () => updateFilters({ // Метод для сброса всех фильтров
      keywords: '',
      selectedSpec: '',
      selectedSkill: '',
      selectedLevels: '',
      selectedRating: '',
      selectedStatus: '',
      pageNumber: 1,
    }),
  };

  // Возвращаем всё, что нужно в Main.jsx
  return {
    filterValues: { ...filters, questions }, // Объединяем фильтры и данные вопросов
    filterActions,
    loading,
  };
}

export default useFilter;