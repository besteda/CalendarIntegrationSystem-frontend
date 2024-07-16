import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private eventsSubject = new BehaviorSubject<CalendarEvent[]>([]);
  events$ = this.eventsSubject.asObservable();

  constructor() { }

  getEvents(): CalendarEvent[] {
    return this.eventsSubject.getValue();
  }

  setEvents(events: CalendarEvent[]): void {
    this.eventsSubject.next(events);
  }

  addEvent(event: CalendarEvent): void {
    const events = this.getEvents();
    events.push(event);
    this.eventsSubject.next(events);
  }

  updateEvent(event: CalendarEvent): void {
    const events = this.getEvents().map(e => e.id === event.id ? event : e);
    this.eventsSubject.next(events);
  }

  deleteEvent(eventId: number): void {
    const events = this.getEvents().filter(e => e.id !== eventId);
    this.eventsSubject.next(events);
  }
}
