import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-carousel-navigation',
  templateUrl: './ngbd-carousel-navigation.component.html'
})
export class NgbdCarouselNavigation {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1, 1073, 153, 160, 20, 2].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
