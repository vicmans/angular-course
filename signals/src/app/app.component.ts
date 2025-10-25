import { CommonModule } from '@angular/common';
import { Component, computed, signal, inject } from '@angular/core';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { SearchComponent } from "./components/search/search.component";
import { TodosComponent } from './components/todos/todos.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, SearchComponent, TodosComponent],
  template: `
  <div class="container">
    <h1>TODO List</h1>
    <div class="grid">
      <input type="text" [(ngModel)]="newTitle" placeholder="Add task">
      <button (click)="addNewTask(newTitle)">Add task</button>
    </div>
    <div>
      <app-search [(search)]="search"></app-search>
    </div>
    <app-todos [todos]="filtered()" (updateTodo)="updateTodo($event)"></app-todos>
    <p *ngIf="done()">Completadas: {{ done() }}</p>
  </div>
  `,
  styles: `
    label {
      display: block;
    }
  `,
})
export class AppComponent {
  storageService = inject(StorageService);
  todoService = inject(TodoService);

  search = signal('');

  newTitle = '';

  todos = this.todoService.todos;

  done = computed(() => this.todos().filter(t => t.completed).length)

  filtered = computed(() => this.todos()
    .filter(t => t.title.toLocaleLowerCase().includes(this.search()))
  )

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  addNewTask(newTask: string) {
    this.todoService.addNewTask(newTask);
    this.newTitle = '';
  }
}
