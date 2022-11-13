import './GoodsCard.css';

export default function GoodsCard(props) {
  const image = props.image;
  const name = props.title;
  const brand = props.brand;
  const rating = props.rating;
  const price = props.price;
  
  return (
    <div className="goodsCard">
      <img src={image} alt={name} />
      <span><em>Name:</em> {name}</span>
      <span><em>Brand:</em>{brand}</span>
      <span><em>Rating:</em>{rating}</span>
      <span><em>Price:</em>{price}$</span>
      <button>SHOP NOW</button>
    </div>
  );
}