import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
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
  @ViewChild('stickyMenu')
  menuElement!: ElementRef;

  stuck:boolean = true;
  elementPosition: any;
  
  title = 'Rachel\'s-Portfolio';

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.scrollY;
      if(windowScroll >= this.elementPosition){
        this.stuck = true;
      } else {
        this.stuck = false;
      }
    }

}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});