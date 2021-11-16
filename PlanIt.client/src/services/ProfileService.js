import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {
  async editProfile(body) {
    logger.log(body)
    const res = await api.put('account', body)
    logger.log(res.data)
    AppState.account = res.data
  }

}

export const profileService = new ProfileService()