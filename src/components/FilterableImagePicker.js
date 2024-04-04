import FilterOptions from "./FilterOptions";
import ImageTable from "./ImageTable";

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
