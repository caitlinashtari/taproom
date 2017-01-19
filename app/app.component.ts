import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="well">Tap Room</h1>
    <div class="row">
      <div class="col s2 heading">
        <h5>Brewery</h5>
      </div>
      <div class="col s2 heading">
        <h5>Beer</h5>
      </div>
      <div class="col s2 heading">
        <h5>Style</h5>
      </div>
      <div class="col s1 heading">
        <h5>Price</h5>
      </div>
      <div class="col s1 heading">
        <h5>ABV</h5>
      </div>
      <div class="col s4 heading">
        <h5>Remaining Pints</h5>
      </div>
    </div>
    <div class="row" *ngFor="let currentKeg of kegs">
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
        <p [class]=priceColor(currentKeg)>{{currentKeg.price | currency:'USD':true}}</p>
      </div>
      <div class="col-sm-1 cell" >
        <p>{{currentKeg.alcoholContent}}</p>
      </div>
      <div class="col-sm-1 cell" >
        <p [class]="priorityColor(currentKeg)">{{currentKeg.pints}}</p>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary" (click)="sellPint(currentKeg)">Sell Pint</button>
      </div>
      <div class="col-sm-1">
      <a class="waves-effect waves-light btn" href="#modal1" (click)="editKeg(currentKeg)">
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
    <div *ngIf="selectedKeg">
      <h5>Edit {{selectedKeg.name}}</h5>
      <form class="form-group">
        <label for="brand">Brewery</label>
        <input [(ngModel)]="selectedKeg.brand" class="form-control" name="brand">
        <label for="name">Beer</label>
        <input [(ngModel)]="selectedKeg.name" class="form-control" name="name">
        <label for="style">Style</label>
        <input [(ngModel)]="selectedKeg.style" class="form-control" name="style">
        <label for="price">Price</label>
        <input [(ngModel)]="selectedKeg.price" class="form-control" name="price">
        <label for="alcoholContent">ABV</label>
        <input [(ngModel)]="selectedKeg.alcoholContent" class="form-control" name="alcoholContent">
        <br>
        <button class="btn" type="button" (click)="finishedEditing()">Done</button>
      </form>
    </div>

  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Dead Guy Ale', 'Rogue', 'Ale', 5, 6.5),
    new Keg('Impasse', 'Crux', 'Saison', 5, 6.6),
    new Keg('Mirror Pond', 'Deschutes', 'Pale Ale', 4, 5),
    new Keg('90 Minute IPA', 'Dogfish Head', 'India Pale Ale', 6, 9)
  ];

  selectedKeg = null;

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  sellPint(currentKeg){
    currentKeg.pints -= 1;
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

export class Keg {
  public pints: number = 21;
  constructor(public name: string, public brand: string, public style: string, public price: number, public alcoholContent: number){}
}
