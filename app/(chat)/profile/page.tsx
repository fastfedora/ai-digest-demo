"use client";

import { useState } from "react"
import Markdown from "react-markdown"
import { Card } from "@/components/brand/card"
import { useActions } from 'ai/rsc'
import { AttributeSelectorPane } from '@/components/app/profiler/attribute-selector-pane'
import { attributes } from './attributes'
import { getAttributePrompt } from "./getAttributePrompt";

export const maxDuration = 60;

export default function ProfileTargetPage() {
  const { generateAIText } = useActions()
  const [analysis, setAnalysis] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)

  const onSubmit = async (selectedAttributes: string[]) => {
    setLoading(true)

    const text = await generateAIText(getAttributePrompt(selectedAttributes));

    // NOTE: Normally I would store this in an in-memory store rather than local storage.
    //       [twl 6.Jun.24]
    window.localStorage.setItem('profile', text)

    setAnalysis(text)
    setLoading(false)
  }

  return (
    <div className="flex-1 grid md:grid-cols-2 gap-6 p-6">
      <Card>
        <h2 className="text-lg font-medium">Facebook Likes</h2>
        <p className="text-sm">Select the pages that your target user likes, then press Analyze at
        the bottom.</p>
        <AttributeSelectorPane className="mt-4" attributes={attributes} onSubmit={onSubmit} />
      </Card>

      {(analysis || isLoading) &&
        <Card>
          <h2 className="text-lg font-medium">Profile Analysis</h2>
          <p className="text-sm">What the AI has determines is most important to influence this person.</p>
          <p className="mt-6 text-gray-700 dark:text-gray-300 prose">
            {isLoading && <span>Loading...</span>}

            <Markdown>{analysis}</Markdown>
          </p>
        </Card>
      }
    </div>
  );
}
