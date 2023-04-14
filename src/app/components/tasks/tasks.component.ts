import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';

//serivce - enabled //
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
    //this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));

    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  deleteItem(task: Task) {
    // this.taskService
    //   .deleteTask(task)
    //   .subscribe(
    //     () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    //   );
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    //this.taskService.updateTaskReminder(task).subscribe();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: Task) {
    //this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
    task.id = Date.now();
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
