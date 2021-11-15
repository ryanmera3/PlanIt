import { dbContext } from '../db/DbContext'

class TasksService {
  async getTasks(body) {
    const res = await dbContext.Tasks.find(body).populate('sprint', 'projectId sprintId')
    return res
  }
}

export const tasksService = new TasksService()
