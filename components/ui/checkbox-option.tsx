"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const checkboxVariants = cva(
  "bg-white size-6 rounded-lg flex items-center justify-center border-gray-600 border-[1px]",
)

const CheckboxOption = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxVariants> & {
      label: string;
      checkboxClassName?: string;
      labelClassName?: string;
    }
>(({ id, className, label, checkboxClassName, labelClassName, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <Checkbox {...props} id={id ?? label} className={checkboxClassName} />
    <Label
      htmlFor={id ?? label}
      className={cn("text-gray-700 dark:text-gray-300", labelClassName)}
    >
      {label}
    </Label>
  </div>
))

CheckboxOption.displayName = 'CheckboxOption';

export { CheckboxOption }
