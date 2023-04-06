import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';

//serivce
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    //this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteItem(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}
