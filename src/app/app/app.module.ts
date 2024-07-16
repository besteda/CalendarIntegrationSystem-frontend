// app.module.ts
// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CustomCalendarModule } from '../features/modules/calendar-module/custom-calendar/custom-calendar.module'; // Doğru yolu kontrol edin
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
import { EventFormComponent } from '../features/components/event-form/event-form.component';
import { CalendarComponent } from '../features/components/calendar/calendar.component';
import { EventFormModule } from '../features/modules/event-form/event-form.module';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
     
    }),
    EventFormModule,
    CustomCalendarModule,
    RouterModule // Kullanıyorsanız RouterModule'ü de import etmeyi unutmayın
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
