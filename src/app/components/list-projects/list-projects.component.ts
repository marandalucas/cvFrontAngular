import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  arrProjects: Project[];
  arrCategories: string[];

  constructor(private projectServices: ProjectsService) {
  }

  ngOnInit(): void {
    this.listProjects();
  }

async listProjects() {
  this.arrProjects = await this.projectServices.getAllProjects();
  console.log(this.arrProjects);
  const arrayStrings = this.arrCategories = this.arrProjects.map(project => {
    return project.categoria;
  })
  this.arrCategories = Array.from(new Set(arrayStrings));
    console.log(this.arrCategories)
  }

  async loadCategories(projectCategory = '') {
    if (projectCategory !== '') {
      this.arrProjects = await this.projectServices.getProjectsByCategory(projectCategory);
    } else {
        this.arrProjects = await this.projectServices.getAllProjects()
    }
  }
}