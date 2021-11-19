import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { projectsService } from '../services/ProjectsService'

export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .get('', this.getProjects)
      .get('/:projectid', this.getProjectById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createProject)
      .delete('/:projectid', this.deleteProject)
  }

  async getProjects(req, res, next) {
    try {
      const query = { creatorId: req.userInfo.id }
      const result = await projectsService.getProjects(query)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async getProjectById(req, res, next) {
    try {
      const result = await projectsService.getProjectById(req.params.projectid)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async createProject(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.creator = req.userInfo
      const newProject = await projectsService.createProject(req.body)
      newProject.creator = req.userInfo
      return res.send(newProject)
    } catch (error) {
      next(error)
    }
  }

  async deleteProject(req, res, next) {
    try {
      await projectsService.deleteProject(req.params.projectid, req.userInfo.id)
      return res.send('Deleted')
    } catch (error) {
      next(error)
    }
  }
}
