import {
  HistoryIcon,
  HomeIcon,
  InfoIcon,
  Search,
  Star,
  UserIcon,
} from "lucide-react";
import { Product } from "./product";
import React, { useEffect, useEffectEvent, useState } from "react";
import { CardUser, LoyaltyCard } from "./cardUser";
import { Navbar } from "@/shared/components/ui";

export interface HomeProps {
  categories: {
    name: string;
    icon: string;
    premium: boolean;
  }[];
  baners: {
    title: string;
    color: string;
    id: number;
    desc: string;
  }[];
}

interface HeadersUserProps {
  data: { name: string; profil: string };
}

const HeaderUser = ({ data }: HeadersUserProps) => (
  <div className="flex justify-between items-center mb-6 md:mb-10">
    <h1 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
      MyKonter
    </h1>
    <div className="flex items-center gap-3">
      <div className="hidden md:block text-right">
        <p className="text-[10px] font-bold text-slate-400 uppercase">
          Welcome back,
        </p>
        <p className="text-sm font-bold text-slate-800">{data.name}</p>
      </div>
      <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center border border-slate-200">
        <span className="text-sm font-bold text-slate-700">{data.profil}</span>
      </div>
    </div>
  </div>
);

function Home({ baners, categories = [] }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (baners && baners.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === baners.length - 1 ? 0 : prev + 1));
      }, 5000); // 5 detik

      return () => clearInterval(timer);
    }
  }, [baners.length]);

  return (
    <div>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-12 md:gap-8 lg:gap-12">
        <div className="md:col-span-7 lg:col-span-8 pb-24 md:pb-10">
          <div className="bg-white px-6 pt-8 pb-4 border-b border-slate-200 sticky top-0 z-30 md:static md:border-none md:bg-transparent">
            {<HeaderUser data={{ name: "Jhon Doe", profil: "JD" }} />}

            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 w-4 h-4 transition-colors" />
              <input
                type="text"
                placeholder="Cari pulsa, game, atau tagihan..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 shadow-sm rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="px-6 space-y-8 mt-6">
            {/* Banner Slider Otomatis */}
            <div className="relative overflow-hidden rounded-3xl h-44 md:h-60 shadow-lg shadow-blue-100">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {baners.map((b, i) => (
                  <div
                    key={i}
                    className={`min-w-full ${b.color} p-8 md:p-12 flex flex-col justify-center text-white relative`}
                  >
                    <div className="relative z-10">
                      <h4 className="font-bold text-xl md:text-3xl mb-1">
                        {b.title}
                      </h4>
                      <p className="text-white/80 text-sm md:text-base">
                        {b.desc}
                      </p>
                    </div>
                    <div className="absolute right-[-10%] top-[-20%] text-white/10 font-serif italic text-8xl md:text-9xl select-none">
                      Sale
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {/* {baners.map((_, i) => {
                  console.log("🚀 ~ Home ~ _:", _);
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 transition-all rounded-full ${currentSlide === i ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
                    />
                  );
                })} */}
              </div>
            </div>

            {/* PPOB Grid */}
            <Product categories={categories} />
          </div>
        </div>

        {/* KOLOM KANAN: Wallet & Stats (Span 5) - Sticky on Desktop */}
        <div className="md:col-span-5 lg:col-span-4 px-6 md:pt-10 space-y-6">
          {/* Wallet Section (Psychological Trigger) */}
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-300 relative overflow-hidden md:sticky md:top-10">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Star className="w-24 h-24 rotate-12" />
            </div>

            <CardUser
              data={{
                saldo: 1565,
                totalSpent: 42000000,
                point: 50765,
                role: "master",
              }}
            />
          </div>

          {/* Desktop Only Info Card */}
          <LoyaltyCard selisih={400000} />
        </div>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      {<Navbar />}
    </div>
  );
}

export default Home;