import { createBrowserRouter } from "react-router-dom";
import { LoginPages, RegisterPage, HomePage } from "@/pages";
import { Product } from "@/modules/products";
import { DetailRiwayat, ListRiwayat } from "@/modules/riwayat";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPages /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/", element: <h1>tes</h1> },
  { path: "/home", element: <HomePage /> },
  { path: "/product", element: <Product /> },
  { path: "/product/:kategori", element: <Product /> },
  { path: "/riwayat", element: <ListRiwayat /> },
   { path: "/riwayat/:detail", element: <DetailRiwayat /> },
]);
