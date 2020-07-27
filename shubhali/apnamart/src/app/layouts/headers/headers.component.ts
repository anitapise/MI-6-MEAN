import { Component, OnInit, ViewChild } from '@angular/core';
// import {
//   NgbCarousel,
//   NgbSlideEvent,
//   NgbSlideEventSource,
//   NgbCarouselConfig,
// } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-headers',
  templateUrl:'./headers.component.html',
  styleUrls:['./headers.component.css'
  ]
})
export class HeadersComponent implements OnInit {
  // showNavigationArrows = false;
  // showNavigationIndicators = false;
  ngOnInit(): void { }
  // constructor(config: NgbCarouselConfig) {
  //   config.showNavigationArrows = true;
  //   config.showNavigationIndicators = true;
  }
  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;

  // @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }
  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (
  //     this.unpauseOnArrow &&
  //     slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
  //       slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
  //   ) {
  //     this.togglePaused();
  //   }
  //   if (
  //     this.pauseOnIndicator &&
  //     !slideEvent.paused &&
  //     slideEvent.source === NgbSlideEventSource.INDICATOR
  //   ) {
  //     this.togglePaused();
  //   }
  //}

//}
