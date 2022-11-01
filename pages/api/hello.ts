import { NextApiResponse, NextApiRequest } from 'next'

export type Response = {
  message: string
} 

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  return res.status(200).json({ message: 'hi'})
}