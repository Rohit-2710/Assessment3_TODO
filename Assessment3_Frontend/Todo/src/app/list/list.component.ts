import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/Todo';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos?:Todo[]
constructor(public TodoService:TodoServiceService){}
ngOnInit(){
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
deleteTodo(id:any){
  this.TodoService.delete(id).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }
   })
   window.location.reload()
  }
}


