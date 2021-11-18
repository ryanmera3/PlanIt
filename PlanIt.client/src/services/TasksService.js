import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class TasksService {
  async createTask(body, sprintId, projectId) {
    body.sprintId = sprintId
    const res = await api.post(`api/projects/${projectId}/tasks`, body)
    AppState.tasks.unshift(res.data)
  }
  async getTasks(projectId) {
    const res = await api.get(`/api/projects/${projectId}/tasks`)
    logger.log('tasks', res.data)
    AppState.tasks = res.data
  }
  async checkTask(body, projectId) {
    body.isComplete = !body.isComplete
    await api.put(`/api/projects/${projectId}/tasks/${body.id}`, body)
    this.getTasks(projectId)

  }
}

export const tasksService = new TasksService