
import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-week-view',
  standalone: false,
 
  template: './calendar-week-view.component.html',
  styleUrl: './calendar-week-view.component.scss'
})
export class MyCalendarWeekViewComponent  {
  @Input() view!: CalendarView;
  @Input() viewDate!: Date;
  @Input() events!: CalendarEvent[];

  


  handleEventClicked(event: {event: CalendarEvent; sourceEvent: MouseEvent | KeyboardEvent}): void {
    console.log('Event clicked', event.event);
  }

  handleHourSegmentClicked(event: {date: Date; sourceEvent: MouseEvent}): void {
    console.log('Hour segment clicked', event.date);
  }
}
