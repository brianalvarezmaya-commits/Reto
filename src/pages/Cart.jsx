import { useCartStore } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cart.length === 0) return <h2 className="text-2xl text-center mt-10">Tu carrito musical está vacío 🎸</h2>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-6">Resumen de Compra</h2>
      <div className="divide-y">
        {cart.map(item => (
          <div key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-600">Cant: {item.quantity} x ${item.price}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Quitar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        <button 
          onClick={() => { alert("¡Pedido confirmado! Preparando el envío."); clearCart(); navigate('/'); }}
          className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 font-bold"
        >
          Confirmar y Pagar
        </button>
      </div>
    </div>
  );
}