import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  /*{
    path: 'portfolio',
    component: PortfolioComponent,
  },*/
  {
    path: 'contacts', component: ContactsComponent,
  },
];