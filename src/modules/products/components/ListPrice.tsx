import React, { useState, useRef, useEffect, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  ContactIcon,
  List,
  MoveLeftIcon,
  CheckCircle2,
  AlertCircle,
  ShoppingCart,
  CoinsIcon,
  TrendingUp,
} from "lucide-react";
import { Input, Navbar } from "@/shared/components/ui";
import { convertToIdr } from "@/shared/lib/utils";

const FadeInItem = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
};

export const ListPrice = ({
  category,
  provider,
}: {
  category: string;
  provider: string;
}) => {
  const [idClient, setIdClient] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Reset konfirmasi jika ganti produk
  const handleSelectProduct = (product: any) => {
    setSelectedProduct(product);
    setIsConfirmed(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 pb-32 md:mt-10">
      <Link
        to="/product"
        className="inline-flex items-center m-4 text-slate-950 font-semibold group"
      >
        <MoveLeftIcon className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        Kembali
      </Link>

      <main className="flex-1 px-4">
        {/* Input ID Pelanggan */}
        <div className="sticky mb-6 top-4 z-20 bg-slate-50">
          <div className="absolute inset-y-0 left-3 flex items-center text-slate-400">
            <ContactIcon size={18} />
          </div>
          <Input
            className={`pl-10 w-full shadow-md border-2 transition-all ${idClient ? "border-blue-500 focus:ring-blue-200" : "border-slate-200"}`}
            placeholder="Masukkan ID/Nomor Telepon"
            value={idClient}
            onChange={(e) => setIdClient(e.target.value)}
          />
        </div>

        {/* List Produk */}
        <div className="flex flex-col gap-3">
          {Array.from({ length: 10 }).map((_, i) => {
            const product = {
              code: `SKU-${i}`,
              name: `${(i + 1) * 5} Diamond`,
              price: 3000 * (i + 1),
              desc: "Proses Cepat 2-3 Menit Langsung Masuk & 100% Jaminan Legal",
            };
            return (
              <FadeInItem key={product.code}>
                <div
                  onClick={() => handleSelectProduct(product)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${selectedProduct?.code === product.code ? "border-blue-600 bg-blue-50" : "border-white bg-white shadow-sm"}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-800">{product.name}</h3>
                    <span className="font-black text-blue-600">
                      Rp {convertToIdr(product.price)}
                    </span>
                  </div>
                  <div className="text-xs p-1 border-gray-500">
                    <span>{product.desc || ""}</span>
                  </div>
                </div>
              </FadeInItem>
            );
          })}
        </div>
      </main>

      {/* --- Detail Transaksi & Pembayaran (Sticky Bottom) --- */}
      {selectedProduct && (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
          {/* Overlay sederhana */}
          <div className="bg-white border-t border-slate-200 shadow-[0_-10px_25px_rgba(0,0,0,0.1)] p-6 rounded-t-[2.5rem]">
            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <ShoppingCart size={20} className="text-blue-600" /> Detail
                  Pembelian
                </h4>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-slate-400 text-sm"
                >
                  Tutup
                </button>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Produk</span>
                  <span className="font-bold text-slate-800">
                    {selectedProduct.name}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">ID Tujuan</span>
                  <span className="font-mono font-bold text-blue-600">
                    {idClient || "-"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Exp </span>
                  <span className="font-mono font-bold text-green-600 flex items-center">
                    +{"150" || "-"} <TrendingUp size={16} className="mx-1 text-green-600" />
                  </span>
                </div>
                <div className=" text-sm">
                  <span className="text-slate-500">Deskrpsi </span>
                  <br />
                  <div className="font-mono font-bold text-slate-900 border p-2 text-xs my-2">
                    {selectedProduct.desc || "-"}
                  </div>
                </div>
              </div>

              {/* Checkbox Konfirmasi dengan Validasi Warna */}
              <label
                className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all mb-6 ${idClient ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
              >
                <input
                  type="checkbox"
                  disabled={!idClient}
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="w-5 h-5 accent-green-600"
                />
                <div className="flex items-center gap-2">
                  {idClient ? (
                    <CheckCircle2 size={18} className="text-green-600" />
                  ) : (
                    <AlertCircle size={18} className="text-red-600" />
                  )}
                  <span
                    className={`text-xs font-bold ${idClient ? "text-green-700" : "text-red-600"}`}
                  >
                    {idClient
                      ? "Saya sudah cek nomor pelanggan"
                      : "Mohon isi nomor pelanggan terlebih dahulu"}
                  </span>
                </div>
              </label>

              {/* Tombol Bayar */}
              <button
                disabled={!isConfirmed || !idClient}
                className={`w-full py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 ${isConfirmed && idClient ? "bg-green-600 text-white shadow-lg shadow-blue-200 active:scale-95" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
              >
                Bayar Rp {convertToIdr(selectedProduct.price)}
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar />
    </div>
  );
};
