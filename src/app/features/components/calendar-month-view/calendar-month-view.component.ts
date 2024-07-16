import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarMonthViewDay, CalendarUtils, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-month-view',


  template: './calendar-month-view.component.html',
  styleUrl: './calendar-month-view.component.scss'
})
export class MyCalendarMonthViewComponent  {
  @Input() view!: CalendarView;
  @Input() viewDate!: Date;
  @Input() events!: CalendarEvent[];

 

  
  handleDayClicked(event: { day: CalendarMonthViewDay; sourceEvent: MouseEvent | KeyboardEvent }): void {
    console.log('Day clicked', event.day);
    // Burada yapılacak işlemler
  }

  handleEventClicked(event: { event: CalendarEvent; sourceEvent: MouseEvent | KeyboardEvent }): void {
    console.log('Event clicked', event.event);
    // Burada yapılacak işlemler
  }
}
