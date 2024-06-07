import React from 'react';
import { Button as ButtonUi, ButtonProps } from '@/components/ui/button';
import { cn } from "@/lib/utils"

// NOTE: If I had more time, I would actually use `bg-primary` here instead of `bg-violet-900`
//       because it is more semantic and works better with themes. [twl 6.Jun.24]

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <ButtonUi
      className={cn("bg-violet-900 text-white font-bold", className)}
      {...props}
    />
  )
};
