import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './ui/calendar/calendar.component';
import { CalendarDayComponent } from './ui/calendar/calendar-day/calendar-day.component';
import { RoomComponent } from './ui/calendar/calendar-day/room/room.component';
import { ProcedureComponent } from './ui/shared/procedure/procedure.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDayComponent,
    RoomComponent,
    ProcedureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
