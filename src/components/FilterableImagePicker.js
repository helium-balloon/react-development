import FilterSearchBar from "./FilterOptions";
import ImageTable from "./ImageTable";
import imageData from "../assets/image-data.json";


export default function FilterableImagePicker( {onHeartClick, isHeartFilled}) {
    return (
      <div>
        <FilterSearchBar></FilterSearchBar>
        <ImageTable images={imageData} onHeartClick={onHeartClick} isHeartFilled={isHeartFilled}></ImageTable>
      </div>
    );

}