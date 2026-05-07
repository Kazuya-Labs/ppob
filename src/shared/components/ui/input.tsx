import React from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 rounded-md border border-gray-600 py-2",
          className,
        )}
        type={type}
        ref={ref}
        {...props}
      ></input>
    );
  },
);
Input.displayName = "Input";

export {Input}
