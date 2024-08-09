'use client'
import { useState, useEffect } from 'react'
export const fetchCache = 'force-no-store'
export const dynamic = "force-dynamic"
export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello', { cache: 'no-store' })
      .then(response => response.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Simple App</h1>
        <p className="text-xl">Message from API: {message}</p>
      </div>
    </main>
  )
}