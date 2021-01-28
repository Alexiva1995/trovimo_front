import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ExpertService } from '../../services/expert/expert.service';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-find-experts',
  templateUrl: './find-experts.component.html',
  styleUrls: ['./find-experts.component.scss'],
})
export class FindExpertsComponent implements OnInit {
  area: string;
  address: string;
  areas: any;
  loading: boolean;
  constructor(
    private authService: AuthService,
    private Expert: ExpertService,
    private Project: ProjectService,
    private router: Router
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.AreasPopulares();
  }

  BuscarCompany() {
    console.log("entro");
    this.router.navigate(['/publish-list/5'], { queryParams: { address: this.address, category: this.area} });
  }

  AreasPopulares() {
    this.Expert.getAreas().subscribe(
      (data: any) => {
        this.areas = data.areas;
        this.loading = false;
        console.log(this.areas);
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }

  filterItemsOfType(type) {
    if (type == 1) {
      return this.areas.filter((areas) => areas.type == 'Services');
    }
    if (type == 2) {
      return this.areas.filter((areas) => areas.type == 'Remodeling');
    }
    if (type == 3) {
      return this.areas.filter((areas) => areas.type == 'Desing & Contruction');
    }
    if (type == 4) {
      return this.areas.filter((areas) => areas.type == 'Providers');
    }
  }
}
