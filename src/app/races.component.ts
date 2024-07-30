import { Component } from '@angular/core';

interface RaceModel {
  name: string;
}

@Component({
  selector: 'ns-races',
  template: `<h2>Races</h2>
    <button (click)="refreshRaces()">Refresh the racers list</button>
    <p>{{ races.length }} Races</p>`,
  standalone: true,
})
export class RacesComponent {
  races: Array<RaceModel> = [];

  refreshRaces(): void {
    this.races = [{ name: 'London' }, { name: 'Lyon' }];
  }
}
