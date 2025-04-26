"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { LabBookingSystem } from "@/components/lab-booking-system"
import { EventReports } from "@/components/event-reports"
import { LibraryManagement } from "@/components/library-management"
import { EventRecommendation } from "@/components/event-recommendation"
import { HostelLogging } from "@/components/hostel-logging"
import { CounselingServices } from "@/components/counseling-services"
import { SidebarProvider } from "@/components/ui/sidebar"
import { LabAccessModal } from "@/components/auth/lab-access-modal"
import { useAuth } from "@/context/auth-context"
import { AnimatePresence } from "framer-motion"
import { PageTransition } from "@/components/ui/animations"

export function DashboardPage() {
  const [activeModule, setActiveModule] = useState("dashboard")
  const [showLabAccessModal, setShowLabAccessModal] = useState(false)
  const { hasLabAccess } = useAuth()

  const handleModuleChange = (module: string) => {
    if (module === "labs" && !hasLabAccess) {
      setShowLabAccessModal(true)
    } else {
      setActiveModule(module)
    }
  }

  const handleLabAccessSuccess = () => {
    setActiveModule("labs")
  }

  const renderActiveModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <DashboardOverview key="dashboard" />
      case "labs":
        return <LabBookingSystem key="labs" />
      case "events":
        return <EventReports key="events" />
      case "library":
        return <LibraryManagement key="library" />
      case "recommendations":
        return <EventRecommendation key="recommendations" />
      case "hostel":
        return <HostelLogging key="hostel" />
      case "counseling":
        return <CounselingServices key="counseling" />
      default:
        return <DashboardOverview key="dashboard" />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <DashboardSidebar activeModule={activeModule} setActiveModule={handleModuleChange} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6 overflow-auto">
            <AnimatePresence mode="wait">
              <PageTransition key={activeModule}>{renderActiveModule()}</PageTransition>
            </AnimatePresence>
          </main>
        </div>
        <LabAccessModal
          open={showLabAccessModal}
          onOpenChange={setShowLabAccessModal}
          onSuccess={handleLabAccessSuccess}
        />
      </div>
    </SidebarProvider>
  )
}
