import axios from 'axios'
import AxiosMocker from 'axios-mock-adapter'

const mockIdToken = 'anyToken'

const token = {
  idToken: mockIdToken,
  id: 1,
}

const errorMessage = 'Error message'

describe('Home', () => {
  const mock = new AxiosMocker(axios)

  afterEach(() => {
    mock.reset()
  })

  it('should be able to return user session with correct id token', async () => {
    const axiosGetMock = jest.spyOn(axios, 'get')
    axiosGetMock.mockResolvedValueOnce({
      data: { userSession: token.idToken },
    })

    const result = await axios.get('/api/sessionAuth')

    expect(axiosGetMock).toHaveBeenCalledWith('/api/sessionAuth')
    expect(result.data).toEqual({ userSession: token.idToken })

    axiosGetMock.mockRestore()
  })

  it('should be able to return error during user session retrieval', async () => {
    const axiosGetMock = jest.spyOn(axios, 'get')
    axiosGetMock.mockRejectedValueOnce(new Error(errorMessage))

    try {
      await axios.get('/api/sessionAuth')
    } catch (error: unknown) {
      expect(error instanceof Error).toBe(true)
      expect((error as Error).message).toBe(errorMessage)
    }

    expect(axiosGetMock).toHaveBeenCalledWith('/api/sessionAuth')

    axiosGetMock.mockRestore()
  })

  it('should be able to send the id token to API successfully if different from saved id token', async () => {
    mock.onPost('usersToken').reply(200, { token: token.idToken })

    const response = await axios.post('usersToken', {
      token: token.idToken,
    })

    expect(response.status).toBe(200)
    expect(response.data).toEqual({ token: token.idToken })
  })

  it('should be able to return error when sending id token to API if it matches saved id token', async () => {
    mock.onPost('usersToken').reply(400, errorMessage)

    await expect(
      axios.post('usersToken', {
        token: token.idToken,
      }),
    ).rejects.toMatchObject({
      response: {
        status: 400,
        data: errorMessage,
      },
    })
  })
})
