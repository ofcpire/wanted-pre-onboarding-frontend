interface TodoObj {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface TodoItemProps {
  todoObj: TodoObj;
}