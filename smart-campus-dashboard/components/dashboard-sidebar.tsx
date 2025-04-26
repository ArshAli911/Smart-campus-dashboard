"use client"

import { BookOpen, Calendar, Home, LayoutDashboard, MapPin, School, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { motion } from "framer-motion"
import { StaggerChildren, StaggerItem } from "@/components/ui/animations"

interface DashboardSidebarProps {
  activeModule: string
  setActiveModule: (module: string) => void
}

export function DashboardSidebar({ activeModule, setActiveModule }: DashboardSidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "labs", label: "Laboratory", icon: School },
    { id: "events", label: "Event Reports", icon: Calendar },
    { id: "library", label: "Library", icon: BookOpen },
    { id: "recommendations", label: "Event Venues", icon: MapPin },
    { id: "hostel", label: "Hostel", icon: Home },
    { id: "counseling", label: "Counseling", icon: Users },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <motion.div
          className="flex items-center gap-2 font-semibold text-lg"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div animate={{ rotate: [0, 10, -10, 10, 0] }} transition={{ duration: 1, delay: 1 }}>
            <School className="h-6 w-6 text-blue-600" />
          </motion.div>
          <span className="text-blue-600">SmartCampus</span>
        </motion.div>
      </SidebarHeader>
      <SidebarContent>
        <StaggerChildren>
          <SidebarMenu>
            {menuItems.map((item, index) => (
              <StaggerItem key={item.id} duration={0.3}>
                <SidebarMenuItem>
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <SidebarMenuButton isActive={activeModule === item.id} onClick={() => setActiveModule(item.id)}>
                      <item.icon
                        className={cn("h-5 w-5", activeModule === item.id ? "text-blue-600" : "text-gray-500")}
                      />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </motion.div>
                </SidebarMenuItem>
              </StaggerItem>
            ))}
          </SidebarMenu>
        </StaggerChildren>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <SidebarMenuButton>
                <Settings className="h-5 w-5 text-gray-500" />
                <span>Settings</span>
              </SidebarMenuButton>
            </motion.div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
