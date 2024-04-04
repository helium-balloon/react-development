import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function ImageCard({ item, name, image, type, size, index, onHeartClick, isHeartFilled}) {
  library.add(faHeart);

//   const [heart, setHeart] = useState("unfilled");

//   function changeHeart() {
//       setHeart((prevState) =>
//         prevState === "unfilled" ? "filled" : "unfilled"
//       );
//   }

  return (
    <div className="image_card">
      <div className="crop">
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>
      <h2 key={index}>{name}</h2>
      <h3>Category: {type}</h3>
      <h3>Size: {size}</h3>
      {!isHeartFilled(item.name) ? (
        <FontAwesomeIcon icon={regularHeart} onClick={() => onHeartClick(item, item.name)} />
      ) : (
        <FontAwesomeIcon icon={solidHeart} onClick={() => onHeartClick(item, item.name)} />
      )}
    </div>
  );
}
