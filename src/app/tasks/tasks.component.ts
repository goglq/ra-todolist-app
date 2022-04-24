import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TASKS } from './task.mock';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {}

  onClick(task: Task): void {
    task.isComplete = !task.isComplete;
  }
}
