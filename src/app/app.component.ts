import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { ɵ$localize } from '@angular/localize';

import { TopBarComponent } from './top-bar/top-bar.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';

import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, LanguageSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = $localize`:@@title:Rachel\'s-Page`;

  ngOnInit() {
  }
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'kr' }
  ]
});