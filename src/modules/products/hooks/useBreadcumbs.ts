import { useLocation, type Location } from "react-router-dom";
// 1. Definisikan tipe untuk mapping breadcrumbs
export interface BreadcrumbsMap {
  [key: string]: string;
}

const breadCrumbsMap: BreadcrumbsMap = {
  dashboard: "Beranda",
  users: "Pengguna",
  // tambahkan pemetaan lainnya di sini
};

// 2. Definisikan tipe hasil return (opsional tapi disarankan)
export interface BreadcrumbItem {
  name: string;
  to: string;
  isLast: boolean;
}
const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location: Location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x !== "");

  return pathnames.map((v, i) => {
    return {
      name: breadCrumbsMap[v] || decodeURIComponent(v).replace(/-/g, " "),
      to: `/${pathnames.slice(0, i + 1).join("/")}`,
      isLast: i === pathnames.length - 1,
    };
  });
};

export default useBreadcrumbs;
