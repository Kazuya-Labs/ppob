import React from "react";
import {
  MoveLeft,
  Share2,
  Download,
  CheckCircle2,
  Copy,
  Receipt,
} from "lucide-react";
import { Link } from "react-router-dom";

interface DetailRiwayatProps {
  data: {
    trxId: string;
    userId: string;
    target: string;
    item: string;
    price: number;
    date: string;
    payment: string;
    status: string;
  };
}

export const DetailRiwayat = ({ data }: DetailRiwayatProps) => {
  // Data dummy untuk simulasi

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("ID disalin!");
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-10">
      {/* Header Navigasi */}
      <div className="p-4 bg-white flex items-center justify-between border-b border-slate-200">
        {/* <Link to={-1} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
          <MoveLeft size={20} />
        </Link> */}
        <h1 className="font-bold text-slate-800">Detail Transaksi</h1>
        <div className="flex gap-2">
          <button className="p-2 text-slate-600">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-6 px-4">
        {/* Kontainer Struk */}
        <div className="relative bg-white shadow-xl rounded-t-xl overflow-hidden">
          {/* Bagian Atas: Status */}
          <div className="bg-slate-900 p-6 text-center">
            <div className="inline-flex p-3 bg-blue-500/20 rounded-full mb-3">
              <CheckCircle2 size={32} className="text-blue-400" />
            </div>
            <h2 className="text-white font-bold text-lg">
              Transaksi {data.status}
            </h2>
            <p className="text-slate-400 text-xs mt-1">{data.date}</p>
          </div>

          {/* Isi Struk */}
          <div className="p-6 space-y-6">
            {/* Info Utama */}
            <div className="text-center border-b border-dashed border-slate-200 pb-6">
              <p className="text-slate-500 text-sm mb-1 font-medium">
                Total Pembayaran
              </p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                Rp {data.price.toLocaleString("id-ID")}
              </h3>
            </div>

            {/* Rincian Detail */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-slate-500 text-sm font-medium">Item</span>
                <span className="text-slate-900 text-sm font-bold text-right">
                  {data.item}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-slate-500 text-sm font-medium">
                  Tujuan
                </span>
                <span className="text-slate-900 text-sm font-bold text-right">
                  {data.target}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-slate-500 text-sm font-medium">
                  Metode
                </span>
                <span className="text-slate-900 text-sm font-bold">
                  {data.payment}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Nomor Transaksi
                    </p>
                    <p className="text-xs font-mono text-slate-700">
                      {data.trxId}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(data.trxId)}
                    className="text-blue-600 p-2 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Struk Internal */}
            <div className="flex flex-col items-center gap-2 pt-4 opacity-50">
              <Receipt size={24} className="text-slate-400" />
              <p className="text-[10px] font-medium text-slate-500 italic">
                Terima kasih telah menggunakan layanan kami
              </p>
            </div>
          </div>

          {/* Efek Gerigi Gergaji (Sawtooth) di bagian bawah */}
          <div
            className="h-4 w-full bg-white"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 100%, 95% 70%, 90% 100%, 85% 70%, 80% 100%, 75% 70%, 70% 100%, 65% 70%, 60% 100%, 55% 70%, 50% 100%, 45% 70%, 40% 100%, 35% 70%, 30% 100%, 25% 70%, 20% 100%, 15% 70%, 10% 100%, 5% 70%, 0% 100%)",
            }}
          ></div>
        </div>

        {/* Action Button Bawah Struk */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
            <Download size={18} /> Simpan
          </button>
          <button className="flex items-center justify-center gap-2 bg-blue-600 py-3 rounded-xl font-bold text-white hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/30">
            Beli Lagi
          </button>
        </div>
      </div>
    </div>
  );
};
