import { useProducts } from "../../../hooks/useProducts";
import { Icons } from "../../../components/Icons";

export function ProductCard() {
  const products = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-sky-200 transition-all group shadow-sm hover:shadow-xl"
        >
          <div className="relative h-64 overflow-hidden p-4 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-35px h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
              {product.name}
            </h3>
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest bg-sky-50 px-2 py-1 rounded">
                {product.category}
              </span>
              <p className="text-2xl font-black text-slate-900">
                S/ {product.price.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <button className="w-full bg-slate-900 hover:bg-sky-600 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
                <Icons.ShoppingBag />
                Ver Detalles
              </button>
              <button className="w-full bg-slate-900 hover:bg-sky-600 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
                <Icons.Star />
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
