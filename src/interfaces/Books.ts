export interface Books {
  title: string
  score?: number
  status: 'WANT_READ' | 'READING' | 'AlREADY_READ'
  image?: string
  author: string
  concludedAt?: string
}