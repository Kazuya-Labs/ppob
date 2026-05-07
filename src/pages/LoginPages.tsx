import React from "react";
import { LoginForm } from "@/modules/auth";

function LoginPages() {
  return (
    <div className="h-full flex justify-center items-center bg-slate-50 font-sans">
      <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-slate-800">
            MyKonter
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Login untuk memulai layanan
          </p>
        </div>

        <LoginForm />

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <span className="text-sm text-slate-600">
            Belum punya akun?{" "}
            <a
              href="/register"
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Masuk di sini
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPages;
