import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  arrProjects: Project[];
  baseUrl: string;
  projectsUrl: string;
  tokenUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://cv-back-marcos.herokuapp.com';
    this.projectsUrl = '/api/proyectos';
    this.tokenUrl = '/api/token';

    this.getToken();
  }

  getToken(): void {

    let objToken: any;
    this.httpClient.get(this.baseUrl + this.tokenUrl).subscribe(value => {
      objToken = value;
      localStorage.setItem('token', objToken.token);
    })
  }

  getAllProjects() : Promise<Project[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': localStorage.getItem('token'),
      })
    };
    return this.httpClient.get<Project[]>(this.baseUrl + this.projectsUrl, httpOptions).toPromise()
  }

  getProjectsByCategory(projectCategory: string) : Promise<Project[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': localStorage.getItem('token'),
      })
    };

    return this.httpClient.get<Project[]>(this.baseUrl + this.projectsUrl + '/' + projectCategory, httpOptions).toPromise()
  }

}
