import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

async function accessTokenAuth(req: NextApiRequest, res: NextApiResponse) {
  const { accessToken } = await getAccessToken(req, res)
  res.status(200).json({ accessToken })
}

export default withApiAuthRequired(accessTokenAuth)
