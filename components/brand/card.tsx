import React from 'react';
import { Box, Card as CardUi, CardProps } from "@radix-ui/themes";
import { cn } from "@/lib/utils"

// NOTE: If I had more time, I would actually use `bg-primary` here instead of `bg-violet-900`
//       because it is more semantic and works better with themes. [twl 6.Jun.24]

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <CardUi
      className={cn("bg-white border-2 rounded-lg p-4", className)}
      {...props}
    />
  )
};
