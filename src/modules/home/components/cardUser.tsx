import { CoinsIcon, HistoryIcon, StarIcon, TrendingUpIcon } from "lucide-react";
import type { CardUserTypes } from "../types";
import { convertToIdr } from "@/shared/lib/utils";

interface loyaltyCard {
  selisih: number | string;
}
function LoyaltyCard({ selisih }: loyaltyCard) {
  return (
    <div className="hidden md:block bg-blue-50 border border-blue-100 p-6 rounded-[2rem]">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <StarIcon className="w-4 h-4" />
        </div>
        <h5 className="font-bold text-slate-800 text-sm">Loyalty Benefit</h5>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed">
        Anda kurang <b>{selisih}</b> transaksi lagi untuk naik ke level{" "}
        <b>Platinum Member</b> dan mendapatkan cashback 2% tiap transaksi.
      </p>
    </div>
  );
}

function CardUser({ data }: CardUserTypes) {
  return (
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <StarIcon className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">
              {data.role}
            </span>
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Available Balance
          </p>
        </div>
        <div className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold">Active</span>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-8 tracking-tight">
        {" "}
        {convertToIdr(data.saldo)}
      </h2>

      {/* Stats Box (Psychology: Achievement & Points) */}
      <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/10">
        <div>
          <p className="text-white/40 flex text-[9px] items-center  uppercase font-bold tracking-wider mb-1">
            My Points <CoinsIcon className="w-3 h-3 mx-1.5 text-yellow-500"/>
          </p>
          <p className="text-lg font-bold text-yellow-400">
            {data.point}{" "}
            <span className="text-[10px] text-white/60 font-medium">Pts</span>
          </p>
        </div>
        <div>
          <p className="text-white/40 text-[9px] uppercase font-bold tracking-wider mb-1 flex ">
            Total Spent <TrendingUpIcon className="w-3 h-3 mx-1.5 text-green-400" />
          </p>
          <div className="flex items-center gap-1.5">
            <p className="text-lg font-bold">{convertToIdr(data.totalSpent)}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-white text-slate-900 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-[0.98] shadow-lg shadow-white/5">
          Deposit
        </button>
        <button className="flex-[0.5] bg-slate-800 text-white p-3.5 rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-all flex justify-center items-center">
          <HistoryIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export { LoyaltyCard, CardUser };
