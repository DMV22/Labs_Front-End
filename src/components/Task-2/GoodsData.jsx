import { useState, useEffect } from 'react';
import GoodsCard from './GoodsCard';
import './GoodsData.css';

export default function GoodsData() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    setLoading(true);
    const response = await fetch('https://dummyjson.com/products?limit=8&skip=60&');
    const { products } = await response.json();
    setItems(products);
    setLoading(false);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h3><em>Products</em></h3>
      {loading ? <div>Loading products...</div> : null}
      <div className="goodsData">
        {items.map(({ id, thumbnail, title, brand, rating, price }) => {
          return (
            <GoodsCard key={id} image={thumbnail} title={title} brand={brand} rating={rating} price={price} />
          );
        })}
      </div>
    </div>
  );
}