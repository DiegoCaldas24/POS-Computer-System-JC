import { Link } from "react-router-dom";

// --- Inline SVG Icons ---
const Icons = {
  Cpu: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  ),
  ShoppingBag: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  Laptop: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 16 20 0" />
      <path d="M20 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2" />
      <rect width="16" height="12" x="4" y="4" rx="2" />
    </svg>
  ),
  Printer: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  ),
  Wrench: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  Search: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Menu: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  X: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  Zap: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.71 13.14 2.14a.5.5 0 0 1 .86.46L12.57 11.5H20a.5.5 0 0 1 .37.84L11.29 21.86a.5.5 0 0 1-.86-.46L11.43 12.5H4a.5.5 0 0 1-.37-.84Z" />
    </svg>
  ),
  Star: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Shield: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
  Clock: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export default function HomePage (){
    return (
        <div className="animate-in fade-in duration-700">
            <section className="relative pt-25 pb-24 px-4 overflow-hidden bg-gradient-to-b from-sky-50 to-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-100/50 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="text-center md:text-left">
                    <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-sky-200">
                        Líderes en Tecnología
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
                        Soluciones <span className="text-sky-500">Digitales</span> para tu
                        Mundo
                    </h1>
                    <p className="text-slate-500 text-xl mb-10 leading-relaxed">
                        Equípate con lo mejor y deja tus reparaciones en manos de expertos
                        certificados. Innovación y confianza en un solo lugar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/products"
                        className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-sky-200 hover:-translate-y-1"
                        >
                        Comprar Ahora <Icons.ChevronRight />
                        </Link>
                        <Link
                        to="/repairs"
                        className="bg-white hover:bg-slate-50 text-slate-700 px-10 py-4 rounded-2xl font-bold text-lg transition-all border-2 border-slate-100 flex items-center justify-center gap-2 hover:-translate-y-1"
                        >
                        <span className="text-sky-500">
                            <Icons.Wrench />
                        </span>
                        Servicio Técnico
                        </Link>
                    </div>
                    </div>
                    <div className="relative group">
                    <div className="absolute -inset-4 bg-sky-400/10 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                        alt="Desarrollo Tecnológico"
                        className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform transition-transform group-hover:scale-[1.02] duration-500"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                        <div className="bg-sky-100 p-3 rounded-xl text-sky-600">
                        <Icons.Zap />
                        </div>
                        <div>
                        <p className="text-slate-400 text-xs font-bold">
                            Respuesta Técnica
                        </p>
                        <p className="text-slate-900 font-black">Menos de 24hs</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                    <div className="group">
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
                        <span className="text-sky-500 group-hover:text-white transition-colors">
                            <Icons.Star />
                        </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        Originalidad
                        </h3>
                        <p className="text-slate-500 leading-relaxed">
                        Componentes 100% auténticos directo de fábrica.
                        </p>
                    </div>
                    <div className="group">
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
                        <span className="text-sky-500 group-hover:text-white transition-colors">
                            <Icons.Shield />
                        </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        Garantía Real
                        </h3>
                        <p className="text-slate-500 leading-relaxed">
                        Respaldo total en cada compra y cada reparación.
                        </p>
                    </div>
                    <div className="group">
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
                        <span className="text-sky-500 group-hover:text-white transition-colors">
                            <Icons.Clock />
                        </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Rapidez</h3>
                        <p className="text-slate-500 leading-relaxed">
                        Servicio express para que no pierdas tiempo.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}