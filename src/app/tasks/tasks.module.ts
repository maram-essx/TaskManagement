import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { AllTaskItemsComponent } from './components/all-task-items/all-task-items.component';


@NgModule({
  declarations: [
    TasksComponent,
    HomeComponent,
    AllTaskItemsComponent,
 
  ],
  imports: [
    CommonModule,
    TasksRoutingModule, RouterOutlet,
    TasksListComponent,
    TaskItemComponent
],
  
})
export class TasksModule { }
