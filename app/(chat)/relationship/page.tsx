"use client"

import { useRouter } from 'next/navigation'
import { Card } from "@/components/brand/card";
import { Button } from "@/components/brand/button";

export default function BuildRelationshipPage() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Card className="flex flex-col align-center gap-6 max-w-xl">
        <h2 className="text-lg font-medium">Build Relationship Page</h2>

        <p>This page would have shown how a relationship could be built with the target using the
          profile information determined by the Profile Target step. After this relationship was built,
          persuading the target would be much easier.
        </p>

        <p>For now, skip this page and move to the Persuade Target step</p>

        <Button onClick={() => router.push('/persuade')}>Persuade Target</Button>
      </Card>
    </div>
  )
}
