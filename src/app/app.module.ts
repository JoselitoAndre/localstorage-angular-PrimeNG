import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { TaskAddComponent } from './componemtes/task-add/task-add.component';
import { TaskListComponent } from './componemtes/task-list/task-list.component';
import { TaskComponent } from './componemtes/task/task.component';

import { DataService } from './services/data.service';
import {CardModule} from 'primeng/card';

import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskAddComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    ButtonModule,
    TableModule,
   //DialogModule,
   CardModule
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
