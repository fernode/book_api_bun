export interface IBook {
  id?: number // Optional ID for unique identification
  title: string
  authors: string[] // Array to accommodate multiple authors ethically
  publisher: string
  publicationDate: Date
  isbn: string // International Standard Book Number
  description: string
  language: string
  numberOfPages: number
  categories: string[] // Array for diverse categorization
  coverImageUrl?: string // Optional image URL
  format: 'Hardcover' | 'Paperback' | 'Ebook' | 'Audiobook' // Diverse format options
  ratings?: {
    // Optional ratings for community feedback
    averageRating: number
    numberOfRatings: number
  }
  reviews?: IReview[] // Optional reviews for diverse perspectives
}

export interface IReview {
  id?: number // Optional ID for unique identification
  reviewerName: string
  rating: number // Numerical rating for clarity
  reviewText: string
  reviewDate: Date
}
