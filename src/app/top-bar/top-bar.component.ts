import { Component, Directive } from '@angular/core';
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

}
