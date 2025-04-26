"use client"

import { Download, FileText, Filter, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"

export function EventReports() {
  // Sample data for charts
  const attendanceData = [
    { name: "Monday", total: 120 },
    { name: "Tuesday", total: 150 },
    { name: "Wednesday", total: 180 },
    { name: "Thursday", total: 220 },
    { name: "Friday", total: 250 },
    { name: "Saturday", total: 180 },
    { name: "Sunday", total: 120 },
  ]

  const venueUsageData = [
    { name: "Auditorium", value: 35 },
    { name: "Conference Hall", value: 25 },
    { name: "Seminar Room", value: 20 },
    { name: "Outdoor Arena", value: 15 },
    { name: "Classroom", value: 5 },
  ]

  const eventTrendsData = [
    { name: "Week 1", academic: 10, cultural: 5, sports: 3 },
    { name: "Week 2", academic: 12, cultural: 8, sports: 4 },
    { name: "Week 3", academic: 15, cultural: 10, sports: 7 },
    { name: "Week 4", academic: 8, cultural: 12, sports: 5 },
  ]

  // Sample event data
  const events = [
    {
      id: 1,
      name: "Annual Tech Symposium",
      date: "2023-05-15",
      venue: "Auditorium",
      attendance: 450,
      organizer: "Computer Science Dept",
    },
    {
      id: 2,
      name: "Cultural Festival",
      date: "2023-05-20",
      venue: "Outdoor Arena",
      attendance: 800,
      organizer: "Student Council",
    },
    {
      id: 3,
      name: "Research Conference",
      date: "2023-05-22",
      venue: "Conference Hall",
      attendance: 200,
      organizer: "Research Committee",
    },
    {
      id: 4,
      name: "Sports Tournament",
      date: "2023-05-25",
      venue: "Sports Complex",
      attendance: 350,
      organizer: "Sports Department",
    },
    {
      id: 5,
      name: "Alumni Meet",
      date: "2023-05-28",
      venue: "Auditorium",
      attendance: 300,
      organizer: "Alumni Association",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Weekly Automated Event Reports</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="analytics">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="events">Events List</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>Total Events</CardTitle>
                <CardDescription>Events in the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">32</div>
                <p className="text-sm text-muted-foreground">+4 from previous week</p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>Total Attendance</CardTitle>
                <CardDescription>Participants in all events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">2,450</div>
                <p className="text-sm text-muted-foreground">+15% from previous week</p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>Venue Utilization</CardTitle>
                <CardDescription>Percentage of venues used</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">78%</div>
                <p className="text-sm text-muted-foreground">+5% from previous week</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>Daily Attendance</CardTitle>
                <CardDescription>Event attendance by day</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={attendanceData}
                  index="name"
                  categories={["total"]}
                  colors={["blue"]}
                  valueFormatter={(value: number) => `${value} attendees`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>Venue Usage</CardTitle>
                <CardDescription>Distribution by venue type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={venueUsageData}
                  index="name"
                  categories={["value"]}
                  colors={["blue", "cyan", "teal", "indigo", "violet"]}
                  valueFormatter={(value: number) => `${value}%`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
          </div>

          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Event Trends</CardTitle>
              <CardDescription>Weekly event distribution by category</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                data={eventTrendsData}
                index="name"
                categories={["academic", "cultural", "sports"]}
                colors={["blue", "green", "orange"]}
                valueFormatter={(value: number) => `${value} events`}
                className="h-[300px]"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Generated Reports</CardTitle>
              <CardDescription>Weekly automated reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-blue-500" />
                    <div>
                      <h3 className="font-medium">Weekly Event Summary</h3>
                      <p className="text-sm text-muted-foreground">Generated on May 28, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-green-500" />
                    <div>
                      <h3 className="font-medium">Attendance Analytics</h3>
                      <p className="text-sm text-muted-foreground">Generated on May 28, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-purple-500" />
                    <div>
                      <h3 className="font-medium">Venue Utilization Report</h3>
                      <p className="text-sm text-muted-foreground">Generated on May 28, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-amber-500" />
                    <div>
                      <h3 className="font-medium">Resource Allocation Summary</h3>
                      <p className="text-sm text-muted-foreground">Generated on May 28, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>List of events from the past week</CardDescription>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 bg-muted/50 p-4 font-medium">
                  <div>Event Name</div>
                  <div>Date</div>
                  <div>Venue</div>
                  <div>Attendance</div>
                  <div>Organizer</div>
                </div>
                {events.map((event) => (
                  <div key={event.id} className="grid grid-cols-5 p-4 border-t hover:bg-muted/20 transition-colors">
                    <div className="font-medium">{event.name}</div>
                    <div>{event.date}</div>
                    <div>{event.venue}</div>
                    <div>{event.attendance}</div>
                    <div>{event.organizer}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
