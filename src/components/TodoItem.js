import {Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";


export function TodoItem({key, completed, text}) {
    debugger
    return (
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
    )
}
