import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useLogin } from "../hooks/UseLogin";
import { Input, Buton } from "@/shared/components/ui";

interface FormField {
  type: string;
  placeholder: string;
  label: keyof typeof initialValues;
}

const formFields: FormField[] = [
  { type: "text", placeholder: "Masukan Name", label: "name" },
  { type: "text", placeholder: "Masukan Username", label: "username" },
  {
    type: "email",
    placeholder: "Contoh : suryacell@gmail.com",
    label: "email",
  },
  { type: "password", placeholder: "Masukan Password", label: "password" },
  {
    type: "password",
    placeholder: "Konfirmasi Password",
    label: "confirm_password",
  },
];

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

function RegisterForm() {
  const [formValues, setFormValues] = useState(initialValues);

  const { mutate: login, isPending, error } = useLogin();
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
  };

  // 4. Gunakan FormEvent untuk handle submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Pastikan data yang dikirim sesuai dengan yang diharapkan hooks useLogin
    login({ email: formValues.email, password: formValues.password });
  };

  // Di dalam RegisterForm.tsx, pada bagian return:
  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <div className="space-y-4">
        {formFields.map((v, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              {v.label.replaceAll("_", " ")}
            </label>
            <Input
              type={v.type}
              value={formValues[v.label]}
              onChange={(e: any) => handleOnchange(e, v.label)}
              required
              className="w-full px-3 py-2 border-slate-300 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder={v.placeholder}
            />
          </div>
        ))}
      </div>

      {error && (
        <div className="p-3 bg-red-50 rounded-md">
          <p className="text-xs text-red-600 font-medium">{String(error)}</p>
        </div>
      )}

      <Buton
        type="submit"
        disabled={isPending}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-md font-medium transition-all mt-2"
      >
        {isPending ? "Memproses..." : "Daftar Sekarang"}
      </Buton>
    </form>
  );
}
export { RegisterForm };
