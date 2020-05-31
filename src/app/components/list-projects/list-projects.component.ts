import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectsServiceService } from '../../services/projects-service.service';
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  arrProjects: Project[];

  constructor(private ProjectServices: ProjectsServiceService) {
    this.arrProjects = this.ProjectServices.getProjects();
  }

  ngOnInit(): void {
    console.log(this.arrProjects);
  }

}
