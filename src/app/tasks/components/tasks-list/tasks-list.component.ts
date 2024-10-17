import { Component, Input } from '@angular/core';
import { ITask } from '../../interface/itask';
import { TaskItemComponent } from '../task-item/task-item.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tasks-list',
  standalone:true,
  imports:[TaskItemComponent,RouterModule,CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
 @Input() tasks: ITask[] | undefined = [];

}
