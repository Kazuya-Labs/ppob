import { Home } from "@/modules/home";

interface Categories {
  name: string;
  icon: string;
  premium: boolean;
}

interface Baners {
  title: string;
  color: string;
  id: number;
  desc: string;
}

function HomePage() {
  const baners: Baners[] = [
    {
      id: 1,
      color: "bg-blue-600",
      title: "Flash Sale Game",
      desc: "Diskon 20% khusus hari ini",
    },
    {
      id: 2,
      color: "bg-slate-800",
      title: "PLN & PDAM",
      desc: "Tanpa biaya admin s/d akhir bulan",
    },
    {
      id: 3,
      color: "bg-indigo-700",
      title: "Member Gold",
      desc: "Dapatkan harga khusus reseller",
    },
  ];

  const categories: Categories[] = [
    { name: "Pulsa", icon: "📱", premium: false },
    { name: "Data", icon: "🌐", premium: false },
    { name: "PLN", icon: "⚡", premium: false },
    { name: "Topup", icon: "🎮", premium: false },
    { name: "BPJS", icon: "🏥", premium: false },
    { name: "PDAM", icon: "💧", premium: false },
    { name: "E-Wallet", icon: "💳", premium: false },
    { name: "Kupon ", icon: "🎟", premium: true },
    { name: "Convert Paypal", icon: "⇄", premium: false },
    { name: "Custom Qris", icon: "⛆", premium: false },
    { name: "Lainnya", icon: "📂", premium: false },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <Home categories={categories} baners={baners} />
    </div>
  );
}

export default HomePage;
