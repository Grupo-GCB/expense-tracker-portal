import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

async function sessionAuth(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession(req, res)
  res.status(200).json({ session })
}

export default withApiAuthRequired(sessionAuth)
