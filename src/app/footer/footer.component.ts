import { Component } from '@angular/core';
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
  visibility: string;

  constructor() {
    this.visibility = 'hidden';
  }

  copyText() {
    navigator.clipboard.writeText(this.email);
    this.tooltip = trans.copied;
    this.setVisibility(true);

    setTimeout(() => {
      this.resetTooltip();
    }, 2500);
  }

  prepTooltip() {
    this.tooltip = this.email;
  }

  resetTooltip() {
    this.setVisibility(false);
  }

  setVisibility(visible: boolean) {
    if (visible)
      this.visibility = 'visible';
    else
      this.visibility = 'hidden';

      this.visibility += '!important';
  }
}
