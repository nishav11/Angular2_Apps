import { Injectable } from '@angular/core';
import {Init} from './init.todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('todo service initialised');
    this.load();
   }
   getTodos() {
     const todos = JSON.parse (localStorage.getItem('todos'));
     return todos;
   }
addTodo(newTodo) {
const todos = JSON.parse (localStorage.getItem('todos'));
     // ADD new todo
     todos.push(newTodo);
     // set new todos
     localStorage.setItem('todos', JSON.stringify(todos));
  }
  deleteTodo(todoText) {
const todos = JSON.parse (localStorage.getItem('todos'));

  for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === todoText) {
        todos.splice(i, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
   updateTodo(oldText, newText) {
const todos = JSON.parse (localStorage.getItem('todos'));

  for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === oldText) {
        todos[i].text = newText ;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

