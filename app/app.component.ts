import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="well">Tap Room</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (sellSender)="sellPint($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Dead Guy Ale', 'Rogue', 'Ale', 5, 6.5),
    new Keg('Impasse', 'Crux', 'Saison', 5, 6.6),
    new Keg('Mirror Pond', 'Deschutes', 'Pale Ale', 4, 5),
    new Keg('90 Minute IPA', 'Dogfish Head', 'India Pale Ale', 6, 9)
  ];

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

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
}
