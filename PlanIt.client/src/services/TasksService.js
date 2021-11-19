import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class TasksService {
  async createTask(body, sprintId, projectId) {
    body.sprintId = sprintId
    body.isComplete = false
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
    await this.getTasks(projectId)
  }
  async deleteTask(taskId, projectId) {
    await api.delete(`api/projects/${projectId}/tasks/${taskId}`)
    await this.getTasks(projectId)
  }
  async editTask(projectId, taskId, body) {
    const res = await api.put(`api/projects/${projectId}/tasks/${taskId}`, body)
    logger.log('HEllo friend', res.data)
    await this.getTasks(projectId)
  }
  async prepToMove(task, oldSprintId){
    task.sprintId = oldSprintId
    AppState.taskMove = task
  }
  async moveTasks(s, taskId, projectId){
    const res = await api.put(`api/projects/${projectId}/tasks/${taskId}`, {sprintId: s.id})
    logger.log(res.data)
    await this.getTasks(projectId)
  }

  async 
}

export const tasksService = new TasksService