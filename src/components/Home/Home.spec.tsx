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
})
