import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { trans } from '../../assets/i18n/trans';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email = "brodover@gmail.com";
  tooltip = this.email;
  
  copyText() {
    navigator.clipboard.writeText(this.email);
    
    console.log("copyText: " + trans.copied);
    this.tooltip = trans.copied;
  }

  resetTooltip() {
    this.tooltip = this.email;
  }
}
