import FilterSearchBar from "./FilterOptions";
import ImageTable from "./ImageTable";
import imageData from "../assets/image-data.json";


export default function FilterableImagePicker( {onHeartClick, isHeartFilled, filtered, setFiltered}) {
    return (
      <div>
        <FilterSearchBar
          data={imageData}
          filtered={filtered}
          setFiltered={setFiltered}
        ></FilterSearchBar>
        <ImageTable
          images={imageData}
          onHeartClick={onHeartClick}
          isHeartFilled={isHeartFilled}
        ></ImageTable>
      </div>
    );

}