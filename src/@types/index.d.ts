interface TodoObj {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface TodoItemProps {
  todoObj: TodoObj;
  getNewTodos:()=>void;
}

interface TodoMainProps {
  todos:TodoObj[];
  getNewTodos:()=>void;
}

type AxiosHeaders = {
  'Content-Type'?: string;
  Authorization?: string;
};