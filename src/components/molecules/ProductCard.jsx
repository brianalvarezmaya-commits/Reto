import { useCartStore } from '../../store/useCartStore';

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between">
      <img src={product.image} alt={product.title} className="h-48 w-full object-cover rounded-md mb-4" />
      <div>
        <h3 className="font-bold text-lg">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-blue-600 font-bold text-xl">${product.price.toFixed(2)}</p>
      </div>
      <button 
        onClick={() => addToCart(product)}
        className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
      >
        Añadir al carrito
      </button>
    </div>
  );
}