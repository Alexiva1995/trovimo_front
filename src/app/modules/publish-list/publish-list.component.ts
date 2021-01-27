import { ProjectService } from './../../services/project/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project.model';
import { OPTIONS } from 'src/app/models/typeOptions';

@Component({
  selector: 'app-publish-list',
  templateUrl: './publish-list.component.html',
  styleUrls: ['./publish-list.component.scss'],
})
export class PublishListComponent implements OnInit {
  type: any;
  openFilter = -1;
  min = 10;
  max = 10000000;
  steps = 10;
  viewType = 0;
  projects: Project;
  filter: any = [];
  price: any = {};
  area: any = {};
  options = OPTIONS;
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
    this.service.searchProject(this.filter).subscribe(
      (res) => {
        this.projects = res.project;
        console.log(this.projects);
      },
      (err) => {
        this.toastr.error('Error al realizar al consulta.');
      }
    );
  }

  show(evt) {
    console.log(evt);
  }

  setArea(min, max) {
    this.area.min = min;
    this.area.max = max;
    console.log(this.area);
  }

  setPrice(min, max) {
    this.price.min = min;
    this.price.max = max;
    console.log(this.price);
  }
}
