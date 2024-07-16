import { Component, Input } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-day-view',
  template:``,
  styleUrls: ['./calendar-day-view.component.scss']
})
export class MyCalendarDayViewComponent {
  @Input() view!: CalendarView;
  @Input() viewDate!: Date;
  @Input() events!: CalendarEvent[];

  handleEventClicked(event: { event: CalendarEvent; sourceEvent: MouseEvent | KeyboardEvent }): void {
    console.log('Event clicked', event.event);
  }

  handleHourSegmentClicked(event: { date: Date; sourceEvent: MouseEvent }): void {
    console.log('Hour segment clicked', event.date);
  }
}
