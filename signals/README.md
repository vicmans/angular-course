# Signals

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/signals-intermedio)

In this project we try the `ChangeDetectionStrategy` and then switch to Zoneless using the `provideExperimentalZonelessChangeDetection()`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## About

This project it is a simple todo app made with signals, it has a todoService and stogareService to save it to LocalStorage

1. We switch the `todos` in `app.component.ts` to signal

```ts
todos = [
  {
    id: 1,
    title: "Learn Angular",
    completed: false,
  },
  {
    id: 2,
    title: "Learn TS",
    completed: false,
  }
];
```

to

```ts
todos = signal([
  {
    id: 1,
    title: "Learn Angular",
    completed: false,
  },
  {
    id: 2,
    title: "Learn TS",
    completed: false,
  }
]);
```

>  In the signal declaration, we used `signal<Todo[]>([...])` for better typing.

2. Using `computed` signal to calculate the done todos.

```ts
done = computed(() => this.todos().filter(t => t.completed).length)
```

3. In the search component, use model input.

```html
<app-search [(search)]="search"></app-search>
```
TS
```ts
export class SearchComponent {
  search = model('');
    ...
}
```

4. In todo component using `input` signal and `output`

```ts
export class TodoComponent {
  todo = input.required<Todo>();

  updateTodo = output<Todo>();
    ...
}
```

For a required input use `input.required` and it does not need a default value.

5. Share functionality, you can move the signal to the service and share the variable thorout components

6. Use the `effect` to detect the change of signals, using `effect` we keep sync `localStorage`

```ts
effect(() => {
    ...
    console.log('some log')
    // sync the storage
    this.storageService.save('todos', todos)
});
```

## Futher improvements

- You can use the input of `todos-component` (List of Todos) as a model input and edit directly the todo within the components.

- You can move the search functionality to the `TodoService` and use the search signal from the service as input of search component, is this a good solution? I don't know but you can test it.

- Try something

## TODO

- [ ] Add delete task or completed tasks