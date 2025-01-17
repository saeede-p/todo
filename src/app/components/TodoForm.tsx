"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

type TodoFormProps = {
  addTodo: (text: string) => void;
};

export function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow bg-white text-indigo-600"
      />
      <Button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white"
      >
        Add
      </Button>
    </form>
  );
}
