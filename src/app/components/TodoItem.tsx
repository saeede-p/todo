import { Todo } from "../page";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Button } from "@/app/components/ui/button";
import { Trash2 } from "lucide-react";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex items-center gap-2 bg-purple-50 p-2 rounded-md">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id)}
        className="border-indigo-300 text-indigo-500"
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-grow ${
          todo.completed ? "line-through text-gray-500" : "text-indigo-700"
        }`}
      >
        {todo.text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
        className="text-indigo-500 hover:text-indigo-700 hover:bg-purple-100"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
}
