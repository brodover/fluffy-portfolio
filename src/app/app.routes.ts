import { Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { PersonalComponent } from './personal/personal.component';

export const routes: Routes = [
  {
    path: '',
    component: WorkComponent,
  },
  {
    path: 'personal', 
    component: PersonalComponent,
  },
];