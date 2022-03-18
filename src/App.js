import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { Container } from "@mui/material";

// import './App.css';

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <>
      <Container maxWidth="sm" fixed>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </Container>
    </>
  );
}

export default App;
