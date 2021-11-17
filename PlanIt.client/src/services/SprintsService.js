import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SprintsService {
  async getSprints(projectId) {
    const res = await api.get(`/api/projects/${projectId}/sprints`)
    logger.log(res.data)
  }
}
export const sprintsService = new SprintsService()