import { Component, HostListener, Inject, LOCALE_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lang-switch',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.css'
})
export class LanguageSwitchComponent {
  opacity: number;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    this.opacity = this.calcOpacity();
  }

  constructor(private appComp: AppComponent) {
    this.opacity = this.calcOpacity();
  }

  changeLanguage() {
    this.appComp.swapLocalization();
  }

  calcOpacity() : number
  {
    return (100 - window.scrollY) / 100;
  }
}
