import "./App.css";
import imageData from "./assets/image-data.json";
import FilterableImagePicker from "./components/FilterableImagePicker";

// From Studio Code to Allow Images to Appear
imageData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  // const [heartList, setHeartList] = useState([]);

  // const handleHeartChange = (index) => {
  //   if (!heartList.includes(index)) {
  //     setHeartList([...heartList,index]);
  //   } else {
  //     // remove item from list when unhearted
  //     setHeartList(heartList.filter((item) => item !==index));
  //   }
  // }

  // const isHeartFilled = (index) => {
  //   return heartList.includes(index);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Picture Picker</h1>
      </header>
      <body>
        {/* when at base or when click clear, use full list of images */}
        <FilterableImagePicker></FilterableImagePicker>
        {/* onHeartClick={handleHeartChange} isHeartFilled={isHeartFilled(index)} */}
        <h2>Favorites</h2>
        {/* images taken in here will be a list of the favorites (useState) */}
        {/* <ImageTable images={imageData}></ImageTable> */}
      </body>
    </div>
  );
}

export default App;
