import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth/auth.service';
import { ProjectService } from '../../services/project/project.service';


@Component({
  selector: 'app-find-experts',
  templateUrl: './find-experts.component.html',
  styleUrls: ['./find-experts.component.scss']
})
export class FindExpertsComponent implements OnInit {
  @Input() area: string;
  @Input() address: string;
  areas: any;
  loading: boolean;

  constructor(
    private authService: AuthService,
    private projectService: ProjectService
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.AreasPopulares();
  }

  BuscarCompany() {
    this.projectService.getExpert(this.address, this.area).subscribe((data: any) => {
      this.areas = data.message;
    }, (errorServicio) => {
      console.log("Ha Ocurrido un error inesperado.")
    });

  }

  AreasPopulares() {
    this.projectService.getAreas().subscribe((data: any) => {
      this.areas = data.areas;
      this.loading = false;
      console.log(this.areas)
    }, (errorServicio) => {
      console.log("Ha Ocurrido un error inesperado.")
    });
  }
  filterItemsOfType(type) {
    if (type == 1) { return this.areas.filter(areas => areas.type == 'Services'); }
    if (type == 2) { return this.areas.filter(areas => areas.type == 'Remodeling'); }
    if (type == 3) { return this.areas.filter(areas => areas.type == 'Desing & Contruction'); }
    if (type == 4) { return this.areas.filter(areas => areas.type == 'Providers'); }
  }

}
