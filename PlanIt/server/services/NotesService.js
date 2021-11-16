import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class NotesService {
  async getNotes(body) {
    const res = await dbContext.Notes.find({}).populate('task', 'taskId projectId')
    return res
  }

  async createNote(body) {
    const res = await dbContext.Notes.create(body)
    return res
  }

  async deleteNote(body) {
    const found = await dbContext.Notes.findById(body.id)
    if (!found) {
      throw new BadRequest('No task found good buddy')
    }
    if (found.creatorId.toString() !== body.creatorId) {
      throw new Forbidden("No way buddy you don't own this")
    }
    await dbContext.Notes.findByIdAndDelete(body.id)
  }
}

export const notesService = new NotesService()
