import { HistoryIcon, HomeIcon,  PlusCircleIcon,  UserIcon, type LucideIcon } from "lucide-react";

export interface NavbarProps {
  data?: {
    name: string;
    link: string;
    icon: LucideIcon;
  }[];
}

const defaultData = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/home",
  },
    {
    name: "Deposit",
    icon: PlusCircleIcon,
    link: "/deposit",
  },
  {
    name: "History",
    icon: HistoryIcon,
    link: "/history",
  },
  {
    name: "Akun",
    icon: UserIcon,
    link: "/akun",
  },
 
];
function Navbar({ data = defaultData }: NavbarProps = {}) {
  return (
    <nav
      className="
      fixed bottom-0 left-0 right-0 z-20 
      bg-white/80 backdrop-blur-xl border-t border-slate-200 
      py-4 px-12 rounded-t-[2.5rem] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)]
      
      md:top-0 md:bottom-auto md:rounded-none md:border-t-0 md:border-b md:px-24 md:py-6
      
      flex justify-between items-center
    "
    >
      {/* Logo atau Judul (Opsional untuk Desktop) */}
      <div className="hidden md:block font-bold text-slate-800 text-xl">
        MyLogo
      </div>

      <div className="flex w-full md:w-auto justify-between md:gap-8 items-center">
        {data.map((v, i) => {
          const Icon = v.icon;
          return (
            <a
              href={v.link}
              key={i + v.name}
              className="text-slate-800 flex flex-col md:flex-row items-center gap-1 hover:scale-105 transition-transform"
            >
              {/* Icon: Muncul di mobile, hilang di desktop (md:hidden) */}
              <div className="md:hidden">
                <Icon size={24} />
              </div>

              {/* Teks: Kecil di mobile, normal di desktop */}
              <span className="text-[8px] md:text-sm font-black md:font-medium uppercase md:capitalize tracking-widest md:tracking-normal">
                {v.name}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export { Navbar };
