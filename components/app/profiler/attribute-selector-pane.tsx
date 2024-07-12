"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/brand/button"
import { CheckboxOption } from "@/components/ui/checkbox-option"

interface AttributeSelectorPaneProps {
  className: string
  attributes: string[]
  onSubmit: (selectedAttributes: string[]) => void
}

export function AttributeSelectorPane({
  className,
  attributes,
  onSubmit,
}: AttributeSelectorPaneProps) {
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const handleAttributeChange = (attribute: string) => {
    if (selectedAttributes.includes(attribute)) {
      setSelectedAttributes(selectedAttributes.filter((item) => item !== attribute));
    } else {
      setSelectedAttributes([...selectedAttributes, attribute]);
    }
  };

  return (
    <>
      <div className={cn("grid md:grid-cols-2 gap-2 overflow-auto", className)}>
        {attributes.map((attribute) => (
          <CheckboxOption
            key={attribute}
            label={attribute}
            checked={selectedAttributes.includes(attribute)}
            onCheckedChange={() => handleAttributeChange(attribute)}
            defaultChecked
          />
        ))}
      </div>

      <Button className="mt-6" onClick={() => onSubmit(selectedAttributes)}>Analyze</Button>
    </>
  )
}

