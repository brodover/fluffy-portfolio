import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'contacts', component: ContactsComponent },
    ]),
  ]
})
export class AppModule { }
