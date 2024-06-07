'use client'

import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation'
import { HeaderStep } from "./header-step";
import { Button } from "@/components/brand/button";

const routes = ['/profile', '/relationship', '/persuade'];

export function WorkflowHeader({ currentStep }: { currentStep: number }) {
  const router = useRouter()

  return (
    <div className="bg-[rgb(70,58,203)] text-white py-4 px-6 flex justify-between">
      <Button
        className={cn("bg-violet-300 text-black", currentStep === 1 && "invisible")}
        onClick={() => router.push(routes[currentStep - 2])}
      >
        &lt; Previous
      </Button>

      <div className="flex items-center justify-center space-x-8">
        <HeaderStep step={1} label="Profile Target" currentStep={currentStep} />
        <HeaderStep step={2} label="Build Relationship" currentStep={currentStep} />
        <HeaderStep step={3} label="Persuade Target" currentStep={currentStep} />
      </div>

      <Button
        className={cn("bg-violet-300 text-black", currentStep > 2 && "invisible")}
        onClick={() => router.push(routes[currentStep])}
      >
        Next &gt;
      </Button>
    </div>
  )
}
