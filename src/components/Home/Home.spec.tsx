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

  it('should be able to return correct user id token', async () => {
    const axiosGetMock = jest.spyOn(axios, 'get')
    axiosGetMock.mockResolvedValueOnce({
      data: { userSession: token.idToken },
    })

    const result = await axios.get('/api/sessionAuth')

    expect(axiosGetMock).toHaveBeenCalledWith('/api/sessionAuth')
    expect(result.data).toEqual({ userSession: token.idToken })

    axiosGetMock.mockRestore()
  })

  it('should be able to return user session error', async () => {
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

  it('should be able to send the id token to API', async () => {
    mock.onPost('user/login').reply(200, { token: token.idToken })

    const response = await axios.post('user/login', {
      token: token.idToken,
    })

    expect(response.status).toBe(200)
    expect(response.data).toEqual({ token: token.idToken })
  })

  it('should be able to return error when fail to send id token to API', async () => {
    mock.onPost('user/login').reply(400, errorMessage)

    await expect(
      axios.post('user/login', {
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
