import React, { useState, useMemo } from "react";
import {
  MoveLeft,
  Search,
  ShoppingCart,
  Star,
  StarIcon,
  StepBackIcon,
  Zap,
} from "lucide-react";
import { Buton, Input, Navbar } from "@/shared/components/ui";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useBreadcrumbs, {
  type BreadcrumbItem,
  type BreadcrumbsMap,
} from "../hooks/useBreadcumbs";
import { ListPrice } from "./ListPrice";

interface ProductItem {
  id: number;
  name: string;
  category: string;
  image: string;
  isPopular?: boolean;
}

const products: ProductItem[] = [
  {
    id: 2,
    name: "Mobile Legends",
    category: "GAMETOPUP",
    image: "💠",
    isPopular: true,
  },
  {
    id: 3,
    name: "Genshin Impact Genesis",
    category: "GAMETOPUP",

    image: "🌟",
    isPopular: false,
  },
  {
    id: 4,
    name: "Valorant Points",
    category: "GAMETOPUP",

    image: "🎯",
    isPopular: false,
  },
  {
    id: 5,
    name: "Free Fire",
    category: "GAMETOPUP",
    image: "🔥",
    isPopular: false,
  },
];

export const backfn = (breadcumbs: BreadcrumbItem[]) => {
  const leng = breadcumbs.length - 1;
  return { to: breadcumbs[leng - 1]?.to || "/home" };
};

const Product = () => {
  const breadcumbs = useBreadcrumbs();
  const toBack = backfn(breadcumbs);
  const [searchParams] = useSearchParams();
  const kategori = searchParams.get("kategori");
  const provider = searchParams.get("provider");
  const navigate = useNavigate();
  const handleClick = (provider: string, kategori: string) => {
    navigate(`/product?kategori=${kategori}&provider=${provider}`);
  };

  if (kategori && provider)
    return <ListPrice category={kategori} provider={provider} />;
  return (
    <div className="w-full relative top-7">
      <Link
        to={toBack.to}
        className=" text-slate-950 flex items-center m-3 "
      >
        <MoveLeft className="hover:-translate-x-1 transition-transform mx-1 hover:scale-95" /> Kembali
      </Link>
      <div className="grid grid-cols-2 gap-4 m-4 md:grid-cols-4">
        {products.map((v, i) => (
          <div
            className="bg-slate-800 border rounded-md relative z-10 p-5 hover:scale-105 duration-200 transition-all"
            key={i}
            onClick={() => {
              handleClick(v.name, v.category);
            }}
          >
            <div className="-top-0.5 -right-0.5 z-40 text-amber-300 absolute">
              {" "}
              <span className="text-xs flex items-center border bg-slate-900 rounded font-bold">
                <StarIcon size={10} className="mx-1" /> Populer
              </span>
            </div>
            <div className="fill-black bg-white my-3 rounded-md">
              <img
                src={v.image}
                alt={v.name + ".jpg"}
                className="aspect-square"
              />
            </div>
            <h3 className="text-sm text-start text-white font-bold ">
              {v.name}
            </h3>
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Product;
