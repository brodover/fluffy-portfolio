import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HoverClassDirective } from '../hover-class.directive';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ RouterModule, HoverClassDirective ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
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
    return window.scrollY / 100;
  }
}
