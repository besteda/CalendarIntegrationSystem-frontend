// custom-calendar.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../../components/calendar/calendar.component';
import { MyCalendarDayViewComponent } from '../../../components/calendar-day-view/calendar-day-view.component';
import { MyCalendarMonthViewComponent } from '../../../components/calendar-month-view/calendar-month-view.component';
import { MyCalendarWeekViewComponent } from '../../../components/calendar-week-view/calendar-week-view.component';
import { MyCalendarDayViewModule } from '../../my-calendar-day-view/my-calendar-day-view.module';
import { MyCalendarMonthViewModule } from '../../my-calendar-month-view/my-calendar-month-view.module';
import { MyCalendarWeekViewModule } from '../../my-calendar-week-view/my-calendar-week-view.module';
import { EventService } from '../../../services/event.service';
import { CalendarService } from '../../../services/calendar.service';


@NgModule({
  declarations: [
    CalendarComponent,
   
  ],
  imports: [
    CommonModule,
    MyCalendarDayViewModule,
    MyCalendarMonthViewModule,
    MyCalendarWeekViewModule
    // İhtiyaca göre başka modüller de ekleyebilirsiniz
  ],
  providers:[EventService,CalendarService],
  exports: [
    CalendarComponent, // Eğer gerekirse dışarıya da export edilebilir
  ]
})
export class CustomCalendarModule { }
