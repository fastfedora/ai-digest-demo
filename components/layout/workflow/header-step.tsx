import { cn } from "@/lib/utils";

export function HeaderStep({ label, step, currentStep }: { label: string; step: number; currentStep: number; }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-black">
        {step}
      </div>
      <span
        className={cn("text-sm font-bold", step === currentStep && "border-b-2 border-white")}
      >{label}</span>
    </div>
  );
}
