import ImageCard from "./ImageCard";

export default function ImageTable({ images}) {
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
        //   onHeartClick={handleHeartChange}
          //   add in hearting method here
        ></ImageCard>
      ))}
    </div>
  );
}
