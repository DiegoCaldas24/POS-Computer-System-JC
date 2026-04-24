import React, { useState } from 'react';

// --- Interfaces ---
interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  { id: 1, name: "Procesador AMD Ryzen 9", price: "2,450", category: "Destacados", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop" },
  { id: 2, name: "Tarjeta de Video RTX 4080", price: "4,800", category: "Destacados", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop" },
  { id: 3, name: "Memoria RAM DDR5 32GB", price: "650", category: "Destacados", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop" },
  { id: 4, name: "SSD M.2 NVMe 2TB", price: "820", category: "Categoria 1", image: "https://images.unsplash.com/photo-1597872200370-419ced2610f2?w=400&h=300&fit=crop" },
  { id: 5, name: "Placa Madre Z790 WiFi", price: "1,200", category: "Categoria 1", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" },
  { id: 6, name: "Fuente de Poder 850W Gold", price: "550", category: "Categoria 1", image: "https://images.unsplash.com/photo-1587202372173-677610664f33?w=400&h=300&fit=crop" },
];

// --- Iconos SVG Inline (Sin dependencias externas) ---

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const IconCart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const IconChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const IconChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const IconPlaceholder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
);

// --- Componentes ---

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white border border-transparent hover:border-blue-200 transition-all flex flex-col group">
    <div className="relative aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=No+Image";
        }}
      />
    </div>
    <div className="p-4 flex flex-col gap-1">
      <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
      <p className="text-gray-900 font-bold">S/ {product.price}</p>
      <button className="mt-3 w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-2 rounded-sm transition-colors text-xs uppercase">
        Ver producto
      </button>
    </div>
  </div>
);

const SidebarItem = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center bg-gray-200/40 border border-gray-100 p-8 min-h-[220px] group cursor-pointer hover:bg-gray-200/60 transition-colors">
    <div className="mb-4">
      <IconPlaceholder />
    </div>
    <span className="text-xs font-bold text-gray-600 text-center leading-tight">
      {title}
    </span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-md font-bold text-gray-700 tracking-tight">{title}</h2>
    <div className="flex gap-1">
      <button className="p-1 text-gray-300 hover:text-gray-500 transition-colors">
        <IconChevronLeft />
      </button>
      <button className="p-1 text-gray-600 hover:text-gray-900 transition-colors">
        <IconChevronRight />
      </button>
    </div>
  </div>
);

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#dcfafe] font-sans text-gray-900">
      
      {/* Header Principal */}
      <header className="bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          
          {/* Logo Estilo Imagen */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex flex-col items-center border-2 border-blue-900 p-1 px-2 rounded-sm bg-white">
              <div className="flex gap-1 text-blue-900 mb-0.5">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <span className="text-[9px] font-black text-blue-900 leading-none">COMPUTER</span>
              <span className="text-[7px] font-bold text-blue-800">SYSTEM IC</span>
            </div>
            <button className="text-gray-500 hover:text-blue-600">
              <IconMenu />
            </button>
          </div>

          {/* Buscador */}
          <div className="flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Buscar producto"
              className="w-full border border-gray-300 rounded-sm py-1.5 pl-4 pr-10 focus:outline-none focus:border-blue-400 text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1.5 text-gray-400">
              <IconSearch />
            </div>
          </div>

          {/* Cuenta y Carrito */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">
              <div className="bg-blue-50 p-1.5 rounded-full">
                <IconUser />
              </div>
              <span className="text-xs font-bold">Mi cuenta</span>
            </div>
            <button className="text-[#0ea5e9] hover:scale-105 transition-transform">
              <IconCart />
            </button>
          </div>
        </div>

        {/* NavBar Azul */}
        <nav className="bg-[#bfdbfe] border-t border-blue-200">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-9">
            <div className="flex items-center gap-8 w-full justify-around md:justify-start">
              <button className="flex items-center gap-1 text-blue-900 font-bold text-[11px] uppercase tracking-wider hover:opacity-70">
                Marcas 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <button className="text-blue-900 font-bold text-[11px] uppercase tracking-wider hover:opacity-70">
                Lo mas vendido
              </button>
              <button className="text-blue-900 font-bold text-[11px] uppercase tracking-wider hover:opacity-70">
                Recomendaciones
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Layout */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar */}
          <aside className="lg:w-48 shrink-0 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SidebarItem title="Soporte y reparaciones" />
              <span className="text-[11px] font-bold text-gray-600 uppercase">Soporte y reparaciones</span>
            </div>
            <div className="flex flex-col gap-2">
              <SidebarItem title="Más vendido" />
              <span className="text-[11px] font-bold text-gray-600 uppercase">Más vendido</span>
            </div>
          </aside>

          {/* Grid de Productos */}
          <div className="flex-1">
            
            {/* Destacados */}
            <section className="mb-12">
              <SectionHeader title="Productos Destacados" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {PRODUCTS.filter(p => p.category === "Destacados").map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>

            {/* Categoría 1 */}
            <section>
              <SectionHeader title="Categoria 1" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {PRODUCTS.filter(p => p.category === "Categoria 1").map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="bg-white/50 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
            Computer System IC - 2024
          </p>
        </div>
      </footer>
    </div>
  );
}