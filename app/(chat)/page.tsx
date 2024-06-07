import { WelcomePane } from './components/WelcomePane'

export const metadata = {
  title: 'AI Digest Demo'
}

export default async function IndexPage() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <WelcomePane />
    </div>
  )
}
