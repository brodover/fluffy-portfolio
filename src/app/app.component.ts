import { Component, OnInit } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { TopBarComponent } from './top-bar/top-bar.component';

import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Rachel\'s-Portfolio';

  ngOnInit() {
  }
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});