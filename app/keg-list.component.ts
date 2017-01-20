import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'keg-list',
  template: `
  <div class="row">
    <div class="col-sm-2 heading">
      <h5>Brewery</h5>
    </div>
    <div class="col-sm-2 heading">
      <h5>Beer</h5>
    </div>
    <div class="col-sm-2 heading">
      <h5>Style</h5>
    </div>
    <div class="col-sm-1 heading">
      <h5>Price</h5>
    </div>
    <div class="col-sm-1 heading">
      <h5>ABV</h5>
    </div>
    <div class="col-sm-4 heading">
      <h5>Remaining Pints</h5>
    </div>
  </div>
  <div class="row" *ngFor="let currentKeg of childKegList | price">
    <div class="col-sm-2 cell">
      <p>{{currentKeg.brand}}</p>
    </div>
    <div class="col-sm-2 cell" >
      <p>{{currentKeg.name}}</p>
    </div>
    <div class="col-sm-2 cell" >
      <p>{{currentKeg.style}}</p>
    </div>
    <div class="col-sm-1 cell price" >
      <p *ngIf="currentKeg.price" [class]=priceColor(currentKeg)>{{currentKeg.price | currency:'USD':true}}</p>
    </div>
    <div class="col-sm-1 cell" >
      <p>{{currentKeg.alcoholContent}}</p>
    </div>
    <div class="col-sm-1 cell" >
      <p [class]="priorityColor(currentKeg)">{{currentKeg.pints}}</p>
    </div>
    <div class="col-sm-2">
      <button class="btn btn-primary" (click)="sellPintClicked(currentKeg)">Sell Pint</button>
    </div>
    <div class="col-sm-1">
    <a class="waves-effect waves-light btn" href="#modal1" (click)="editKegButtonClicked(currentKeg)">
Edit</a>
    </div>
  </div>
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>

  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();

  sellPintClicked(keg: Keg) {
    this.sellSender.emit(keg);
  }

  editKegButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

    priorityColor(currentKeg){
      if(currentKeg.pints <= 10){
        return "bg-danger";
      } else if (currentKeg.pints <= 20) {
        return "bg-warning";
      }
    }

    priceColor(currentKeg){
      if(currentKeg.price < 5){
        return "cheap";
      } else if(currentKeg.price === 5){
        return "kinda-cheap";
      } else if(currentKeg.price > 5){
        return "expensive";
      }
    }
}
