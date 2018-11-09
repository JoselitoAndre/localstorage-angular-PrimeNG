import { Component, OnInit, Input } from '@angular/core';
import { Task} from '../../models/task';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('task') task:Task;
  tasks: Task[];
 
  constructor( public dataservice: DataService) { }

  ngOnInit() {
    this.tasks = this.dataservice.getTask();
  }
  deleteTask(task: Task){
    //console.log(task)
      this.dataservice.removeTask(task);
   
  }
}
