import { effect, inject, Injectable, signal } from '@angular/core';
import { Todo } from './todo';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  storageService = inject(StorageService);

  todos = signal<Todo[]>([]);

  effec = effect(() => {
    const todos = this.todos();
    console.log(this.todos(), 'todos filtrados actualizados')
    this.storageService.save('todos', todos)
  });

  constructor() {
    const todos = this.storageService.load('todos');
    if (todos) this.todos.set(todos);
  }

  updateTodo(todo: Todo) {
    this.todos.update((todoList) =>
      todoList.map((todoEntry) => {
        if (todo.id === todoEntry.id)
          todoEntry.completed = !todoEntry.completed;
        return todoEntry;
      })
    );
  }

  addNewTask(newTask: string) {
    this.todos.update(todos => {
      const newTodos = [...todos];
      newTodos.push({
        id: +new Date(),
        title: newTask,
        completed: false,
      })
      return newTodos;
    })
    this.storageService.save('todos', this.todos)
  }
}
