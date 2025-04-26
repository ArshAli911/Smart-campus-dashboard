"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  role: "student" | "faculty" | "staff" | "admin"
  labAccess?: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  hasLabAccess: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (userData: any) => Promise<void>
  logout: () => void
  verifyLabAccess: (username: string, password: string) => Promise<boolean>
  grantLabAccess: () => void
  revokeLabAccess: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasLabAccess, setHasLabAccess] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = () => {
      // In a real app, you would check for a token in localStorage or cookies
      const storedUser = localStorage.getItem("user")
      const storedLabAccess = localStorage.getItem("labAccess") === "true"

      if (storedUser) {
        setUser(JSON.parse(storedUser))
        setHasLabAccess(storedLabAccess)
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user && pathname !== "/login") {
      router.push("/login")
    }
  }, [user, isLoading, pathname, router])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // In a real app, you would make an API call to authenticate
      // This is a mock implementation
      const mockUser: User = {
        id: "1",
        name: "John Doe",
        email: email,
        role: "admin",
        labAccess: false,
      }

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/")
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: any) => {
    setIsLoading(true)

    try {
      // In a real app, you would make an API call to register
      // This is a mock implementation
      const mockUser: User = {
        id: "1",
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        role: userData.userType as "student" | "faculty" | "staff" | "admin",
        labAccess: false,
      }

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/")
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("labAccess")
    setUser(null)
    setHasLabAccess(false)
    router.push("/login")
  }

  const verifyLabAccess = async (username: string, password: string): Promise<boolean> => {
    // In a real app, you would verify these credentials against a secure database
    // This is a mock implementation with hardcoded credentials
    const isValid = username === "labadmin" && password === "lab123"

    if (isValid) {
      grantLabAccess()
    }

    return isValid
  }

  const grantLabAccess = () => {
    setHasLabAccess(true)
    localStorage.setItem("labAccess", "true")

    // Update user object with lab access
    if (user) {
      const updatedUser = { ...user, labAccess: true }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
  }

  const revokeLabAccess = () => {
    setHasLabAccess(false)
    localStorage.removeItem("labAccess")

    // Update user object to remove lab access
    if (user) {
      const updatedUser = { ...user, labAccess: false }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        hasLabAccess,
        login,
        signup,
        logout,
        verifyLabAccess,
        grantLabAccess,
        revokeLabAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
