import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, CalendarMonthModule } from 'angular-calendar';
import { MyCalendarMonthViewComponent } from '../../components/calendar-month-view/calendar-month-view.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { EventService } from '../../services/event.service';
import { CalendarService } from '../../services/calendar.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CalendarMonthModule
  ],
  exports: [
  ], // Bu modülü başka yerlerde kullanabilmek için
  providers: [
    EventService,CalendarService  // Servisi providers listesine ekleyin
  ],
})
export class MyCalendarMonthViewModule { }
