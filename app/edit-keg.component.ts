import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <hr>
  <div *ngIf="childSelectedKeg">
    <h5>Edit {{childSelectedKeg.name}}</h5>
    <form class="form-group">
      <label for="brand">Brewery</label>
      <input [(ngModel)]="childSelectedKeg.brand" class="form-control" name="brand">
      <label for="name">Beer</label>
      <input [(ngModel)]="childSelectedKeg.name" class="form-control" name="name">
      <label for="style">Style</label>
      <input [(ngModel)]="childSelectedKeg.style" class="form-control" name="style">
      <label for="price">Price</label>
      <input [(ngModel)]="childSelectedKeg.price" class="form-control" name="price">
      <label for="alcoholContent">ABV</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent" class="form-control" name="alcoholContent">
      <br>
      <button class="btn" type="button" (click)="allDone()">Done</button>
    </form>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneSender = new EventEmitter();

  allDone(){
    this.doneSender.emit();
  }
}
