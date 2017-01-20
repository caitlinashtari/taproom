import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <hr>
  <h5>Add a New Keg:</h5>
  <form class="form-group">
    <label for="brand">Brewery</label>
    <input #brand class="form-control" name="brand">
    <label for="name">Beer</label>
    <input #name class="form-control" name="name">
    <label for="style">Style</label>
    <input #style class="form-control" name="style">
    <label for="price">Price</label>
    <input #price class="form-control" name="price">
    <label for="alcoholContent">ABV</label>
    <input #alcoholContent class="form-control" name="alcoholContent">
    <br>
    <button class="btn btn-primary" type="button" (click)="submitForm(brand.value, name.value, style.value, price.value, alcoholContent.value);">Add Keg</button>
  </form>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(brand: string, name: string, style: string, price: number, alcoholContent: number) {
    var newKeg: Keg = new Keg(name, brand, style, price, alcoholContent);
    this.newKegSender.emit(newKeg);
  }
}
