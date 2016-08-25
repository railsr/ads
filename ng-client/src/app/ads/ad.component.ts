import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ad',
  template: `
  <div class="media well">
    <div class="media-left">

    </div>
    <div class="media-body">
      <h4 class="media-heading"><a [routerLink]="['/ads', data.id]">{{data.attributes.title}}</a> </h4>
      {{data.attributes.description}}<br/>
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
