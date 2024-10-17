import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksModule } from './tasks/tasks.module';

const routes: Routes = [{ path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes),TasksModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
