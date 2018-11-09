import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
  
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.tasks = this.dataservice.getTask();
  }

  addTask(task: Task){
    this.dataservice.addTask(task);
  }
}
