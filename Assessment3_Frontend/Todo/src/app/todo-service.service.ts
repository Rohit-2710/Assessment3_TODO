import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import { Todo } from 'src/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(public http:HttpClient) { }
  baseUrl='http://localhost:3000'

  todo?:Todo

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`)
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`)
  }
  add(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/todos`,data)
  }

}
