import {List} from "@mui/material";

export function TodoList(props) {
    return  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} {...props}>
        {
           props.children
        }
    </List>;
}
