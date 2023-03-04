import { Component } from '@angular/core'
import { Todo } from 'src/Todo'
import { TodoServiceService } from '../todo-service.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(public TodoService:TodoServiceService){}
  todo:Todo={
    todo:'',
    due:'',
    status:''
  }
  submitted:boolean=false;
  add():void{
    const data={
      todo:this.todo.todo,
      due:this.todo.due,
      status:this.todo.status
    }
    this.TodoService.add(data).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
    this.submitted=true;
  }

  newTodo():void{
    this.submitted=false;
    this.todo={
      todo:'',
      due:'',
      status:''
    }
    }

}
  


