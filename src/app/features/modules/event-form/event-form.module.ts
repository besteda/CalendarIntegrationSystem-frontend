import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventFormComponent } from '../../components/event-form/event-form.component';
import { EventService } from '../../services/event.service';

import { CalendarModule } from 'angular-calendar';
import { CustomCalendarModule } from '../calendar-module/custom-calendar/custom-calendar.module';
import { CalendarService } from '../../services/calendar.service';


@NgModule({
  declarations: [
    EventFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    CustomCalendarModule
  ],
  providers: [
    EventService,CalendarService  // Servisi providers listesine ekleyin
  ],
  exports: [
    EventFormComponent
  ]
})
export class EventFormModule { }