import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  messages: string[] = [];

  // rxjs
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  onSubmit() {
    this.messages = [];

    if (!this.text) {
      this.messages.push('Please add task name');
    }

    if (!this.day) {
      this.messages.push('Please add day to task');
    }

    if (!this.messages.length) {
      const newTask: Task = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.onAddTask.emit(newTask);

      // clean
      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
