import { LockIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductProps {
  categories: {
    name: string;
    premium: boolean;
    icon: string;
  }[];
}

function Product({ categories }: ProductProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-6 px-1">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
          Main Services
        </h3>
        <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
          See All
        </button>
      </div>
      <div className="grid grid-cols-4 gap-y-8 md:gap-x-4">
        {categories.map((cat, i) => (
          <Link to={`/product?kategory=${cat.name.toLowerCase()}`}>
            <button
              key={i}
              className="flex flex-col items-center group transition-transform active:scale-95"
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md group-hover:border-blue-200 transition-all mb-3`}
              >
                {cat?.premium ? <LockIcon /> : cat.icon}
              </div>
              <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-wider text-center px-1">
                {cat.name}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { Product };
