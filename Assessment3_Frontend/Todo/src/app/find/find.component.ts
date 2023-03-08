import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  constructor(public TodoService: TodoServiceService){}
  todos?:Todo[] 
  selectedOption?:string
  searched=false

  ngOnInit(): void {
    this.getTodo()
  }
  getTodo(){
    this.TodoService.getAll().subscribe({
      next:((data=>{
        this.todos=data;
        console.log(data)
      })),
      error:((err)=>{
        console.log(err.message);
      })
    })
  }

}
