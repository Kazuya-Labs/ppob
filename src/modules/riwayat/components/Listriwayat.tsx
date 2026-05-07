import React, { useEffect, useState, useMemo } from "react";
import { Clock, ChevronRight, ReceiptText, Filter } from "lucide-react";
import { Link, Navigate } from "react-router-dom";

// Mock data dengan timestamp yang bervariasi agar filter terlihat bekerja
const rawData = [
  {
    id: "TRX-001",
    item: "5 Diamond (ML)",
    amount: 1500,
    date: "1 jam lalu",
    timestamp: Date.now() - 3600000,
    status: "Selesai",
  },
  {
    id: "TRX-002",
    item: "Weekly Pass (ML)",
    amount: 29000,
    date: "2 hari lalu",
    timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
    status: "Selesai",
  },
  {
    id: "TRX-003",
    item: "100 Diamond (FF)",
    amount: 15000,
    date: "10 hari lalu",
    timestamp: Date.now() - 10 * 24 * 60 * 60 * 1000,
    status: "gagal",
  },
  {
    id: "TRX-004",
    item: "Welkin Moon (Genshin)",
    amount: 79000,
    date: "40 hari lalu",
    timestamp: Date.now() - 40 * 24 * 60 * 60 * 1000,
    status: "pending",
  },
];

const ListRiwayat = () => {
  const [filterDays, setFilterDays] = useState("all");

  // Perbaikan Logika Filter: Menggunakan useMemo agar lebih efisien
  const filteredData = useMemo(() => {
    if (filterDays === "all") return rawData;

    const threshold = Date.now() - parseInt(filterDays) * 24 * 60 * 60 * 1000;
    return rawData.filter((item) => item.timestamp >= threshold);
  }, [filterDays]);

  return (
    <div className="w-full min-h-screen bg-slate-50 pb-10">
      <div className="p-6 bg-white border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Riwayat Transaksi
        </h1>
        <p className="text-sm text-slate-500 text-balance">
          Pantau semua aktivitas pembelian Anda
        </p>
      </div>

      {/* UI Filter yang lebih Modern & Bersih */}
      <div className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur-md px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
          <Filter size={16} className="text-blue-600" />
          <span>Filter Periode</span>
        </div>

        <select
          value={filterDays}
          onChange={(e) => setFilterDays(e.target.value)}
          className="bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer shadow-sm"
        >
          <option value="7">7 Hari Terakhir</option>
          <option value="30">30 Hari Terakhir</option>
          <option value="90">90 Hari Terakhir</option>
          <option value="all">Semua Waktu</option>
        </select>
      </div>

      <div className="flex flex-col gap-3 px-4 mt-2">
        {filteredData.length > 0 ? (
          filteredData.map((v) => (
            <Link
              to={`/riwayat/detail?id=${v.id}&amount=${v.amount}`}
              key={v.id}
              className="group relative bg-white rounded-2xl border border-slate-200 p-4 transition-all hover:border-blue-300 hover:shadow-lg active:scale-[0.99]"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="p-2.5 bg-slate-100 rounded-xl text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <ReceiptText size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">
                      {v.item}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                      <span className="uppercase">{v.id}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {v.date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600 text-base">
                    Rp {v.amount.toLocaleString("id-ID")}
                  </p>
                  <span
                    className={`inline-block px-2 py-0.5 mt-1 bg-green-50 text-${v.status.toLowerCase() == "pending" ? "gray" : v.status.toLowerCase() == "gagal" ? "red" : "green"}-600 text-[10px] font-bold rounded-full border border-green-100`}
                  >
                    {v.status}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center py-20 text-slate-400 text-sm">
            Tidak ada transaksi ditemukan
          </div>
        )}
      </div>
    </div>
  );
};

export { ListRiwayat };
