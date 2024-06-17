import { Title } from '@angular/platform-browser';import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { TopBarComponent } from './top-bar/top-bar.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import defaultLanguage from "./../assets/i18n/en.json";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, TopBarComponent, LanguageSwitchComponent, TranslateModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  defaultLocale = 'en';
  currentLocale = this.defaultLocale;

  ngOnInit() {
  }

  constructor(private titleService: Title, public translateService: TranslateService) {
    var locale = translateService.getBrowserLang() || this.defaultLocale;
    translateService.setDefaultLang(this.defaultLocale);
    if (locale == 'en')
      translateService.setTranslation(locale, defaultLanguage);
    translateService.addLangs(['en', 'ko']);
    this.changeLocalization(locale);
  }

  changeLocalization(locale:string) {
    this.translateService.use(locale);
    this.currentLocale = locale;

    this.translateService.get('translations.title').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

  swapLocalization() {
    if (this.currentLocale != 'en') {
      this.changeLocalization('en');
    }
    else {
      this.changeLocalization('ko');
    }
  }
}