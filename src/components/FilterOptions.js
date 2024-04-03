export default function FilterSearchBar({data}){

  // const

    return (
      <div className="flex-container">
        <div className="row">
          <h3 className="indent">Filter by Category:</h3>
          <button className="filter-buttons">Nature</button>
          <button className="filter-buttons">Food</button>
          <button className="filter-buttons">Animals</button>
        </div>
        <div className="row">
          <h3 className="indent">Filter by Size:</h3>
          <button className="filter-buttons">Small</button>
          <button className="filter-buttons">Medium</button>
          <button className="filter-buttons">Large</button>
        </div>
        <div className="row">
          <h3 className="indent">Sort:</h3>
          <button className="filter-buttons">Size (Big to Small)</button>
        </div>
        <div className="row">
          <button className="filter-buttons indent">Clear All</button>
        </div>
      </div>
    );

}