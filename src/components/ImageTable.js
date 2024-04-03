import ImageCard from "./ImageCard";

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
