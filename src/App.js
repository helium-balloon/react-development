import "./App.css";
import imageData from "./assets/image-data.json";
import FilterableImagePicker from "./components/FilterableImagePicker";
import { useState } from "react";
import ImageTable from "./components/ImageTable";

// From Studio Code to Allow Images to Appear
imageData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  // states used
  //heartList which is an array of hearted image cards
  const [heartList, setHeartList] = useState([]);
  // filtered is an array of the data to be rendered based on filters and sorting options clicked
  const [filtered, setFiltered] = useState(imageData);

  // handle heart change method which adds or removes an item to the heartedList
  // when an item is added, all its information is included so that it can be rended in the heartList
  const handleHeartChange = (item, index) => {
    // if heartList doesn't include item, add it to list
    if (!heartList.map(item => item.index).includes(index)) {
      setHeartList([...heartList, {index, name: item.name, image: item.image, type: item.type, size: item.size} ]);
    } else {
      // remove item from list when unhearted
      setHeartList(heartList.filter(item => item.index !== index));
    }
  };

  // helper method to tell if a heart is filled which helps imageCard determine to fill or unfill a heart
  const isHeartFilled = (index) => {
    return heartList.map(item => item.index).includes(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Picture Picker</h1>
      </header>
      <body>
        {/* returns the filterable image picker to show the filtering options and the imagecards */}
        <FilterableImagePicker
          onHeartClick={handleHeartChange}
          isHeartFilled={isHeartFilled}
          filtered={filtered}
          setFiltered={setFiltered}
        ></FilterableImagePicker>
        {/* returns the favorited photo based on the items in the heartList */}
        <h1>Favorites</h1>
        {heartList.length === 1 ? (
          <h3>You have 1 favorite photo!</h3>
        ) : (
        <h3>You have {heartList.length} favorite photos!</h3>)}
        <ImageTable
          images={heartList}
          onHeartClick={handleHeartChange}
          isHeartFilled={isHeartFilled}
        ></ImageTable>
      </body>
    </div>
  );
}

export default App;
