"use client"

import { Filter, MapPin, Search, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function EventRecommendation() {
  // Sample venue data
  const venues = [
    {
      id: 1,
      name: "Main Auditorium",
      capacity: 500,
      location: "Main Campus",
      facilities: ["Stage", "Sound System", "Projector", "Air Conditioning"],
      noiseLevel: "Low",
      availability: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Conference Hall",
      capacity: 200,
      location: "Admin Block",
      facilities: ["Podium", "Sound System", "Projector", "Air Conditioning"],
      noiseLevel: "Very Low",
      availability: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Outdoor Amphitheater",
      capacity: 800,
      location: "East Campus",
      facilities: ["Stage", "Sound System", "Open Air"],
      noiseLevel: "High",
      availability: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Seminar Room 101",
      capacity: 80,
      location: "Science Block",
      facilities: ["Whiteboard", "Projector", "Air Conditioning"],
      noiseLevel: "Low",
      availability: "Booked",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Sports Complex",
      capacity: 1000,
      location: "South Campus",
      facilities: ["Indoor Courts", "Sound System", "Changing Rooms"],
      noiseLevel: "High",
      availability: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Lecture Hall 305",
      capacity: 120,
      location: "Arts Block",
      facilities: ["Podium", "Sound System", "Projector", "Air Conditioning"],
      noiseLevel: "Medium",
      availability: "Available",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Event Recommendation System</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <MapPin className="mr-2 h-4 w-4" />
            View Map
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Find the Perfect Venue</CardTitle>
          <CardDescription>Enter your event details to get venue recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Event Type</label>
              <Select defaultValue="academic">
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Expected Attendance</label>
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Select attendance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (&lt; 50)</SelectItem>
                  <SelectItem value="medium">Medium (50-200)</SelectItem>
                  <SelectItem value="large">Large (200-500)</SelectItem>
                  <SelectItem value="xlarge">Extra Large (&gt; 500)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location Preference</label>
              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Location</SelectItem>
                  <SelectItem value="main">Main Campus</SelectItem>
                  <SelectItem value="east">East Campus</SelectItem>
                  <SelectItem value="south">South Campus</SelectItem>
                  <SelectItem value="admin">Admin Block</SelectItem>
                  <SelectItem value="science">Science Block</SelectItem>
                  <SelectItem value="arts">Arts Block</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <Input type="date" />
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <label className="text-sm font-medium">Noise Constraints</label>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Very Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Required Facilities</label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Sound System
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Projector
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Stage
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Air Conditioning
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Whiteboard
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Podium
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Find Venues</Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="grid">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search venues..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Venues</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="grid" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue) => (
              <Card key={venue.id} className="overflow-hidden transition-all hover:shadow-md">
                <img src={venue.image || "/placeholder.svg"} alt={venue.name} className="h-48 w-full object-cover" />
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{venue.name}</CardTitle>
                    <Badge className={venue.availability === "Available" ? "bg-green-500" : "bg-red-500"}>
                      {venue.availability}
                    </Badge>
                  </div>
                  <CardDescription>{venue.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span>{venue.capacity} people</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Noise Level:</span>
                      <span>{venue.noiseLevel}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Facilities:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {venue.facilities.map((facility, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" disabled={venue.availability !== "Available"}>
                    Book Venue
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map">
          <Card>
            <CardHeader>
              <CardTitle>Campus Map View</CardTitle>
              <CardDescription>Interactive map of venue locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center border rounded-md p-4">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Map View</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The map view shows venue locations across campus.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
