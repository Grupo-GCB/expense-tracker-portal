import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

import { DEFAULT_UNKNOWN_ERROR_MESSAGE } from "@/utils/constants";

async function sessionAuth(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userSession = await getSession(req, res);
    res.status(200).json({ userSession });
  } catch (error: any) {
    console.error("Error obtaining the session: ", error);
    res
      .status(error.status || 500)
      .json({ error: error.message || DEFAULT_UNKNOWN_ERROR_MESSAGE });
  }
}

export default withApiAuthRequired(sessionAuth);
