import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CalendarEvent, CalendarUtils, CalendarView } from 'angular-calendar';
import { CalendarService } from '../../services/calendar.service';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  template: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events$: Observable<CalendarEvent<any>[]> = of([]);

  CalendarView = CalendarView;

  constructor(
    private calendarService: CalendarService,
    private eventService: EventService,
    private router: Router,
    private calendarUtils: CalendarUtils
  ) {}

  ngOnInit(): void {
    this.events$ = this.calendarService.events$;
    this.eventService.getEvents().subscribe(events => {
      const calendarEvents = events.map(event => this.convertToCalendarEvent(event));
      this.calendarService.setEvents(calendarEvents);
    });
  }

  setView(view: CalendarView): void {
    this.view = view;
  }

  addEvent(title: string, start: Date, end: Date): void {
    const newEvent: CalendarEvent = {
      id: this.generateId(),
      title,
      start,
      end,
      color: { primary: '#ad2121', secondary: '#FAE3E3' },
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    };

    this.eventService.addEvent(this.convertToEventModel(newEvent)).subscribe(response => {
      newEvent.id = response.id;
      this.calendarService.addEvent(newEvent);
    });
  }

  updateEvent(updatedEvent: CalendarEvent): void {
    this.eventService.updateEvent(this.convertToEventModel(updatedEvent)).subscribe(() => {
      this.calendarService.updateEvent(updatedEvent);
    });
  }

  deleteEvent(eventId: number): void {
    this.eventService.deleteEvent(eventId).subscribe(() => {
      this.calendarService.deleteEvent(eventId);
    });
  }

  private generateId(): number {
    return Math.floor(Math.random() * 100000);
  }

  private convertToCalendarEvent(event: any): CalendarEvent {
    return {
      id: event.id,
      title: event.title,
      start: new Date(event.startDate),
      end: event.endDate ? new Date(event.endDate) : new Date(event.startDate),
      color: { primary: '#ad2121', secondary: '#FAE3E3' },
      draggable: true,
      resizable: { beforeStart: true, afterEnd: true }
    };
  }

  private convertToEventModel(calendarEvent: CalendarEvent): any {
    return {
      id: calendarEvent.id,
      title: calendarEvent.title,
      startDate: calendarEvent.start.toISOString(),
      endDate: calendarEvent.end ? calendarEvent.end.toISOString() : calendarEvent.start.toISOString(),
      userId: 1 // Örnek olarak bir kullanıcı ID'si
    };
  }

  selectDate(date: Date): void {
    console.log('Selected date:', date);
    this.openEventForm(date);
  }

  openEventForm(date: Date): void {
    this.router.navigate(['/event-form'], { state: { selectedDate: date } });
  }
}
