import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SprintsService {
  async getSprints(projectId) {
    const res = await api.get(`/api/projects/${projectId}/sprints`)
    AppState.sprints = res.data
  }
  async createSprint(projectId, body) {
    const res = await api.post(`/api/projects/${projectId}/sprints`, body)
    AppState.sprints.unshift(res.data)
  }
}
export const sprintsService = new SprintsService()