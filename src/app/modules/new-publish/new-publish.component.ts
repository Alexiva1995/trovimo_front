import { Component, OnInit } from '@angular/core';
import {MainInfo} from '../../models/main-info';
import Swal from 'sweetalert2';
import {AuthService} from '../../services/auth/auth.service';
import {ProjectService} from '../../services/project/project.service';
import {DetailInfo} from '../../models/detail-info';
//import { SharedModel } from 'src/app/models/shared.model';

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
  //sharedInfo: SharedModel;
  detail: DetailInfo;
  images = [];
  imagesReader = [];
  videos = [];
  videosReader = [];
  optionId = '';
  optionVideoType = '';
  optionPhotoType = '';
  optionalType = '';
  photoType = '';
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
        
        switch (this.mainInfo.option_id) {
          case 1:
            this.optionId = 'new-product';
            this.optionVideoType = 'add-video-product';
            this.optionPhotoType = 'add-photo-product';
            this.optionalType = 'optional-product';
            this.photoType = 'product_id';
            break;
          case 2:
            this.optionId = 'new-product';
            this.optionVideoType = 'add-video-product';
            this.optionPhotoType = 'add-photo-product';
            this.optionalType = 'optional-product'
            this.photoType = 'product_id';
            break;
          case 3:
            this.optionId = 'new-shared-space';
            this.optionVideoType = 'add-video-shared-space';
            this.optionPhotoType = 'add-photo-shared-space';
            this.optionalType = 'optional-shared-space';
            console.log(this.mainInfo);
            this.setSharedSpace();
            console.log('final ', this.mainInfo)

            break;
          case 4:
            this.optionId = 'new-project';
            this.optionVideoType = 'add-video-project';
            this.optionPhotoType = 'add-photo-project';
            this.optionalType = 'optional-project';
            this.photoType = 'project_id';
          default:
            break;
        }
        
        this.projectService.createProject(this.mainInfo, this.optionId)
          .subscribe( async (response) => {
            console.log(response); 
            const id = response.message.id;
            Swal.update({
              text: 'Uploading multimedia files'
            });
            for await (const video of this.videos) {
              const formData = new FormData();
              formData.append('video', video);
              formData.append(this.photoType, id);
              this.projectService.uploadVideo(formData, this.optionVideoType).subscribe(responseVideo => {
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
              formData.append(this.photoType, id);
              this.projectService.uploadImage(formData, this.optionPhotoType).subscribe(responseImage => {
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
            this.projectService.saveDetailInfo(this.detail, this.optionalType).subscribe(responseDetail=> {
            });
            Swal.fire({
              title: 'Your project has been created successfully',
              icon: 'success'
            });
        }, err => {
          console.log(err);
            Swal.fire({
              title: 'An error ocurred',
              icon: 'error'
            });
          });
      }
    });
  }

  setSharedSpace(): void{
    delete this.mainInfo.peths;
    delete this.mainInfo.furnished;
    delete this.mainInfo.typesp;
    delete this.mainInfo.bathroom;
    delete this.mainInfo.show_available_date;
    delete this.mainInfo.available_date;
  }
}
