import { AppState } from "../AppState"
import { api } from "./AxiosService"

class NotesService {
  async getNotes(projectId){
    const res = await api.get(`/api/projects/${projectId}/notes`)
    AppState.tasks = res.data
  }
  async createNotes(body){
    const res = await api.post(`/api/projects/${project.id}/notes`, body)
    AppState.notes.unshift(res.data)
  }

  async deleteNotes(projectId, noteId){
    await api.delete(`/api/projects/${projectId}/notes/${noteId}`)
    AppState.notes = AppState.notes.filter(n => n.id !== noteId)
  }
}

export const notesService = new NotesService()