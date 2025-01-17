import { Todo } from "../page";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
