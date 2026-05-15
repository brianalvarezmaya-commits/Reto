import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-zinc-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter">
          Compra<span className="text-red-500">Roll</span>
        </Link>
        <Link to="/cart" className="font-bold hover:text-red-400 transition-colors">
          🛒 Carrito <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-1">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}