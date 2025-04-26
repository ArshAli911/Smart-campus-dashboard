"use client"

import { Check, Filter, Home, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function HostelLogging() {
  // Sample hostel data
  const hostelBlocks = [
    { id: 1, name: "Block A", totalRooms: 100, occupiedRooms: 92, maintenanceRooms: 3, availableRooms: 5 },
    { id: 2, name: "Block B", totalRooms: 80, occupiedRooms: 75, maintenanceRooms: 2, availableRooms: 3 },
    { id: 3, name: "Block C", totalRooms: 120, occupiedRooms: 110, maintenanceRooms: 4, availableRooms: 6 },
    { id: 4, name: "Block D", totalRooms: 90, occupiedRooms: 85, maintenanceRooms: 1, availableRooms: 4 },
  ]

  // Sample check-in/out logs
  const logs = [
    {
      id: 1,
      studentName: "John Smith",
      studentId: "ST12345",
      roomNumber: "A-101",
      action: "check-in",
      date: "2023-05-15",
      status: "approved",
    },
    {
      id: 2,
      studentName: "Emily Johnson",
      studentId: "ST12346",
      roomNumber: "B-205",
      action: "check-out",
      date: "2023-05-16",
      status: "pending",
    },
    {
      id: 3,
      studentName: "Michael Brown",
      studentId: "ST12347",
      roomNumber: "A-110",
      action: "check-in",
      date: "2023-05-17",
      status: "approved",
    },
    {
      id: 4,
      studentName: "Sarah Davis",
      studentId: "ST12348",
      roomNumber: "C-302",
      action: "check-in",
      date: "2023-05-18",
      status: "approved",
    },
    {
      id: 5,
      studentName: "David Wilson",
      studentId: "ST12349",
      roomNumber: "D-105",
      action: "check-out",
      date: "2023-05-19",
      status: "pending",
    },
  ]

  // Sample maintenance requests
  const maintenanceRequests = [
    {
      id: 1,
      roomNumber: "A-105",
      issue: "Leaking faucet",
      reportedBy: "John Smith",
      date: "2023-05-10",
      status: "pending",
    },
    {
      id: 2,
      roomNumber: "B-210",
      issue: "Broken window",
      reportedBy: "Emily Johnson",
      date: "2023-05-12",
      status: "in-progress",
    },
    {
      id: 3,
      roomNumber: "C-315",
      issue: "AC not working",
      reportedBy: "Michael Brown",
      date: "2023-05-14",
      status: "completed",
    },
    {
      id: 4,
      roomNumber: "A-120",
      issue: "Light fixture broken",
      reportedBy: "Sarah Davis",
      date: "2023-05-15",
      status: "pending",
    },
    {
      id: 5,
      roomNumber: "D-110",
      issue: "Door lock jammed",
      reportedBy: "David Wilson",
      date: "2023-05-16",
      status: "in-progress",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Hostel Logging System</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Home className="mr-2 h-4 w-4" />
            Add Room
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {hostelBlocks.map((block) => (
          <Card key={block.id} className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>{block.name}</CardTitle>
              <CardDescription>Hostel Block</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Rooms:</span>
                  <span className="font-medium">{block.totalRooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Occupied:</span>
                  <span className="font-medium">{block.occupiedRooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Maintenance:</span>
                  <span className="font-medium">{block.maintenanceRooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Available:</span>
                  <span className="font-medium">{block.availableRooms}</span>
                </div>
                <div className="pt-2">
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${(block.occupiedRooms / block.totalRooms) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-xs text-center text-muted-foreground">
                    {Math.round((block.occupiedRooms / block.totalRooms) * 100)}% Occupancy
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="logs">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="logs">Check-in/out Logs</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Student Check-in/out Logs</CardTitle>
                  <CardDescription>Track student hostel occupancy</CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search logs..." className="pl-8" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted/50 p-4 font-medium">
                  <div>Student Name</div>
                  <div>Student ID</div>
                  <div>Room Number</div>
                  <div>Action</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>
                {logs.map((log) => (
                  <div key={log.id} className="grid grid-cols-6 p-4 border-t hover:bg-muted/20 transition-colors">
                    <div className="font-medium">{log.studentName}</div>
                    <div>{log.studentId}</div>
                    <div>{log.roomNumber}</div>
                    <div>
                      <Badge className={log.action === "check-in" ? "bg-green-500" : "bg-amber-500"}>
                        {log.action === "check-in" ? "Check-in" : "Check-out"}
                      </Badge>
                    </div>
                    <div>{log.date}</div>
                    <div className="flex gap-2">
                      <Badge className={log.status === "approved" ? "bg-green-500" : "bg-amber-500"}>
                        {log.status === "approved" ? "Approved" : "Pending"}
                      </Badge>
                      {log.status === "pending" && (
                        <div className="flex gap-1">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-5 w-5 rounded-full bg-green-100 text-green-500 hover:bg-green-200 hover:text-green-600"
                          >
                            <Check className="h-3 w-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-5 w-5 rounded-full bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Track room maintenance issues</CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search requests..." className="pl-8" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 bg-muted/50 p-4 font-medium">
                  <div>Room Number</div>
                  <div>Issue</div>
                  <div>Reported By</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>
                {maintenanceRequests.map((request) => (
                  <div key={request.id} className="grid grid-cols-5 p-4 border-t hover:bg-muted/20 transition-colors">
                    <div className="font-medium">{request.roomNumber}</div>
                    <div>{request.issue}</div>
                    <div>{request.reportedBy}</div>
                    <div>{request.date}</div>
                    <div>
                      <Badge
                        className={
                          request.status === "completed"
                            ? "bg-green-500"
                            : request.status === "in-progress"
                              ? "bg-blue-500"
                              : "bg-amber-500"
                        }
                      >
                        {request.status === "completed"
                          ? "Completed"
                          : request.status === "in-progress"
                            ? "In Progress"
                            : "Pending"}
                      </Badge>
                    </div>
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
