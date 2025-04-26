"use client"

import { CalendarIcon, Clock, Search, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CounselingServices() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Sample counselor data
  const counselors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Academic Stress",
      availability: "Available",
      image: "/placeholder.svg?height=40&width=40",
      nextAvailable: "Today, 2:00 PM",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Anxiety & Depression",
      availability: "Busy",
      image: "/placeholder.svg?height=40&width=40",
      nextAvailable: "Tomorrow, 10:00 AM",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Career Guidance",
      availability: "Available",
      image: "/placeholder.svg?height=40&width=40",
      nextAvailable: "Today, 4:30 PM",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "Relationship Issues",
      availability: "Available",
      image: "/placeholder.svg?height=40&width=40",
      nextAvailable: "Today, 3:15 PM",
      rating: 4.6,
    },
  ]

  // Sample upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      counselor: "Dr. Sarah Johnson",
      date: "May 28, 2023",
      time: "2:00 PM",
      type: "One-on-One",
      status: "confirmed",
    },
    {
      id: 2,
      counselor: "Dr. Michael Chen",
      date: "May 30, 2023",
      time: "10:00 AM",
      type: "One-on-One",
      status: "pending",
    },
    {
      id: 3,
      counselor: "Dr. Emily Rodriguez",
      date: "June 2, 2023",
      time: "4:30 PM",
      type: "Group",
      status: "confirmed",
    },
  ]

  // Sample group sessions
  const groupSessions = [
    {
      id: 1,
      title: "Stress Management Workshop",
      counselor: "Dr. Sarah Johnson",
      date: "May 29, 2023",
      time: "3:00 PM",
      participants: 12,
      maxParticipants: 20,
      description: "Learn effective techniques to manage academic stress and anxiety.",
    },
    {
      id: 2,
      title: "Career Planning Seminar",
      counselor: "Dr. Emily Rodriguez",
      date: "June 2, 2023",
      time: "2:00 PM",
      participants: 15,
      maxParticipants: 25,
      description: "Guidance on career planning, resume building, and interview preparation.",
    },
    {
      id: 3,
      title: "Mindfulness Meditation",
      counselor: "Dr. Michael Chen",
      date: "June 5, 2023",
      time: "5:00 PM",
      participants: 8,
      maxParticipants: 15,
      description: "Introduction to mindfulness meditation practices for mental well-being.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Counseling Services</h1>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Button>
            <User className="mr-2 h-4 w-4" />
            Book Session
          </Button>
        </div>
      </div>

      <Tabs defaultValue="counselors">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="counselors">Counselors</TabsTrigger>
          <TabsTrigger value="appointments">My Appointments</TabsTrigger>
          <TabsTrigger value="group">Group Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="counselors" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-64 space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search counselors..." className="pl-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Specialization</h3>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specializations</SelectItem>
                    <SelectItem value="academic">Academic Stress</SelectItem>
                    <SelectItem value="anxiety">Anxiety & Depression</SelectItem>
                    <SelectItem value="career">Career Guidance</SelectItem>
                    <SelectItem value="relationship">Relationship Issues</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Availability</h3>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Availability</SelectItem>
                    <SelectItem value="today">Available Today</SelectItem>
                    <SelectItem value="tomorrow">Available Tomorrow</SelectItem>
                    <SelectItem value="week">Available This Week</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex-1 grid gap-4 md:grid-cols-2">
              {counselors.map((counselor) => (
                <Card key={counselor.id} className="transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={counselor.image || "/placeholder.svg"} alt={counselor.name} />
                          <AvatarFallback>{counselor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{counselor.name}</CardTitle>
                          <CardDescription>{counselor.specialization}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${counselor.availability === "Available" ? "bg-green-500 animate-pulse" : "bg-amber-500"} mr-2`}
                        ></div>
                        <span className="text-sm">{counselor.availability}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Next Available:</span>
                        <span>{counselor.nextAvailable}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rating:</span>
                        <span className="flex items-center">
                          {counselor.rating}
                          <svg className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Clock className="mr-2 h-4 w-4" />
                      Schedule Session
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>My Upcoming Sessions</CardTitle>
              <CardDescription>View and manage your counseling appointments</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingSessions.length > 0 ? (
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-blue-100 p-3">
                          <User className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-medium">{session.counselor}</h3>
                          <p className="text-sm text-muted-foreground">{session.type} Session</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <div className="text-sm">
                          <div className="font-medium">{session.date}</div>
                          <div className="text-muted-foreground">{session.time}</div>
                        </div>
                        <Badge className={session.status === "confirmed" ? "bg-green-500" : "bg-amber-500"}>
                          {session.status === "confirmed" ? "Confirmed" : "Pending"}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <User className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No Upcoming Sessions</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any scheduled counseling sessions.
                  </p>
                  <Button className="mt-4">Schedule a Session</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="group">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groupSessions.map((session) => (
              <Card key={session.id} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>{session.title}</CardTitle>
                  <CardDescription>Facilitated by {session.counselor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">{session.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Date:</span>
                        <span>{session.date}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Time:</span>
                        <span>{session.time}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Participants:</span>
                        <span>
                          {session.participants}/{session.maxParticipants}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${(session.participants / session.maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    Join Session
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
