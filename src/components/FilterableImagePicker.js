import FilterOptions from "./FilterOptions";
import ImageTable from "./ImageTable";

// parent for the FilterOptions component and the ImageTable component.
// Essentially this holds the filtering options and the table, so this one component can be returned in the App

export default function FilterableImagePicker({
  onHeartClick,
  isHeartFilled,
  filtered,
  setFiltered,
}) {
  return (
    <div>
      <FilterOptions
        filtered={filtered}
        setFiltered={setFiltered}
      ></FilterOptions>
      <ImageTable
        images={filtered}
        onHeartClick={onHeartClick}
        isHeartFilled={isHeartFilled}
      ></ImageTable>
    </div>
  );
}
