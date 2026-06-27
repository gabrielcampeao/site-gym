'use client'

import dynamic from 'next/dynamic'

const ChatWidget   = dynamic(() => import('./ChatWidget'),   { ssr: false })
const ScrollReveal = dynamic(() => import('./ScrollReveal'), { ssr: false })

export default function ClientProviders() {
  return (
    <>
      <ChatWidget />
      <ScrollReveal />
    </>
  )
}
