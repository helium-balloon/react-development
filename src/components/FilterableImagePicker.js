import FilterSearchBar from "./FilterSearchBar";
import ImageTable from "./ImageTable";
import imageData from "../assets/image-data.json";


export default function FilterableImagePicker() {
    return (
      <div>
        <FilterSearchBar></FilterSearchBar>
        <ImageTable images={imageData}></ImageTable>
      </div>
    );

}