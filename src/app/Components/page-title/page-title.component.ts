import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {

  @Input() heading: any;
  @Input() subheading: any;
  @Input() icon: any;

}
