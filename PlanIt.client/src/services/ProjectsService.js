import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ProjectsService {
  async getProjects(){
    const res = await api.get('api/projects/')
    logger.log(res.data)
    AppState.projects = res.data
    
  }
  async createProject(body){
    const res = await api.post('api/projects', body)
    logger.log(res.data)
    AppState.projects.unshift(res.data)
    return res.data
  }
  async removeProject(id){
    const res = await api.delete('api/projects/' + id)
    logger.log(res.data)
    const found = AppState.projects.findIndex(p => p.id == id)
    AppState.projects.splice(found,1)
    logger.log(AppState.projects)
  }
}

export const projectsService = new ProjectsService()