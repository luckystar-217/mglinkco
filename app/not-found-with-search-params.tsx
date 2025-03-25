"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

// Component that uses useSearchParams must be a client component
function NotFoundContent() {
  // useSearchParams is used here
  const searchParams = useSearchParams()
  const referrer = searchParams.get("referrer") || ""

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        {referrer && <span> You were referred from {referrer}.</span>}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/browse">Browse Freelancers</Link>
        </Button>
      </div>
    </div>
  )
}

// Main component wraps the client component in Suspense
export default function NotFound() {
  return (
    <Suspense fallback={<div className="container py-12 text-center">Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}

