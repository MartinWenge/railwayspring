import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCounterComponent } from './store/my-counter/my-counter.component';
import { WorkitemsComponent } from './store/workitems/workitems.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCounterComponent, WorkitemsComponent, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'railwayspringapp';
}
