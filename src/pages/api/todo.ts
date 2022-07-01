import type { NextApiRequest, NextApiResponse } from 'next'
import { createTodo, getAllTodos } from '../../lib/db'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'POST') {
    const data = JSON.parse(req.body)
    await createTodo(data)
    return res.status(200).json({ message: 'Success' })
  } else if (req.method === 'GET') {
    const data = await getAllTodos()
    return res.status(200).json(data)
  }
  res.status(200).json({ name: 'John Doe' })
}
