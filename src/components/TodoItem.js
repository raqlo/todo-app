import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";


export function TodoItem({ key, completed, text }) {
  debugger;
  return (
    <Paper sx={{mb: 2}}>
      <ListItem
        key={key}
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            {/*<CommentIcon />*/}
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={completed}
              tabIndex={-1}
              disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText
            // id={labelId}
            primary={text}
          />
        </ListItemButton>
      </ListItem>
    </Paper>
  );
}
