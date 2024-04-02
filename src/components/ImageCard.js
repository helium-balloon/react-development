export default function ImageCard({ name, image, type, size, index, heart }) {
  return (
    <div className="image_card">
      <h2 key={index}>{name}</h2>
      <div className="image">
        <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover"}} />
      </div>
      <h3>Category: {type}</h3>
      <h3>Size: {size}</h3>
      <button onClick={() => heart()}>Like (heart button)</button>
      {/* the on click will be the heart and turn from not full to full or from full to empty */}
    </div>
  );
}
