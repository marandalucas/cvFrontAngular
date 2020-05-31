import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {
  arrProjects: Project[];
  constructor() {

    this.arrProjects = [
      {
        nombre: '10minutes',
        descripcion: 'The best project',
        imagenes: [],
        url: 'http://www.thebestproject.com',
        ano: 2019,
        cliente: 'iam',
        urlClient: 'http://www.thebestproject.com',
        categoria: 'web',
        tecnologias: 'all kind',
      }];
  }
  getProjects(){
    return this.arrProjects;
  }
}
