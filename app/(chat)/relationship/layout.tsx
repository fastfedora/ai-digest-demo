import { nanoid } from '@/lib/utils'
import { AI } from '@/lib/chat/actions'
import { WorkflowPage } from "@/components/layout/workflow-page"

export const metadata = {
  title: 'AI Digest Demo: Build Relationship'
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
