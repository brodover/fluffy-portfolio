import { Component, HostListener, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-lang-switch',
  standalone: true,
  imports: [],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.css'
})
export class LanguageSwitchComponent {
  opacity: number;
  isEn = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    this.opacity = this.calcOpacity();
  }

  constructor(@Inject(LOCALE_ID) private localeId: string) {
    this.opacity = this.calcOpacity();
  }

  changeLanguage() {
    if (this.isEn) {
      this.localeId = "kr";
    }
    else {
      this.localeId = "en";
    }
    this.isEn = !this.isEn;
    window.location.reload();
  }

  calcOpacity() : number
  {
    return (100 - window.scrollY) / 100;
  }
}
