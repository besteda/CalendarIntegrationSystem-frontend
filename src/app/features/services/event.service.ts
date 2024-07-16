import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.models';
import { environment } from '../../../environments/environment';
import { AddEventRequest, UpdateEventRequest } from '../models/event-request.models';
import { AddEventResponse, UpdateEventResponse } from '../models/event-response.models';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly apiEventControllerUrl = `${environment.apiUrl}/api/v1/event`;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiEventControllerUrl}/getAll`);
  }

  addEvent(request: AddEventRequest): Observable<AddEventResponse> {
    return this.http.post<AddEventResponse>(`${this.apiEventControllerUrl}/add`, request);
  }

  updateEvent(request: UpdateEventRequest): Observable<UpdateEventResponse> {
    return this.http.put<UpdateEventResponse>(`${this.apiEventControllerUrl}/update`, request);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiEventControllerUrl}/delete/${id}`);
  }
}

