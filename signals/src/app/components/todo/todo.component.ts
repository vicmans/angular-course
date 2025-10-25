import { Component, input, output } from '@angular/core';
import { Todo } from '../../todo';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [NgStyle],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  // @Input({required: true})
  // todo!: Todo;

  // input signal required
  todo = input.required<Todo>();

  // @Output()
  // updateTodo = new EventEmitter

  updateTodo = output<Todo>();

  update(todo: Todo) {
    this.updateTodo.emit(todo)
  }
}
