import { type IBook } from '@/api/database/models'
import { Schema, model, type Document } from 'mongoose'

interface IReview extends Document {
  reviewer: string
  text: string
  rating: number
}

const ReviewSchema = new Schema<IReview>({
  reviewer: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
})

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true, default: '' },
  authors: { type: [String], required: true },
  publisher: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  isbn: { type: String, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  numberOfPages: { type: Number, required: true },
  categories: { type: [String], required: true },
  coverImageUrl: { type: String },
  format: { type: String, required: true },
  ratings: {
    type: {
      averageRating: { type: Number, required: true },
      numberOfRatings: { type: Number, required: true },
    },
  },
  reviews: { type: [ReviewSchema], required: false },
})

export const BookModel = model<IBook>('IBook', BookSchema)
