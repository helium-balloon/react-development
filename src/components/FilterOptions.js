import { useState } from "react";
import imageData from "../assets/image-data.json";
import "../styles/FilterOptions.css";

// component that creates and does the functionality for the filtering and sorting options

export default function FilterOptions({ filtered, setFiltered }) {
  // use the same filter/setFiltered state in this so that the filters
  // and sorting can work together and be done on top of each other

  // filter function for type
  const handleFilter = (value) => {
    const filter = filtered.filter((photo) => photo.type.includes(value));
    setFiltered(filter);
  };

  // filter function for size
  const handleSizeFilter = (value) => {
    const filter = filtered.filter((photo) => photo.size.includes(value));
    setFiltered(filter);
  };

  // reset button
  const reset = () => {
    setFiltered(imageData);
    // const switchColor = button === "clicked" ? "unclicked" : "unclicked";
    // setButton(switchColor);
  };

  // sorting function for alphabetical order
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

  // const [button, setButton] = useState("unclicked");

  // const handleButtonClick = () => {
  //   const switchColor = button === "unclicked" ? "clicked" : "clicked";
  //   setButton(switchColor);
  // };

  // const unclicked = "#90BEDE";
  // const clicked = "#bde0fe";

  // returns row with buttons with options for filtering and sorting and clearing
  return (
    <div className="flex-container">
      <div className="row">
        <h3 className="indent">Filter by Category:</h3>
        <button
          className="filter-buttons"
          // style={{
          //   backgroundColor: button === "unclicked" ? unclicked : clicked,
          // }}
          onClick={() => {
            handleFilter("Nature");
            // handleButtonClick();
          }}
        >
          Nature
        </button>
        <button
          className="filter-buttons"
          // style={{
          //   backgroundColor: button === "unclicked" ? unclicked : clicked,
          // }}
          onClick={() => {
            handleFilter("Food");
            // handleButtonClick();
          }}
        >
          Food
        </button>
        <button
          className="filter-buttons"
          // style={{
          //   backgroundColor: button === "unclicked" ? unclicked : clicked,
          // }}
          onClick={() => {
            handleFilter("Animals");
            // handleButtonClick();
          }}
        >
          Animals
        </button>
      </div>
      <div className="row">
        <h3 className="indent">Filter by Size:</h3>
        <button
          className="filter-buttons"
          // style={{
          //   backgroundColor: button === "unclicked" ? unclicked : clicked,
          // }}
          onClick={() => {
            handleSizeFilter("Small");
            // handleButtonClick();
          }}
        >
          Small
        </button>
        <button
          className="filter-buttons"
          // style={{
          //   backgroundColor: button === "unclicked" ? unclicked : clicked,
          // }}
          onClick={() => {
            handleSizeFilter("Medium");
            // handleButtonClick();
          }}
        >
          Medium
        </button>
        <button
          className="filter-buttons"
          // style={{
          //   backgroundColor: button === "unclicked" ? unclicked : clicked,
          // }}
          onClick={() => {
            handleSizeFilter("Large");
            // handleButtonClick();
          }}
        >
          Large
        </button>
      </div>
      <div className="row">
        <h3 className="indent">Sort:</h3>
        {/* style=
        {{
          backgroundColor: button === "unclicked" ? unclicked : clicked,
        }} */}
        <button
          className="filter-buttons"
          onClick={() => {
            handleSorting();
            // handleButtonClick();
          }}
        >
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
