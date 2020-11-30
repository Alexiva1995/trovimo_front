import { Component, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(feedbackmodal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(feedbackmodal,{
      animated: true
    });
  }
}
