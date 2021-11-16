import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class TasksService {
  async getTasks(body) {
    const res = await dbContext.Tasks.find(body).populate('sprint', 'projectId sprintId')
    return res
  }

  async createTask(body) {
    const res = await dbContext.Tasks.create(body)
    return res
  }

  async editTask(body) {
    const found = await await dbContext.Tasks.findById(body.id)
    if (!found) {
      throw new BadRequest('Invalid Id good sir')
    }
    const updatedTask = await dbContext.Tasks.findByIdAndUpdate(body.id, body)
    return updatedTask
  }

  async removeTask(body) {
    const found = await dbContext.Tasks.findById(body.id)
    if (!found) {
      throw new BadRequest('No task found good buddy')
    }
    if (found.creatorId.toString() !== body.creatorId) {
      throw new Forbidden("No way buddy you don't own this")
    }
    await dbContext.Tasks.findByIdAndDelete(body.id)
  }
}

export const tasksService = new TasksService()
