import { Component, Input } from '@angular/core';

@Component({
  selector: 'ad',
  template: `
  <div class="media well">
    <div class="media-left">

    </div>
    <div class="media-body">
      <h4 class="media-heading"><a [routerLink]="['/ads', data.id]">{{data.attributes.title}}</a> </h4>
      <p [innerHTML] = "data.attributes.description | md"></p><br/>
    </div>
  </div>
  `,
  styles: [`
    .media {
      margin: 20px;
    }
  `]
})
export class AdComponent {
  @Input() data;
}
