import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {
  async editProfile(body) {
    const res = await api.put('/account' + body)
    logger.log(res.data)
    AppState.user = res
  }

}

export const profileService = new ProfileService()