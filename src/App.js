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

  const [heartList, setHeartList] = useState([]);

  const handleHeartChange = (item, index) => {
    if (!heartList.map(item => item.index).includes(index)) {
      setHeartList([...heartList, {index, name: item.name, image: item.image, type: item.type, size: item.size} ]);
    } else {
      // remove item from list when unhearted
      setHeartList(heartList.filter(item => item.index !== index));
    }
  };

  const isHeartFilled = (index) => {
    return heartList.map(item => item.index).includes(index);
  };

  console.log(heartList);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Picture Picker</h1>
      </header>
      <body>
        {/* when at base or when click clear, use full list of images */}
        <FilterableImagePicker
          onHeartClick={handleHeartChange}
          isHeartFilled={isHeartFilled}
        ></FilterableImagePicker>
        {/* onHeartClick={handleHeartChange} isHeartFilled={isHeartFilled(index)} */}
        <h2>Favorites</h2>
        {/* images taken in here will be a list of the favorites (useState) */}
        {/* right now, the favorites has the right amount of image cards but they are empty, so no information is being */}
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
