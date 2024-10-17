import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './tasks/components/task-item/task-item.component';
import { TasksListComponent } from "./tasks/components/tasks-list/tasks-list.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksListComponent,
    TaskItemComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
