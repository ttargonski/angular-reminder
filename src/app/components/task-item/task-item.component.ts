import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() onDeleteItem: EventEmitter<Task> = new EventEmitter();
  faRemove = faRemove;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  onDelete(task: Task) {
    this.onDeleteItem.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
