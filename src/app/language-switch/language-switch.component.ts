import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-lang-switch',
  standalone: true,
  imports: [],
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

  constructor() {
    this.opacity = this.calcOpacity();
  }

  calcOpacity() : number
  {
    return (100 - window.scrollY) / 100;
  }
}
