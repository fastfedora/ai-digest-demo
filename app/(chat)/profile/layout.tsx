import { nanoid } from '@/lib/utils'
import { AI } from '@/lib/chat/actions'
import { WorkflowPage } from "@/components/layout/workflow-page"

export const maxDuration = 60;

export const metadata = {
  title: 'AI Digest Demo: Profile Target'
}

interface ProfileTargetLayoutProps {
  children: React.ReactNode
}

export default async function ProfileTargetLayout({ children }: ProfileTargetLayoutProps) {
  const id = nanoid()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <WorkflowPage step={1}>
        {children}
      </WorkflowPage>
    </AI>
  )
}
