import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  email = "brodover@gmail.com";
  copied = "Copied!";
  tooltip = this.email;
  
  copyText() {
    navigator.clipboard.writeText(this.email);
    
    this.tooltip = this.copied;
  }

  resetTooltip() {
    this.tooltip = this.email;
  }
}
