"use client"

import { useRouter } from 'next/navigation'
import { Card } from "@/components/brand/card";
import { Button } from "@/components/brand/button";

export function WelcomePane() {
  const router = useRouter()

  return (
    <Card className="flex flex-col align-center gap-6 max-w-xl">
      <h2 className="text-lg font-medium">AI Digest Persuasion Demo</h2>

      <p>Welcome to the persuasion demo. This demo showcases how a user can be profiled via
        public information and then persuaded to take a specific action.
      </p>

      <Button onClick={() => router.push('/profile')}>Start Demo</Button>
    </Card>
  )
}
