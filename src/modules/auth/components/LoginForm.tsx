import React, { useState, type ChangeEvent } from "react";
import { useLogin } from "../hooks/UseLogin";
import { Input } from "../../../shared/components/ui/input";
import { Buton } from "../../../shared/components/ui/buton";
import { supabase } from "@/shared/lib/supabase";
import type { AuthError } from "@supabase/supabase-js";
import { Navigate, useNavigate } from "react-router-dom";

interface FormField {
  type: string;
  placeholder: string;
  label: keyof typeof initialValues;
}

const formData: FormField[] = [
  {
    type: "email",
    placeholder: "Contoh : suryacell@gmail.com",
    label: "email",
  },
  { type: "password", placeholder: "Masukan Password", label: "password" },
];

const initialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  const navigate = useNavigate();
  const [formValues, setFomValues] = useState(initialValues);
  const [error, setError] = useState<AuthError | string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, label: string) => {
    setFomValues({ ...formValues, [label]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formValues;
    setIsPending(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      navigate("/home");
    }
    setIsPending(false);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      {formData.map((v, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            {v.label.replaceAll("_", " ")}
          </label>
          <Input
            type={v.type}
            value={formValues[v.label]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOnChange(e, v.label)
            }
            required
            className="w-full px-3 py-2 border-slate-300 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder={v.placeholder || ""}
          />
        </div>
      ))}
      {error && (
        <p className="text-sm text-red-500"> {"email atau password salah"}</p>
      )}
      <Buton type="submit" disabled={isPending} className="w-full">
        {isPending ? "Loading..." : "Login"}
      </Buton>
    </form>
  );
}

export { LoginForm };
