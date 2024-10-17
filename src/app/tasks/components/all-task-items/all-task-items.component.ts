import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from '../../interface/itask';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-all-task-items',
  templateUrl: './all-task-items.component.html',
  styleUrls: ['./all-task-items.component.scss'],
})
export class AllTaskItemsComponent {
  tasks: ITask[] = [];

  private _TaskService = inject(TaskService);

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this._TaskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  onToggleTaskState(id:number): void {
    this.tasks[id].completed = !this.tasks[id].completed
  }

}
