import { NextApiResponse, NextApiRequest } from 'next'
import axios from "axios"
import * as dotenv from 'dotenv'

dotenv.config();

export type Response = {
} 

const getSustainabilityPerformanceURL = (fundId: string) => `${process.env.API_BASE_URL}/funds/${fundId}/analytics?api-key=${process.env.API_KEY}`

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {

  const { id } = _req.query;
  if (!id || typeof id !== 'string') {
    return res.status(500).json({ error: 'no fund id provided' })
  }
console.log('q', _req.query);

  axios.get(getSustainabilityPerformanceURL(id))
  .then((response) => {
    return res.status(200).json(response.data)
  })
  .catch((error) => res.status(error.response.status).json(error))
}