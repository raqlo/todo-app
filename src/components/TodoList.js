import List from "@mui/material/List";

export function TodoList(props) {
    return  <List sx={{ width: '100%', maxWidth: 360 }} {...props}>
        {
           props.children
        }
    </List>;
}
