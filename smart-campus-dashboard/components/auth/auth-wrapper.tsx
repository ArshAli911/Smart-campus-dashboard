import { School } from "lucide-react"
import type { ReactNode } from "react"

interface AuthWrapperProps {
  children: ReactNode
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <School className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Smart Campus</h1>
          <p className="mt-2 text-sm text-gray-600">Resource Optimization System for campus management</p>
        </div>
        {children}
        <p className="mt-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Smart Campus. All rights reserved.
        </p>
      </div>
    </div>
  )
}
