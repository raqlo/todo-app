import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

// import './App.css';

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: "primary.dark" }}>
        <Container maxWidth="sm">
          <TodoSearch />
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "grey.100", minHeight: '100%' }}>
        <Container maxWidth="sm" fixed>
          <TodoCounter />
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
      </Box>
    </>
  );
}

export default App;
