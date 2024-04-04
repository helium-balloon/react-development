import ImageCard from "./ImageCard";
import "../styles/ImageTable.css";

// component for the image table which maps the images from image-data on the application by using ImageCards

export default function ImageTable({images, onHeartClick, isHeartFilled}) {
  return (
    <div className="flex-rows">
      {images.map((item, index) => (
        <ImageCard
          item={item}
          name={item.name}
          type={item.type}
          image={item.image}
          size={item.size}
          index={index}
          onHeartClick={onHeartClick}
          isHeartFilled={isHeartFilled}
        ></ImageCard>
      ))}
    </div>
  );
}
