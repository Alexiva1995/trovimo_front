import {
  Component, OnInit, ElementRef, Renderer2, ViewChild, HostListener
} from '@angular/core';


@Component({
  selector: 'app-find-photos',
  templateUrl: './find-photos.component.html',
  styleUrls: ['./find-photos.component.scss']
})
export class FindPhotosComponent implements OnInit {

  @ViewChild('grid', { static: true }) grid: ElementRef;

  show: boolean = true;
  searchValue: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => this.resizeAllItem(), 1000);
  }

  @HostListener('window:keydown', ['$event'])
  getFindPhotosKeyDown(event){

    if(event.keyCode === 13){

      console.log( this.searchValue );

    }

  }

  getFindPhotosClick(){
      console.log( this.searchValue );
  }

  @HostListener('window:resize')
  resizeAllItemonEvent(): void {
    this.resizeAllItem();
  }

  resizeAllItem(): void {

    Array.from(this.grid.nativeElement.children).forEach((child: any, i) => {
      this.resizeGridItem(child);
    })

  }

  resizeGridItem(child: any): void {

    const rowHeight = this.getParserIntComputedStyle(this.grid.nativeElement, 'grid-auto-rows');

    const rowGap = this.getParserIntComputedStyle(this.grid.nativeElement, 'grid-row-gap');

    const rowSpan = Math.ceil((child.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

    this.renderer.setStyle(child, 'gridRowEnd', `span ${rowSpan}`);

  }

  getParserIntComputedStyle(element: any, selector: string): number {
    return parseInt(window.getComputedStyle(element).getPropertyValue(selector));
  }

}
