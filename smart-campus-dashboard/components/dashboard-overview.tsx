"use client"

import { BookOpen, Calendar, Home, School, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, BarChart, LineChart } from "@/components/ui/chart"
import { StaggerChildren, StaggerItem, AnimatedCounter } from "@/components/ui/animations"
import { motion } from "framer-motion"

export function DashboardOverview() {
  // Sample data for charts
  const areaChartData = [
    { name: "Jan", total: 580 },
    { name: "Feb", total: 690 },
    { name: "Mar", total: 1100 },
    { name: "Apr", total: 1200 },
    { name: "May", total: 1380 },
    { name: "Jun", total: 1500 },
  ]

  const barChartData = [
    { name: "Mon", total: 120 },
    { name: "Tue", total: 220 },
    { name: "Wed", total: 190 },
    { name: "Thu", total: 270 },
    { name: "Fri", total: 250 },
    { name: "Sat", total: 70 },
    { name: "Sun", total: 40 },
  ]

  const lineChartData = [
    { name: "Week 1", total: 400 },
    { name: "Week 2", total: 300 },
    { name: "Week 3", total: 520 },
    { name: "Week 4", total: 380 },
    { name: "Week 5", total: 430 },
  ]

  return (
    <div className="space-y-6">
      <motion.h1
        className="text-3xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard Overview
      </motion.h1>

      <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StaggerItem>
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Lab Bookings</CardTitle>
                <School className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={245} />
                </div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>

        <StaggerItem>
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Events</CardTitle>
                <Calendar className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={32} />
                </div>
                <p className="text-xs text-muted-foreground">+4 from last week</p>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>

        <StaggerItem>
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Library Loans</CardTitle>
                <BookOpen className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={189} />
                </div>
                <p className="text-xs text-muted-foreground">+24 from yesterday</p>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>

        <StaggerItem>
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Hostel Occupancy</CardTitle>
                <Home className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={92} />%
                </div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>
      </StaggerChildren>

      <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-7" staggerDelay={0.15}>
        <StaggerItem className="col-span-4">
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-all">
              <CardHeader>
                <CardTitle>Resource Usage Trends</CardTitle>
                <CardDescription>Campus resource utilization over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={areaChartData}
                  index="name"
                  categories={["total"]}
                  colors={["blue"]}
                  valueFormatter={(value: number) => `${value} bookings`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>

        <StaggerItem className="col-span-3">
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-all">
              <CardHeader>
                <CardTitle>Weekly Events</CardTitle>
                <CardDescription>Number of events by day of week</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={barChartData}
                  index="name"
                  categories={["total"]}
                  colors={["green"]}
                  valueFormatter={(value: number) => `${value} events`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>
      </StaggerChildren>

      <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-7" staggerDelay={0.15}>
        <StaggerItem className="col-span-3">
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-all">
              <CardHeader>
                <CardTitle>Counseling Sessions</CardTitle>
                <CardDescription>Weekly counseling appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={lineChartData}
                  index="name"
                  categories={["total"]}
                  colors={["purple"]}
                  valueFormatter={(value: number) => `${value} sessions`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>

        <StaggerItem className="col-span-4">
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-all">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest campus activities</CardDescription>
              </CardHeader>
              <CardContent>
                <StaggerChildren className="space-y-4" staggerDelay={0.08}>
                  <StaggerItem>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="rounded-full bg-blue-100 p-2"
                        whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                        transition={{ duration: 0.2 }}
                      >
                        <School className="h-4 w-4 text-blue-500" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium">Physics Lab Booked</p>
                        <p className="text-xs text-muted-foreground">10 minutes ago by Prof. Johnson</p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="rounded-full bg-green-100 p-2"
                        whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar className="h-4 w-4 text-green-500" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium">Annual Tech Symposium Scheduled</p>
                        <p className="text-xs text-muted-foreground">1 hour ago by Event Committee</p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="rounded-full bg-purple-100 p-2"
                        whileHover={{ scale: 1.1, backgroundColor: "#f3e8ff" }}
                        transition={{ duration: 0.2 }}
                      >
                        <BookOpen className="h-4 w-4 text-purple-500" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium">New Research Journals Added</p>
                        <p className="text-xs text-muted-foreground">3 hours ago by Library Admin</p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="rounded-full bg-amber-100 p-2"
                        whileHover={{ scale: 1.1, backgroundColor: "#fef3c7" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Home className="h-4 w-4 text-amber-500" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium">Hostel Room Maintenance Completed</p>
                        <p className="text-xs text-muted-foreground">Yesterday by Maintenance Team</p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="rounded-full bg-rose-100 p-2"
                        whileHover={{ scale: 1.1, backgroundColor: "#ffe4e6" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Users className="h-4 w-4 text-rose-500" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium">Group Counseling Session Added</p>
                        <p className="text-xs text-muted-foreground">Yesterday by Dr. Smith</p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerChildren>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>
      </StaggerChildren>
    </div>
  )
}
