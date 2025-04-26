"use client"

import { Book, BookOpen, Filter, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function LibraryManagement() {
  // Sample book data
  const books = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      subject: "Computer Science",
      status: "available",
      dueDate: null,
    },
    {
      id: 2,
      title: "Physics of the Impossible",
      author: "Michio Kaku",
      subject: "Physics",
      status: "borrowed",
      dueDate: "2023-06-15",
    },
    {
      id: 3,
      title: "The Gene: An Intimate History",
      author: "Siddhartha Mukherjee",
      subject: "Biology",
      status: "available",
      dueDate: null,
    },
    {
      id: 4,
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      subject: "Economics",
      status: "borrowed",
      dueDate: "2023-06-10",
    },
    {
      id: 5,
      title: "Organic Chemistry",
      author: "Jonathan Clayden",
      subject: "Chemistry",
      status: "available",
      dueDate: null,
    },
    {
      id: 6,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell",
      subject: "Computer Science",
      status: "borrowed",
      dueDate: "2023-06-20",
    },
  ]

  // Sample borrowing history
  const borrowHistory = [
    {
      id: 1,
      bookTitle: "Introduction to Algorithms",
      studentName: "John Smith",
      borrowDate: "2023-05-01",
      returnDate: "2023-05-15",
      status: "returned",
    },
    {
      id: 2,
      bookTitle: "Physics of the Impossible",
      studentName: "Emily Johnson",
      borrowDate: "2023-05-15",
      returnDate: null,
      status: "active",
    },
    {
      id: 3,
      bookTitle: "The Gene: An Intimate History",
      studentName: "Michael Brown",
      borrowDate: "2023-04-20",
      returnDate: "2023-05-10",
      status: "returned",
    },
    {
      id: 4,
      bookTitle: "Principles of Economics",
      studentName: "Sarah Davis",
      borrowDate: "2023-05-10",
      returnDate: null,
      status: "active",
    },
    {
      id: 5,
      bookTitle: "Artificial Intelligence: A Modern Approach",
      studentName: "David Wilson",
      borrowDate: "2023-05-20",
      returnDate: null,
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Library Management System</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button onClick={()=> window.location.href="http://localhost:3001"}>
            <BookOpen className="mr-2 h-4 w-4" />
            Add Book
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <Book className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450</div>
            <p className="text-xs text-muted-foreground">+15 new books this month</p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Books Borrowed</CardTitle>
            <User className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <p className="text-xs text-muted-foreground">+24 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Overdue Books</CardTitle>
            <BookOpen className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">-3 from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="books">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="books">Book Inventory</TabsTrigger>
          <TabsTrigger value="history">Borrowing History</TabsTrigger>
        </TabsList>

        <TabsContent value="books">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Book Inventory</CardTitle>
                  <CardDescription>Manage your library books</CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search books..." className="pl-8" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="economics">Economics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 bg-muted/50 p-4 font-medium">
                  <div>Title</div>
                  <div>Author</div>
                  <div>Subject</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {books.map((book) => (
                  <div key={book.id} className="grid grid-cols-5 p-4 border-t hover:bg-muted/20 transition-colors">
                    <div className="font-medium">{book.title}</div>
                    <div>{book.author}</div>
                    <div>{book.subject}</div>
                    <div>
                      <Badge className={book.status === "available" ? "bg-green-500" : "bg-amber-500"}>
                        {book.status === "available" ? "Available" : `Borrowed (Due: ${book.dueDate})`}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" disabled={book.status !== "available"}>
                        Issue
                      </Button>
                      <Button size="sm" variant="outline" disabled={book.status !== "borrowed"}>
                        Return
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Borrowing History</CardTitle>
                  <CardDescription>Track book borrowing and returns</CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search history..." className="pl-8" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="returned">Returned</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 bg-muted/50 p-4 font-medium">
                  <div>Book Title</div>
                  <div>Student Name</div>
                  <div>Borrow Date</div>
                  <div>Return Date</div>
                  <div>Status</div>
                </div>
                {borrowHistory.map((item) => (
                  <div key={item.id} className="grid grid-cols-5 p-4 border-t hover:bg-muted/20 transition-colors">
                    <div className="font-medium">{item.bookTitle}</div>
                    <div>{item.studentName}</div>
                    <div>{item.borrowDate}</div>
                    <div>{item.returnDate || "Not returned"}</div>
                    <div>
                      <Badge className={item.status === "returned" ? "bg-green-500" : "bg-amber-500"}>
                        {item.status === "returned" ? "Returned" : "Active"}
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
