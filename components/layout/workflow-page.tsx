import { WorkflowHeader } from "./workflow/header";

interface WorkflowPageProps {
  children: React.ReactNode
  step: number
}

export const WorkflowPage = ({ children, step }: WorkflowPageProps)  => (
  <div className="flex flex-col h-full min-w-full">
    <WorkflowHeader currentStep={step} />

    {children}
  </div>
)
