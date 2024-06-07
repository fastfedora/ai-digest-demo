"use client";

import { Chat } from '@/components/chat'
import { Session } from '@/lib/types'

interface PersuaderProps {
  id: string
  session: Session
  missingKeys: any
}

const getPersuasionPrompt = (profile: string | null) => (
  profile
    ? `[Hidden] The person you're trying to convince has the following profile: ${profile}`
    : undefined
)

export function Persuader({ id, session, missingKeys }: PersuaderProps) {
  const profile = localStorage.getItem('profile')

  return (
    <Chat
      id={id}
      session={session}
      missingKeys={missingKeys}
      initialMessage={getPersuasionPrompt(profile)}
    />
  )
}
