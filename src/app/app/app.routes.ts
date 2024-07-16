import { Routes } from '@angular/router';
import { CalendarComponent } from '../features/components/calendar/calendar.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/calendar', pathMatch:'full'
    },
    {
        path:"calendar",
        component:CalendarComponent
    }
];
