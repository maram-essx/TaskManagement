import { Component, inject } from '@angular/core';
import { ITask } from '../../interface/itask';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tasks: ITask[] = [];
  private _TaskService = inject(TaskService);

  ngOnInit(): void {
    this.onGetTasks()
  }

  onGetTasks() {
    this._TaskService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }


}
