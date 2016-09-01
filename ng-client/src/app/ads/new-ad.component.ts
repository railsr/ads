import { Component, Output, EventEmitter } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdService } from './ad.service';
import {Ad} from './ad';

@Component({
  selector: 'new-ad',
  template: `

    <form [formGroup]="newAdForm" (ngSubmit)="onCreateAd()">
      <div >
        <div class="form-group" >
          <label>Title</label>
          <input type="text" class="form-control" id="title"  [(ngModel)]="ad.title" formControlName="title">
          <div class="alert alert-danger" *ngIf="newAdForm.get('title').dirty && newAdForm.get('title').hasError('required')">Title can't be blank</div>
          <div class="alert alert-danger" *ngIf="newAdForm.get('title').dirty && newAdForm.get('title').hasError('minlength')">Min length {{newAdForm.get('title').errors.minlength.requiredLength}}</div>

        </div>
        <div class="form-group" >
          <label>Description</label>
          <textarea rows=5 class="form-control" id="description" [(ngModel)]="ad.description" formControlName="description"></textarea>
        </div>
      </div>

      <button type="submit" class="btn btn-primary" [disabled]="!newAdForm.valid">Submit</button>
    </form>
    <div class="media well">
      <div class="media-left">

      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ad.title}}</h4>
        <p [innerHTML] = "ad.description | md"><p><br/>
      </div>
    </div>
  `,
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  providers: [AdService]
})

export class NewAdComponent {
  newAdForm: FormGroup;
  ads: Ad[] = [];
  ad: Ad = new Ad();
  @Output() createAd = new EventEmitter();

  constructor(private _fb: FormBuilder, private _adService: AdService) {
    this.newAdForm = _fb.group({
      title: _fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
      description: _fb.control('')
    });
  }

  onCreateAd() {
    return this._adService.postAd(this.newAdForm.value).subscribe(x => {
      console.log(x);
      this.createAd.next(x);
    });
  }
}
