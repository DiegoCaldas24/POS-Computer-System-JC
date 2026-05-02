import { useState } from "react";
import { PRODUCTS } from "../data/data";
import {Icons} from "../components/Icons"

// --- Page: Products ---
export default function ProductsPage() {
  const [filter, setFilter] = useState("Todos");
  const categories = ["Todos", ...new Set(PRODUCTS.map((p) => p.category))];

  const filteredProducts =
    filter === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="pt-25 pb-24 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight italic">
              CATÁLOGO <span className="text-sky-500">PRO</span>
            </h1>
            <p className="text-slate-500 text-lg">
              Lo mejor en hardware seleccionado por expertos.
            </p>
          </div>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Icons.Search />
            </span>
            <input
              type="text"
              placeholder="Buscar modelos..."
              className="bg-white border border-slate-200 rounded-2xl pl-12 pr-6 py-4 text-slate-700 w-full md:w-80 shadow-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all"
            />
          </div>
        </div>

        {/*Category filters*/ }
        <div className="flex overflow-x-auto pb-6 gap-3 mb-12 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl whitespace-nowrap transition-all font-bold shadow-sm ${
                filter === cat
                  ? "bg-sky-500 text-white translate-y-[-2px] shadow-lg shadow-sky-200"
                  : "bg-white text-slate-500 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/*Product cards*/ }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-sky-200 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest bg-sky-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <p className="text-2xl font-black text-slate-900">
                    ${product.price}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {product.description}
                </p>
                <button className="w-full bg-slate-900 hover:bg-sky-600 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
                  <Icons.ShoppingBag />
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};