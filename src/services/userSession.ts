import axios from "axios"

import { ISession, IUserSessionResponse } from "@/interfaces"
import { UNKNOWN_ERROR } from "@/utils/constants"

const getUserSession = async (): Promise<ISession | undefined> => {
  try {
    const { data } = await axios.get<IUserSessionResponse>('/api/sessionAuth')
    return data.userSession
  } catch (error) {
    console.error(UNKNOWN_ERROR, error)
  }
}

export default getUserSession