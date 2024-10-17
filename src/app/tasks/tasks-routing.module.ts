import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { HomeComponent } from './components/home/home.component';
import { AllTaskItemsComponent } from './components/all-task-items/all-task-items.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'home',
        children: [
          {
            path: 'task-item/:id',
            component: TaskItemComponent,
            title: 'Task Item',
          },
        ],
      },

      {
        path: 'all-tasks',
        component: AllTaskItemsComponent,
        title: 'All Tasks',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
