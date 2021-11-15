import { sprintsService } from '../services/SprintsService'
import BaseController from '../utils/BaseController'

export class TasksController extends BaseController {
  constructor() {
    super('api/projects/:projectid/tasks')
    this.router
      .get('', this.getTasks)
  }

  async getTasks(req, res, next) {
    try {
      const newTask = await sprintsService.getSprints(req.body)
      return res.send(newTask)
    } catch (error) {
      next(error)
    }
  }
}
