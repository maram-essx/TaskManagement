import { Component, inject } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ITask } from '../../interface/itask';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  task: ITask = {
    completed: false,
    id: 0,
    title: '',
    text: '',
  };

  taskId: number = 0;

  private _TaskService = inject(TaskService);
  private _ActivatedRoute = inject(ActivatedRoute);
  private _Router = inject(Router);

  checkRoute(): void {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.taskId = +params['id'];
      this.getSpecificTask(--this.taskId);
    });
  }

  ngOnInit(): void {
    this.checkRoute();
  }

  getSpecificTask(taskId: number): void {
    this._TaskService.getTasks().subscribe((task) => {
      this.task = task[taskId];
      console.log(this.task);
    });
  }

  onToggleTaskState(): void {
    this.task.completed = !this.task.completed;
  }
}
