import { Component, OnInit } from '@angular/core';
import {MainInfo} from '../../models/main-info';
import Swal from 'sweetalert2';
import {AuthService} from '../../services/auth/auth.service';
import {ProjectService} from '../../services/project/project.service';
import {DetailInfo} from '../../models/detail-info';

@Component({
  selector: 'app-new-publish',
  templateUrl: './new-publish.component.html',
  styleUrls: ['./new-publish.component.scss']
})
export class NewPublishComponent implements OnInit {
  page = 1;
  type = 1;
  optionType = 0;
  mainInfo: MainInfo;
  detail: DetailInfo;
  images = [];
  imagesReader = [];
  videos = [];
  videosReader = [];
  constructor(
    private authService: AuthService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  setPage(i: number): void {
    this.page = i;
    if (i === 2 && !this.mainInfo) {
      this.mainInfo = new MainInfo(this.type, this.optionType);

    }
    if (i === 3 && !this.detail) {
      this.detail = new DetailInfo();
    }
  }
  setNamePage(): string {
    switch (this.page) {
      case 1: return 'Publish';
      case 2: return 'Main info';
      case 3: return 'Details';
      default:
        return 'publish';
    }
  }
  setMainInfo(data): void {
    this.mainInfo = data.mainInfo;
    this.images = data.images;
    this.videos = data.videos;
  }
  setDetailInfo(data): void {
    this.detail = data.data;
    if (data.skip) {
      this.onSave();
    }
  }
  disableBtn(): boolean {
    return (this.page === 1 && this.optionType === 0) ||
      (this.page === 2 && this.images.length <= 0);
  }
  async onSave() {
    if (!this.authService.isLogged()) {
      Swal.fire({
        icon: 'error',
        title: 'Authentication required',
        text: 'You need log in to create a project',
      });
      return;
    }
    Swal.fire({
      title: 'Loading data',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        Swal.update({
          text: 'Saving data project'
        });
        this.projectService.createProject(this.mainInfo, 'new-product')
          .subscribe( async (response) => {
            const id = response.message.id;
            Swal.update({
              text: 'Uploading multimedia files'
            });
            for await (const video of this.videos) {
              const formData = new FormData();
              formData.append('video', video);
              formData.append('product_id', id);
              this.projectService.uploadVideo(formData, 'add-video-product').subscribe(responseVideo => {
                console.log(responseVideo);
              }, err => {
                Swal.fire({
                  title: 'An error ocurred',
                  icon: 'error'
                });
              });
            }
            for await (const image of this.images) {
              const formData = new FormData();
              formData.append('photo', image);
              formData.append('product_id', id);
              this.projectService.uploadImage(formData, 'add-photo-product').subscribe(responseImage => {
                console.log(responseImage);
              }, err => {
                Swal.fire({
                  title: 'An error ocurred',
                  icon: 'error'
                });
              });
            }
            Swal.update({
              text: 'Saving detail information'
            });
            this.detail.product_id = id;
            this.projectService.saveDetailInfo(this.detail, 'optional-product').subscribe(responseDetail=> {
            });
            Swal.fire({
              title: 'Your project has been created successfully',
              icon: 'success'
            });
        }, err => {
            Swal.fire({
              title: 'An error ocurred',
              icon: 'error'
            });
          });
      }
    });
  }
}
