import { Component, Input } from '@angular/core';

@Component({
  selector: 'ad',
  template: `
  <div class="media wellc">
    <div class="media-left">
      
    </div>
    <div class="media-body">
      <h4 class="media-heading"><a [routerLink]="['/ads', data.id]">{{data.attributes.title}}</a> </h4>
      <span class="">{{data.attributes.created}}</span>
      <p [innerHTML] = "data.attributes.description | md | truncate:data.id"></p>
    </div>
  </div>
  `
})
export class AdComponent {
  @Input() data;
}
