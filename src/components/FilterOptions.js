import imageData from "../assets/image-data.json";

export default function FilterOptions({ filtered, setFiltered }) {
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
  };

  const handleSorting = () => {
    let sort = [...filtered];
    sort.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      // if A before B, put A before
      if (nameA < nameB) {
        return -1;
      }
      // if A after B, put A after
      if (nameA > nameB) {
        return 1;
      }
      // same order if names equal
      return 0;
    });
    // set filtered to the sorted list
    setFiltered(sort);
  };

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
        <button className="filter-buttons" onClick={() => handleSorting()}>
          Alphabetize
        </button>
      </div>
      <div className="row">
        <button className="filter-buttons indent" onClick={() => reset()}>
          Clear All
        </button>
      </div>
    </div>
  );
}
