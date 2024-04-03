import imageData from "../assets/image-data.json";

export default function FilterSearchBar({ filtered, setFiltered }) {
  const handleFilter = (value) => {
    const filter = filtered.filter((photo) => photo.type.includes(value));
    setFiltered(filter);
  };

  const handleSizeFilter = (value) => {
    const filter = filtered.filter((photo) => photo.size.includes(value));
    setFiltered(filter);
  };

  const reset = () => {
    setFiltered(imageData);
  }

  const handleSorting = () => {
    // use filtered for the data
    // create new dataset
    // for each item in filtered, look at the size, 
    // to start if > 0; then add
  }

  return (
    <div className="flex-container">
      <div className="row">
        <h3 className="indent">Filter by Category:</h3>
        <button
          className="filter-buttons"
          onClick={() => handleFilter("Nature")}
        >
          Nature
        </button>
        <button className="filter-buttons" onClick={() => handleFilter("Food")}>
          Food
        </button>
        <button
          className="filter-buttons"
          onClick={() => handleFilter("Animals")}
        >
          Animals
        </button>
      </div>
      <div className="row">
        <h3 className="indent">Filter by Size:</h3>
        <button
          className="filter-buttons"
          onClick={() => handleSizeFilter("Small")}
        >
          Small
        </button>
        <button
          className="filter-buttons"
          onClick={() => handleSizeFilter("Medium")}
        >
          Medium
        </button>
        <button
          className="filter-buttons"
          onClick={() => handleSizeFilter("Large")}
        >
          Large
        </button>
      </div>
      <div className="row">
        <h3 className="indent">Sort:</h3>
        <button className="filter-buttons">Size (Big to Small)</button>
      </div>
      <div className="row">
        <button className="filter-buttons indent" onClick={() => reset()}>Clear All</button>
      </div>
    </div>
  );
}
