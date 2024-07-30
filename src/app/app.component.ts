import { Component } from '@angular/core';
import { RacesComponent } from './races.component';

@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [RacesComponent],
  template: ` <h1>PonyRacer</h1>
    <ns-races />`,
  styleUrl: './app.component.css',
})
export class AppComponent {}
