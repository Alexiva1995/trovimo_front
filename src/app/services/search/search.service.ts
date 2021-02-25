import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }


  setFilters(data) {
    this.messageSource.next(data);
  }
}
