"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Star, MessageSquare, ThumbsUp, Reply } from "lucide-react"

interface Review {
  id: string
  patientName: string
  rating: number
  date: string
  comment: string
  verified: boolean
  helpful: number
  avatar: string
  response?: string
}

const mockReviews: Review[] = [
  {
    id: "1",
    patientName: "John Smith",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Excellent care and very professional staff. Dr. Johnson took the time to explain everything clearly and made me feel comfortable throughout the visit.",
    verified: true,
    helpful: 12,
    avatar: "JS",
  },
  {
    id: "2",
    patientName: "Emily Davis",
    rating: 4,
    date: "2024-01-12",
    comment:
      "Great experience overall. The appointment was on time and the facility is very clean. Would recommend to others.",
    verified: true,
    helpful: 8,
    avatar: "ED",
    response: "Thank you for your kind words, Emily! We're glad you had a positive experience with us.",
  },
  {
    id: "3",
    patientName: "Michael Johnson",
    rating: 5,
    date: "2024-01-10",
    comment:
      "Outstanding service! The telehealth consultation was seamless and very convenient. Dr. Johnson was thorough and caring.",
    verified: true,
    helpful: 15,
    avatar: "MJ",
  },
  {
    id: "4",
    patientName: "Sarah Wilson",
    rating: 3,
    date: "2024-01-08",
    comment: "Good service but had to wait longer than expected. The staff was friendly though.",
    verified: false,
    helpful: 3,
    avatar: "SW",
  },
]

export function PatientReviews() {
  const [searchTerm, setSearchTerm] = useState("")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [reviews] = useState(mockReviews)

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRating = ratingFilter === "all" || review.rating.toString() === ratingFilter
    return matchesSearch && matchesRating
  })

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((review) => review.rating === rating).length,
    percentage: (reviews.filter((review) => review.rating === rating).length / reviews.length) * 100,
  }))

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="space-y-6">
      {/* Reviews Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Review Summary</CardTitle>
            <CardDescription>Overall patient satisfaction metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-foreground">{averageRating.toFixed(1)}</div>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-sm text-muted-foreground">Based on {reviews.length} reviews</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Rating Distribution</CardTitle>
            <CardDescription>Breakdown of patient ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center space-x-2">
                  <span className="text-sm w-8">{rating}★</span>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${percentage}%` }} />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reviews List */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Patient Reviews</span>
              </CardTitle>
              <CardDescription>Manage and respond to patient feedback</CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-32">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <div key={review.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/generic-placeholder-icon.png?height=40&width=40" />
                      <AvatarFallback className="bg-primary/10 text-primary">{review.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-foreground">{review.patientName}</p>
                        {review.verified && (
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground mb-3">{review.comment}</p>

                {review.response && (
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium text-foreground mb-1">Response from clinic:</p>
                    <p className="text-sm text-muted-foreground">{review.response}</p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{review.helpful} helpful</span>
                    </button>
                  </div>
                  {!review.response && (
                    <Button variant="outline" size="sm">
                      <Reply className="h-4 w-4 mr-2" />
                      Respond
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
