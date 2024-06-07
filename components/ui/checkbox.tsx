"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// NOTE: Normally I would apply the style in the `components/brand` hierarchy, but I'm trying to do
//       this quickly. I added the `button` in the `brand` folder as an example. This keeps the
//       style concern separate from the functional concern. [twl 6.Jun.24]

const checkboxVariants = cva(
  "bg-white size-6 rounded-lg flex items-center justify-center border-gray-600 border-[1px]",
)

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxVariants>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants(), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="size-6 rounded-lg  bg-violet-900 text-white">
      <CheckIcon className="size-6 text-violet-200" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
