import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { sprintsService } from '../services/SprintsService'

export class SprintsController extends BaseController {
  constructor() {
    super('api/projects/:projectid/sprints')
    this.router
      .get('', this.getSprints)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSprint)
      .delete('/:sprintid', this.deleteSprint)
  }

  async getSprints(req, res, next) {
    try {
      req.body.projectId = req.params.projectid
      const newSprint = await sprintsService.getSprints(req.body)
      return res.send(newSprint)
    } catch (error) {
      next(error)
    }
  }

  async createSprint(req, res, next) {
    try {
      req.body.projectId = req.params.projectid
      req.body.creatorId = req.userInfo.id
      req.body.creator = req.userInfo
      const newSprint = await sprintsService.createSprint(req.body)
      newSprint.creator = req.userInfo
      return res.send(newSprint)
    } catch (error) {
      next(error)
    }
  }

  async deleteSprint(req, res, next) {
    try {
      await sprintsService.deleteSprint(req.params.sprintid, req.userInfo.id)
      return res.send('Deleted')
    } catch (error) {
      next(error)
    }
  }
}
