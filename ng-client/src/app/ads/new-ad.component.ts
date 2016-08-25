import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdComponent } from './ad.component';
import {Ad} from './ad';
@Component({
  selector: 'new-ad',
  template: `

    <form [formGroup]="newAdForm" (ngSubmit)="save()">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" id="title"  [(ngModel)]="ad.title" formControlName="title">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea rows=5 class="form-control" id="description" [(ngModel)]="ad.description" formControlName="description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
  `,
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class NewAdComponent implements OnInit{
  newAdForm: FormGroup;
  ad = new Ad();
  constructor(private fb: FormBuilder){

  }
  ngOnInit(){
    this.newAdForm = this.fb.group({
      title: [],
      description: []
    })
  }

}
