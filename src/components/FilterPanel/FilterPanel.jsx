import FilterButtons from "../filterButtons/FilterButtons";

function FilterPanel({values, actions, data}) {

  return (
    <div>
      <input placeholder="Введите запрос…" value={keywords} onChange={(e)=>setKeywords(e.target.value)}/>
      <FilterButtons name={'Специализация'} title={''} buttons={} selected={} setSelected={}/>
      <FilterButtons name={'Навыки'} title={} buttons={} selected={} setSelected={}/>
      <FilterButtons name={'Уровень сложности'} title={} buttons={} selected={} setSelected={}/>
      <FilterButtons name={'Рейтинг'} title={} buttons={} selected={} setSelected={}/>
      <FilterButtons name={'Статус'} title={} buttons={} selected={} setSelected={}/>
    </div>
  );
}

export default FilterPanel;
