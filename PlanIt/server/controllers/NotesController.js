import { notesService } from '../services/NotesService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class NotesController extends BaseController {
  constructor() {
    super('api/projects/:projectId/notes')
    this.router
      .get('', this.getNotes)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .delete('/:noteId', this.deleteNote)
  }

  async getNotes(req, res, next) {
    try {
      req.body.projectId = req.params.projectId
      const notes = await notesService.getNotes(req.body)
      return res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async createNote(req, res, next) {
    try {
      req.body.projectId = req.params.projectId
      req.body.creatorId = req.userInfo.id
      req.body.creator = req.userInfo
      const newNote = await notesService.createNote(req.body)
      newNote.creator = req.userInfo
      return res.send(newNote)
    } catch (error) {
      next(error)
    }
  }

  async deleteNote(req, res, next) {
    try {
      req.body.id = req.params.noteId
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      await notesService.deleteNote(req.body)
      return res.send('Delete')
    } catch (error) {
      next(error)
    }
  }
}
