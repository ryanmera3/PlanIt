import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class ProjectsService {
  async getProjects(query = {}) {
    const res = await dbContext.Projects.find(query).populate('creator', 'name')
    console.log(res)
    return res
  }

  async getProjectById(id) {
    const found = await dbContext.Projects.findById(id).populate('creator', 'name')
    if (!found) {
      throw new BadRequest('invalid ID')
    }
    return found
  }

  async createProject(projectData) {
    const newProject = await dbContext.Projects.create(projectData)
    return newProject
  }

  async deleteProject(id, userId) {
    const found = await this.getProjectById(id)
    if (found.creatorId.toString() !== userId) {
      throw new Forbidden('You do not have permission to delete this')
    }
    await dbContext.Projects.findByIdAndDelete(id)
  }
}

export const projectsService = new ProjectsService()
