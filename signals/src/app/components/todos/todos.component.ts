import { Component, input, output } from '@angular/core';
import { Todo } from '../../todo';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todos.component.html',
})
export class TodosComponent {

  // @Input()
  // todos: Todo[] = [];
  // todos input signal
  todos = input<Todo[]>([]);

  // @Output()
  // updateTodo = new EventEmitter

  updateTodo = output<Todo>()

  update(todo: Todo) {
    this.updateTodo.emit(todo)
  }
}
