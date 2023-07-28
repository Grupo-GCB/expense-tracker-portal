// sessionAuth.test.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '@auth0/nextjs-auth0'

import sessionAuth from '../../pages/api/sessionAuth'

jest.mock('@auth0/nextjs-auth0', () => ({
  getSession: jest.fn(),
  withApiAuthRequired: (
    handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>,
  ) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      await handler(req, res)
    }
  },
}))

describe('sessionAuth', () => {
  it('should respond with userSession when getSession resolves', async () => {
    const req: NextApiRequest = {} as any
    const res: NextApiResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any

    const userSession = { user: { name: 'John Doe' } }
    ;(getSession as jest.Mock).mockResolvedValue(userSession)

    await sessionAuth(req, res)

    expect(getSession).toHaveBeenCalledWith(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ userSession })
  })

  it('should respond with error when getSession rejects', async () => {
    const req: NextApiRequest = {} as any
    const res: NextApiResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any

    const error = { message: 'Session error', status: 400 }
    ;(getSession as jest.Mock).mockRejectedValue(error)

    await sessionAuth(req, res)

    expect(getSession).toHaveBeenCalledWith(req, res)
    expect(res.status).toHaveBeenCalledWith(error.status || 500)
    expect(res.json).toHaveBeenCalledWith({
      error: error.message || 'Something went wrong',
    })
  })
})
