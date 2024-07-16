import { Component } from '@angular/core';

import { Event } from '../../models/event.models';
import { CalendarService } from '../../services/calendar.service';
import { CalendarEvent } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-event-form',
  standalone: false,
  
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent {
  event: Event = {
    id: 0,
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    userId: 1  // Örnek olarak bir kullanıcı ID'si
  };
 


constructor(private calendarService: CalendarService, private eventService: EventService,private http: HttpClient) {}

  submitForm(): void {
    const calendarEvent = this.convertToCalendarEvent(this.event);

    // Önce backend'e kaydet
    this.eventService.addEvent(this.event).subscribe(response => {
      // Backend'den başarılı dönüş aldıktan sonra CalendarService'e ekle
      calendarEvent.id = response.id; // Backend'den dönen ID'yi kullan
      this.calendarService.addEvent(calendarEvent);
    });
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
}  