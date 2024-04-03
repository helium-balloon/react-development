import FilterSearchBar from "./FilterOptions";
import ImageTable from "./ImageTable";


export default function FilterableImagePicker( {onHeartClick, isHeartFilled, filtered, setFiltered}) {
    return (
      <div>
        <FilterSearchBar
          filtered={filtered}
          setFiltered={setFiltered}
        ></FilterSearchBar>
        <ImageTable
          images={filtered}
          onHeartClick={onHeartClick}
          isHeartFilled={isHeartFilled}
        ></ImageTable>
      </div>
    );

}