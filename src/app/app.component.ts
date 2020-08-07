import { Component } from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoListApp';
  todoList = new Array();
  item;

  addTodo(){
    this.todoList.push(new Todo(this.item))
  }

  delete(i){
    console.log(i);
    this.todoList.splice(i,1);
  }
}
