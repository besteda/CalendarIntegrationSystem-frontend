import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCalendarDayViewComponent } from '../../components/calendar-day-view/calendar-day-view.component';
import { CalendarDayModule, CalendarModule } from 'angular-calendar';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { EventService } from '../../services/event.service';
import { CalendarService } from '../../services/calendar.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CalendarDayModule
  ],
  exports: [
    
  ],
  providers: [
    EventService,CalendarService  // Servisi providers listesine ekleyin
  ],
})
export class MyCalendarDayViewModule { }
