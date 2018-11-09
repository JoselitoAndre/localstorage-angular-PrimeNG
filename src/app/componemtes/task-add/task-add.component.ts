import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Task } from '../../models/task';
//import { Output} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  cnpj: string;
  nome: string;
  data: string;
  @Output() taskAdded = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  addTask (){
    //console.log(this.cnpj, this.nome, this.data);
    this.taskAdded.emit({
      cnpj: this.cnpj,
      nome: this.nome,
      data: this.data
    });
    this.cnpj='';
    this.nome = '';
    this.data = '';
  }

}
