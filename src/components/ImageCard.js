import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import "../styles/ImageCard.css";

// component that returns an image card with an image, name, type, size, and button to like/unlike"

export default function ImageCard({
  item,
  name,
  image,
  type,
  size,
  index,
  onHeartClick,
  isHeartFilled,
}) {
  library.add(faHeart);

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
      <div class="half">
        <div class="center">
          <h3>Category: {type}</h3>
          <h3>Size: {size}</h3>
        </div>
        <div class="center">
          {!isHeartFilled(item.name) ? (
            <FontAwesomeIcon
              className="heart"
              size="3x"
              icon={regularHeart}
              onClick={() => onHeartClick(item, item.name)}
            />
          ) : (
            <FontAwesomeIcon
              className="heart"
              size="3x"
              icon={solidHeart}
              onClick={() => onHeartClick(item, item.name)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
