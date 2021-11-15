import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class SprintsService {
  async getSprints(body) {
    const res = await dbContext.Sprints.find(body).populate('project', 'projectId creatorId')
    return res
  }

  async createSprint(data) {
    const res = await dbContext.Sprints.create(data)
    await res.populate('project', 'projectId creatorId')
    return res
  }

  async deleteSprint(id, userId) {
    const found = await dbContext.Sprints.findById(id)
    if (found.creatorId.toString() !== userId) {
      throw new Forbidden('You do not have permission to delete this')
    }
    await dbContext.Sprints.findByIdAndDelete(id)
  }
}

export const sprintsService = new SprintsService()
