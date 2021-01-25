import { FindPhotosService }  from '../../services/find-photos/find-photos.service';
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

  show = true;
  result = null;
  loading = false;
  searchValues  = {
    title: '',
    types: '',
    styles: '',
    colors: '',
    tags: ''
  };
  types: any;
  styles: any;
  colors: any;
  tags: any;

  constructor(
    private renderer: Renderer2, 
    private service: FindPhotosService ) { }

  ngOnInit(): void {}

  getFindPhotos(search: string){

      if( search.length === 0 ){
        return;
      }

      this.loading = !this.loading;

      this.searchValues.title = search;

      this.service.getPhotos(this.searchValues).subscribe(async ( resp: any ) => {

        this.result = resp;
        this.loading = !this.loading;

      })

  }


  @HostListener('window:resize')
  resizeAllItemonEvent(): void {
    if (this.result?.length > 0) {
      this.resizeAllItem();
    }
  }


  resizeAllItem(): void {

    Array.from(this.grid.nativeElement.children).forEach((child: any, i) => {
      this.resizeGridItem(child);
    })

  }

  // calcular el grid-row-end
  resizeGridItem(child: any): void {

    const rowHeight = this.getParserIntComputedStyle(this.grid.nativeElement, 'grid-auto-rows');

    const rowGap = this.getParserIntComputedStyle(this.grid.nativeElement, 'grid-row-gap');

    const rowSpan = Math.ceil((child.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

    this.renderer.setStyle(child, 'gridRowEnd', `span ${rowSpan}`);

  }

  // formatear el computedStyle
  getParserIntComputedStyle( element: any, selector: string ): number {
    return parseInt( window.getComputedStyle( element ).getPropertyValue( selector ) );
  }


  setType( value: any ){
    this.searchValues.types = value
  }

  setStyles( value: any ){
    this.searchValues.styles = value
  }

  setColor( value: any ){
    this.searchValues.colors = value
  }

}
