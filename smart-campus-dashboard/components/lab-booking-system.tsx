"use client";

import { useState } from "react";
import { CalendarIcon, Filter, Lock, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/auth-context";
import { LabAccessModal } from "@/components/auth/lab-access-modal";

export function LabBookingSystem() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showLabAccessModal, setShowLabAccessModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Track admin access

  // Function to handle admin login
  const handleAdminLogin = (username: string, password: string) => {
    if (username === "root" && password === "root") {
      setIsAdmin(true);
    } else {
      alert("Invalid admin credentials");
    }
  };

  // Sample lab data
  const labs = [
    {
      id: 1,
      name: "Physics Lab 101",
      department: "Physics",
      capacity: 30,
      equipment: "Oscilloscopes, Spectrometers",
      status: "available",
    },
    {
      id: 2,
      name: "Chemistry Lab 202",
      department: "Chemistry",
      capacity: 24,
      equipment: "Fume Hoods, Microscopes",
      status: "booked",
    },
    {
      id: 3,
      name: "Computer Lab 305",
      department: "Computer Science",
      capacity: 40,
      equipment: "Workstations, Servers",
      status: "available",
    },
    {
      id: 4,
      name: "Biology Lab 103",
      department: "Biology",
      capacity: 28,
      equipment: "Microscopes, Centrifuges",
      status: "maintenance",
    },
    {
      id: 5,
      name: "Electronics Lab 204",
      department: "Electrical Engineering",
      capacity: 25,
      equipment: "Circuit Boards, Oscilloscopes",
      status: "available",
    },
    {
      id: 6,
      name: "Robotics Lab 306",
      department: "Mechanical Engineering",
      capacity: 20,
      equipment: "Robotic Arms, 3D Printers",
      status: "booked",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Laboratory Booking System
          </h1>
          {isAdmin && (
            <Badge className="ml-2 bg-green-500">
              <ShieldCheck className="h-3 w-3 mr-1" /> Admin Access
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[240px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button>
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          {!isAdmin && (
            <Button
              variant="outline"
              onClick={() => {
                const username = prompt("Enter admin username:");
                const password = prompt("Enter admin password:");
                handleAdminLogin(username || "", password || "");
              }}
            >
              <Lock className="mr-2 h-4 w-4" />
              Admin Login
            </Button>
          )}
          {isAdmin && (
            <Button variant="outline" onClick={() => setIsAdmin(false)}>
              <Lock className="mr-2 h-4 w-4" />
              Logout
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-64 space-y-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search labs..." className="pl-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Department</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="computer-science">
                  Computer Science
                </SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
                <SelectItem value="electrical">
                  Electrical Engineering
                </SelectItem>
                <SelectItem value="mechanical">
                  Mechanical Engineering
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Capacity</h3>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select capacity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Capacity</SelectItem>
                <SelectItem value="small">Small (&lt; 20)</SelectItem>
                <SelectItem value="medium">Medium (20-30)</SelectItem>
                <SelectItem value="large">Large (&gt; 30)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Status</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <span className="text-sm">Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                <span className="text-sm">Maintenance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="grid">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </TabsList>
              <div className="text-sm text-muted-foreground">
                Showing {labs.length} labs
              </div>
            </div>

            <TabsContent value="grid" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {labs.map((lab) => (
                  <Card key={lab.id} className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{lab.name}</CardTitle>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge
                                className={
                                  lab.status === "available"
                                    ? "bg-green-500"
                                    : lab.status === "booked"
                                    ? "bg-red-500"
                                    : "bg-amber-500"
                                }
                              >
                                {lab.status === "available"
                                  ? "Available"
                                  : lab.status === "booked"
                                  ? "Booked"
                                  : "Maintenance"}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              {lab.status === "available"
                                ? "This lab is available for booking"
                                : lab.status === "booked"
                                ? "This lab is currently booked"
                                : "This lab is under maintenance"}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <CardDescription>
                        {lab.department} Department
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Capacity:
                          </span>
                          <span>{lab.capacity} students</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Equipment:
                          </span>
                          <span
                            className="text-right max-w-[180px] truncate"
                            title={lab.equipment}
                          >
                            {lab.equipment}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        disabled={lab.status !== "available" || !isAdmin}
                      >
                        {!isAdmin
                          ? "Admin Access Required"
                          : lab.status === "available"
                          ? "Book Now"
                          : "Unavailable"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <CardTitle>Lab Booking Calendar</CardTitle>
                  <CardDescription>
                    View and manage lab bookings in calendar format
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[500px] flex items-center justify-center border rounded-md p-4">
                    <div className="text-center">
                      <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">
                        Calendar View
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        The calendar view shows lab bookings in a time-slot
                        format.
                      </p>
                      {!isAdmin && (
                        <Button
                          className="mt-4"
                          variant="outline"
                          onClick={() => setShowLabAccessModal(true)}
                        >
                          <Lock className="mr-2 h-4 w-4" />
                          Admin Access Required
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <LabAccessModal
        open={showLabAccessModal}
        onOpenChange={setShowLabAccessModal}
      />
    </div>
  );
}
