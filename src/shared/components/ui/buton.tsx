import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Buton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-md font-medium transition-all mt-2",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Buton.displayName = "button";
export { Buton };
