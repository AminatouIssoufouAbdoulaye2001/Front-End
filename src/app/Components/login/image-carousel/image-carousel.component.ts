import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit,AfterViewChecked {

  assetImages = [
    /* {
      id: 1,
      path: 'assets/img/login/first.webp',
    },
    {
      id: 2,
      path: 'assets/img/login/second.webp',
    },*/
    {
      id: 3,
      path: 'assets/images/image4.jpg'
    },
    {
      id: 4,
      path: 'assets/images/image4.jpg',
    },
    {
      id: 5,
      path: 'assets/images/image4.jpg',
    },
    {
      id: 6,
      path: 'assets/images/image4.jpg',
    },
  ];


  showSkeleton: boolean = true;
  carouselState: string = 'skeleton';

  constructor() {}
  ngOnInit(): void {
      
  }
  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.carouselState = 'image';
      this.showSkeleton = false;
    }, 2000);
  }
  }


