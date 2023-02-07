import mongoose from 'mongoose'
export const dbConnect = async () => {
  try {
    mongoose.set('strictQuery', false)
    const db = await mongoose.connect('mongodb://localhost:27017/trpcdb')
    console.log(
      '🚀 ~ file: db.ts:6 ~ dbConnect ~ Database is connected',
      db.connection.db.databaseName
    )
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.log('🚀 ~ file: db.ts:6 ~ dbConnect ~ error', error)
    }
  }
}
