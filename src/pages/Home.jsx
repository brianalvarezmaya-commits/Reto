import { useState } from 'react';
import { productsData } from '../mockdata/products';
import ProductCard from '../components/molecules/ProductCard';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const filteredProducts = productsData.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Catálogo de Instrumentos</h1>
        <input 
          type="text" 
          placeholder="Buscar guitarras, pedales de fuzz, amplificadores..." 
          className="w-full p-3 border rounded-lg shadow-sm"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-gray-500">No se encontraron instrumentos.</p>
        )}
      </div>

      {/* Botones de paginación */}
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button 
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={indexOfLastProduct >= filteredProducts.length}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}