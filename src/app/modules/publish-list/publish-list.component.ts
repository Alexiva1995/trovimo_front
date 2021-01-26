import { ProjectService } from './../../services/project/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-publish-list',
  templateUrl: './publish-list.component.html',
  styleUrls: ['./publish-list.component.scss'],
})
export class PublishListComponent implements OnInit {
  type: any;
  openFilter = -1;
  min = 0;
  max = 100;
  steps = 1;
  viewType = 0;
  projects: Project;
  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private toastr: ToastrService
  ) {
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.type);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    /*   let data = {
      type: this.type,
    }; */
    this.service.searchProject().subscribe(
      (res) => {
        this.projects = res.project;
        console.log(this.projects);
      },
      (err) => {
        this.toastr.error('Error al realizar al consulta.');
      }
    );
  }
}
