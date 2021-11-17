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
  async deleteSprint(projectId, sprintId) {
    await api.delete(`/api/projects/${projectId}/sprints/${sprintId}`)
    AppState.sprints = AppState.sprints.filter(s => s.id !== sprintId)
  }
}
export const sprintsService = new SprintsService()