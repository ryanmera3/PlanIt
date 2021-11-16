import { tasksService } from '../services/TasksService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class TasksController extends BaseController {
  constructor() {
    super('api/projects/:projectid/tasks')
    this.router
      .get('', this.getTasks)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTask)
      .put('/:taskId', this.editTask)
      .delete('/:taskId', this.removeTask)
  }

  async getTasks(req, res, next) {
    try {
      req.body.projectId = req.params.projectid
      const task = await tasksService.getTasks(req.body)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async createTask(req, res, next) {
    try {
      req.body.projectId = req.params.projectid
      req.body.creatorId = req.userInfo.id
      req.body.creator = req.userInfo
      const newTask = await tasksService.createTask(req.body)
      newTask.creator = req.userInfo
      return res.send(newTask)
    } catch (error) {
      next(error)
    }
  }

  async editTask(req, res, next) {
    try {
      req.body.id = req.params.taskId
      req.body.creatorId = req.userInfo.id
      const editedTask = await tasksService.editTask(req.body)
      return res.send(editedTask)
    } catch (error) {
      next(error)
    }
  }

  async removeTask(req, res, next) {
    try {
      req.body.id = req.params.taskId
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      await tasksService.removeTask(req.body)
      return res.send('Deleted')
    } catch (error) {
      next(error)
    }
  }
}
